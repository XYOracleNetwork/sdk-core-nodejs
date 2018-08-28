/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Thursday, 23rd August 2018 10:36:04 am
 * @Email:  developer@xyfindables.com
 * @Filename: sha256.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Tuesday, 28th August 2018 3:01:30 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

import {
  XyoBasicHashBase,
  XyoBasicHashBaseCreator
} from './xyo-basic-hash-base';

/**
 * Encapsulates Sha256 Hashing algorithm
 */
export class XyoSha256 extends XyoBasicHashBase {

  public static enable () {
    XyoSha256.creator.enable();
  }

  public static major () {
    return XyoSha256.creator.major;
  }

  public static minor () {
    return XyoSha256.creator.minor;
  }

  private static creator = new XyoBasicHashBaseCreator('sha256', 32, 0x0b);

  get id () {
    return Buffer.from([XyoSha256.creator.major, XyoSha256.creator.minor]);
  }
}