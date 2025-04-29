import React, { useState } from 'react';
import Hack from './cmps/Hack';


const App: React.FC = () => {
  const [customNumber, setCustomNumber] = useState<number>(0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Password Cracker - Test Page</h1>
      
      {/* Custom input test */}
      <div style={{ marginBottom: '40px' }}>
        <h2>Test Your Own Number</h2>
        <input 
          type="number" 
          value={customNumber === 0 ? '' : customNumber}
          onChange={(e) => setCustomNumber(Number(e.target.value))}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <Hack targetNumber={customNumber} speed={1} />
      </div>

      {/* Predefined test cases */}
      <div style={{ display: 'grid', gap: '40px' }}>
        <div>
          <h3>Small Number Test (123)</h3>
          <Hack targetNumber={123} speed={1} />
        </div>

        <div>
          <h3>Medium Number Test (50000)</h3>
          <Hack targetNumber={50000} speed={1} />
        </div>

        <div>
          <h3>Large Number Test (999999)</h3>
          <Hack targetNumber={999999} speed={1} />
        </div>
      </div>
    </div>
  );
};

export default App; 