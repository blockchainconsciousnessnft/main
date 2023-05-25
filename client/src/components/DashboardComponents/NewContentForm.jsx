import { Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import styled from "styled-components";

const { TextArea } = Input;

const StyledLabel = styled(Form.Item)`
  * {
    color: #000000 !important;
    font-weight:bold;
  }
`;

const StyledButton = styled(Button)`
  width: 475px;
  height: 80px;
  border: 1px dashed #6E6E6E;
`;

const SocialDiv = styled.div`
  width: 475px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 230px;
`

function NewContentForm({ project, onSubmit, disabled, id, setButtonDisable }) {
  const [form] = Form.useForm();

  const [templateFormData, setTemplateFormData] = useState();

  const [metaData, setMetaData] = useState();

  const updateTemplateFormData = (data) => {
    setTemplateFormData(data);
  };

  const onChangeMetaData = (data) => {
    setMetaData(data);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <Form
        form={form}
        id={id}
        layout="vertical"
        autoComplete="off"
        // initialValues={{
        //   name: project.name ? project.name : null,
        //   description: project.description ? project.description : null,
        // }}
        onFinish={(data) => {
          // onSubmit({
          //   ...data,
          //   meta: {
          //     ...metaData,
          //   },
          //   ...templateFormData,
          // });
        }}
        // onFieldsChange={() =>
        //   setButtonDisable(
        //     form.getFieldsError().some((field) => field.errors.length > 0)
        //   )
        // }
      >
        <StyledLabel
          name="name"
          label="Title of Proposal"
        >
          <Input placeholder="Create New Proposal" />
        </StyledLabel>
        <StyledLabel name="description" label="Description">
          <TextArea rows={4} placeholder="Description" />
        </StyledLabel>
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          style={{ fontWeight: 'bold', color: '#000'}}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <StyledButton icon={<UploadOutlined />}>Add a picture</StyledButton>
          </Upload>
        </Form.Item>
        <Form.Item name="socialLinks" label="Add Socials" style={{ fontWeight: 'bold', color: '#000'}}>
          {/* first */}
          <SocialDiv>
            <StyledLabel name="twitter" label="Twitter">
              <StyledInput placeholder="@twitter" />
            </StyledLabel>
            <StyledLabel name="linkedIn" label="LinkedIn">
              <StyledInput placeholder="http://" />
            </StyledLabel>
          </SocialDiv>

          {/* second */}
          <SocialDiv>
            <StyledLabel name="facebook" label="Facebook">
              <StyledInput placeholder="http://" />
            </StyledLabel>
            <StyledLabel name="instagram" label="Instagram">
              <StyledInput placeholder="@instagram" />
            </StyledLabel>
          </SocialDiv>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewContentForm;
