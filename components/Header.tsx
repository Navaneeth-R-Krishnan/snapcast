import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImageWithFallback from './ImageWithFallback'
// import RecordScreen from './RecordScreen'
import { ICONS } from '@/constants'

const Header = ({subHeader, title,userImg}: SharedHeaderProps) => {
  return (
    <header className='header'>
        <section className='header-container'>
            <div className='details'>
                {userImg && (
                    <ImageWithFallback src={userImg || '/assets/images/dummy.jpg'} alt="User" width={66} height={66} className="rounded-full"/>
                )}

                <article>
                    <p>
                        {subHeader}
                    </p>
                    <h1>
                        {title}
                    </h1>   
                </article>
            </div>
            <aside>
                <Link href="/upload">
                <Image src="/assests/icons/upload.svg" alt="Upload" width={16} height={16} />
                <span>Upload a Video</span>
                </Link>
                <div className='record'>
                    <button className='primary-btn'>
                        <Image src={ICONS.record} alt="Record" width={16} height={16} />
                        <span>Record</span>
                    </button>
                </div>
                {/* <RecordScreen/> */}
            </aside>
        </section>

        <section className='search-filter'>
                <div className='search'>
                <input type="text" placeholder='Search for xyz' />
                <Image src="/assets/icons/search.svg" alt="Search" width={16} height={16}></Image>
                </div>
        </section>
    </header>
  )
}

export default Header