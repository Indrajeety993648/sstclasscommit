import { useState } from "react";

function Effect() {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    return (
        <div className="effect">
            <button onClick={() => {setCount1(count1 + 1);}}>Count 1</button>
            <p>
                Count 1: {count1}
            </p>
            <button onClick={() => {setCount2(count2 + 1);}}>Count 2</button>
            <p>
                Count 2: {count2}
            </p>
        </div>
    );
}

export default Effect;