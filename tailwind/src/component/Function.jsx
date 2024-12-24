import { useCallback, useEffect } from "react";

function Function() {
    const funTwo = useCallback(() => {
        console.log("Function Rendered");
    }, []); // Memoized function

    useEffect(() => {
        funTwo(); // Will run once on the first render
    }, [funTwo]); // funTwo is stable, so it runs once during the initial render

    return (
        <>
            <h1>This is a function</h1>
        </>
    );
}

export default Function;
