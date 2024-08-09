'use client'

import Collection from "@/app/ui/collections/collection"

export default function Page() {    
    return (
        <div className="bg-black text-white">
            <div className="w-5/6 mx-auto">
                <Collection title="shop all the latest products" tag="all" />
            </div>
        </div>
    )
}