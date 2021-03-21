import React from 'react';
import GenericButton from './GenericButton';

interface Props {}

const CameraButton = (props: Props) => {
  const onClick = () => {};

  return (
    <GenericButton text='Take a photo' iconClass='fas fa-camera' onClick={onClick}/>
  );
};

export default CameraButton;
