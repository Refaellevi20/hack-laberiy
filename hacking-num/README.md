# Hacking Number Animation

A React component that creates a "hacking" effect by randomly changing numbers until reaching the target value.

## Installation 

npm install hacking-num


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

<Hack value={1234} />


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


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)