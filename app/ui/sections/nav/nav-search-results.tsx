import clsx from "clsx"
import ProductsList from "@/app/ui/sections/product-list"

import { useSelector } from "react-redux"
import { selectSearchBar } from "@/lib/features/nav/searchBarSlice"

export default function NavSearchResults({
    query,
    currentPage,
}: {
    query: string
    currentPage: number
}) {
    const searchBar = useSelector(selectSearchBar)

    return (
        <div
            className={clsx(
                // Layout & Sizing
                'fixed z-40 top-20 overflow-y-scroll h-full md:h-3/4 w-full',
                // Backgrounds & Effects
                'bg-white',
                {
                    'hidden': !searchBar
                }
            )}
        >
        </div>
    )
}