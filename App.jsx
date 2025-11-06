// client/src/App.jsx
import React, { useState } from 'react';
import WeatherModule from './components/WeatherModule';
import CurrencyConverter from './components/CurrencyConverter';
import QuoteGenerator from './components/QuoteGenerator';

function App() {
  const [activeTab, setActiveTab] = useState('Weather'); // Default tab

  const renderModule = () => {
    if (activeTab === 'Weather') return <WeatherModule />;
    if (activeTab === 'Converter') return <CurrencyConverter />;
    if (activeTab === 'Quotes') return <QuoteGenerator />;
    return null;
  };

  return (
    <div className="app-container">
      <h1>InfoHub</h1>
      {/* Tab/Button Navigation */}
      <nav>
        {['Weather', 'Converter', 'Quotes'].map(tab => (
          <button 
            key={tab} 
            // Use basic styling to highlight the active tab
            style={{ fontWeight: activeTab === tab ? 'bold' : 'normal' }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      {/* Content Area - Only one module rendered at a time */}
      <div className="module-content">
        {renderModule()}
      </div>
    </div>
  );
}

export default App;