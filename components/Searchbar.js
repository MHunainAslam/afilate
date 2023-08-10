import React, { useState } from 'react'
import Link from 'next/link'
import { APP_KEY, APP_URL } from '@/public/settings/there_is_nothing_holding_me_back/config'
const Searchbar = () => {

    const [searchQuery, setSearchQuery] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [query, setQuery] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('click', () => {
      
        setQuery(false)
        setSearchQuery('')
    })




    const handleSearch = (e) => {

        setQuery(e);

        if (query.length >= 1) {

            setIsActive(true);
            setIsLoading(true);
            fetch(`${APP_URL}api/store?key=${APP_KEY}&search=${e}`).then(res => res.json()).then(results => {

                let query = [];

                results?.data?.map(item => query.push({ name: item.name, slug: item.slug }))

                setIsLoading(false);

                setSearchQuery(query)

            })
        }
        else {
            setIsLoading(false);
            setIsActive(false);
            setSearchQuery([])
        }
    }

    return (
        <>
            <form className="" role="search">
                <input className="form-control me-2 rounded-0 " type="search" placeholder="" aria-label="Search" onChange={(e) => handleSearch(e.target.value)} />
                <div class="w-100 z-2 top-100 pl-0 position-absolute header-search" id='searchbar' >
                    {
                        isActive &&

                            isLoading ?

                            <div class="list-group" ><a class="list-group-item list-group-item-action z-index-2  rounded-0">Loading...</a></div>

                            :

                            searchQuery.length ?
                                searchQuery.map(item => {
                                    return <div class="list-group" onClick={() => {
                                        setQuery(''); setIsLoading(false);
                                        setIsActive(false);
                                        setSearchQuery([]);
                                    }}><Link href={`/store/${item.slug}`} class="list-group-item list-group-item-action rounded-0 ">{item.name}</Link></div>
                                })

                                :

                                query.length ? <div class="list-group" ><a class="list-group-item list-group-item-action rounded-0">No Result Found</a></div> : ''
                    }
                </div>
            </form>
        </>
    )
}

export default Searchbar