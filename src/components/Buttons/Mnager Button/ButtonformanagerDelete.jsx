import React from 'react'

const ButtonformanagerDelete = () => {
  return (
    <div>
        <button className='btn btn-sm btn-error sm:text-sm text-[10px]' onClick={()=>document.getElementById('my_modal_Manager_delete').showModal()}>Delete</button>

        <dialog id="my_modal_Manager_delete" className="modal">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Manager Delete</h2>
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

export default ButtonformanagerDelete