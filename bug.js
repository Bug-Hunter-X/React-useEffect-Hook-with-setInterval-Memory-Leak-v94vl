```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here: the callback is defined inside the useEffect dependency array,
    // so it will be recreated on every render. This can lead to memory leaks and unexpected behavior
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array: effect runs only once after the component mounts

  return <div>Count: {count}</div>;
}
```