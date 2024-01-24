'use client'

import { useState } from "react"


export function CopySnippet({ color, className }) {


    const [showMessage, setShowMessage] = useState<boolean>()

    async function mailToCopyToClipboard(contentToCopy) {
        // Use the Clipboard API for modern browsers
        try {
            console.log("start try catch block")
            await navigator.clipboard.writeText(contentToCopy)
            setShowMessage(true)
            await new Promise((resolve) => { setTimeout(resolve, 2000) })
        } catch (e) {
            console.log('erro' + e.message)
        } finally {
            setShowMessage(false)
            console.log("ok!")
        }

    }

    return (
        <div>
            <button onClick={() => mailToCopyToClipboard(className)} className={`${className}`}>{color}</button>
            {showMessage && <p className="text-white absolute">Tailwindcss snippet successfully copied</p>}
        </div>
    )
}   