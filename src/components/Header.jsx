import React from 'react'

const Header = (props) => {
  return (
    <>
     
  <nav className="flex justify-between bg-emerald-800 text-white p-4">
     <h2 className="text-2xl text-amber-300">{props.name}</h2>
     <div className="flex gap-8 justify-center flex-wrap text-xl  text-amber-300">
      <h4>COMPONENTS</h4>
      <h4>PROPS</h4>
      <h4>API's</h4>
      <h4>useState</h4>
     </div>
    </nav>
    </>
  )
}

export default Header