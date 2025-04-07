// import logo from './logo.svg';
// import './App.css';
// import { useRef } from 'react';

// function App() {

//   const inputRef = useRef()

//   const onFocusClick = () => {
//     inputRef.current.focus()
//   }

//   return (
//     <>
//     <input ref={inputRef} type="text" placeholder="Enter your name" />
//     <button onClick={onFocusClick}>Click to Focus</button>
//     </>
//   );
// }

// export default App;

// here we are using useRef to get the input element and then using the focus method to focus on it when the button is clicked.
// useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
// The useRef hook is useful for accessing DOM elements directly, without needing to use state or props. It can also be used to store any mutable value that you want to persist across renders, similar to instance fields in class components.
// In this example, we are using useRef to create a reference to the input element. When the button is clicked, we call the focus method on the input element to set focus on it. This is a common use case for useRef, as it allows us to interact with the DOM directly without needing to use state or props.
// The useRef hook is a powerful tool in React that allows you to create a mutable reference to a DOM element or a value that persists across renders. It is commonly used for accessing and manipulating DOM elements directly, as well as for storing values that do not require re-rendering the component when they change.

//write about above code in 15 words
// The code uses useRef to focus an input element when a button is clicked in React.


import './App.css';
import { useRef,forwardRef } from 'react';


const MyButton = forwardRef((props,ref)=>{
  return(
    <input ref={ref} placeholder={props.placeholder} />
  )
})


function App() {

  const inputRef = useRef()

  const onFocusClick = () => {
    inputRef.current.focus()
  }


  return(
    <>
      <MyButton ref={inputRef} placeholder='search something here' />
      <button onClick={onFocusClick}>Click to Focus</button>
     </>
  )
}
export default App;

//here we are using forwardRef to pass the ref from the parent component (App) to the child component (MyButton). This allows us to access the input element in the child component from the parent component.
// The forwardRef function is a higher-order component that allows you to pass a ref from a parent component to a child component. This is useful when you want to access a DOM element or a class component instance in the child component from the parent component.
// In this example, we are using forwardRef to create a MyButton component that accepts a ref and a placeholder prop. The ref is passed to the input element in the child component, allowing us to access it from the parent component (App). When the button is clicked, we call the focus method on the input element to set focus on it. This is a common use case for forwardRef, as it allows us to pass refs down to child components and access them from the parent component.
// The forwardRef function is a powerful tool in React that allows you to pass refs down to child components, enabling you to access DOM elements or class component instances from the parent component. It is commonly used in scenarios where you need to access a ref in a child component from the parent component, such as when creating reusable components or when you want to encapsulate logic in a child component while still allowing the parent component to access its refs.