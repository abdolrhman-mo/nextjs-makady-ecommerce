'use client'

import Footer from "@/app/ui/sections/footer"
import Nav from "@/app/ui/sections/nav/nav"
import Hero from "@/app/ui/home/hero"
import ProductList from "./ui/sections/product-list"
import { useSelector } from "react-redux"
import { selectSearchBar } from "@/lib/features/nav/searchBarSlice"
import { selectMobileNav } from "@/lib/features/nav/mobileNavSlice"
import { useState } from "react"

export default function Home() {
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
      <div className="App pt-20">
        <Hero />
        <ProductList
          title="Tees"
          tag="tee"
          limit={4}
          />
        <hr />
        <ProductList
          title="Shorts"
          tag="shorts"
          limit={4}
          />
        <hr />
        <ProductList
          title="Track Pants"
          tag="pants"
          limit={4}
        />
        <Footer />
      </div>
    </body>
  )
}
