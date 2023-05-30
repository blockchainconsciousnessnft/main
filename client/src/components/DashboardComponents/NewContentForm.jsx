import { Form, Input, Upload, Button, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { useConsciousContext } from "../../context";
import { sendFileToIPFS } from "../../pinata";

const { TextArea } = Input;

const StyledLabel = styled(Form.Item)`
  * {
    color: #000000 !important;
    font-weight: bold;
  }
`;

const StyledButton = styled(Button)`
  width: 475px;
  height: 80px;
  border: 1px dashed #6e6e6e;
`;

const SocialDiv = styled.div`
  width: 475px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled(Input)`
  width: 230px;
`;

function NewContentForm({
  project,
  onSubmit,
  disabled,
  id,
  setButtonDisable,
  setCategory,
  setDescription,
  setLinks,
  links,
  description,
  category,
  image,
  setImage,
  title,
  setTitle,
  facebook,
  instagram,
  linkedin,
  twitter,
  setFacebook,
  setInstagram,
  setLinkedin,
  setTwitter
}) {
  const [form] = Form.useForm();
  console.log(category);
  const [templateFormData, setTemplateFormData] = useState();

  const [metaData, setMetaData] = useState();

  const updateTemplateFormData = (data) => {
    setTemplateFormData(data);
  };

  const onChangeMetaData = (data) => {
    setMetaData(data);
  };

  const ipfsgateway = "gateway.pinata.cloud";

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const getCid = await sendFileToIPFS(file);
    const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid;
    setImage(ipfsPath);
    console.log(ipfsPath);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const { Option } = Select;
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
        <StyledLabel name="name" label="Title of Proposal">
          <Input
            placeholder="Create New Proposal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </StyledLabel>
        <Form.Item
          name="select"
          label="Select"
          hasFeedback
          rules={[{ required: true, message: "Please select your category!" }]}
        >
          <label>
            <span>Category</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              class="w-full font-bold font-OpenSans-Bold bg-[#f0f0f0] rounded-[8px] h-16 text-[#000000]"
            >
              <option>Category</option>
              <option>Magazine</option>
              <option>Spiritual</option>
              <option>Radio</option>
              <option>Encyclopedia</option>
              <option>Clarity</option>
            </select>
          </label>
        </Form.Item>
        <StyledLabel name="description" label="Description">
          <TextArea
            rows={4}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </StyledLabel>
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          style={{ fontWeight: "bold", color: "#000" }}
        >
          <input type="file" onChange={uploadImage} />
        </Form.Item>
        <Form.Item
          name="socialLinks"
          label="Add Socials"
          style={{ fontWeight: "bold", color: "#000" }}
        >
          {/* first */}
          <SocialDiv>
            <StyledLabel name="twitter" label="Twitter">
              <StyledInput
                placeholder="@twitter"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </StyledLabel>
            <StyledLabel name="linkedIn" label="LinkedIn">
              <StyledInput
                placeholder="http://"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </StyledLabel>
          </SocialDiv>

          {/* second */}
          <SocialDiv>
            <StyledLabel name="facebook" label="Facebook">
              <StyledInput
                placeholder="@facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </StyledLabel>
            <StyledLabel name="instagram" label="Instagram">
              <StyledInput
                placeholder="@instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </StyledLabel>
          </SocialDiv>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewContentForm;
