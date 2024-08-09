import H2 from "@/app/ui/components/h2"
import ProductList from "@/app/ui/sections/product-list"

export default function Collection({
    title,
    tag,
}: {
    title: string
    tag: string
}) {
    return (
        <div className="pt-12">
            <div className="text-center">
                <H2 text={title} />
            </div>
            <ProductList tag={tag} />
        </div>
    )
}