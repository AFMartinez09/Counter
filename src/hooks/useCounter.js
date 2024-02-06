import { useState } from "react"

function useCounter(firstValue = 0, considerNegatives = true) {
    const [counter, setCounter] = useState(firstValue);
    const [considerNegativesOption, setConsiderNegativesOption] = useState(considerNegatives);
  
    const increment = (value = 1) => {
      setCounter(counter + value);
    };
  
    const decrement = (value = 1) => {
      if (!considerNegativesOption && counter - value < 0) {
        setCounter(0);
        return;
      }
      setCounter(counter - value);
    };
  
    const reset = () => {
      setCounter(0);
    };
  
    const toggleNegatives = () => {
      setConsiderNegativesOption(!considerNegativesOption);
    };
  
    return {
      counter,
      increment,
      decrement,
      reset,
      considerNegatives: considerNegativesOption,
      toggleNegatives,
    };
}

export default useCounter