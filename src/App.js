import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Support } from './components';
import { PageContent } from './modules';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="page-container">
            <Support />
            <PageContent />
        </div>
      </Router>
    </div>
  );
}

export default App;
