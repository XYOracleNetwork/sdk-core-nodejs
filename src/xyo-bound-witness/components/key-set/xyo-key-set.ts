/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Thursday, 30th August 2018 1:22:41 pm
 * @Email:  developer@xyfindables.com
 * @Filename: xyo-key-set.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Thursday, 11th October 2018 11:21:45 am
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

import { XyoArray } from '../../../xyo-core-components/arrays/xyo-array';
import { IXyoPublicKey } from '../../../@types/xyo-signing';

/**
 * A non-homogenous wrapper class for a collections of different public keys
 *
 * This is primarily used in bound-witnesses where the two parties share
 * public keys that they will be using to sign the signed-payload data
 */

export class XyoKeySet extends XyoArray {

  public static major = 0x02;
  public static minor = 0x02;

  /**
   * Creates a new instance of an XyoKeySet
   *
   * @param array The collection of keys to wrap
   */

  constructor (public readonly array: IXyoPublicKey[]) {
    super(undefined, undefined, XyoKeySet.major, XyoKeySet.minor, 2, array);
  }
}