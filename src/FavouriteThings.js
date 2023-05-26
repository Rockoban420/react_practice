import { useState } from "react";
// Hooks are a way to add state to a functional component
// Hooks always start with the word "use"
// useState is a function that returns an array with 2 elements
// it takes 1 argument, which is the default value of the state
// the first element is the value we pass into useState
// the second element is a function that we can use to update the first element


// In react, If we want UI to update or "re-render"
// we need to change the "state" of the component


const FavouriteThings = (props) => {
    // props can only be passed down, they dont travel up
    const [ count, setCount ] = useState(0);

    return (
        <div>
            <h1>Hello {props.name.toUpperCase()}</h1>
            <p> {count} </p>
            <button
            onClick={()=>{
                setCount(count + 1);
            }}
            > 
                Increment 
            </button>

            <button
            onClick={()=>{
                if (count > 0) {
                setCount(count - 1);
                } else {
                    alert('Cannot go below 0');
                }
            }
            }
            >
                Decrement
            </button>

        </div>
        );
}

export default FavouriteThings;