import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>cPanel + Github workflow</h1>
            <p>A small update to test</p>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </>
    );
}

export default App;
