import React from "react"



const Search = ({searchTerm,setSearchTerm}) => {

    return (
        <div className="search w-100 bg-dark text-light px-4 py-2 rounded mt-5 mx-auto">
            <div className='position-relative d-flex align-items-center'>
                <img src="/assets/search.svg" className="position-absolute start-0 ms-2" alt=""/>
                <input type="text" placeholder="Search for a movie" className="form-control bg-dark ps-5 pe-sm-5 py-2 text-light border-0 shadow-none" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
            </div>
        </div>
    )
}


export default Search