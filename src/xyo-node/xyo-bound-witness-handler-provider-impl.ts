/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Wednesday, 19th September 2018 8:31:36 am
 * @Email:  developer@xyfindables.com
 * @Filename: xyo-bound-bound-witness-handler-provider.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Wednesday, 19th September 2018 10:57:48 am
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

import { XyoPacker } from '../xyo-packer/xyo-packer';
import { XyoSigner } from '../signing/xyo-signer';
import { XyoNetworkPipe } from '../network/xyo-network';
import { XyoBoundWitnessInteraction } from './xyo-bound-witness-interaction';
import { XyoBoundWitness } from '../components/bound-witness/xyo-bound-witness';
import { XyoHashProvider } from '../hash-provider/xyo-hash-provider';
import { XyoOriginChainStateManager } from './origin-chain/xyo-origin-chain-state-manager';
import { XyoOriginChainNavigator } from './origin-chain/xyo-origin-chain-navigator';
import { extractNestedBoundWitnesses } from './bound-witness-origin-chain-extractor';
import { XyoBoundWitnessHandlerProvider, XyoBoundWitnessPayloadProvider } from './xyo-node-types';

export class XyoBoundWitnessHandlerProviderImpl implements XyoBoundWitnessHandlerProvider {

  constructor (
    private readonly xyoPacker: XyoPacker,
    private readonly signers: XyoSigner[],
    private readonly hashingProvider: XyoHashProvider,
    private readonly originState: XyoOriginChainStateManager,
    private readonly originChainNavigator: XyoOriginChainNavigator,
    private readonly boundWitnessPayloadProvider: XyoBoundWitnessPayloadProvider
  ) {}

  public async handle(networkPipe: XyoNetworkPipe): Promise<XyoBoundWitness> {
    const payload = await this.boundWitnessPayloadProvider.getPayload(this.originState);

    const interaction = new XyoBoundWitnessInteraction(
      this.xyoPacker,
      networkPipe,
      this.signers,
      payload
    );

    const boundWitness = await interaction.run();
    await this.handleBoundWitnessSuccess(boundWitness);
    return boundWitness;
  }

  /**
   * A helper function for processing successful bound witnesses
   */

  private async handleBoundWitnessSuccess(boundWitness: XyoBoundWitness): Promise<void> {
    const hashValue = await boundWitness.getHash(this.hashingProvider);
    this.originState.newOriginBlock(hashValue);
    await this.originChainNavigator.addBoundWitness(boundWitness);
    const nestedBoundWitnesses = extractNestedBoundWitnesses(boundWitness, this.xyoPacker);

    await Promise.all(nestedBoundWitnesses.map((nestedBoundWitness) => {
      return this.originChainNavigator.addBoundWitness(nestedBoundWitness);
    }));

    return;
  }
}