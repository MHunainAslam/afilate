import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img from '../../public/assets/blog/man.jpg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { APP_KEY, APP_URL } from '@/public/settings/there_is_nothing_holding_me_back/config'
import Spinner from '@/components/Spinner'

const blogslug = () => {


    const [blog, setblog] = useState()

    const dta = useRouter()
    let slug = dta?.query?.slug;

    const [err, setError] = useState(false);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetch(`${APP_URL}api/single-blog/${slug}?key=${APP_KEY}`).then(res => res.json()).then((json) => {
            setblog(json);
            setloading(false)
            // console.log("json", json.data.slug);

        }).catch(err => {
            setError('something went wrong!');
            setloading(false);
        })

    }, [slug])
    console.log(slug)
    // fetch(`https://creativeitsols.com/system/public/api/single-blog/the-best-deals-going-live-for-amazons-prime-early-access-sale?key=app_c5nsYNIFAhACMAaKYTNEubEwGwr1y9EIov4H405V`).then(res => res.json()).then(json => {
    // fetch(`${APP_URL}api/single-blog/${slug}?key=${APP_KEY}`).then(res => res.json()).then(json => {

    console.log('aa', blog);
    
    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (
        <>
            <section className='py-5 '>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="card single-bloag-card blog-card h-100">
                                <div className="card-header col-md-10 mx-auto">
                                    {blog?.image === null ?

                                        <Image src={img} fill={true} />
                                        :
                                        <Image src={blog?.url + "/" + blog?.data.image} fill={true} />
                                    }
                                </div>
                                {/* <Image className='shadow' src={img} fill={true}></Image> */}

                                <div className="card-body">
                                    <div className="blog-cardtitle text-center mt-4">

                                        {blog?.data.title}
                                    </div>
                                    <div className="blog-carddesc mt-5 text-center" dangerouslySetInnerHTML={{ __html: blog?.data.long_description }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default blogslug