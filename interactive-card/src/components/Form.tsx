import { useState} from "react";
import Card from "./Card";

function Form(){
 
   const [textCard, setTextCard] = useState()
   const [numberCard, setNumberCard] = useState()

   function takeValueText(e:any){
      setTextCard(e.target.value)
   }

   function takeValueNumber(e:any){
      setNumberCard(e.target.value);
   }

   return(
   <>
      <Card textCard={textCard} numberCard={numberCard}/>
      <div className="form">
         <label className="form-name-number">
            <p>Cardholder Name</p>
            <input type="text" name="card-name" id="cardName" onChange={takeValueText} value={textCard}/>
            <p>Card Number</p>
            <input type="text" name="card-number" id="cardNumber" onChange={takeValueNumber} value={numberCard}/>
         </label>
         <label>
            <p>Exp. Date (MM/YY)</p>
            <input type="text"/>
            <input type="text"/>
            <p>CVC</p>
            <input type="text"/>
         </label>
         <button type="submit">Confirm</button>
      </div>
   </>
      )
}

export default Form