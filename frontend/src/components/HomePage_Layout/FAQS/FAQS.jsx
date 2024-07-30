import './FAQS.css';
import React, { useState } from 'react';
import { icons, FAQs } from '../../../assets/assets';

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='FAQs-wrapper'>
      <div className="section-info">
        <h1>FAQs</h1>
      </div>
      <div className="question-box-wrapper">
        {FAQs.map((item, index) => (
          <div className="FAQs-box" key={index}>
            <div className="FAQs-question-box" onClick={() => toggleOpen(index)}>
              <h1>{item.question}</h1>
              <button className="icon">{openIndex === index ? <icons.arrowUp /> : <icons.arrowDown />}</button>
            </div>
            <p className={openIndex === index ? "FAQs-answer" : "FAQs-answer hide"}>{item.ans}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
