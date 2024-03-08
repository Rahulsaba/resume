"use client"

import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
const Uploads = () => {
  const [fileList, setFileList] = useState('');
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  
  return (
    <ImgCrop rotationSlider>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        onChange={onChange}
      >
        {fileList < 1 && `+ Upload`}
      </Upload>
    </ImgCrop>
  );
};
export default Uploads;