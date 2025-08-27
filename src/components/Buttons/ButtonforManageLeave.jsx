import React from 'react'

const ButtonforManageLeave = () => {
  return (
    <div>
        <button className='btn btn-primary btn-sm sm:text-sm text-[10px]' onClick={()=>document.getElementById('my_modal_manage_leave').showModal()}>Edit</button>

        <dialog id="my_modal_manage_leave" className="modal">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Manage Leave</h2>
            <div className="mt-4">
              {/* dito ilalagay yung mga information ng leave */}
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

export default ButtonforManageLeave