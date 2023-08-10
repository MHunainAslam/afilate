import Spinner from '@/components/Spinner';
import { APP_KEY, APP_URL, DEFAULT_DESC, DEFAULT_TITLE } from '@/public/settings/there_is_nothing_holding_me_back/config';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Layout from '../Layout';
import couponph from '../../public/assets/blog/placeholder.jpg'
import Image from 'next/image';
const categories = ({ data, metas, setMetas }) => {

    const [favcat, setfavcat] = useState({})
    const [err, setError] = useState(false);
    const [loading, setloading] = useState(true)

    const favcatimg = `https://creativeitsols.com/system/public/${data.siteTitle}/media/`
    useEffect(() => {

        setMetas({ ...metas, title: `Category ${data?.siteTitle ? '- ' + data?.siteTitle : ''}` })


        fetch(`${APP_URL}api/category?key=${APP_KEY}`).then(res => res.json()).then(json => {
            setloading(false);
            setfavcat(json)
        }).catch(err => {
            setloading(false);
            setError(err.message)
            setfavcat({})
        })
    }, [])
    console.log(data);
    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (


        <div className='container my-5'>
            {data.Style === 3 ?

                <h3 className='theme3-heading'>Latest Discounts By CATEGORIES
                </h3>
                :
                <h3 className=''>CODES FOR YOUR FAVOURITE CATEGORIES</h3>

            }
            <div className="row bg-white py-3 px-2">

                {favcat?.map((item) => {
                    return <div className="col-md-4 col-6  favcat">
                        {data.Style === 3 ?
                            <div className="d-flex">
                                <div className='cat-icon-3'>
                                    {item.image === null ?
                                        <Image fill={true} src={couponph} alt="" className='w-100' />
                                        :
                                        <Image fill={true} src={favcatimg + item.image} alt="" className='w-100' />
                                    }

                                </div>
                                <Link href={`/category/${item.slug}`}>{item.name}</Link>
                            </div>
                            :
                            <Link href={`/category/${item.slug}`}>{item.name}</Link>

                        }
                    </div>
                })}

            </div>
        </div>
    )
}

export default categories