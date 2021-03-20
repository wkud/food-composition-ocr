import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';

function App() {
  return (
    <div className='page-size d-flex align-items-center justify-content-center'>
      <div className='body-size w-75 h-75 d-flex flex-column justify-content-between text-center align-items-center'>
        <div>
          <h3>Product Composition Recognizer</h3>
          <div className='lead d-none d-sm-block'>
            Product composition recognizer allows you to easily analyze
            composition of food products. Simply take a photo of product's
            composition list and application will show you the name and
            description of every E-additive present in the food product.
          </div>
          <div className='lead d-sm-none'>
            Take a photo of product's composition and the list of E-additives
            will be displayed soon.
          </div>
        </div>
        <Button variant='primary' className='button-size'>
          Upload
        </Button>
        <Button variant='primary' className='button-size'>
          Take a photo
        </Button>
        <div />
      </div>
    </div>
  );
}

export default App;
