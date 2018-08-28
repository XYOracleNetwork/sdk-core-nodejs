/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Thursday, 23rd August 2018 10:03:41 am
 * @Email:  developer@xyfindables.com
 * @Filename: sha1.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Tuesday, 28th August 2018 3:00:52 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

import {
  XyoBasicHashBase,
  XyoBasicHashBaseCreator
} from './xyo-basic-hash-base';

/**
 * Encapsulates Sha1 Hashing algorithm
 */
export class XyoSha1 extends XyoBasicHashBase {

  public static enable () {
    XyoSha1.creator.enable();
  }

  public static major () {
    return XyoSha1.creator.major;
  }

  public static minor () {
    return XyoSha1.creator.minor;
  }

  private static creator = new XyoBasicHashBaseCreator('sha1', 20, 0x02);

  get id () {
    return Buffer.from([XyoSha1.creator.major, XyoSha1.creator.minor]);
  }
}