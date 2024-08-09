import CheckoutNav from '@/app/ui/checkout/checkout-nav'
import Footer from '@/app/ui/sections/footer'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body>
        <CheckoutNav />
        {children}
        <Footer />
    </body>
  )
}
