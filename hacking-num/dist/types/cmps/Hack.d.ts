import React from 'react';
interface HackProps {
    targetNumber: number;
    speed?: number;
    onComplete?: (success: boolean) => void;
}
declare const Hack: React.FC<HackProps>;
export default Hack;
