import { useTranslation } from 'react-i18next';

import {
  ClipLabel,
  ClipSvg,
  FilePickerInput,
  IconEWrap,
  LabelText,
} from './FilePicker.styled';

export const FilePicker = ({ label, ...props }) => {
  const { t } = useTranslation();

  return (
    <>
      <FilePickerInput {...props} type="file" name="files" id="files" />

      <ClipLabel htmlFor="files">
        <IconEWrap>
          <ClipSvg />
        </IconEWrap>
        <LabelText>{t('form-linked-file')}</LabelText>
      </ClipLabel>
    </>
  );
};
