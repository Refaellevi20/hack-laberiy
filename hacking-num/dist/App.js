import React, { useState } from 'react';
import Hack from './cmps/Hack';
var App = function () {
    var _a = useState(0), customNumber = _a[0], setCustomNumber = _a[1];
    return (React.createElement("div", { style: { padding: '20px' } },
        React.createElement("h1", null, "Password Cracker - Test Page"),
        React.createElement("div", { style: { marginBottom: '40px' } },
            React.createElement("h2", null, "Test Your Own Number"),
            React.createElement("input", { type: "number", value: customNumber === 0 ? '' : customNumber, onChange: function (e) { return setCustomNumber(Number(e.target.value)); }, style: { padding: '8px', marginRight: '10px' } }),
            React.createElement(Hack, { targetNumber: customNumber, speed: 1 })),
        React.createElement("div", { style: { display: 'grid', gap: '40px' } },
            React.createElement("div", null,
                React.createElement("h3", null, "Small Number Test (123)"),
                React.createElement(Hack, { targetNumber: 123, speed: 1 })),
            React.createElement("div", null,
                React.createElement("h3", null, "Medium Number Test (50000)"),
                React.createElement(Hack, { targetNumber: 50000, speed: 1 })),
            React.createElement("div", null,
                React.createElement("h3", null, "Large Number Test (999999)"),
                React.createElement(Hack, { targetNumber: 999999, speed: 1 })))));
};
export default App;
//# sourceMappingURL=App.js.map