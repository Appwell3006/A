import React from 'react'

const ButtonforActivityLog = () => {
  return (
    <div>
        <button className='btn btn-sm btn-primary sm:text-sm text-[10px]' onClick={()=>document.getElementById('my_modal_Activity_Log').showModal()}>Retrive</button>
    </div>
  )
}

export default ButtonforActivityLog

