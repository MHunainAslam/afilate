import { APP_KEY, APP_URL } from '@/public/settings/there_is_nothing_holding_me_back/config';
import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast';

const Theme_3_Modal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const closemodal = useRef(null)
  const handleContact = (e) => {
    e.preventDefault();

    setIsLoading(true);

    let email = e.target.elements['email'].value;
    let storename = e.target.elements['storename'].value;
    let code = e.target.elements['code'].value;

    fetch(`${APP_URL}api/submitcoupon`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, storename,code, key: APP_KEY })
    }).then(res => res.json()).then((data) => {
      if (data.success) {
        toast.success(data.message)
        submitcoupon.reset()
        closemodal.current.click()
      } else {
        toast.error(data.message)
      }
      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
      toast.error('Something went wrong!')
    });
  }
  return (
    <>
  
      <div class={`modal fade `} id="submitmidal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div class="modal-dialog">
          <form action="" onSubmit={handleContact} id='submitcoupon'>
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Submit Coupon</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closemodal}></button>
              </div>
              <div class="modal-body">
                <div className="row">
                  <div className="col-md-12 my-2">
                    <input type="text" className='form-control' placeholder='Store Name' name="storename" required/>
                  </div>
                  <div className="col-8 my-2">
                    <input id="email_" type="text" className='form-control' placeholder='Email' name="email" required/>
                  </div>
                  <div className="col-4 my-2">
                    <input type="text" className='form-control' placeholder='Code' name="code" id="" required/>
                  </div>
                </div>
              </div>
              <div class="modal-footer ">
                <button type="submit" class="button button-three button-three-white px-4 py-2 mx-auto" name="newsletter">

                  {isLoading ? 'Submiting...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default Theme_3_Modal