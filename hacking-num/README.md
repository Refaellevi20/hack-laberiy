# Hacking Number Animation

A React component that creates a "hacking" effect by randomly changing numbers until reaching the target value.

## Installation 

npm install hacking-password


## Usage

jsx

function App() {
    return (
        <Hack
value= { 1234} // The final number to display
    duration = { 2000} // Duration of the animation in milliseconds (default: 2000)
    steps = { 30} // Number of random numbers to show (default: 30)
    format = "####" // Format string (optional)
        />
);
}


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | number | required | The final number to display |
| `duration` | number | 2000 | Duration of the animation in milliseconds |
| `steps` | number | 30 | Number of random numbers to show during animation |
| `format` | string | undefined | Format string for the number (e.g., "####" for 4 digits) |

## Examples

### Basic Usage

jsx

import { Hack } from 'hacking-password';
function App() {
return <Hack value={1234} duration={2000} steps={30} />;
}


### Custom Duration and Steps

jsx

    < Hack
     value = { 1234}
     duration = { 5000} // 5 seconds
     steps = { 50} // Show 50 random numbers
    />

    
### With Format String

jsx

<Hack
value={1234}
format="####" // Will ensure 4 digits are shown
/>


## Advanced Example: Login Form with Password Hacking Animation

Here's a complete example showing how to implement a login form with a password hacking animation:



jsx

import { useState } from 'react';
import { Hack } from 'hacking-password';

function LoginForm() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [isHacking, setIsHacking] = useState(false);
    const [targetPassword, setTargetPassword] = useState(null);

    // Mock users array for demonstration
    const users = [
        { username: 'demo', password: '1234' }
    ];
    const handleHackAttempt = async () => {
        if (!credentials.username) {
            showErrorMsg('Please enter a username first');
            return;
        }
        // Find user in database
        const user = users.find(u => u.username === credentials.username);
        if (!user) {
            showErrorMsg('User not found');
            return;
        }
        setIsHacking(true);
        setTargetPassword(user.password);
    };


    return (
        <div className= "login-form" >
        <input
           type="text"
           placeholder = "Username"
           value = { credentials.username }
           onChange = {(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))
             }
         />
    < button
       type = "button"
       className = "hack-button"
       onClick = { handleHackAttempt }
       disabled = {!credentials.username || isHacking}
>
    Hack Password
        </button>
{
    isHacking && targetPassword && (
        <div className="hack-attempt" >
            <Hack
targetNumber={ parseInt(targetPassword) }
    speed = { 1}
    onComplete = {(found) => {
        if (found) {
            setCredentials(prev => ({ ...prev, password: targetPassword }));
            setIsHacking(false);
        }
    }
}
/>
    </div>
)}
</div>
);
}


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)