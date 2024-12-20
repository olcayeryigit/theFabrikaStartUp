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
          className="active-indicator "
          style={{ transform: `translateX(${activeTab * 100}%)` }}
        />
        <div className="tab font-semibold" onClick={() => handleClick(0)}>
          Tab 1
        </div>
        <div className="tab font-semibold" onClick={() => handleClick(1)}>
          Tab 2
        </div>
        <div className="tab font-semibold" onClick={() => handleClick(2)}>
          Tab 3
        </div>
      </div>
    </div>
  );
}

export default App;
