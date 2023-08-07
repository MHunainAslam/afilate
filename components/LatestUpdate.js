import Image from 'next/image'
import React from 'react'
import img from '../public/assets/blog/man.jpg'

const LatestUpdate = () => {
  return (
    <>
      <div className="container">
        <p className="theme3-heading text-center">
          latest updates from us
        </p>
        <div className="row theme3-latest-card">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card'>
              <div className="card-body">
                <Image src={img} fill={true}></Image>
                <div className="cardtitle">
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card'>
              <div className="card-body">
                <Image src={img} fill={true}></Image>
                <div className="cardtitle">
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card'>
              <div className="card-body">
                <Image src={img} fill={true}></Image>
                <div className="cardtitle">
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card'>
              <div className="card-body">
                <Image src={img} fill={true}></Image>
                <div className="cardtitle">
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card'>
              <div className="card-body">
                <Image src={img} fill={true}></Image>
                <div className="cardtitle">
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card'>
              <div className="card-body">
                <Image src={img} fill={true}></Image>
                <div className="cardtitle">
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card'>
              <div className="card-body">
                <Image src={img} fill={true}></Image>
                <div className="cardtitle">
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card'>
              <div className="card-body">
                <Image src={img} fill={true}></Image>
                <div className="cardtitle">
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestUpdate