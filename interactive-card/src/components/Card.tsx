function  Card(props:any){

   return(
<>
   <div className="cards">
      <div className="fotoPerfil">
      <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
      </div>
      <div className="card-frontal">
         <h1 className='text-card'>{props.textCard}</h1>
         <h1 className="number-card">{props.numberCard}</h1>
         <h1 className="cvc-card">{props.cvc}</h1>
         <h1 className="date-card">{props.MM + props.YY}</h1>
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