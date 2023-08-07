import Image from 'next/image'
import React from 'react'
import img from '../public/assets/blog/man.jpg'

const LatestUpdate = ({ blog }) => {
  return (
    <>
      <div className="container">
        <p className="theme3-heading text-center">
          latest updates from us
        </p>
        <div className="row theme3-latest-card">
          {blog.data.data.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className='card'>
                <div className="card-body">
                  {item.image === null ?

                    <Image src={img} fill={true} />
                    :
                    <Image src={blog.url + "/" + item.image} fill={true} />
                  }
                  <div className="cardtitle">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </>
  )
}

export default LatestUpdate