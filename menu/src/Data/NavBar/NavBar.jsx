import { useState } from "react"

const NavBar = ({filterSearch}) => {
  const [searchValue,setSearch]=useState('')
  const onSearch=(e)=>{
    e.preventDefult
    filterSearch(searchValue)
    setSearch('')
  }
  return (

    <div>
       <nav className="navbar navbar-expand-sm  bg-dark">
           <div className="container-fluid">
               <a className=" text-light" href="#"><img src="../../../public/1600w-koIA1HEug0Q.webp" alt="logo" className='logo' /></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                   aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setSearch(e.target.value)} value={searchValue}/>
        <button onClick={()=> onSearch('')} className="btn btn-outline-success" type="submit">Search</button>
      </form>
           </div>
       </nav>

    </div>
  )
}

export default NavBar
