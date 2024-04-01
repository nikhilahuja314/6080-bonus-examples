import { useState } from "react"

export const Moderate = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>Hello!</h1>
            <p>Play around with the counter value!</p>
            <p>{counter}</p>
            <div>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </>
    )
}