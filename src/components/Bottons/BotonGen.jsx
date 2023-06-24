import React from 'react'

const BotonGen = ({onClick, children}) => {

    function handleClick() {
        onClick();
      }

  return (
    <button  onClick={handleClick} >
      {children}
    </button>
  )
}

export default BotonGen