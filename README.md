# React useEffect Memory Leak with setInterval

This repository demonstrates a common mistake when using the `useEffect` hook in React with `setInterval`.  The issue is that the `setInterval` function keeps running indefinitely, even after the component unmounts. This leads to a memory leak because the interval ID is not properly cleared.

## Bug
The bug is located in `bug.js`. The component uses `setInterval` to update a counter every second.  However, the interval ID is not returned from the `useEffect` cleanup function, causing the interval to continue even after the component is unmounted.

## Solution
The solution is provided in `bugSolution.js`.