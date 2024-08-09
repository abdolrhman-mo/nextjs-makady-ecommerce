import Link from "next/link"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import Logo from "@/app/ui/components/logo"

export default function CheckoutNav() {
    return (
        <nav className="shadow-sm bg-[#1A1A1A] text-white">
            <div className="py-4 w-5/6 mx-auto flex justify-between items-center tracking-widest ">
                <Logo styles='text-2xl' />
                <Link href={'/cart'}>
                    <ShoppingBagIcon className="h-6 px-2" />
                </Link>
            </div>
        </nav>
    )
}