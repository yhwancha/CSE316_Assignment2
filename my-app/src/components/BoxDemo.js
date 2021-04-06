import React, { useState } from "react";
import "../App.css";
import SelectForm from "./SelectForm";

function BoxDemo() {

    const [text, setText] = useState('');
    
    // state= {
    //     selectedOption: null,
    // };
    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="box">
            <input
                type="text"
                id="question"
                name="question"
                onChange={handleChange}
                value={text}/>
            <br />
            {/* <select className="option" id="option" value="">
                <option value="number">Number</option>
                <option value="text">Text</option>
                <option value="boolean">Boolean</option>
            </select> */}
            <SelectForm />
            <button type="button" className="material-icons del">delete_outline</button>
        </div>
    );
}

export default BoxDemo;