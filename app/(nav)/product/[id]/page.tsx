'use client'

import Image from "next/image"
import { products } from "@/app/lib/placeholder-data"
import H2 from "@/app/ui/components/h2"
import ProductList from "@/app/ui/sections/product-list"
import SizeRadio from "@/app/ui/components/size-radio"
import Btn from "@/app/ui/components/btn"

export default function Page({
    params,
}: {
    params: {id: number}
}) {
    const product = products[(params.id) - 1]

    return (
        <div className="bg-black text-white">
            <div className="w-5/6 mx-auto pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex justify-center w-full">
                    <Image
                        className="max-w-96"
                        src={product.imgUrl}
                        alt={product.name}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="space-y-4">
                    <H2 text="green washed hoodie" styles="" />
                    <div className="flex space-x-4">
                        <p className="line-through">1300.00 EGP</p>
                        <p>{product.price2} EGP</p>
                        <p className="text-red-500">Save 300.00 EGP</p>
                    </div>
                    <hr />
                    <div className="text-center md:text-left">
                        <p className="uppercase">size</p>
                        <SizeRadio items={product.availableSizes} />
                    </div>
                    <Btn text="add to cart" theme='light' styles="text-black" />
                    <Btn text="buy it now" theme='dark' styles="border" />
                    <ul>
                        {product.description.map(item => 
                            <li
                                className="list-disc"
                            >
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="col-span-2 pt-24 space-y-16">
                <div className="text-center">
                    <H2 text="you may also like" />
                </div>
                <ProductList tag='all' productPage={true} productPageId={params.id} limit={4} />
                <div className="w-fit mx-auto">
                    <Btn href="/latest" text="continue shopping" styles="text-xs text-black" theme="light" />
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}