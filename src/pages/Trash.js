if(!!resJSON.clubId){
    setGlobalState({
      isauth:true,
      clubId:resJSON.clubId
    })
  }
  if(!!resJSON.coeId){
    setGlobalState({
      isauth:true,
      coeId:resJSON.coeId
    })
  }
  else{
    notification.error({
      message: `Your Email or Password is incorrect`,
      description: `Please enter the correct crudentials given by the Admin`,
      placement:'topRight'
    })
  }


  <div className="chairpersons">
<br/><br/>
<div className="cards-list">
<div className="card1">
  <div className="card_title title-white">
  <p id="co">Co-Chairpersons</p> </div>
  <div className="card_body"> <p>  </p></div>
 
</div>
</div>
</div>