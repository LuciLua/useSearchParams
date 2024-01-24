import '../styles/globals.css'
import { Inter } from "next/font/google"

const inter = Inter({ weight: ['400'], subsets: ['latin-ext'] })

export default function root_layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>useSearchParam</title>
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}