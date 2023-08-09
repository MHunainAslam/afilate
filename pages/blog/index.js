import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img from '../../public/assets/blog/placeholder.jpg'
import Link from 'next/link'
import { APP_KEY, APP_URL } from '@/public/settings/there_is_nothing_holding_me_back/config'
import Spinner from '@/components/Spinner'

const index = () => {
    const [blog, setblog] = useState({});
    const [err, setError] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {


        fetch(`${APP_URL}api/allblogs?key=${APP_KEY}`).then(res => res.json()).then(json => {
            setblog(json);
            setloading(false)
        }).catch(err => {
        })




    }, []);

    console.log("setbloga", blog.data)

    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (
        <>
            <section className='my-5'>
                <div className="container">
                    <div className="row">
                        {blog?.data?.map((item, index) => (
                            <div className="col-md-6" key={index}>
                                <Link href={`/blog/${item.slug}`} className="card blog-card h-100">
                                    <div className="card-header">
                                        {item.image === null ?

                                            <Image src={img} fill={true} />
                                            :
                                            <Image src={blog.url + "/" + item.image} fill={true} />
                                        }
                                    </div>
                                    <div className="card-body">
                                        <div className="blog-cardtitle">{item.title}</div>
                                        <div className="blog-carddesc" dangerouslySetInnerHTML={{ __html: item.short_description }}>
                                            {/* {item.short_description} */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default index