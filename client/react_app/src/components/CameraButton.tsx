import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {}

const CameraButton = (props: Props) => {
  const onClick = () => {};

  return (
    <Button variant='primary' className='button-size' onClick={onClick}>
      Take a photo
    </Button>
  );
};

export default CameraButton;
