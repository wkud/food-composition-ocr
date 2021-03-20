import Decription from './components/Decription';
import UploadButton from './components/UploadButton';
import CameraButton from './components/CameraButton';
import './styles.css';

function App() {
  return (
    <div className='page-size d-flex align-items-center justify-content-center'>
      <div className='body-size w-75 h-75 d-flex flex-column justify-content-between text-center align-items-center'>
        <div>
          <h3>Product Composition Recognizer</h3>
          <Decription className='lead description-size' />
        </div>
        <UploadButton />
        <CameraButton />
        <div />
      </div>
    </div>
  );
}

export default App;
