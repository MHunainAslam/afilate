import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img from '../../public/assets/blog/man.jpg'
import Link from 'next/link'
import { APP_KEY, APP_URL } from '@/public/settings/there_is_nothing_holding_me_back/config'

const index = () => {
    const [blog, setblog] = useState({});
    const [err, setError] = useState(false);

    useEffect(() => {


        fetch(`${APP_URL}api/allblogs?key=${APP_KEY}`).then(res => res.json()).then(json => {
            setblog(json);

        }).catch(err => {
        })




    }, []);
    console.log("setbloga", blog.data)
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
                                        <div className="blog-carddesc" dangerouslySetInnerHTML={{ __html: item.short_description}}>
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