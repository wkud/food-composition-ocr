import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {}

const CameraButton = (props: Props) => {
  const onClick = () => {};

  return (
    <Button variant='primary' className='button-size' onClick={onClick}>
      <i className='fas fa-camera' /> Take a photo
    </Button>
  );
};

export default CameraButton;
