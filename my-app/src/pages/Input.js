import React, {useState} from "react";

const Counter = () => {
    const[txtVlaue, setTextValue] = useState("");

    const onChange = (e) => {
        setTextValue(e.target.value)
    };

    return(
        <div>
            <input type="text" value={txtVlaue} onChange={onChange} />
            <br/>
            <p>{txtVlaue}</p>
        </div>
    )
}
export default Counter;