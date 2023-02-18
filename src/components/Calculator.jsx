import { useState } from 'react'

export default function Calculator() {
    const [currentCalc, setCurrentCalc]= useState('')//needs to hold the whole equation
    const [digit, setDigit]= useState(''); //needs to hold current digit
    const [display, setDisplay] = useState(0);
  
   
    const handleClick = (event) => {
        event.preventDefault();
        let newValue = digit + event.target.value; //updates the current digit
        setDigit (newValue);
        setCurrentCalc (currentCalc + event.target.value); //updates equation string
        setDisplay (newValue); //sets display to current digit
    }
    
    const handleOpp = (event) =>{ //any time a non-number is pushed
        event.preventDefault();
        let opp = event.target.value; //get the +/-/ etc
        setDisplay (eval(currentCalc)); //set the display to the current total
         if (opp!= '%'){
                setDigit (''); //reset digit
                let newValue = opp; //hold the new value
                setCurrentCalc(eval(currentCalc) + newValue);
        }else{
                let newValue = (eval(eval(currentCalc)) * .01)
                setCurrentCalc (newValue)
                setDigit (newValue);
                setDisplay(newValue)
        
          }}
 //if i type a number, iw ant it to be appended to the calculation string, and i want it to appear on the display;
 //if i type +/-/x/etc. I don't want anything shown
 //if i type a new number, i want the new number
 //but the eval should have operation, and both numbers

    const handleSubmit = (event) => { //if hit equals
        event.preventDefault();
        let newValue = currentCalc; //new value is the complete equation, without the =
        let currentValue = eval(newValue);//evaluate it
        setDisplay(currentValue);
        setCurrentCalc(currentValue); //set display and current calc with that value

    }

    const resetCalc = () =>{
        setDisplay(0);
        setCurrentCalc('');
        setDigit('');
    }

    const backSpace = (event) => {
        event.preventDefault();
        let newValue = currentCalc.slice(0,-1);
        setDisplay(newValue);
        setCurrentCalc (newValue);
        setDigit(newValue);
        
    }

    return (
        <div id="calcContainer">
            <section id="result"><h1>{display}</h1></section>
            <section id="buttons-container">
                <button className="calc-button tertiary-btn" onClick={resetCalc}>AC</button>
                <button className="calc-button tertiary-btn"><span className="material-symbols-rounded size-48" onClick={backSpace}>backspace</span></button>
                <button className="calc-button tertiary-btn" value="%" onClick={handleOpp}>%</button>
                <button className="calc-button primary-btn" value="/" onClick={handleOpp}>/</button>
                <button className="calc-button primary-container-btn" value="7" onClick={handleClick}>7</button>
                <button className="calc-button primary-container-btn" value="8" onClick={handleClick}>8</button>
                <button className="calc-button primary-container-btn" value="9" onClick={handleClick}>9</button>
                <button className="calc-button primary-btn" value="*" onClick={handleOpp}>x</button>
                <button className="calc-button primary-container-btn" value="4" onClick={handleClick}>4</button>
                <button className="calc-button primary-container-btn" value="5" onClick={handleClick}>5</button>
                <button className="calc-button primary-container-btn" value="6" onClick={handleClick}>6</button>
                <button className="calc-button primary-btn" value="-" onClick={handleOpp}>-</button>
                <button className="calc-button primary-container-btn" value="1" onClick={handleClick}>1</button>
                <button className="calc-button primary-container-btn" value="2" onClick={handleClick}>2</button>
                <button className="calc-button primary-container-btn" value="3" onClick={handleClick}>3</button>
                <button className="calc-button primary-btn" value="+" onClick={handleOpp}>+</button>
            </section>
            <section id="bottom-btns">
                <button className="calc-button primary-container-btn" id="zero-btn" value="0" onClick={handleClick}>0</button>
                <button className="calc-button primary-container-btn" value="." onClick={handleClick}>.</button>
                <button className="calc-button primary-btn" onClick={handleSubmit}>=</button>
            </section>
        </div>
    )
}
