import "./index.css";
import { useState } from "react";

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
    useEffect in react is used track changes when components are rendered on the screen    

*/}



const SampleCard = ({ title }) => {
  const [liked, setLiked] = useState(false);
  return(
    <div className="card">
      {title}
      <button onClick={() => {
        setLiked(!liked);
      }}>Like</button>
      {!liked ? '🤍' : '❤️'}
    </div>
  )
}


const App = () => {
 return(
  <div className="card-container">
    {/* <h2>This is a arrow function app</h2> */}
    <SampleCard title="Bahubali"/>
    <SampleCard title="Interstellar"/>
    <SampleCard title="Blue Lock"/>
    <SampleCard title="One Piece"/>
  </div>
  
 )
}

export default App
