import React from "react";
import "./index.css"

const App = () => {
  return(
    <div>
      <h2>This is a test component</h2>
    </div>
  )
}

export default App;


















// import "./index.css";
// import { useEffect, useState } from "react";

{/*
  React components follow pascal case where component
  name looks like "ComponentName".

  Types of Components in React ->

  1.Functional Component : Functional component in react
  is the most famous and flexible way of creating a component.

  2.Class Component : Class Components in react are less flexible in react
  compared to the functional component so we avoid class components.

  React Props : 

    In any web application you cannot or won't be 
    displaying same data in multiple items you will be displaying
    same component with different data and this is where
    the concept of props comes in :

      -> we pass some values to the component we are going
      to display and destructure the values in the arguments section
      of the functional component and use them in the component.
  
  State in React : 

    state in react is how a property is behaving based on an event
    state modifies the existing value of any property using state

    Ex := const [stateVariable, setterMethod] = useState(initialValue);
     -> setter method here is used to set the new value of state variable
     setterMethod(newStateValue) => console.log(stateVariable) output = newStateValue

  useEffect in react :
    -> useEffect in react is used track changes and run side effects when components are rendered on the webpage
    and there are three types if side-effect renders in useEffect ->
    -> UseEffect takes two arguments : the side effect code and the optional
    dependency array to control the when the side-effect code should be run
    
    No dependency : This is not recommended because it renders the side-effects multiple times.
    Empty dependency : This is rendered only single time on mount.
    With Dependecy : This is rendered only if there is any change made to the dependencies inside the dependency array.
    
*/}

// Check out the Below practical Example of React


// const SampleCard = ({ title }) => {
//   const [count, setCount] = useState(0);
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     console.log(`${title} is ${liked? 'Liked' : 'Disliked'}`)
//   }, [liked]);

//   return(
//     <div className="card" onClick={() => {setCount(count+1)}}>
//       {title}
//       <button onClick={() => {
//         setLiked(!liked);
//       }}>
//         {!liked ? '🤍' : '❤️'}
//       </button>
      
//       <p>{count || null}</p>
//     </div>
//   )
// }


// const App = () => {
//  return(
//   <div className="card-container">
//     {/* <h2>This is a arrow function app</h2> */}
//     <SampleCard title="Bahubali"/>
//     <SampleCard title="Interstellar"/>
//     <SampleCard title="Blue Lock"/>
//     <SampleCard title="One Piece"/>
//   </div>
  
//  )
// }

// export default App
