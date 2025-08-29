import { useEffect, useState } from 'react';
import svgPaths from "./imports/svg-729l1g9zk7.ts";
import trackingSvgPaths from "./imports/svg-uwmz3grs3d.ts";
import ReturnFormPage from './imports/DesktopReturnForm.tsx';
import ConfirmationPage from './imports/DesktopOrderSelectionPage.tsx';
import TrackingPage from './imports/DesktopOrderSelectionPage-2-1144.tsx';
import axios from 'axios';

function Logo() {
  return (
    <div className="content-stretch flex gap-[13px] items-center justify-start relative shrink-0" data-name="Logo">
      <div className="shrink-0 size-[70px] flex items-center justify-center">
        <img src="/logo.png" alt="Logo" className="bg-center bg-cover bg-no-repeat w-full h-full" />
      </div>
      <div className="font-['Raleway:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#242731] text-[16px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[18px] whitespace-pre">RETURN STACK</p>
      </div>
    </div>
  );
}

export default function App() {
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
                {currentPage === 'form' && <ReturnFormPage onSubmit={handleFormSubmit} />}
                
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
