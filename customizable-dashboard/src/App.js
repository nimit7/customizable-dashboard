import React, { useState } from 'react';
import './App.css';
import DashboardStudio from './DashboardStudio';
import PlotlyViewer from './PlotlyViewer';
import PlotlyViewerVanilla from './PlotlyViewerVanilla';

function App() {
  // State to toggle between PlotlyViewer and PlotlyViewerVanilla
  const [showVanilla, setShowVanilla] = useState(false);

  // Function to toggle between the components
  const handleSwitch = () => {
    setShowVanilla(!showVanilla);
  };

  return (
    <div className="App">
      <DashboardStudio />
      <PlotlyViewer />
      {/* <button onClick={handleSwitch}>
        {showVanilla ? 'Switch to PlotlyViewer' : 'Switch to PlotlyViewerVanilla'}
      </button> */}
      {/* {!showVanilla && <PlotlyViewerVanilla />} */}
      {/* {showVanilla && <PlotlyViewer />} */}
    </div>
  );
}

export default App;

