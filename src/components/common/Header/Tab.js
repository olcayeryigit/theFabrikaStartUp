import React, { useState } from 'react';
import './Tab.scss';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="menu">
        <div
          className="active-indicator"
          style={{ transform: `translateX(${activeTab * 100}%)` }}
        />
        {['About', 'Resources', 'Products', 'Contact'].map((tab, index) => (
          <div
            key={index}
            className={`tab font-semibold ${activeTab === index ? 'active-tab' : ''}`}
            onClick={() => handleClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
