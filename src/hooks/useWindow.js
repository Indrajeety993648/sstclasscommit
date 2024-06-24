import { useEffect, useState } from "react";

function useWindowSize() {
    function currentDimensions() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    let [winSize, setWinSize] = useState(currentDimensions());

    useEffect(() => {
        function updateDimensions() {
            setWinSize(currentDimensions);
        }

        window.addEventListener("resize", () => {
            updateDimensions();
        });

        return () => {
            window.removeEventListener("resize", updateDimensions);
        }
    }, []);

    return winSize;
}

export default useWindowSize;