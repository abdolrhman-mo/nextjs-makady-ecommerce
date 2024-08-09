'use client'

import '@/public/styles/product.sass'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"

function Product({
    name, 
    imgUrl, 
    sale, 
    price1, 
    price2, 
    index,
}: {
    name: string
    imgUrl: string
    sale: boolean
    price1: number
    price2: number
    index: number
}) {
  index++
  const productLink = "/product/" + index
  // const [productHeight, setProductHeight] = useState(innerWidth / 4)
  let innerWidth = 1100
  const [productHeight, setProductHeight] = useState(innerWidth / 4)
  setInterval(() => {
    if (innerWidth > 768) {
        setProductHeight(innerWidth / 4)
    } else {
      setProductHeight(innerWidth / 2.5)
    }
  }, 400)
  let saleHtml
  if (sale) {
    saleHtml = <p className="sale">{sale}</p>
  }
  let priceHtml
  if (price1) {
    priceHtml = <span className='line-through'>{price1}.00 EGP</span> + ` ${price2}` + ".00 EGP"
  } else {
    priceHtml = price2 + ".00 EGP"
  }
  // let imgUrll = '/imgs/pants1.webp'

  return (
    <div className="product">
        <Link href={productLink}>
          <div className="top" style={{backgroundImage: "url(" + imgUrl + ")"}}>
            {saleHtml}
            <div className="links">
              {/* <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-cart-shopping" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
              <i className="fa-solid fa-arrow-right"></i> */}
            </div>
          </div>
        </Link>
        <div className="body">
          <Link className="title" href={productLink}>
            <h3 className='font-semibold text-3xl'>{ name }</h3>
          </Link>
          <p className="price">
            {priceHtml}
          </p>
          <a className="add-to-wishlist" href='#hoodie'>
            <i className="fa-regular fa-heart"></i>
            Add to Wishlist
          </a>
        </div>
    </div>
  );
}

export default Product;
