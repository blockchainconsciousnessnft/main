import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import CatalogueApi, {
  QUERY_KEYS as CATALOGUE_QUERY_KEYS
} from '../../../api/catalogue';
import { TEMPLATE_THUMBNAIL_DEFAULT_COLOR } from '../../../utils/constants';
import CatalogueForm from '../../DAM/components/CatalogueForm';
import SaveAsTemplateAddOns from './SaveAsTemplateAddOns';

const { TextArea } = Input;

const StyledLabel = styled(Form.Item)`
  *{
    color: #333333 !important;
  }
`;

function SaveTemplateForm({
  project, onSubmit, disabled, id, setButtonDisable
}) {
  const [form] = Form.useForm();

  const [templateFormData, setTemplateFormData] = useState({
    duplicateAllUserAssignees: true,
    duplicateAllChecklists: true,
    duplicateWorkflow: true,
    colour: TEMPLATE_THUMBNAIL_DEFAULT_COLOR,
  });

  const [metaData, setMetaData] = useState();

  const updateTemplateFormData = (data) => {
    setTemplateFormData(data);
  };

  const onChangeMetaData = (data) => {
    setMetaData(data);
  };

  const getCataloguesQuery = useQuery(
    CATALOGUE_QUERY_KEYS.all,
    () => CatalogueApi.all(),
    {
      onError: () => console.log('Error'),
    },
  );

  const nameConfig = {
    rules: [{ required: true, message: '' }],
  };

  const allowedCharacters = /^[a-zA-Z0-9._\-()\s]+$/;

  return (
    <div>
      <Form
        form={form}
        id={id}
        layout="vertical"
        autoComplete="off"
        initialValues={{
          name: project.name ? project.name : null,
          description: project.description ? project.description : null,
        }}
        onFinish={(data) => {
          onSubmit({
            ...data,
            meta: {
              ...metaData,
            },
            ...templateFormData,
          });
        }}
        onFieldsChange={() =>
          setButtonDisable(
            form.getFieldsError().some((field) => field.errors.length > 0)
          )
        }
      >
        <StyledLabel 
          name="name" 
          label="Template name" 
          {...nameConfig}
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (allowedCharacters.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Allowed characters - _ . ( ) '));
              },
            }),
          ]}
        >
          <Input placeholder="Enter text" />
        </StyledLabel>
        <StyledLabel name="description" label="Template description">
          <TextArea rows={4} />
        </StyledLabel>
      </Form>
      <SaveAsTemplateAddOns
        disabled={disabled}
        templateFormData={templateFormData}
        updateTemplateFormData={updateTemplateFormData}
      />
      {
        getCataloguesQuery?.data?.length > 0 && (
          <CatalogueForm Fields={getCataloguesQuery.data} onChange={onChangeMetaData} data={project.meta} />
        )
      }
    </div>
  );
}

SaveTemplateForm.propTypes = {
  project: PropTypes.objectOf,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  id: PropTypes.string,
};

SaveTemplateForm.defaultProps = {
  project: {},
  disabled: false,
  onSubmit: () => { },
  id: 'save-template-form',
};

export default NewContentForm;