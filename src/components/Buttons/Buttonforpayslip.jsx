import React from 'react'

const Buttonforpayslip = () => {
  return (
    <div>
        <button className='btn btn-sm btn-primary sm:text-sm text-[10px]' onClick={()=>document.getElementById('my_modal_payslip_1').showModal()}>View Payslip</button>

        <dialog id="my_modal_payslip_1" className="modal">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Payslip Summary</h2>
            <div className="mt-4">
              {/* dito ilalagay yung mga information ng payslip */}
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

export default Buttonforpayslip