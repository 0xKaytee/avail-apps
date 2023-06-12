// Copyright 2017-2022 @polkadot/react-signer authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line header/header
import type { u32 } from '@polkadot/types';
import type { BN } from '@polkadot/util';

import React from 'react';

import { InputNumber, Modal } from '@polkadot/react-components';

import { useTranslation } from './translate.js';

interface Props {
  className?: string;
  onChange: (app_id: u32) => void;
}

function AppId ({ className, onChange }: Props): React.ReactElement<Props> | null {
  const { t } = useTranslation();

  const handleChange = (value?: BN): void => {
    const appId: number = value?.toNumber() ?? 0;

    onChange(appId);
  };

  return (
    <Modal.Columns
      className={className}
      hint={t<string>('Application Id.')}
    >
      <InputNumber
        label={t<string>('App Id')}
        labelExtra={t<string>('Specify different Application Id for this Tx')}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={handleChange}
      />
    </Modal.Columns>
  );
}

export default React.memo(AppId);
