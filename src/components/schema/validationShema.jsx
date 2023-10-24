import * as Yup from 'yup';

const allowedMimeTypes = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'application/pdf',
  'application/msword',
  'application/zip',
  'image/svg+xml',
];

const MAX_TOTAL_FILE_SIZE = 20 * 1024 * 1024;

const nameRegexp = /^[а-яА-Яa-zA-Z' -]*$/u;
const phoneRegexp = /^(?:\+\d{1,3}\s?)?(\d{1,4}[\s-()])?\d{7,15}$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validationSchema = t =>
  Yup.object().shape({
    name: Yup.string()
      .min(3, t('form-name-error-1'))
      .max(30)
      .matches(nameRegexp, t('form-name-error-1'))
      .required(t('form-name-error-2')),
    email: Yup.string()
      .email(t('form-email-error-1'))
      .matches(emailRegex, t('form-email-error-1'))
      .required(t('form-email-error-2')),
    phone: Yup.string()
      .matches(phoneRegexp, t('form-phone-error-1'))
      .required(t('form-phone-error-2')),
    company: Yup.string(),
    message: Yup.string(),
    files: Yup.array()
      .of(
        Yup.mixed().test(
          'fileFormat',
          t('form-attachedFiles-error-1'),
          files => {
            if (!files) return true;
            const fileExtension = files.type;
            return allowedMimeTypes.includes(fileExtension);
          }
        )
      )
      .test('totalFileSize', t('form-attachedFiles-error-2'), files => {
        if (!files || files.length === 0) return true;
        const totalSize = files.reduce((acc, file) => acc + file.size, 0);
        return totalSize <= MAX_TOTAL_FILE_SIZE;
      })
      .test('maxFiles', t('form-attachedFiles-error-3'), files => {
        if (!files) return true;
        return files?.length <= 6;
      }),
  });
export default validationSchema;
