import { FOOTER_DESC, FOOTER_ABOUT } from '@/public/settings/there_is_nothing_holding_me_back/config'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/assets/logo-white.png'

const Footer2 = ({ season, country, data }) => {
    console.log("aas", data);
    return (
        <>
            <div className="footer-3 ">
                <div className="container p-5 ">
                    <div className="row">

                        <div className="col-md-8  ">
                            <div className="row">
                                <div className="col-md-4">
                                    <h2 className=' footerheading'>About Company</h2>
                                    <ul className='footer-link p-0 text-white pt-3'>
                                        {data?.pages?.map((item) => {
                                            return <li className='mb-1'>
                                                <Link className='ms-0' href={`/pages/${item.slug}`}>{item.name}</Link>
                                            </li>
                                        })}
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="#">About Us</Link>
                                        </li>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="#">Privacy Policy</Link>
                                        </li>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="#">Terms Of Use</Link>
                                        </li>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="/contact">Contact Us</Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-md-4 ">
                                    <h2 className='footerheading'>About Company</h2>
                                    <ul className='footer-link p-0 text-white pt-3'>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="#">About Us</Link>
                                        </li>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="#">Privacy Policy</Link>
                                        </li>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="#">Terms Of Use</Link>
                                        </li>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="/contact">Contact Us</Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-md-4 ">
                                    <h2 className='footerheading'>About Company</h2>
                                    <ul className='footer-link p-0 text-white pt-3'>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="#">About Us</Link>
                                        </li>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="#">Privacy Policy</Link>
                                        </li>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="#">Terms Of Use</Link>
                                        </li>
                                        <li className='mb-1'>
                                            <Link className='ms-0' href="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Link href={'/'} className="footer-2-logo">
                                <Image src={data?.url + "/" + data?.logo?.footer || logo} alt="" className={'position-relative my-1 header-logo w-100'} style={{ objectFit: 'contain' }} fill={true}></Image>
                            </Link>
                            <p className='footer-3-content'>{data.siteTitle}        {FOOTER_DESC}</p>

                        </div>
                        <div class="col-md-12">
                            <div class="copright_text">
                                <p className='footer-3-content mt-4'>Copyrights 2023 - {data.siteTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer2