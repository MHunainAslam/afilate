import { APP_URL, APP_KEY } from '@/public/settings/there_is_nothing_holding_me_back/config'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import imag from '../public/assets/blog/man.jpg'


const Couponcard = ({ data, item, img }) => {

    return (
        <>
            {data.Style === 1 ?

                <div className="card card-hover rounded-0 new-coupon">
                    <div className="card-img new-coupon-img">
                        <Image src={`${!img ? '' : img + "/" + item?.store_logo}`} alt={item.store_name} fill={true} className='w-100 position-relative p-4'></Image>
                    </div>
                    <div className="card-body text-center text-secondary">
                        <h5 className='ship-hover'>{item.title}</h5>
                    </div>
                    <div className="card-footer bg-transparent text-center ">
                        <Link href={`/store/${item.store_slug}`} className='text-black new-coupon-title'>{item.store_name}</Link>
                        <div>
                            {/* {item.url} */}
                            <Link href={`${item.url}`} onClick={() => { window.open(`/store/${item.store_slug}/${item.id}`) }} className={`coupon-btn py-1 px-0 col-6 mt-1  button button-${item?.code ? 'secondary' : 'primary'}`}  >
                                {item?.code ? 'Show Code' : 'Show Deal'}
                            </Link>

                        </div>

                    </div>
                </div>

                : data.Style === 2 ?

                    <div class={`card position-relative border-0 h-100  `}>
                        <div className="img-overlay  ">
                            <Image src={`${!img ? '' : img + "/" + item?.store_logo}`} alt={item.store_name} fill={true} className='w-100 position-relative p-4'></Image>
                        </div>
                        <div class="card-body">
                            <Link href={`/store/${item.store_slug}`}> <h5 class="card-title text-primary fw-bold">{item.store_name}</h5></Link>
                            <h3 class="card-text text-secondary fw-bold" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                            <p class="card-text" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            <h6 class="card-text fw-bold">{item.offertime}</h6>
                        </div>
                        <div className="card-footer bg-transparent ">

                            {!item?.code ?
                                <Link href={`${item.url}`} onClick={() => { window.open(`/store/${item.store_slug}/${item.id}`) }} className='button button-secondary w-100 rounded-1 px-1 py-2'>Show Deal</Link>
                                : <>
                                    <div class="btncard_link position-relative ">
                                        <Link href={`${item.url}`} onClick={() => { window.open(`/store/${item.store_slug}/${item.id}`) }} class="btn btn-sm  why w-100 show-code-2-btn position-relative bg-orange btn code-btn  text-white font-weight-bold">
                                            <span>Show Code</span>
                                        </Link>
                                        <div class="show-code-2-code overflow-hidden justify-content-end fw-bold d-flex align-items-center  my-auto">{item.code}</div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    : data.Style === 3 ?
                        <div className="card theme3-top-picks">
                            <div className="card-body py-0">
                                <div className="row align-items-center ">
                                    <div className='col-md-3 mb-4 mb-md-0 border-end py-3'>
                                        <Image src={`${!img ? '' : img + "/" + item?.store_logo}`} alt={item.store_name} fill={true} ></Image>
                                        <div className={`top-picks-batch-${item.code ? 'code' : 'deal'}`}>
                                            {item.code ? 'code' : 'deal'}
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-4 mb-md-0'>
                                        <Link href={`/store/${item.store_slug}`}> <h5 class="toppick-card-brand">{item.store_name}</h5></Link>
                                        <h3 class="toppick-card-title " dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                                    </div>
                                    <div className="col-md-3 theme3-btn">
                                        {!item?.code ?
                                            <Link href={`${item.url}`} onClick={() => { window.open(`/store/${item.store_slug}/${item.id}`) }} className='button button-three-deal w-100 px-2 py-1'>Show Deal</Link>
                                            : <>
                                                <div class="btncard_link position-relative ">
                                                    <Link href={`${item.url}`} onClick={() => { window.open(`/store/${item.store_slug}/${item.id}`) }} class="button button-three button-three-white px-2 py-1 w-100 ">
                                                        <span>Show Code</span>
                                                    </Link>
                                                    {/* <div class="show-code-2-code overflow-hidden justify-content-end fw-bold d-flex align-items-center  my-auto">{item.code}</div> */}
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        : ""
            }
        </>

    )
}

export default Couponcard