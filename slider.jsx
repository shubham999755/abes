import React, { useState } from "react"

const count = () => {
    const [val, setVal] = useState(0);
    const decrement = () => setVal(val - 1);
    const increment = () => setVal(val + 1);
    const resetVal = () => setVal(0);

    return (
        <div id="counter">
            <button onClick={resetVal}>Reset</button>
            <h1>Count: {val}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default count;