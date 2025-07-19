import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(10);

    function handleClick() {
        if (count > 0) {
            setCount(count-1);
        }
    }
    return (
        <div style={{textAlign: "center", padding: 20}}>
            <p>Count: {count >= 0 ? count : 0}</p>
            <p>Tình trạng: {count > 0 ? 'Còn hàng' : 'Hết hàng'}</p>
            <button onClick={handleClick}>Click here</button>
        </div>
    )
}

export default Counter;