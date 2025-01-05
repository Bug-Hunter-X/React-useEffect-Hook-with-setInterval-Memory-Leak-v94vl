# React useEffect Hook with setInterval Memory Leak
This example demonstrates a common mistake when using the `useEffect` hook with `setInterval` in React. The problem arises from defining the callback function inside the dependency array, which leads to the function being recreated on every render, causing memory leaks and other unpredictable behavior.

## Bug Description
The `setInterval` callback is defined within the `useEffect` dependency array. This means it will be recreated on every render, which is inefficient and might lead to memory leaks, especially if the callback contains closures over component state.  Clearing the interval in the cleanup function is not sufficient to prevent this issue. The issue lies in the fact that a new interval will be created during each render, and hence, new callbacks are created, leading to a memory leak.

## Solution
Move the callback function outside the useEffect dependency array to prevent recreating the function on every render.  This ensures that the same callback is used throughout the component's lifecycle.