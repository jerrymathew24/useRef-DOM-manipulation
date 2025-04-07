import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {

  const inputRef = useRef()

  const onFocusClick = () => {
    inputRef.current.focus()
  }

  return (
    <>
    <input ref={inputRef} type="text" placeholder="Enter your name" />
    <button onClick={onFocusClick}>Click to Focus</button>
    </>
  );
}

export default App;

// here we are using useRef to get the input element and then using the focus method to focus on it when the button is clicked.
// useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
// The useRef hook is useful for accessing DOM elements directly, without needing to use state or props. It can also be used to store any mutable value that you want to persist across renders, similar to instance fields in class components.
// In this example, we are using useRef to create a reference to the input element. When the button is clicked, we call the focus method on the input element to set focus on it. This is a common use case for useRef, as it allows us to interact with the DOM directly without needing to use state or props.
// The useRef hook is a powerful tool in React that allows you to create a mutable reference to a DOM element or a value that persists across renders. It is commonly used for accessing and manipulating DOM elements directly, as well as for storing values that do not require re-rendering the component when they change.

