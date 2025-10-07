import { useEffect, useState } from 'react';
import svgPaths from "./imports/svg-729l1g9zk7.ts";
import trackingSvgPaths from "./imports/svg-uwmz3grs3d.ts";
import ReturnFormPage from './imports/DesktopReturnForm.tsx';
import ConfirmationPage from './imports/DesktopOrderSelectionPage.tsx';
import TrackingPage from './imports/DesktopOrderSelectionPage-2-1144.tsx';
import axios from 'axios';

function App() {
  const [currentPage, setCurrentPage] = useState('form');
  const [returnData, setReturnData] = useState(null);

  const handleFormSubmit = (data) => {
    setReturnData(data);
    setCurrentPage('confirmation');
  };

  const handleTrackReturn = () => {
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
              {currentPage === 'tracking' && (
                <TrackingPage onBackToHome={handleBackToHome} />
              )}
            </>
        </div>
      </div>
    </div>
  );
}

export default App;
