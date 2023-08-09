import React from 'react'

const Theme_3_Modal = () => {
  return (
    <>
      <div class="modal fade" id="submitmidal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <form action="">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Submit Coupon</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className="row">
                  <div className="col-md-12 my-2">
                    <input type="text" className='form-control' placeholder='Store Name' name="" id="" />
                  </div>
                  <div className="col-8 my-2">
                    <input type="text" className='form-control' placeholder='Email' name="" id="" />
                  </div>
                  <div className="col-4 my-2">
                    <input type="text" className='form-control' placeholder='Code' name="" id="" />
                  </div>
                </div>
              </div>
              <div class="modal-footer ">
                <button type="button" class="button button-three button-three-white px-4 py-2 mx-auto">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Theme_3_Modal