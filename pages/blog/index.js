import Image from 'next/image'
import React from 'react'
import img from '../../public/assets/blog/man.jpg'
import Link from 'next/link'

const index = () => {
    return (
        <>
            <section className='my-5'>
                <div className="container">
                    <div className="row">
                       
                        <div className="col-md-6">
                            <Link href="/blog/1" className="card blog-card h-100">
                                <div className="card-header">
                                    <Image src={img} fill={true}></Image>
                                </div>
                                <div className="card-body">
                                    <div className="blog-cardtitle">
                                        Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                                    </div>
                                    <div className="blog-carddesc">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repellendus fugiat beatae facere debitis esse dolore, omnis, animi mollitia veritatis ipsa aut libero quidem. Iste voluptatem possimus nemo ut earum!.
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link href="/blog/1" className="card blog-card h-100">
                                <div className="card-header">
                                    <Image src={img} fill={true}></Image>
                                </div>
                                <div className="card-body">
                                    <div className="blog-cardtitle">
                                        Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                                    </div>
                                    <div className="blog-carddesc">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repellendus fugiat beatae facere debitis esse dolore, omnis, animi mollitia veritatis ipsa aut libero quidem. Iste voluptatem possimus nemo ut earum!.
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link href="/blog/1" className="card blog-card h-100">
                                <div className="card-header">
                                    <Image src={img} fill={true}></Image>
                                </div>
                                <div className="card-body">
                                    <div className="blog-cardtitle">
                                        Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                                    </div>
                                    <div className="blog-carddesc">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repellendus fugiat beatae facere debitis esse dolore, omnis, animi mollitia veritatis ipsa aut libero quidem. Iste voluptatem possimus nemo ut earum!.
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link href="/blog/1" className="card blog-card h-100">
                                <div className="card-header">
                                    <Image src={img} fill={true}></Image>
                                </div>
                                <div className="card-body">
                                    <div className="blog-cardtitle">
                                        Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                                    </div>
                                    <div className="blog-carddesc">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repellendus fugiat beatae facere debitis esse dolore, omnis, animi mollitia veritatis ipsa aut libero quidem. Iste voluptatem possimus nemo ut earum!.
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index