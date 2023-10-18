import { Formik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import validationSchema from '../../schema/validationShema';

import {
  FormContainer,
  FormControlWrap,
  FormSection,
  Form,
  FormikInput,
  FormSectionHeader,
  ContactUsBtn,
  FormikTextarea,
  FormikFilePicker,
  StyledErrorMessage,
  FormikInputWrap,
  TextareaAndAttachedWrap,
  LeftSideBgWrap,
  PositionWrapper,
  AttachedFilesList,
  SelectedFilesText,
  SelectedFilesItem,
  SelectedFilesList,
  CloseSvgBtn,
  FileNameText,
} from './Form.styled';
import { FilePicker } from '../FilePicker/FilePicker';
import { PopUpSuccess } from '../PopUpSuccess/PopUpSuccess';
import { useTranslation } from 'react-i18next';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  multiple_files: [],
};

export const ContactForm = () => {
  const { t } = useTranslation();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [files, setFiles] = useState([]);

  const handlePopUp = () => {
    setShowSuccessPopup(false);
  };

  const handleAddFiles = e => {
    const selectedFiles = e.target.files;
    const newFiles = [...files];

    for (let i = 0; i < selectedFiles.length; i++) {
      const isFileAlreadySelected = newFiles.some(
        existingFile => existingFile.name === selectedFiles[i].name
      );

      if (!isFileAlreadySelected) {
        newFiles.push(selectedFiles[i]);
      }
    }

    setFiles(newFiles);
    e.target.value = null;
  };
  const handleRemoveFile = index => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { name, email, phone, company, message } = values;

    const formData = new FormData();

    try {
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('company', company);
      formData.append('message', message);
      files.forEach(file => {
        formData.append('multiple_files', file);
      });

      await axios.post(
        `https://vibestyle-backend.onrender.com/api/contacts`,
        formData
      );

      resetForm();
      setShowSuccessPopup(true);
      setFiles([]);
    } catch (error) {
      console.log('Моя помилка', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormSection id="contactus">
      <FormContainer>
        <FormSectionHeader>&#47;&#47;: {t('form-title')}</FormSectionHeader>
        <PositionWrapper>
          <LeftSideBgWrap />
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {props => (
              <Form autoComplete="off">
                <FormikInputWrap>
                  <FormControlWrap>
                    <FormikInput
                      type="name"
                      name="name"
                      placeholder={t('form-name')}
                      required
                      onChange={props.handleChange}
                      value={props.values.name}
                      onBlur={props.handleBlur}
                    />
                    {props.errors.name && props.touched.name && (
                      <StyledErrorMessage name="name">
                        {props.errors.name}
                      </StyledErrorMessage>
                    )}
                  </FormControlWrap>
                  <FormControlWrap>
                    <FormikInput
                      type="email"
                      name="email"
                      placeholder={t('form-email')}
                      required
                      onChange={props.handleChange}
                      value={props.values.email}
                      onBlur={props.handleBlur}
                    />
                    {props.touched.email && props.errors.email ? (
                      <StyledErrorMessage>
                        {props.errors.email}
                      </StyledErrorMessage>
                    ) : null}
                  </FormControlWrap>
                  <FormControlWrap>
                    <FormikInput
                      type="tel"
                      name="phone"
                      placeholder={t('form-phone')}
                      required
                      onChange={props.handleChange}
                      value={props.values.phone}
                      onBlur={props.handleBlur}
                    />
                    {props.touched.phone && props.errors.phone ? (
                      <StyledErrorMessage>
                        {props.errors.phone}
                      </StyledErrorMessage>
                    ) : null}
                  </FormControlWrap>
                  <FormControlWrap>
                    <FormikInput
                      type="company"
                      name="company"
                      placeholder={t('form-company')}
                      onChange={props.handleChange}
                      value={props.values.company}
                      onBlur={props.handleBlur}
                    />
                  </FormControlWrap>
                </FormikInputWrap>
                <TextareaAndAttachedWrap>
                  <FormikTextarea
                    name="message"
                    as="textarea"
                    placeholder={t('form-message')}
                    onChange={props.handleChange}
                    value={props.values.message}
                    onBlur={props.handleBlur}
                  />
                  <FormikFilePicker
                    type="file"
                    name="multiple_files"
                    as={FilePicker}
                    multiple
                    onChange={handleAddFiles}
                    onBlur={props.handleBlur}
                    value={props.values.multiple_files}
                  />
                  {files.length > 0 && (
                    <AttachedFilesList>
                      <SelectedFilesText>Selected files:</SelectedFilesText>
                      <SelectedFilesList>
                        {files.map((file, index) => (
                          <SelectedFilesItem key={index}>
                            <FileNameText>{file.name}</FileNameText>
                            <CloseSvgBtn
                              type="button"
                              onClick={() => handleRemoveFile(index)}
                            >
                              Delete
                            </CloseSvgBtn>
                          </SelectedFilesItem>
                        ))}
                      </SelectedFilesList>
                    </AttachedFilesList>
                  )}
                  {props.touched.multiple_files &&
                  props.errors.multiple_files ? (
                    <StyledErrorMessage>
                      {props.errors.multiple_files}
                    </StyledErrorMessage>
                  ) : null}
                </TextareaAndAttachedWrap>
                <ContactUsBtn type="submit" disabled={props.isSubmitting}>
                  {props.isSubmitting ? t('form-sumbitting') : t('form-submit')}
                </ContactUsBtn>
                {showSuccessPopup && <PopUpSuccess handlePopUp={handlePopUp} />}
              </Form>
            )}
          </Formik>
        </PositionWrapper>
      </FormContainer>
    </FormSection>
  );
};
