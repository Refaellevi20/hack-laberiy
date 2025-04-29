import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface HackProps {
  targetNumber: number;
  speed?: number;
  onComplete?: (success: boolean) => void;
}

const HackerContainer = styled.div`
  background-color: #000;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  padding: 20px;
  min-height: 150px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ff00, transparent);
    animation: scan 2s linear infinite;
  }

  .number-display {
    font-size: 16px;
    margin-bottom: 15px;
    text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
    
    &::before {
      content: '> ';
      color: #00ff00;
    }
  }

  .current-number {
    color: #ff3333;
    font-weight: bold;
    font-size: 20px;
    margin-top: 8px;
    text-shadow: 0 0 8px rgba(255, 0, 0, 0.5);
    font-family: 'Courier New', monospace;
  }

  .processing {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 14px;
    opacity: 0.8;

    span {
      display: inline-block;
    }

    .dots {
      position: relative;
      width: 20px;
      height: 20px;
      
      &::after {
        content: '...';
        position: absolute;
        left: 0;
        animation: loading 1.5s steps(4, end) infinite;
      }
    }
  }

  .success-message {
    color: #00ff00;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-top: 15px;
    padding: 10px;
    border: 1px solid #00ff00;
    background-color: rgba(0, 255, 0, 0.1);
    animation: blink 1s infinite;
    text-shadow: 0 0 5px #00ff00;
    position: relative;

    &::before,
    &::after {
      content: 'PASSWORD FOUND';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &::before {
      color: #0ff;
      animation: glitch 3s infinite;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    }

    &::after {
      color: #f0f;
      animation: glitch 2s infinite;
      clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    }
  }

   .temp-message {
    color: #00ff00;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
    opacity: 0;
    animation: fadeInOut 3s forwards;
  }


  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes loading {
    0% { content: ''; }
    25% { content: '.'; }
    50% { content: '..'; }
    75% { content: '...'; }
    100% { content: ''; }
  }

  @keyframes scan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
  }

   
  @keyframes fadeInOut {
    0% { opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

const Hack: React.FC<HackProps> = ({ targetNumber, speed = 1, onComplete }) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [found, setFound] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);


  useEffect(() => {
    if (targetNumber <= 0) {
      console.error('Target number must be positive');
      return;
    }

    setIsProcessing(true);
    setFound(false); 
    
    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        if (prev === targetNumber) {
          // Move state updates to a separate useEffect
          return prev;
        }
        const step = Math.max(1, Math.floor((targetNumber - prev) / 100));
        return prev + step;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [targetNumber, speed]);

  useEffect(() => {
    if (currentNumber === targetNumber) {
      setFound(true);
      setIsProcessing(false);
      onComplete?.(true);
      setFound(true); 
    }
  }, [currentNumber, targetNumber, onComplete]);

  const formatNumber = (num: number): string => {
    return num.toString().length >= 8 
      ? num.toString() 
      : '0'.repeat(8 - num.toString().length) + num.toString();
  };

  return (
    <HackerContainer>
      <div className="number-display">
        Attempting to crack password...
        <div className="current-number">
          Testing: {formatNumber(currentNumber)}
        </div>
      </div>

      {isProcessing && (
        <div className="processing">
          <span>Processing</span>
          <span className="dots">...</span>
        </div>
      )}
      {found && (
        <div className="success-message">
          PASSWORD FOUND: {formatNumber(targetNumber)}
        </div>
      )}

{found && ( 
        <>
          <div className="success-message">
            PASSWORD FOUND: {formatNumber(targetNumber)}
          </div>
          <div className="temp-message">
            Password successfully cracked! Auto-filling...
          </div>
        </>
      )}
    </HackerContainer>
  );
};

export default Hack;