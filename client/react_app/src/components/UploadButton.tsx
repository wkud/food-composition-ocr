import React from 'react';
import GenericButton from './GenericButton';

interface Props {}

const UploadButton = (props: Props) => {
  const onClick = () => {};

  return (
    <GenericButton text='Upload an image' iconClass='fas fa-upload' onClick={onClick}/>
  );
};

export default UploadButton;
