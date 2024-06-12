import { useState} from "react";
import Card from "./Card";

function Form(){
 
   const [textCard, setTextCard] = useState('')
   const [numberCard, setNumberCard] = useState('')
   const [cvc, setNumberCvc] = useState('');
   const [MM, setMM] = useState('');
   const [YY, setYY] = useState('');

   function takeValueText(e:any){
      if(textCard.length < 25){
         setTextCard(e.target.value); 
      }
   }

   function takeValueNumber(e:any){
      if(numberCard.length < 20){
         setNumberCard(e.target.value);
/*

         ARRUME ALGUM MODO DE COLOCAR OS ESPAÇOES ENTRE OS NÚMEROS EM 4 EM 4

*/ 
      }
   }

   function takeValueMM(e:any){
      if(MM.length < 2){
         setMM(e.target.value); 
      }
   }

   function takeValueYY(e:any){
      if(YY.length < 2){
         setYY(e.target.value); 
      }
   }

   function takeValueCvc(e:any){
      if(cvc.length < 3){
         setNumberCvc(e.target.value);
      }
   }

   return(
   <>
      <Card textCard={textCard} numberCard={numberCard} cvc={cvc} MM={MM} YY={`/`+YY}/>
      <div className="form">
         <label className="form-name-number">
            <p>Cardholder Name</p>
            <input type="text" name="card-name" id="cardName" onChange={takeValueText} value={textCard}/>
            <p>Card Number</p>
            <input type="text" name="card-number" id="cardNumber" onChange={takeValueNumber} value={numberCard}/>
         </label>
         <label>
            <p>Exp. Date (MM/YY)</p>
            <input type="text" name="card-mm" id="cardMM" onChange={takeValueMM} value={MM}/>
            <input type="text" name="card-yy" id="cardYY" onChange={takeValueYY} value={YY}/>
            <p>CVC</p>
            <input type="text" name="card-cvc" id="cardCvc" onChange={takeValueCvc} value={cvc}/>
         </label>
         <button type="submit">Confirm</button>
      </div>
   </>
      )
}

export default Form