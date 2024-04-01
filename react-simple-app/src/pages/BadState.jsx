export const BadState = () => {
    let counter = 0;
    return (
        <>
            <h1>Hello!</h1>
            <p>Play around with the counter value!</p>
            <p>{counter}</p>
            <div>
                <button onClick={() => counter = counter - 1}>-</button>
                <button onClick={() => counter = counter + 1}>+</button>
            </div>
        </>
    )
}