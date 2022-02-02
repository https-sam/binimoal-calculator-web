import { Binomial_Sigma } from './Calculate';
import { MathComponent } from 'mathjax-react';
import './input.css';



const Answer = (props) => {
    const ans = Binomial_Sigma(props.x, props.y, props.p);
    console.log(Binomial_Sigma(props.x, props.y, props.p));
    let operator = '';
    if(props.y > 0) operator = '+'; 
  

    return( <div>
        <div><MathComponent tex={String.raw`\ (${props.x}x${operator}${props.y}y)^{${props.p}}`} /></div>
        <div className='answer'><MathComponent tex={String.raw`\ =  ${ans}`}/> </div>
        </div>
    )};

export default Answer;