import { useState } from "react";
import Button from "./Button";

function App() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <>
            <h1>cPanel + Github workflow</h1>
            <p>A small update to test</p>
            <Button
                handleClick={handleClick}
                count={count}
            />
        </>
    );
}

export default App;
