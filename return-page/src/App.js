import { useState } from 'react';
import ReturnFormPage from './imports/ReturnForm.tsx';
import ConfirmationPage from './imports/ConfirmationPage.tsx';
import TrackingPage from './imports/TrackingPage.tsx';

function App() {
  const [currentPage, setCurrentPage] = useState('form');
  const [returnData, setReturnData] = useState(null);

  const handleFormSubmit = (data) => {
    setReturnData(data);
    setCurrentPage('confirmation');
  };

  const handleTrackReturn = () => {
    if (!returnData) return;
    setCurrentPage('tracking');
  };

  const handleBackToHome = () => {
    setCurrentPage('form');
    setReturnData(null);
  };

  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Desktop / ReturnForm">
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start justify-between pl-[88px] pr-11 py-11 relative size-full">
            <>
              {currentPage === 'form' && (
                <ReturnFormPage onSubmit={handleFormSubmit} />
              )}
              {currentPage === 'confirmation' && returnData && (
                <ConfirmationPage returnData={returnData} onTrackReturn={handleTrackReturn} />
              )}
              {currentPage === 'tracking' && returnData && (
                <TrackingPage returnData={returnData} onBackToHome={handleBackToHome} />
              )}
            </>
        </div>
      </div>
    </div>
  );
}

export default App;
