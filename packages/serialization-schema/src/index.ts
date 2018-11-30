/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Wednesday, 28th November 2018 6:00:07 pm
 * @Email:  developer@xyfindables.com
 * @Filename: index.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Thursday, 29th November 2018 2:17:29 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

import { IXyoObjectSchema } from '@xyo-network/serialization'

export const schema: IXyoObjectSchema = {
  rssi: {
    sizeIdentifierSize: 1,
    iterableType: 'not-iterable',
    id: 0x13
  },
  gps: {
    sizeIdentifierSize: 1,
    iterableType: 'not-iterable',
    id: 0x12
  },
  // lat: {
  //   sizeIdentifierSize: 1,
  //   iterableType: 'not-iterable',
  //   id: 0x19
  // },
  // lng: {
  //   sizeIdentifierSize: 1,
  //   iterableType: 'not-iterable',
  //   id: 0x1a
  // },
  time: {
    sizeIdentifierSize: 1,
    iterableType: 'not-iterable',
    id: 0x14
  },
  // blob: {
  //   sizeIdentifierSize: null,
  //   iterableType: 'not-iterable',
  //   id: 0xff
  // },
  typedSet: {
    sizeIdentifierSize: null,
    iterableType: 'iterable-typed',
    id: 0xCC
  },
  untypedSet: {
    sizeIdentifierSize: null,
    iterableType: 'iterable-untyped',
    id: 0x01
  },
  hashStub: {
    sizeIdentifierSize: 1,
    iterableType: 'not-iterable',
    id: 0x0F
  },
  sha256Hash: {
    sizeIdentifierSize: 1,
    iterableType: 'not-iterable',
    id: 0x10
  },
  sha3Hash: {
    sizeIdentifierSize: 1,
    iterableType: 'not-iterable',
    id: 0x11
  },
  ecSecp256k1UncompressedPublicKey: {
    sizeIdentifierSize: 1,
    iterableType: 'iterable-untyped',
    id: 0x0C
  },
  rsaPublicKey: {
    sizeIdentifierSize: 2,
    iterableType: 'not-iterable',
    id: 0x0D
  },
  stubPublicKey: {
    sizeIdentifierSize: 1,
    iterableType: 'not-iterable',
    id: 0x0E
  },
  ecdsaSecp256k1WithSha256Signature: {
    sizeIdentifierSize: 1,
    iterableType: 'iterable-untyped',
    id: 0x09
  },
  rsaWithSha256Signature: {
    sizeIdentifierSize: 2,
    iterableType: 'not-iterable',
    id: 0x0A
  },
  stubSignature: {
    sizeIdentifierSize: 1,
    iterableType: 'not-iterable',
    id: 0x0B
  },
  boundWitness: {
    sizeIdentifierSize: null,
    iterableType: 'iterable-untyped',
    id: 0x02
  },
  index: {
    sizeIdentifierSize: 1,
    iterableType: 'not-iterable',
    id: 0x03
  },
  // keySet: {
  //   sizeIdentifierSize: null,
  //   iterableType: 'iterable-untyped',
  //   id: 0x01
  // },
  nextPublicKey: {
    sizeIdentifierSize: null,
    iterableType: 'iterable-untyped',
    id: 0x04
  },
  originBlockHashSet: {
    sizeIdentifierSize: null,
    iterableType: 'iterable-typed',
    id: 0x06
  },
  originBlockSet: {
    sizeIdentifierSize: null,
    iterableType: 'iterable-typed',
    id: 0x05
  },
  payload: {
    sizeIdentifierSize: null,
    iterableType: 'iterable-typed',
    id: 0x07
  },
  previousHash: {
    sizeIdentifierSize: null,
    iterableType: 'iterable-untyped',
    id: 0x08
  }
  // signatureSet: {
  //   sizeIdentifierSize: null,
  //   iterableType: 'iterable-untyped',
  //   id: 0x02
  // },
}