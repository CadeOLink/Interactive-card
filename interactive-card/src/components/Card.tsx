function  Card(props:any){

   return(
<>
   <div className="cards">
      <div className="card-frontal">
         <h1 className='text-card'>{props.textCard}</h1>
         <h1 className="number-card">{props.numberCard}</h1>
         <h1 className="cvc-card">{props.cvc}</h1>
         <h1 className="date-card">{props.MM +"/"+ props.YY}</h1>
         <img src="public/images/bg-card-front.png" alt=""/>
      </div>
      <div className="card-traseira">
         <img src="public/images/bg-card-back.png" alt="" />
      </div>
   </div>
</>
     )

}

export default Card