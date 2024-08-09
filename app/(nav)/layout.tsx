'use client'

import { selectMobileNav } from "@/lib/features/nav/mobileNavSlice"
import { selectSearchBar } from "@/lib/features/nav/searchBarSlice"
import { useState } from "react"
import { useSelector } from "react-redux"
import Nav from "../ui/sections/nav/nav"
import Footer from "../ui/sections/footer"

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    const [showCart, setShowCart] = useState(false)
    let handleShowCart = () => {
        setShowCart(!showCart)
    }
    const searchBar = useSelector(selectSearchBar)
    const mobileNav = useSelector(selectMobileNav)
    
    return (
        <body className={
            (showCart || searchBar || mobileNav) ? 'overflow-hidden' : ''
        }>
            <Nav
                showCart={showCart}
                onShowCart={handleShowCart}
            />
            <div className="pt-8">
                {children}
            </div>
            <Footer />
        </body>
    )
}