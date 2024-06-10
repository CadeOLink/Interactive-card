function  Card(){
   return(
   <div className="cards">
      <div className="card-frontal">
         <h1 className='text-card'></h1>
         <h1 className="number-card"></h1>
         <img src="public/images/bg-card-front.png" alt=""/>
      </div>
      <div className="card-traseira">
         <img src="public/images/bg-card-back.png" alt="" />
      </div>
   </div>
         )

}

export default Card