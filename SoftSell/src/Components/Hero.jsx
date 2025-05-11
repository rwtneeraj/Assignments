import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faGraduationCap,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";

const Hero = () => {
  const contactRef = useRef(null);
  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-section w-full">
      <div className="heading-section w-full flex flex-col justify-center items-center gap-5 bg-gray-200 p-20">
        <h1>Turn Unused Software Licenses into Cash</h1>
        <h3>
          Sell your unused software licenses easily and securely, and get paid
          fast.
        </h3>
        <div className="btn-section mt-10">
          <button
            onClick={handleScrollToContact}
            className="cta-btn text-white bg-linear-to-t from-sky-500 to-indigo-500 w-50 h-16 rounded-full cursor-pointer "
          >
            Sell My License
          </button>
        </div>
      </div>

      <div className="work-section bg-cyan-950 w-full h-130 flex flex-col text-white items-center p-10 gap-2.5">
        <h2 className="text-4xl">How It Works</h2>
        <h4>
          A simple three-step process to get the most value from your software
          licenses.
        </h4>
        <div className="step-section flex gap-3 justify-around w-full mt-20">
          <div className="upload-license flex flex-col gap-4 items-center">
            <div className="icon w-30 h-30 rounded-full border-4 flex justify-center items-center text-6xl">
              <FontAwesomeIcon icon={faUpload} />
            </div>
            <p className="text-2xl">Upload License</p>
            <p>Submit your license details through our form.</p>
          </div>
          <div className="get-valuation flex flex-col gap-4 items-center">
            <div className="icon w-30 h-30 rounded-full  border-4 flex justify-center items-center text-6xl">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <p className="text-2xl">Get Valuation</p>
            <p>We'll analyze and tell you how much it's worth.</p>
          </div>
          <div className="get-paid flex flex-col gap-4 items-center">
            <div className="icon w-30 h-30 rounded-full gap-4 border-4 flex justify-center items-center text-6xl">
              <FontAwesomeIcon icon={faMoneyBillTrendUp} />
            </div>
            <p className="text-2xl">Get Paid</p>
            <p>Accept the offer and receive your payment.</p>
          </div>
        </div>
      </div>

      <div className="choose-section">
        <h2 className="text-center text-4xl mt-10">Why Choose us</h2>
        <div className="choose-us-section h-120 p-20 flex justify-between">
          <div className="points w-100 p-10 flex items-center flex-col gap-4 bg-linear-to-t from-sky-500 to-indigo-500 rounded-4xl">
            <div className="icon text-7xl">🕒</div>
            <h3>Fast & Easy Process</h3>
            <p>
              Sell your unused software licenses in just a few clicks — no
              complicated steps or waiting periods.
            </p>
          </div>
          <div className="points w-100 flex items-center flex-col p-10 gap-4 bg-linear-to-t from-sky-500 to-indigo-500 rounded-4xl">
            <div className="icon text-7xl">💰</div>
            <h3>Fair Market Valuation</h3>
            <p>
              Our smart evaluation tool gives you real-time, competitive quotes
              based on current market demand.
            </p>
          </div>
          <div className="points w-100 flex p-10 items-center flex-col gap-4 bg-linear-to-t from-sky-500 to-indigo-500 rounded-4xl">
            <div className="icon text-7xl">🔒</div>
            <h3>Secure Transactions</h3>
            <p>
              Your license data is safe with us — encrypted submissions and
              verified buyers only.
            </p>
          </div>
          <div className="points w-100 p-10 flex items-center flex-col gap-4 bg-linear-to-t from-sky-500 to-indigo-500 rounded-4xl">
            <div className="icon text-7xl">🤝</div>
            <h3>Trusted by Professionals</h3>
            <p>
              We work with hundreds of IT teams and businesses to recover value
              from unused software.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-center text-4xl">Customer Testinomials</h2>
      <div className="customer-testinomials mh-60 w-full p-20 flex  justify-evenly">
        <div className="testinomials w-120 rounded-2xl  h-70 p-17 gap-2 flex flex-col justify-center items-center shadow-xl/30">
          <p>
            SoftSell made it incredibly easy to turn our unused software into
            cash. The process was smooth, fast, and surprisingly simple.
          </p>
          <h2>Priya Mehta</h2>
          <p>IT Manager, NexaTech Solutions</p>
        </div>
        <div className="testinomials w-120 rounded-2xl h-70 p-17 gap-2 flex flex-col justify-center items-center shadow-xl/30">
          <p>
            I had old licenses sitting unused for months. SoftSell evaluated and
            bought them within days. Highly recommended for any business
          </p>
          <h2>David Chen</h2>
          <p>Operations Lead, ByteBridge Inc.</p>
        </div>
      </div>
      <Form contactRef={contactRef}/>

    </div>
  );
};

export default Hero;
