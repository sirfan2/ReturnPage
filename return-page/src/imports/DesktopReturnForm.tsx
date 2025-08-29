import { useState, useEffect } from 'react';
import axios from 'axios';
import svgPaths from "./svg-729l1g9zk7.ts";
import returnReasons from '../returnReasons.json';

export default function DesktopReturnForm({ onSubmit }) {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Desktop / ReturnForm">
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start justify-between pl-[88px] pr-11 py-11 relative size-full">
          <Contents1 onSubmit={onSubmit} />
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
        <p className="leading-[36px]">Return Your Item</p>
      </div>
    </div>
  );
}

type OrderItem = {
  item_name: string;
  item_id: string;
};

type OrderDetails = {
  purchase_date: string;
  items: OrderItem[];
};

type FieldProps = {
  orderNumber: string;
  setOrderNumber: (value: string) => void;
  orderValid: boolean | null;
  setOrderValid: (value: boolean | null) => void;
  checking: boolean;
  setChecking: (value: boolean) => void;
  orderDetails: OrderDetails | null;
  setOrderDetails: (details: OrderDetails | null) => void;
};

function Field({
  orderNumber,
  setOrderNumber,
  orderValid,
  setOrderValid,
  checking,
  setChecking,
  orderDetails,
  setOrderDetails,
}: FieldProps) {

  const checkOrderNumber = async () => {
    if(!orderNumber) {
      setOrderValid(null);
      setOrderDetails(null);
      return;
    }

    setChecking(true);
    try {
      const response = await axios.get(`http://localhost:8000/orders/${orderNumber}`);
      console.log("Fetched order:", response.data); //debug
      setOrderValid(true);
      setOrderDetails(response.data);
    } catch (error:any) {
      if (error.response && error.response.status === 404) {
        setOrderValid(false);
        setOrderDetails(null);
      }
      console.error("Error checking order number:", error);
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-full" data-name="Field">
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242731] text-[20px] w-full">
        <p className="leading-[28px]">Order Number:</p>
      </div>
      <input
        type="text"
        inputMode="numeric"
        value={orderNumber}
        onChange={e => setOrderNumber(e.target.value.replace(/[^0-9]/g, ""))}
        onBlur={checkOrderNumber}
        onKeyDown={e => { if (e.key === 'Enter') checkOrderNumber(); }}
        placeholder="Enter order number here..."
        style={{ width: "220px", fontSize: "18px", padding: "8px", border: "1px solid #ccc" }}
      />
      {checking && <span style ={{ color: "#888", fontSize: "14px" }}>Checking...</span>}
      {orderValid == false && (
        <span style={{ color: "red", fontSize: "14px" }}>Order number not found. Please try again.</span>
      )}
      {orderValid === true && orderDetails ? (
        <div style={{ marginTop: "8px", fontSize: "14px", color: "green" }}>
          <strong>Order found!</strong><br />
          Purchase Date: {orderDetails.purchase_date}<br />
          Items: {orderDetails.items.map((item:any) => item.item_name).join(", ")}
        </div>
      ) : null}
    </div>
  );
}

type FieldProps1 = {
  items: OrderItem[];
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}

function Field1({ items, selectedItem, setSelectedItem}: FieldProps1) {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Field">
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#242426] text-[20px]" style={{ width: "min-content" }}>
        <p className="leading-[28px]">Select Item:</p>
      </div>
      <select
        value={selectedItem}
        onChange={e => setSelectedItem(e.target.value)}
        style={{ minWidth: "220px", height: "40px", borderRadius: "8px", border: "1px solid #d9d9d9", padding: "8px", fontSize: "16px", background: "#fff", color: "#1e1e1e" }}
      >
        <option value="">Select Item</option>
        {items.map(item => (
          <option key={item.item_id} value={item.item_id}>
            {item.item_name}
          </option>
        ))}
      </select>
    </div>
  );
}

function ReasonDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="mt-2"
      style={{ width: "220px", height: "40px", borderRadius: "8px", border: "1px solid #d9d9d9", padding: "8px", fontSize: "16px", background: "#fff", color: "#1e1e1e" }}
      data-name="ReasonDropdown"
    >
      <option value="" disabled>Select a reason...</option>
      {returnReasons.map((item, idx) => (
        <option key={idx} value={item.reason}>{item.reason}</option>
      ))}
    </select>
  );
}

