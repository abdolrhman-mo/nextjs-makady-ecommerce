'use client'

import Link from 'next/link'
import { 
    MagnifyingGlassIcon, 
    UserIcon, 
    ShoppingBagIcon, 
    Bars3CenterLeftIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import NavCart from '@/app/ui/sections/nav/nav-cart'
import NavSearchBar from '@/app/ui/sections/nav/nav-search-bar'
import BackgroundShadow from '@/app/ui/sections/nav/background-shadow'
import MobileNav from '@/app/ui/sections/nav/mobile-nav'
import { motion, Variants } from 'framer-motion'

import { useSelector, useDispatch } from 'react-redux'
import { toggleSearchBar, selectSearchBar } from '@/lib/features/nav/searchBarSlice'
import { toggleMobileNav, selectMobileNav } from '@/lib/features/nav/mobileNavSlice'
import Logo from '../../components/logo'

export default function Nav({
    showCart,
    onShowCart,
}: {
    showCart?: any
    onShowCart?: any
}) {
    const navItem = {
        normal: {
            borderBottom: 'none',
        },
        hover: {
            borderBottom: '1px solid white',
        }
    }
    const searchBar = useSelector(selectSearchBar)
    const mobileNav = useSelector(selectMobileNav)
    const dispatch = useDispatch()

    return (
        <nav className='shadow-sm fixed w-full z-30 bg-[#1A1A1A] text-white'>
            <div
                className={clsx(
                    // Layout & Sizing
                    'relative flex justify-around',
                    // Spacing
                    'py-4 w-5/6 mx-auto',
                    // Typography
                    'items-center tracking-widest',
                    {
                        'hidden': searchBar
                    }
                )}
            >
                <div 
                    className={clsx(
                        // Sizing
                        'w-full',
                        // Grid
                        'grid grid-cols-12',
                    )}
                >

                    {/* LEFT SIDE */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-1 flex items-center">
                        {/* desktop */}
                        <Logo styles='hidden md:block' />
                        {/* mobile */}
                        <Bars3CenterLeftIcon className='h-6 md:hidden cursor-pointer' onClick={() => dispatch(toggleMobileNav())} />
                    </div>

                    {/* CENTER */}
                    <div
                        className='w-1/2 col-span-9 sm:col-span-8 md:col-span-10 mx-auto flex justify-center md:justify-between items-center'
                    >
                        <Logo styles='block md:hidden' />
                        <ul 
                            className={clsx(
                                // Layout & Sizing
                                'hidden w-full',
                                // Flex
                                'justify-evenly items-center',
                                'md:max-lg:flex-col md:flex'
                            )}
                        >
                            <motion.li whileHover='hover' variants={navItem}>
                                <Link href='/'>Home</Link>
                            </motion.li>
                            <motion.li whileHover='hover' variants={navItem}>
                                <Link href='/latest'>Shop Latest</Link>
                            </motion.li>
                            <motion.li whileHover='hover' variants={navItem}>
                                <Link href='#footer'>Contact us</Link>
                            </motion.li>
                        </ul>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-span-2 md:col-span-1 flex items-center justify-end">
                        <ul className='flex'>
                            {/* desktop */}
                            <li>
                                <Link href={'/login'}>
                                    <UserIcon className='h-6 px-2 hidden md:block cursor-pointer' />
                                </Link>
                            </li>
                            {/* both */}
                            <li>
                                <Link href={''}>
                                    <ShoppingBagIcon 
                                        className='h-6 px-2 cursor-pointer' 
                                        onClick={onShowCart}    
                                        />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* mobile NAV */}
                <MobileNav />

                {/* CART */}
                <NavCart showCart={showCart} onShowCart={onShowCart} />
            </div>

            {/* Background Shadow */}
            <BackgroundShadow
                showCart={showCart}
                onShowCart={onShowCart}
            />

            {/* Search Bar */}
            <NavSearchBar />
        </nav>
    )
}