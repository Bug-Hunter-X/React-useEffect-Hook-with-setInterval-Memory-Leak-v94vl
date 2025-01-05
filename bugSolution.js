```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  const intervalCallback = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(intervalCallback, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```