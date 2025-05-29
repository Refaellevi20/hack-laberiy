# 🔐 Hacking Number Animation

A React component that simulates a "hacking" animation by rapidly cycling through numbers until displaying the final target value. Perfect for creating engaging password cracking animations or number reveal effects.

![NPM Version](https://img.shields.io/npm/v/hacking-password)
![License](https://img.shields.io/npm/l/hacking-password)

## ✨ Features

* 🎯 Smooth number cycling animation
* 💫 Matrix-style hacking effect
* 🎨 Customizable speed and formatting
* 🖥️ Terminal-like interface
* ⚡ Lightweight and easy to use

## 📦 Installation

```bash
npm install hacking-password
```

## 🚀 Usage

### Basic Example

```tsx
import { Hack } from 'hacking-password';

function App() {
  return (
    <Hack
      value={1234}
      duration={2000}
      steps={30}
    />
  );
}
```

### With Format String

```tsx
<Hack
  value={1234}
  format="####"
/>
```

### Custom Duration and Steps

```tsx
<Hack
  value={1234}
  duration={5000}
  steps={50}
/>
```

## 🧰 Props

| Prop       | Type   | Default | Description                                              |
| ---------- | ------ | ------- | -------------------------------------------------------- |
| `value`    | number | —       | **Required.** The final number to display.               |
| `duration` | number | 2000    | Duration of the animation in milliseconds.               |
| `steps`    | number | 30      | Number of random values shown during animation.          |
| `format`   | string | —       | Optional format string (e.g., `####` for leading zeros). |

## 💡 Advanced Example: Login with Hacking Animation

```tsx
import { useState } from 'react';
import { Hack } from 'hacking-password';

function LoginForm() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isHacking, setIsHacking] = useState(false);
  const [targetPassword, setTargetPassword] = useState(null);

  const users = [{ username: 'demo', password: '1234' }];

  const handleHackAttempt = () => {
    const user = users.find(u => u.username === credentials.username);
    if (!user) {
      alert('User not found');
      return;
    }

    setIsHacking(true);
    setTargetPassword(user.password);
  };

  return (
    <div className="login-form">
      <input
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
      />
      <button
        type="button"
        onClick={handleHackAttempt}
        disabled={!credentials.username || isHacking}
      >
        Hack Password
      </button>

      {isHacking && targetPassword && (
        <div className="hack-attempt">
          <Hack
            value={parseInt(targetPassword)}
            steps={40}
            duration={3000}
            onComplete={() => {
              setCredentials(prev => ({ ...prev, password: targetPassword }));
              setIsHacking(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
```

## 🎓 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

## ✉️ License

MIT

