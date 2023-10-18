import * as Yup from 'yup';
// import { useTranslation } from 'react-i18next';

const allowedFileExtensions = [
  'png',
  'jpeg',
  'jpg',
  'pdf',
  'doc',
  'zip',
  'svg',
  'xml',
];

const MAX_TOTAL_FILE_SIZE = 20 * 1024 * 1024;

const nameRegexp = /^[а-яА-Яa-zA-Z-'']*$/u;
const phoneRegexp = /^(?:\+\d{1,3}\s?)?(\d{1,4}[\s-()])?\d{7,15}$/;
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Please enter at least 3 characters A-z/А-я')
    .max(30)
    .matches(nameRegexp, 'Please enter at least 3 characters A-z/А-я')
    .required('Name is a required field'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is a required field'),
  phone: Yup.string()
    .matches(phoneRegexp, 'Phone number should contains at least 7 numbers')
    .required('Phone number is a required field'),
  company: Yup.string(),
  message: Yup.string(),
  multiple_files: Yup.array()
    .of(
      Yup.mixed().test(
        'fileFormat',
        'Allowed files formats: PNG, JPEG, JPG, PDF, MS Word, ZIP, SVG',
        files => {
          if (!files) return true;
          const fileExtension = files.name.split('.').pop().toLowerCase();
          console.log(fileExtension);
          return allowedFileExtensions.includes(fileExtension);
        }
      )
    )
    .test(
      'totalFileSize',
      'Total file size must be less than or equal to 20 MB',
      files => {
        if (!files || files.length === 0) return true;
        const totalSize = files.reduce((acc, file) => acc + file.size, 0);
        return totalSize <= MAX_TOTAL_FILE_SIZE;
      }
    )
    .test('maxFiles', 'The maximum number of files is 6', files => {
      if (!files) return true;
      return files.length <= 6;
    }),
});
export default validationSchema;
