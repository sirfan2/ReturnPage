import svgPaths from "./svg-uwmz3grs3d.ts";

export function TrackingPage({ returnData, onBackToHome }) {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Desktop / ReturnForm">
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start justify-between pl-[88px] pr-11 py-11 relative size-full">
          <Contents onBackToHome={onBackToHome}/>
        </div> 
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[13px] items-center justify-start relative shrink-0" data-name="Logo">
      <div className="shrink-0 size-[70px] flex items-center justify-center">
        <img src="/logo.png" alt="Logo" className="bg-center bg-cover bg-no-repeat w-full h-full" />
      </div>
      <div className="font-['Raleway:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#242731] text-[16px] text-nowrap tracking-[1px] uppercase">
        <p className="leading-[18px] whitespace-pre">{`RETURN STACK `}</p>
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

function HeaderAuth() {
  return <div className="content-stretch flex gap-3 items-center justify-start shrink-0 w-[178px]" data-name="Header Auth" />;
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

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242731] text-[32px] w-full">
        <p className="leading-[36px]">Track Your Return</p>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-full" data-name="Field">
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242731] text-[20px] w-full">
        <p className="leading-[28px]">
          <span>{`Tracking Order: `}</span>
          <span className="font-['Poppins:Regular',_sans-serif] not-italic">{`{order_number}`}</span>
        </p>
      </div>
    </div>
  );
}

function CircularIndeterminateProgressIndicator() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Circular-indeterminate progress indicator">
      <div className="absolute bottom-[-0.1%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 36">
          <g id="Circular-indeterminate progress indicator">
            <path clipRule="evenodd" d={svgPaths.p3722ea00} fill="var(--fill-0, #FFD752)" fillRule="evenodd" id="Active indicator" />
            <path clipRule="evenodd" d={svgPaths.p18010580} fill="var(--fill-0, #FFE48D)" fillRule="evenodd" id="Track" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex gap-5 items-start justify-start relative shrink-0 w-full" data-name="Field">
      <CircularIndeterminateProgressIndicator />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] h-[37px] justify-center leading-[0] not-italic relative shrink-0 text-[#242426] text-[25px] w-[116px]">
        <p className="leading-[28px]">In Transit</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid min-h-px min-w-px place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#12b76a] h-[15.034px] ml-[87.938px] mt-[22.551px] rounded-[7.517px] w-[30.727px]" />
      <div className="[grid-area:1_/_1] font-['Inter:Medium',_sans-serif] font-medium leading-[0] ml-[102.83px] mt-0 not-italic relative text-[#12b76a] text-[12.301px] text-center translate-x-[-50%] w-[205.661px]">
        <p className="leading-[19.134px]">Return Submitted</p>
      </div>
      <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[0] ml-[103.54px] mt-[41.002px] not-italic relative text-[#12b76a] text-[10.934px] text-center translate-x-[-50%] w-[150.345px]">
        <p className="leading-[16.401px]">{`{sub_date}`}</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid min-h-px min-w-px place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#d0d5dd] h-[15.034px] ml-[81.488px] mt-[22.551px] rounded-[7.517px] w-[30.727px]" />
      <div className="[grid-area:1_/_1] font-['Inter:Medium',_sans-serif] font-medium leading-[0] ml-[101.86px] mt-0 not-italic relative text-[#d0d5dd] text-[12.301px] text-center translate-x-[-50%] w-[137.754px]">
        <p className="leading-[19.134px]">Label Printed</p>
      </div>
      <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[0] ml-[102.83px] mt-[41.002px] not-italic relative text-[#667085] text-[10.934px] text-center translate-x-[-50%] w-[205.661px]">
        <p className="leading-[16.401px]">{`{labelprint_date}`}</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid min-h-px min-w-px place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#d0d5dd] h-[15.034px] ml-[87.729px] mt-[22.551px] rounded-[7.517px] w-[30.727px]" />
      <div className="[grid-area:1_/_1] font-['Inter:Medium',_sans-serif] font-medium leading-[0] ml-[102.83px] mt-0 not-italic relative text-[#d0d5dd] text-[12.301px] text-center translate-x-[-50%] w-[205.661px]">
        <p className="leading-[19.134px]">Item Shipped</p>
      </div>
      <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[0] ml-[103.549px] mt-[41.002px] not-italic relative text-[#667085] text-[10.934px] text-center translate-x-[-50%] w-[152.448px]">
        <p className="leading-[16.401px]">{`{shipped_date}`}</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid min-h-px min-w-px place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#d0d5dd] h-[15.034px] ml-[86.943px] mt-[22.551px] rounded-[7.517px] w-[30.727px]" />
      <div className="[grid-area:1_/_1] font-['Inter:Medium',_sans-serif] font-medium leading-[0] ml-[103.949px] mt-0 not-italic relative text-[#d0d5dd] text-[12.301px] text-center translate-x-[-50%] w-[201.471px]">
        <p className="leading-[19.134px]">Refund Issued</p>
      </div>
      <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[0] ml-[102.83px] mt-[41.002px] not-italic relative text-[#667085] text-[10.934px] text-center translate-x-[-50%] w-[205.661px]">
        <p className="leading-[16.401px]">{`{refund_date}`}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[45.786px] h-[150px] items-start justify-start ml-0 mt-0 relative w-[960px]">
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] bg-[#d0d5dd] h-[5.554px] ml-[76.557px] mt-[58.333px] rounded-[1.367px] w-[794.734px]" />
      <Frame5 />
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex flex-col gap-2 h-[150px] items-start justify-center relative shrink-0 w-full" data-name="Field">
      <Group5 />
    </div>
  );
}

function Space() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Space">
      <div aria-hidden="true" className="absolute border border-[#e2e4e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[32px] relative w-full">
          <Field />
          <Field1 />
          <Field2 />
        </div>
      </div>
    </div>
  );
}

function SecondaryButton({ onBackToHome}) {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 h-12 items-center justify-center pl-8 pr-6 py-0 relative rounded-[4px] shrink-0" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border border-[#bbbfc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="capitalize flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242731] text-[16px] text-center text-nowrap">
        <button onClick={onBackToHome}>Back to Home</button>
      </div>
    </div>
  );
}

function Step1({ onBackToHome }) {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full" data-name="Step 1">
      <Header />
      <Title />
      <Space />
      <SecondaryButton onBackToHome={onBackToHome} />
    </div>
  );
}

function Contents({ onBackToHome }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-[1024px]" data-name="Contents">
      <Step1 onBackToHome={onBackToHome}/>
    </div>
  );
}

export default function DesktopOrderSelectionPage(props) {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Desktop / Order Selection Page">
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start justify-between pl-[88px] pr-11 py-11 relative size-full">
          <Contents onBackToHome={props.onBackToHome}/>
        </div>
      </div>
    </div>
  );
}