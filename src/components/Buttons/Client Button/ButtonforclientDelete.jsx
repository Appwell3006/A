import React from 'react'

const ButtonforclientDelete = () => {
  return (
    <div>
        <button className='btn btn-sm btn-error sm:text-sm text-[10px]' onClick={()=>document.getElementById('my_modal_Client_delete').showModal()}>Delete</button>

        <dialog id="my_modal_Client_delete" className="modal">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Confirm Deletion</h2>
            <div className="mt-4">
              <p>Are you sure you want to delete this client?</p>
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

export default ButtonforclientDelete