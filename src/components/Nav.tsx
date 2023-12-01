"use client"
import React from 'react'
import Item from './Item'
import Logo from './Logo'
import Sub from './Sub'
import ItemSm from './ItemSm'
import Blog from './icon/Blog'
import Me from './icon/Me'
import Show from './icon/Show'

function Nav() {

    const navLinks: {
        name: string,
        endPoint: string,
        icon: React.JSX.Element
    }[] = [
            {
                name: 'Blog',
                endPoint: 'Blog',
                icon: <Blog />
            }, {
                name: 'About Me',
                endPoint: 'Me',
                icon: <Me />
            }, {
                name: 'My Showcase',
                endPoint: 'showcase',
                icon: <Show />
            }
        ]
    return (
        <div className='w-screen md:w-full flex px-3 justify-between items-center sticky top-0 z-50 bg-transparent'>
            <div className='flex items-center'>
                <div className='w-[100px] md:w-[150px]'>
                    <Logo />
                </div>
                <Sub str='Mannan Jr.' />
            </div>
            <ul
                className='hidden md:flex justify-around space-x-4 ml-2 '
            >
                {
                    navLinks.map((e, i) => {
                        return <Item key={e.name} name={e.name} endPoint={e.endPoint} delay={i * .15} />
                    })
                }
            </ul>
            <ItemSm arr={navLinks} />
        </div>
    )
}

export default Nav