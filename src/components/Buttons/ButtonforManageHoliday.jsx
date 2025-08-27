import React from 'react'

const ButtonforManageHoliday = () => {
  return (
    <div>
        <button className='btn btn-sm btn-primary sm:text-sm text-[10px]' onClick={()=>document.getElementById('my_modal_manage_holiday').showModal()}>Edit</button>

        <dialog id="my_modal_manage_holiday" className="modal">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Manage Holiday</h2>
            <div className="mt-4">
              {/* dito ilalagay yung mga information ng holiday */}
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

export default ButtonforManageHoliday