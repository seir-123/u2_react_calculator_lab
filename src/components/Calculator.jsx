import { useState } from 'react'

export default function Calculator() {
    const [currentCalc, setCurrentCalc]= useState('')
    const [display, setDisplay] = useState(0);

    
   
    const handleClick = (event) => {
        event.preventDefault();
        let newValue = currentCalc + event.target.value;
        setCurrentCalc (newValue);
        setDisplay (newValue)
    }
    
 

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(eval(currentCalc));
        let total = eval(currentCalc)
        setCurrentCalc(total);

    }

    const resetCalc = () =>{
        setDisplay(0);
        setCurrentCalc('');
    }

    const backSpace = (event) => {
        event.preventDefault();
        const newValue = currentCalc.slice(0,-1);
        setDisplay(newValue);
        setCurrentCalc (newValue);
        
    }

    return (
        <div id="calcContainer">
            <section id="result"><h1>{display}</h1></section>
            <section id="buttons-container">
                <button className="calc-button tertiary-btn" onClick={resetCalc}>AC</button>
                <button className="calc-button tertiary-btn"><span className="material-symbols-rounded size-48" onClick={backSpace}>backspace</span></button>
                <button className="calc-button tertiary-btn" value="%" onClick={handleClick}><span className="material-symbols-rounded size-48">percent</span></button>
                <button className="calc-button primary-btn" value="/" onClick={handleClick}><span className="material-symbols-rounded size-48">{'\u00f7'}</span></button>
                <button className="calc-button primary-container-btn" value="7" onClick={handleClick}>7</button>
                <button className="calc-button primary-container-btn" value="8" onClick={handleClick}>8</button>
                <button className="calc-button primary-container-btn" value="9" onClick={handleClick}>9</button>
                <button className="calc-button primary-btn" value="*" onClick={handleClick}>x<span className="material-symbols-rounded size-48"></span></button>
                <button className="calc-button primary-container-btn" value="4" onClick={handleClick}>4</button>
                <button className="calc-button primary-container-btn" value="5" onClick={handleClick}>5</button>
                <button className="calc-button primary-container-btn" value="6" onClick={handleClick}>6</button>
                <button className="calc-button primary-btn" value="-" onClick={handleClick}>-</button>
                <button className="calc-button primary-container-btn" value="1" onClick={handleClick}>1</button>
                <button className="calc-button primary-container-btn" value="2" onClick={handleClick}>2</button>
                <button className="calc-button primary-container-btn" value="3" onClick={handleClick}>3</button>
                <button className="calc-button primary-btn" value="+" onClick={handleClick}>+</button>
            </section>
            <section id="bottom-btns">
                <button className="calc-button primary-container-btn" id="zero-btn" value="0" onClick={handleClick}>0</button>
                <button className="calc-button primary-container-btn" value="." onClick={handleClick}>.</button>
                <button className="calc-button primary-btn" onClick={handleSubmit}>=</button>
              
            </section>
        </div>
    )
}

/*
Variable for the result value */ 