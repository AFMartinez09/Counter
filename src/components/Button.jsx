import useCounter from "../hooks/useCounter";
import '../stylesheets/Button.css';

//                          Boolean     function 
 function Button() {
  const { counter, increment, decrement, reset, considerNegatives, toggleNegatives } = useCounter(0);

  return (
    <div >
      <button className="btn negative" onClick={() => toggleNegatives()}>
        Negatives Numbers: {considerNegatives ? "Yes" : "No"}
      </button>
      <h1> Count: {counter} </h1>
      <button className="btn increment" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn danger" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn decrement" onClick={() => decrement(1)}>
        -1
      </button>
      </div>
  );
}

export default Button;