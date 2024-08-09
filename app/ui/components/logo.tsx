import { Sedgwick_Ave } from "next/font/google"
import Link from "next/link"

const sedgwik = Sedgwick_Ave({ subsets: ['latin'], weight: ['400']})

export default function Logo({
    styles = ''
}: {
    styles?: string
}) {
    return (
        <Link
            href="/"
            className={`text-xl md:text-2xl font-black ${sedgwik.className} ${styles}`}
        >
            Makady
        </Link>
    )
}