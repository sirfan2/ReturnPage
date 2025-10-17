import svgPaths from "./svg-uwmz3grs3d.ts";
import React, { useState, useEffect } from "react";

interface ReturnData {
  order_id: string;
  item_id: string;
  item_name: string;
  return_reason: string;
  return_date: string;
  warehouse_id: string | null;
}

interface TrackingPageProps {
  returnData: ReturnData;
  onBackToHome: () => void;
}

const stages = ['Submitted', 'Label Printed', 'In Transit', 'Delivered', 'Refunded'];

const TrackingPage:React.FC<TrackingPageProps> = ({ returnData, onBackToHome }) => {
  const [trackingStatus, setTrackingStatus] = useState<{ status: string; return_date: string } | null>(null);
  const [loading, setLoading] = useState(true);

  //Simulated fetching tracking status
  useEffect(() => {
    if (!returnData) return;
    
    setLoading(true);
    const timer = setTimeout(() => {
      // Simulated status update for demonstration purposes
      setTrackingStatus({ status: 'Submitted', return_date: returnData.return_date });
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [returnData]);

  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Desktop / ReturnForm">
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start justify-between pl-[88px] pr-11 py-11 relative size-full">
          <Contents 
          returnData={returnData}
          trackingStatus={trackingStatus}
          loading={loading}
          setTrackingStatus={setTrackingStatus}
          onBackToHome={onBackToHome}/>
        </div> 
      </div>
    </div>
  );
}

function Contents({ returnData, trackingStatus, loading, setTrackingStatus, onBackToHome }: any) {
  {/* ---- TEST BUTTTON ---- */}
  const testStages = ['Submitted', 'Label Printed', 'In Transit', 'Delivered', 'Refunded'];
  {/* ---- TEST BUTTTON ---- */}

  return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-[1024px]" data-name="Contents">
      <Header />
      <Title />
      <Space
        returnData={returnData}
        trackingStatus={trackingStatus}
        loading={loading}
        setTrackingStatus={setTrackingStatus} />
      <SecondaryButton onBackToHome={onBackToHome} />

      {/* ---- TEST BUTTTON ---- */}
        <div className="flex flex-col gap-2 ml-10">
          <p className="font-bold">Test Timeline Stages:</p>
          {testStages.map((stage, idx) => (
            <button
              key={stage}
              className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
              onClick={() => {
                console.log('Test button clicked', { stage, idx });
                setTrackingStatus({ status: stage, return_date: returnData?.return_date || '' });
              }}
            >
              {stage}
            </button>
          ))}
        </div>
        {/* ---- TEST BUTTTON ---- */}
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-[1200px]" data-name="Header">
      <div className="box-border content-center flex flex-wrap gap-6 items-center justify-start overflow-clip p-[32px] relative w-[1200px]">
        <Block />
        <NavigationPillList />
        <HeaderAuth />
      </div>
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function HeaderAuth() {
  return <div className="content-stretch flex gap-3 items-center justify-start shrink-0 w-[178px]" data-name="Header Auth" />;
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242731] text-[32px] w-full">
        <p className="leading-[36px]">Track Your Return</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[13px] items-center justify-start relative shrink-0" data-name="Logo">
      <div className="shrink-0 size-[70px] flex items-center justify-center">
        <img src="/logo192.png" alt="Logo" className="bg-center bg-cover bg-no-repeat w-full h-full" />
      </div>
      <div className="font-['Raleway:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#242731] text-[16px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[18px] whitespace-pre">{`RETURN PAGE `}</p>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0" data-name="Block">
      <Logo />
    </div>
  );
}

function NavigationPill() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap">
        <p className="leading-none whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function NavigationPill1() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap">
        <p className="leading-none whitespace-pre">Returns</p>
      </div>
    </div>
  );
}

function NavigationPill2() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap">
        <p className="leading-none whitespace-pre">Community</p>
      </div>
    </div>
  );
}

function NavigationPill3() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap">
        <p className="leading-none whitespace-pre">Resources</p>
      </div>
    </div>
  );
}

function NavigationPill4() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap">
        <p className="leading-none whitespace-pre">Pricing</p>
      </div>
    </div>
  );
}

function NavigationPill5() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap">
        <p className="leading-none whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function NavigationPill6() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap">
        <p className="leading-none whitespace-pre">Link</p>
      </div>
    </div>
  );
}

