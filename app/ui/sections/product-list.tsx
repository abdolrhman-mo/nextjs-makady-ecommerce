import '@/public/styles/footer.sass'
import { products } from '@/app/lib/placeholder-data'
import Product from '@/app/ui/sections/product'

export default function ProductList({
    title = '', 
    tag,
    limit = 100,
    productPage = false,
    productPageId = 0,
}: {
    title?: string
    tag: string
    limit?: number
    productPage?: boolean
    productPageId?: number
}) {
    let filtered: any = []
    if (tag === 'all') {
        let i = 0
        products.map(product => {
            if (i < limit) {
                filtered.push(product)
            }
            i++
        })
    } else {
        let i = 0
        products.map((product) => {
                if (product.tag[0] === tag || product.tag[1] === tag) {
                    if (i < limit) {
                        filtered.push(product)
                        i++
                    }
                }
            }
        )
    }
    // If Product Page
    if (productPage) {
        filtered = []
        let i = 0
        products.map((product, j) => {
            if (i < limit && j >= productPageId) {
                filtered.push(product)
                i++
            }
        })
    }
    const listItems = filtered.map((product: any, i:number) =>
        <div className="col-md-3 col-6" key={i}>
            <Product
                name={product.name}
                imgUrl={product.imgUrl}
                sale={product.sale}
                price1={product.price1}
                price2={product.price2}
                index={product.index}
            />
        </div>
    )
    return (
        <div className="product-list">
            <div className="w-5/6 mx-auto">
                <h2>{title}</h2>
                <div className="row">
                    {listItems}
                </div>
            </div>
        </div>
    )
}