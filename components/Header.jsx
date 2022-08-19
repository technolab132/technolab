import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))

    }, [])
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-semibold text-4xl flex items-center">
                            <img className="mr-2" src="/logomain.png" height="50px" width="50px" />TechnoLab
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-3 align-middle ml-4 font-medium cursor-pointer">
                                {category.name}
                            </span>

                        </Link>))}
                </div>
            </div>

        </div>
    )
}

export default Header