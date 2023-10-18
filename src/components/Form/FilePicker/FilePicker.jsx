import { useField } from 'formik';
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
  const [field] = useField(props);

  return (
    <>
      <FilePickerInput
        {...field}
        {...props}
        type="file"
        name="multiple_files"
        id="multiple_files"
      />

      <ClipLabel htmlFor="multiple_files">
        <IconEWrap>
          <ClipSvg />
        </IconEWrap>
        <LabelText>{t('form-linked-file')}</LabelText>
      </ClipLabel>
    </>
  );
};
