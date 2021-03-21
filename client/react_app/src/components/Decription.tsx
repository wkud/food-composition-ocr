import React from 'react';

interface Props {
  className: string;
}

const Decription = ({ className }: Props) => {
  return (
    <>
      <div className={`${className} d-none d-sm-block`}>
        Product composition recognizer allows you to easily analyze composition
        of food products. Simply take a photo of product's composition list and
        application will show you the name and description of every E-additive
        present in the food product.
      </div>
      <div className={`${className} d-sm-none`}>
        Take a photo of product's composition and the list of E-additives will
        be displayed soon.
      </div>
    </>
  );
};

export default Decription;
