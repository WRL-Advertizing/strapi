import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@strapi/design-system/IconButton';
import { FocusTrap } from '@strapi/design-system/FocusTrap';
import { SimpleMenu, MenuItem } from '@strapi/design-system/SimpleMenu';
import Cross from '@strapi/icons/Cross';
import Check from '@strapi/icons/Check';
import Rotate from '@strapi/icons/ArrowRight';
import { Stack } from '@strapi/design-system/Stack';
import { useIntl } from 'react-intl';
import getTrad from '../../../utils/getTrad';
import { CroppingActionRow } from './components';

export const CroppingActions = ({ onCancel, onValidate, onDuplicate, onRotate }) => {
  const { formatMessage } = useIntl();
  
return (
  <FocusTrap onEscape={onCancel}>
    <CroppingActionRow justifyContent="flex-end" paddingLeft={3} paddingRight={3}>
      <Stack spacing={1} horizontal>
        <IconButton
          label={formatMessage({
              id: getTrad('control-card.stop-crop'),
              defaultMessage: 'Stop cropping',
            })}
          icon={<Cross />}
          onClick={onCancel}
        />
        <IconButton
          label={formatMessage({
              id: getTrad('control-card.rotate'),
              defaultMessage: 'Rotate Asset Right',
            })}
          icon={<Rotate />}
          onClick={() => {
              onRotate(rotate => {
                if (rotate === 270) {
                  return 0;
                } 
                  
return rotate + 90;
                
              });
            }}
        />

        <SimpleMenu
          label={formatMessage({
              id: getTrad('control-card.crop'),
              defaultMessage: 'Crop',
            })}
          as={IconButton}
          icon={<Check />}
        >
          <MenuItem onClick={onValidate}>
            {formatMessage({
                id: getTrad('checkControl.crop-original'),
                defaultMessage: 'Crop the original asset',
              })}
          </MenuItem>

          {onDuplicate && (
          <MenuItem onClick={onDuplicate}>
            {formatMessage({
                  id: getTrad('checkControl.crop-duplicate'),
                  defaultMessage: 'Duplicate & crop the asset',
                })}
          </MenuItem>
            )}
        </SimpleMenu>
      </Stack>
    </CroppingActionRow>
  </FocusTrap>
  );
};

CroppingActions.defaultProps = {
  onDuplicate: undefined,
};

CroppingActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onDuplicate: PropTypes.func,
  onValidate: PropTypes.func.isRequired,
  onRotate: PropTypes.func.isRequired,
};
