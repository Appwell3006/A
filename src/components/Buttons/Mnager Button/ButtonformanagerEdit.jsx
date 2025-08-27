import React from 'react'

const ButtonformanagerEdit = () => {
  return (
    <div>
        <button className='btn btn-sm btn-primary sm:text-sm text-[10px]' onClick={()=>document.getElementById('my_modal_Manager_edit').showModal()}>Edit</button>

        <dialog id="my_modal_Manager_edit" className="modal">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Manager Edit</h2>
            <div className="mt-4">
              {/* dito ilalagay yung mga information ng manager */}
            </div>

            
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
    </div>
  )
}

export default ButtonformanagerEdit