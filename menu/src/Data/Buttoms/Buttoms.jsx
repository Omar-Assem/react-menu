
const Buttoms = ({filterARR,allCatogeroy}) => {
  // to filter alcategery
  const onFilter = (cat)=>{filterARR(cat)}




  return (

<div className="row text-center my-3">

<div className="col-sm-12">
  {
  allCatogeroy.length >= 1 ?
   ( allCatogeroy.map(cat=> { 
    return(
  <div >
    <button className='btn btn-outline-danger text-dark' onClick={()=> onFilter(cat)}>{cat}</button>
    </div>
    )
    }
    )
    ) : <h4>no catergory</h4> 
}



</div>
</div>
)
}

export default Buttoms
