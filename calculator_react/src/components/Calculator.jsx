import { useState } from 'react'

export default function Calculator () {
  const [obtainedValue,setobtainedValue]=useState(); 
  const [totalValue,settotalValue]=useState();
  const [percentage,setPercentage]=useState(); 
 const calculate=(e)=>{
     e.preventDefault(); 

       setPercentage((obtainedValue/totalValue)*100); 

 }; 

    return (
        
    <div className="main">
      <form onSubmit={calculate}> 
      <label> enter the value whose percentage is to be calculated. </label> 
      <br/>
      <br/>

     <input type="number" className="input1" value={obtainedValue} onChange={(e)=>setobtainedValue(e.target.value)}/>
     <br/>

     <input type="number"  className="input2" value={totalValue} onChange={(e)=>settotalValue(e.target.value)}/>
     <br/>
     <button type="submit" className="submit" onSubmit={calculate}> Calculate</button> 
     <h4> Percentage is {percentage} % </h4> 

</form> 

      </div>
      
  );
}


// export default function Calculator() {

//     const [display, setDisplay] = useState(0);
//     const [currentCalc, setCurrentCalc] = useState('')
//     const [percentage, setPercentage] = useState('')


//     const handleClick = (event) => {
//         event.preventDefault();
//         const newValue = currentCalc + event.target.value
//         console.log(newValue)
//         setCurrentCalc(newValue)
//         setDisplay(newValue)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setDisplay(eval(currentCalc));
//         console.log(currentCalc)
//         setCurrentCalc('')
//     }

//     const resetCalc = (event) =>{
//         event.preventDefault();
//         setDisplay(0);
//         setCurrentCalc('');
//     }

//     const backSpace = (event) => {
//         event.preventDefault();
//         const newValue = currentCalc.slice(0, -1);
//         setCurrentCalc(newValue);
//         setDisplay(newValue);
//     }



  
// //     const handlePercent = (event) => {
// //         event.preventDefault()
// //         const newValue = (currentCalc / 100) * 100
// //         console.log(newValue)
// //         // setCurrentCalc(newValue);
// //         // setDisplay(newValue);
      
// //   }
  


//     return (
//         <div id="calcContainer">
//             <section id="display"><h1>{display}</h1></section>
//             <section id="buttons-container">
//                 <button className="calc-button tertiary-btn" onClick={resetCalc}>AC</button>
//                 <button className="calc-button tertiary-btn" onClick={backSpace}><span className="material-symbols-rounded size-48">backspace</span></button>
               
//                 <button className="calc-button tertiary-btn" value="%" onClick={percent} onChange={(event) => setDisplay(event.target.value)}>%</button>
//                 <button className="calc-button primary-btn" value="/" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>/</button>
//                 <button className="calc-button primary-container-btn" value="7" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>7</button>
//                 <button className="calc-button primary-container-btn" value="8" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>8</button>
//                 <button className="calc-button primary-container-btn" value="9" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>9</button>
//                 <button className="calc-button primary-btn" value="*" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>X</button>
//                 <button className="calc-button primary-container-btn" value="4" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>4</button>
//                 <button className="calc-button primary-container-btn" value="5" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>5</button>
//                 <button className="calc-button primary-container-btn" value="6" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>6</button>
//                 <button className="calc-button primary-btn" value="-" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>&minus;</button>
//                 <button className="calc-button primary-container-btn" value="1" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>1</button>
//                 <button className="calc-button primary-container-btn" value="2" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>2</button>
//                 <button className="calc-button primary-container-btn" value="3" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>3</button>
//                 <button className="calc-button primary-btn" value="+" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>+</button>
//             </section>
//             <section id="bottom-btns">
//                 <button className="calc-button primary-container-btn" id="zero-btn" value="0" onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>0</button>
//                 <button className="calc-button primary-container-btn" value="." onClick={handleClick} onChange={(event) => setDisplay(event.target.value)}>.</button>
//                 <button className="calc-button primary-btn" value="=" onClick={handleSubmit}>=</button>
//             </section>
//         </div>
//     )
// }

