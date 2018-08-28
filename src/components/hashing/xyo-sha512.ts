/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Thursday, 23rd August 2018 10:43:18 am
 * @Email:  developer@xyfindables.com
 * @Filename: sha384.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Tuesday, 28th August 2018 3:01:49 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

import {
  XyoBasicHashBase,
  XyoBasicHashBaseCreator
} from './xyo-basic-hash-base';

/**
 * Encapsulates Sha512 Hashing algorithm
 */
export class XyoSha512 extends XyoBasicHashBase {

  public static enable () {
    XyoSha512.creator.enable();
  }

  public static major () {
    return XyoSha512.creator.major;
  }

  public static minor () {
    return XyoSha512.creator.minor;
  }

  private static creator = new XyoBasicHashBaseCreator('sha512', 64, 0x0d);

  get id () {
    return Buffer.from([XyoSha512.creator.major, XyoSha512.creator.minor]);
  }
}