function NavigationPillList() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-2 grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Navigation Pill List">
      <NavigationPill />
      <NavigationPill1 />
      <NavigationPill2 />
      <NavigationPill3 />
      <NavigationPill4 />
      <NavigationPill5 />
      <NavigationPill6 />
    </div>
  );
}
function Space({ returnData, trackingStatus, loading }: any) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Space">
      <div aria-hidden="true" className="absolute border border-[#e2e4e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[32px] relative w-full">
          <Field orderNumber={returnData?.order_id} />
          <Field1 status={trackingStatus?.status} loading={loading} />
          <Timeline trackingStatus={trackingStatus} loading={loading} />
        </div>
      </div>
    </div>
  );
}

function Field({ orderNumber }: { orderNumber: string }) {
  return (
    <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-full" data-name="Field">
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242731] text-[20px] w-full">
        <p className="leading-[28px]">
          <span>{`Tracking Order: `}</span>
          <span className="font-['Poppins:Regular',_sans-serif] not-italic">{orderNumber || 'Loading...'}</span>
        </p>
      </div>
    </div>
  );
}

function Field1({ status, loading }: { status: string | undefined, loading: boolean }) {
  const getStatusText = (status: string | undefined) => {
    switch (status) {
      case 'Pending': return 'Processing';
      case 'Submitted': return 'Return Submitted';
      case 'Label Printed': return 'Label Printed';
      case 'In Transit': return 'In Transit';
      case 'Delivered': return 'Item Delivered';
      case 'Refunded': return 'Refund Issued';
      default: 
        return 'Loading...';
    }
  };

  return (
    <div className="content-stretch flex gap-5 items-start justify-start relative shrink-0 w-full" data-name="Field">
      {loading && <CircularIndeterminateProgressIndicator loading={loading} />}
      <div className="text-[25px] font-medium">{loading ? 'Loading...' : getStatusText(status)}</div>
    </div>
  );
}

function Timeline ({ trackingStatus, loading }: any) {
  const currentIndex = trackingStatus ? stages.indexOf(trackingStatus.status) : -1;
  const numGaps = stages.length - 1; // gaps between stages
  let progress = 0;
  if (currentIndex > 0 && numGaps > 0) {
    const raw = (currentIndex / numGaps) * 100;
    // clamp and guard against NaN
    progress = Number.isFinite(raw) ? Math.max(0, Math.min(100, raw)) : 0;
  }

  return (
    <div className="w-full mt-6 relative flex flex-col items-center justify-center">
      {/* Combined container so lines and circles share stacking context */}
      <div className="relative w-full h-12 flex items-center" style={{ minHeight: 48 }}>
        {/* Gray base line (full width) */}
        <div className="absolute left-0 right-0 h-2 bg-gray-300 rounded-full" style={{ top: '50%', transform: 'translateY(-50%)', zIndex: 1 }} />
        {/* Green progress line (above base, below circles) - width based on progress */}
        <div
          className="absolute h-2 rounded-full shadow-sm"
          style={{ left: 0, width: `${progress}%`, background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 100%)', top: '50%', transform: 'translateY(-50%)', zIndex: 2, transition: 'width 300ms ease', border: progress > 0 ? '1px solid rgba(0,128,0,0.18)' : 'none' }}
          aria-hidden="true"
        />

        {/* Circles and labels (absolutely positioned over the line) */}
        <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-between items-center px-0" style={{ zIndex: 3 }}>
          {stages.map((stage, i) => {
          const completed = i <= currentIndex;
          const active = i === currentIndex;

          return (
            <div key={stage} className="flex flex-col items-center" style={{ alignItems: 'center' }}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  completed ? 'bg-green-600' : active ? 'bg-blue-500' : 'bg-gray-400'
                }`}
                style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}
              >
                {completed ? '✓' : active ? '…' : stage.charAt(0)}
              </div>
              <div className="mt-2 text-sm text-center text-gray-700">
                {loading ? 'Loading...' : stage}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

function CircularIndeterminateProgressIndicator({ loading }: { loading: boolean }) {
  if (!loading) return null;

  return (
    <div className="relative shrink-0 size-[35px]" data-name="Circular-indeterminate progress indicator">
      <div className="absolute bottom-[-0.1%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 36">
          <g id="Circular-indeterminate progress indicator">
            <path clipRule="evenodd" d={svgPaths.p3722ea00} fill="var(--fill-0, #FFD752)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p18010580} fill="var(--fill-0, #FFE48D)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SecondaryButton({ onBackToHome }: { onBackToHome: () => void }) {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 h-12 items-center justify-center pl-8 pr-6 py-0 relative rounded-[4px] shrink-0" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border border-[#bbbfc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="capitalize flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242731] text-[16px] text-center text-nowrap">
        <button 
          onClick={onBackToHome} 
          className="leading-[24px] whitespace-pre">
            Back to Home
          </button>
      </div>
    </div>
  );
}

export default TrackingPage;