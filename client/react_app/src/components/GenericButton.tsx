import React from 'react';
import {Button} from 'react-bootstrap';

interface Props {
  onClick: React.MouseEventHandler<HTMLElement> | undefined,
  iconClass: string,
  text: string,
}

const GenericButton = ({onClick, iconClass, text}: Props) => {
  return (
    <Button variant='primary' className='button-size' onClick={onClick}>
      <i className='fas fa-upload' /> {text}
    </Button>
  );
};

export default GenericButton;