type FieldProps2 = {
  reason: string;
  setReason: (value: string) => void;
  otherText: string;
  setOtherText: (value: string) => void;
}

function Field2({ reason, setReason, otherText, setOtherText }: FieldProps2) {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Field">
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242426] text-[20px] w-full">
        <p className="leading-[28px]">Reason For Return:</p>
      </div>
      <ReasonDropdown value={reason} onChange={setReason} />
      {reason === "Other" && (
        <div className="mt-2 w-full">
          <label className="block mb-1 text-[#242426] text-[16px]">Please describe your reason:</label>
          <textarea
            value={otherText}
            onChange={e => setOtherText(e.target.value)}
            placeholder="Type your reason here..."
            className="w-full min-h-[60px] p-2 border border-[#d9d9d9] rounded-[8px] text-[#242426] text-[16px]"
          />
        </div>
      )}
    </div>
  );
}

function Space({
  orderNumber,
  setOrderNumber,
  orderValid,
  setOrderValid,
  checking,
  setChecking,
  orderDetails,
  setOrderDetails,
  selectedItem,
  setSelectedItem,
  reason,
  setReason,
  otherText,
  setOtherText
}: FieldProps & FieldProps1 & FieldProps2) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Space">
      <div aria-hidden="true" className="absolute border border-[#e2e4e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[32px] relative w-full">
          <Field 
            orderNumber={orderNumber} 
            setOrderNumber={setOrderNumber} 
            orderValid={orderValid} 
            setOrderValid={setOrderValid} 
            checking={checking} 
            setChecking={setChecking}
            orderDetails={orderDetails}
            setOrderDetails={setOrderDetails}
          />
          <Field1 items={orderDetails?.items || []} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
          <Field2 reason={reason} setReason={setReason} otherText={otherText} setOtherText={setOtherText}/>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1384e100} fill="var(--fill-0, #242731)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SecondaryButton({ onSubmit }) {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 h-12 items-center justify-center pl-8 pr-6 py-0 relative rounded-[4px] shrink-0" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border border-[#bbbfc1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="capitalize flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242731] text-[16px] text-center text-nowrap">
        <button onClick={onSubmit} className="leading-[24px] whitespace-pre">Submit Return</button>
      </div>
      <Icon />
    </div>
  );
}

function Step1() {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderValid, setOrderValid] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [returnReason, setReturnReason] = useState<string>("");
  const [otherText, setOtherText] = useState<string>("");

  const handleSubmit = async () => {
    if (!orderNumber || !selectedItem || !returnReason) {
      alert("Please complete all required fields before submitting.");
      return;
    }

    const reasonText = returnReason === "Other" ? otherText : returnReason;

    const returnData = {
      order_id: orderNumber,
      item_id: selectedItem,
      return_reason: reasonText,
      return_date: new Date().toISOString().split('T')[0],
      warehouse_id: null
    };

    try {
      const response = await axios.post('http://localhost:8000/returns', returnData);
      console.log("Return submitted:", response.data);
      alert("Return submitted successfully!");
      setReturnReason("");
      setSelectedItem("");
      setOrderNumber("");
      setOrderDetails(null);
    } catch (error) {
      console.error("Error submitting return:", error);
      alert("There was an error submitting your return. Please try again.");
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full" data-name="Step 1">
      <Header />
      <Title />
      <Space 
        orderNumber={orderNumber} 
        setOrderNumber={setOrderNumber} 
        orderValid={orderValid} 
        setOrderValid={setOrderValid} 
        checking={checking} 
        setChecking={setChecking}
        orderDetails={orderDetails}
        setOrderDetails={setOrderDetails}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        reason={returnReason}
        setReason={setReturnReason}
        otherText={otherText}
        setOtherText={setOtherText}
      />
      <SecondaryButton onSubmit={handleSubmit} />
    </div>
  );
}

function Contents1({ handleSubmit }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start pb-0 pt-2 px-0 relative shrink-0 w-[1024px]" data-name="Contents">
      <Step1 handleSubmit={handleSubmit} />
    </div>
  );
}