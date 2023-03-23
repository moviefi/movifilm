import React from 'react'

const SearchBox = (props) => {
  return (
    <div className='col col-sm-4'>
      <input className='form-control' 
      value={props.value}
      onChange={(event)=> props.setSearchTerm(event.target.value)} 
      placeholder='Enter a movie...'></input>
    </div>
  )
}

export default SearchBox