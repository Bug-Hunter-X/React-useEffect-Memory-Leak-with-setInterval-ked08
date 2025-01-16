```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a function declaration here
    const intervalId = setInterval(updateCount, 1000); //This will cause a memory leak

    return () => clearInterval(intervalId);
  }, []);

  function updateCount() {
    setCount(prevCount => prevCount + 1);
  }

  return <div>Count: {count}</div>;
}
```