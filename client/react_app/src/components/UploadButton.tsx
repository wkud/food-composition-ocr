import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {}

const UploadButton = (props: Props) => {
  const onClick = () => {};

  return (
    <Button variant='primary' className='button-size' onClick={onClick}>
      <i className='fas fa-upload' /> Upload an image
    </Button>
  );
};

export default UploadButton;
