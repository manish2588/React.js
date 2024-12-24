import { useState } from "react";
import Function from "./Function";

function UseCallBack() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
            <Function />
        </>
    );
}

export default UseCallBack;
