import react, { useDebugValue, useState } from "react";
import { MathComponent } from 'mathjax-react';
import './input.css';

const Input = (props) => {
    const [xValue, setXValue] = useState('');
    const [yValue, setYValue] = useState('');
    const [power, setPower] = useState('');



    const Submit = (e) => {
        console.log('submitted');
        e.preventDefault(); // prevents page from reloading
        const data = {
            x: xValue,
            y: yValue,
            p: power,
        };

        props.onSubmitData(data);
        setXValue(''); // 2 way binding
        setYValue('');
        setPower('');
    };



    const onChangeX = (event) => {
        setXValue(event.target.value);
    };

    const onChangeY = (event) => {
        setYValue(event.target.value);
    };

    const onChangePower = (event) => {
        setPower(event.target.value);
    };

    let operator = '';
    if(yValue > 0) operator = '+'; 

    return <div className="InputForm">
            <div className="form-style-5">
                <form onSubmit={Submit}>
                    <fieldset>
                        <legend>Binomial Calculator</legend><br/>
                        <input required type="number" id="x-value" value = {xValue}name="x-value" onChange={onChangeX} placeholder="Coefficient of x" /><br/>
                        <input required type="number" id="y-value" value={yValue} onChange={onChangeY}placeholder="Coefficient of y" /><br/>
                        <input required type="number" min={0} id="power" value={power} onChange={onChangePower} placeholder="Power"/>
                    </fieldset>
                    <div> 
                        {(xValue && yValue && power) ? <p className="preview">Preview:</p> : <p className="preview">Enter Values</p>}
                        {(xValue && yValue && power) ? <MathComponent tex={String.raw`\ (${xValue}x${operator}${yValue}y)^{${power}}`} /> : <p></p>}<br/>
                    </div>
                    <input type="submit" id="submit" value="Solve"/>
                </form>
            </div>
    </div>
}





export default Input;