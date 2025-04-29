var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
var HackerContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #000;\n  color: #00ff00;\n  font-family: 'Courier New', monospace;\n  padding: 20px;\n  min-height: 150px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 2px;\n    background: linear-gradient(90deg, transparent, #00ff00, transparent);\n    animation: scan 2s linear infinite;\n  }\n\n  .number-display {\n    font-size: 16px;\n    margin-bottom: 15px;\n    text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);\n    \n    &::before {\n      content: '> ';\n      color: #00ff00;\n    }\n  }\n\n  .current-number {\n    color: #ff3333;\n    font-weight: bold;\n    font-size: 20px;\n    margin-top: 8px;\n    text-shadow: 0 0 8px rgba(255, 0, 0, 0.5);\n    font-family: 'Courier New', monospace;\n  }\n\n  .processing {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    font-size: 14px;\n    opacity: 0.8;\n\n    span {\n      display: inline-block;\n    }\n\n    .dots {\n      position: relative;\n      width: 20px;\n      height: 20px;\n      \n      &::after {\n        content: '...';\n        position: absolute;\n        left: 0;\n        animation: loading 1.5s steps(4, end) infinite;\n      }\n    }\n  }\n\n  .success-message {\n    color: #00ff00;\n    font-size: 18px;\n    font-weight: bold;\n    text-align: center;\n    margin-top: 15px;\n    padding: 10px;\n    border: 1px solid #00ff00;\n    background-color: rgba(0, 255, 0, 0.1);\n    animation: blink 1s infinite;\n    text-shadow: 0 0 5px #00ff00;\n    position: relative;\n\n    &::before,\n    &::after {\n      content: 'PASSWORD FOUND';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    &::before {\n      color: #0ff;\n      animation: glitch 3s infinite;\n      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);\n    }\n\n    &::after {\n      color: #f0f;\n      animation: glitch 2s infinite;\n      clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);\n    }\n  }\n\n   .temp-message {\n    color: #00ff00;\n    font-size: 14px;\n    text-align: center;\n    margin-top: 10px;\n    opacity: 0;\n    animation: fadeInOut 3s forwards;\n  }\n\n\n  @keyframes blink {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0.5; }\n  }\n\n  @keyframes loading {\n    0% { content: ''; }\n    25% { content: '.'; }\n    50% { content: '..'; }\n    75% { content: '...'; }\n    100% { content: ''; }\n  }\n\n  @keyframes scan {\n    0% { transform: translateX(-100%); }\n    100% { transform: translateX(100%); }\n  }\n\n  @keyframes glitch {\n    0% { transform: translate(0); }\n    20% { transform: translate(-2px, 2px); }\n    40% { transform: translate(-2px, -2px); }\n    60% { transform: translate(2px, 2px); }\n    80% { transform: translate(2px, -2px); }\n    100% { transform: translate(0); }\n  }\n\n   \n  @keyframes fadeInOut {\n    0% { opacity: 0; }\n    10% { opacity: 1; }\n    90% { opacity: 1; }\n    100% { opacity: 0; }\n  }\n"], ["\n  background-color: #000;\n  color: #00ff00;\n  font-family: 'Courier New', monospace;\n  padding: 20px;\n  min-height: 150px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 2px;\n    background: linear-gradient(90deg, transparent, #00ff00, transparent);\n    animation: scan 2s linear infinite;\n  }\n\n  .number-display {\n    font-size: 16px;\n    margin-bottom: 15px;\n    text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);\n    \n    &::before {\n      content: '> ';\n      color: #00ff00;\n    }\n  }\n\n  .current-number {\n    color: #ff3333;\n    font-weight: bold;\n    font-size: 20px;\n    margin-top: 8px;\n    text-shadow: 0 0 8px rgba(255, 0, 0, 0.5);\n    font-family: 'Courier New', monospace;\n  }\n\n  .processing {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    font-size: 14px;\n    opacity: 0.8;\n\n    span {\n      display: inline-block;\n    }\n\n    .dots {\n      position: relative;\n      width: 20px;\n      height: 20px;\n      \n      &::after {\n        content: '...';\n        position: absolute;\n        left: 0;\n        animation: loading 1.5s steps(4, end) infinite;\n      }\n    }\n  }\n\n  .success-message {\n    color: #00ff00;\n    font-size: 18px;\n    font-weight: bold;\n    text-align: center;\n    margin-top: 15px;\n    padding: 10px;\n    border: 1px solid #00ff00;\n    background-color: rgba(0, 255, 0, 0.1);\n    animation: blink 1s infinite;\n    text-shadow: 0 0 5px #00ff00;\n    position: relative;\n\n    &::before,\n    &::after {\n      content: 'PASSWORD FOUND';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    &::before {\n      color: #0ff;\n      animation: glitch 3s infinite;\n      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);\n    }\n\n    &::after {\n      color: #f0f;\n      animation: glitch 2s infinite;\n      clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);\n    }\n  }\n\n   .temp-message {\n    color: #00ff00;\n    font-size: 14px;\n    text-align: center;\n    margin-top: 10px;\n    opacity: 0;\n    animation: fadeInOut 3s forwards;\n  }\n\n\n  @keyframes blink {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0.5; }\n  }\n\n  @keyframes loading {\n    0% { content: ''; }\n    25% { content: '.'; }\n    50% { content: '..'; }\n    75% { content: '...'; }\n    100% { content: ''; }\n  }\n\n  @keyframes scan {\n    0% { transform: translateX(-100%); }\n    100% { transform: translateX(100%); }\n  }\n\n  @keyframes glitch {\n    0% { transform: translate(0); }\n    20% { transform: translate(-2px, 2px); }\n    40% { transform: translate(-2px, -2px); }\n    60% { transform: translate(2px, 2px); }\n    80% { transform: translate(2px, -2px); }\n    100% { transform: translate(0); }\n  }\n\n   \n  @keyframes fadeInOut {\n    0% { opacity: 0; }\n    10% { opacity: 1; }\n    90% { opacity: 1; }\n    100% { opacity: 0; }\n  }\n"])));
var Hack = function (_a) {
    var targetNumber = _a.targetNumber, _b = _a.speed, speed = _b === void 0 ? 1 : _b, onComplete = _a.onComplete;
    var _c = useState(0), currentNumber = _c[0], setCurrentNumber = _c[1];
    var _d = useState(false), found = _d[0], setFound = _d[1];
    var _e = useState(false), isProcessing = _e[0], setIsProcessing = _e[1];
    useEffect(function () {
        if (targetNumber <= 0) {
            console.error('Target number must be positive');
            return;
        }
        setIsProcessing(true);
        setFound(false);
        var interval = setInterval(function () {
            setCurrentNumber(function (prev) {
                if (prev === targetNumber) {
                    // Move state updates to a separate useEffect
                    return prev;
                }
                var step = Math.max(1, Math.floor((targetNumber - prev) / 100));
                return prev + step;
            });
        }, speed);
        return function () { return clearInterval(interval); };
    }, [targetNumber, speed]);
    useEffect(function () {
        if (currentNumber === targetNumber) {
            setFound(true);
            setIsProcessing(false);
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(true);
            setFound(true);
        }
    }, [currentNumber, targetNumber, onComplete]);
    var formatNumber = function (num) {
        return num.toString().length >= 8
            ? num.toString()
            : '0'.repeat(8 - num.toString().length) + num.toString();
    };
    return (React.createElement(HackerContainer, null,
        React.createElement("div", { className: "number-display" },
            "Attempting to crack password...",
            React.createElement("div", { className: "current-number" },
                "Testing: ",
                formatNumber(currentNumber))),
        isProcessing && (React.createElement("div", { className: "processing" },
            React.createElement("span", null, "Processing"),
            React.createElement("span", { className: "dots" }, "..."))),
        found && (React.createElement("div", { className: "success-message" },
            "PASSWORD FOUND: ",
            formatNumber(targetNumber))),
        found && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "success-message" },
                "PASSWORD FOUND: ",
                formatNumber(targetNumber)),
            React.createElement("div", { className: "temp-message" }, "Password successfully cracked! Auto-filling...")))));
};
export default Hack;
var templateObject_1;
//# sourceMappingURL=Hack.js.map