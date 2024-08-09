import CartItems from "@/app/ui/cart/cart-item-list"
import H2 from "@/app/ui/components/h2"
import Link from "next/link";
import Btn from "@/app/ui/components/btn";

export default function Page({
    searchParams,
}: {
    searchParams: {
        query?: string
        page?: string
    }
}) {
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1
    
    return (
        <div className="bg-black text-white pt-12">
            <div className="w-5/6 md:w-1/3 mx-auto space-y-12">
                <div className="text-center">
                    <H2 text="CART" styles="mb-2" />
                    <Link 
                        className="underline"
                        href='/latest'
                        >
                        Continiue Shopping
                    </Link>
                </div>
                <div className="space-y-8">
                    <CartItems />
                </div>
                <div className="text-center">
                    <Btn text='CHECK OUT' href="/checkout" styles="max-w-48 text-black" theme="light" />
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}