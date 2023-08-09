import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import country from '@/pages/country/[slug]'
import { APP_KEY, APP_URL } from '@/public/settings/there_is_nothing_holding_me_back/config'
import Searchbar from '../Searchbar'
import Theme_3_Modal from '../Modal/Theme_3_Modal'

const Header1 = ({ data, category, season, coupons, country }) => {

    const closeMenu = useRef();

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-header bg-transparent">
                <div className="container">
                    <Link className="navbar-brand col-md-2 col-4" href="/">
                        <Image src={data?.url + "/" + data?.logo?.header || logo} alt="" className={'position-relative my-1 header-logo w-100'} fill={true} />
                    </Link>
                    <button className="navbar-toggler shadow-none " ref={closeMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-justify text-header" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-2 mb-2 mb-lg-0 nav-css theme3-header">
                            <li className="nav-item">
                                <Link className="nav-link active text-header" href="/all-stores" >Stores</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-header" href="/category" >Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-header" href="/blog" >Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-header" href="#" data-bs-toggle="modal" data-bs-target="#submitmidal">Submit Coupon</Link>
                            </li>

                            {data.header.button_url != '' ?
                                <li className="nav-item dropdown memorial-btn">
                                    <Link href={`${data.header.button_url}`} className='button header-btn-bg header-btn-text'>{data?.header?.button_text}</Link >
                                </li> : ''}

                        </ul>
                        <div className="d-flex mx-auto position-relative ps-3 col flex-column theme3-search">
                            <Searchbar ></Searchbar>
                        </div>
                    </div>
                </div>
            </nav>


            <Theme_3_Modal />
        </>
    )
}
<style>

</style>
export default Header1
