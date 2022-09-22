// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
// import type  {H256}  from '@polkadot/types/interfaces';
import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        AppId: 'u32',
        DataLookup: {
          size: 'u32',
          index: 'Vec<(AppId,u32)>'
        },
        KateExtrinsicRoot: {
          hash: 'Hash',
          commitment: 'Vec<u8>',
          rows: 'u16',
          cols: 'u16',
          dataRoot: 'H256',
        },
        KateHeader: {
          parentHash: 'Hash',
          number: 'Compact<BlockNumber>',
          stateRoot: 'Hash',
          extrinsicsRoot: 'KateExtrinsicRoot',
          digest: 'Digest',
          appDataLookup: 'DataLookup'
        },
        Header: 'KateHeader',
        CheckAppIdExtra: {
          appId: 'u32'
        },
        CheckAppIdTypes: {},
        CheckAppId: {
          extra: 'CheckAppIdExtra',
          types: 'CheckAppIdTypes'
        }
      }
    }
  ],
  signedExtensions: {
    CheckAppId: {
      extrinsic: {
        appId: 'u32'
      },
      payload: {}
    }
  }
};

console.log('Add DA definitions');

export default definitions;
