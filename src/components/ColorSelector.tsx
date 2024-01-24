import Link from "next/link"
import { CopySnippet } from "./CopySnippet"


export const getUsers = async () => {
    try {
        console.log('Running try block...')
        // const fetchDataUsers = await fetch('http://localhost:3000/data.json')
        // const JSONDataUsers = await fetchDataUsers.json()
        // const users = await JSONDataUsers.users
        await new Promise(resolve => setTimeout(resolve, 1000))
        // return users
    }
    catch (err) {
        console.log(`Error at 'getUsers' - ${err.message}`)
        return undefined
    }
    finally {
        console.log('The try block was executed successfully!')
    }
}


export async function ColorSelector({ searchParams }) {

    const selectedColor = searchParams.color

    // const users = await getUsers()
    await getUsers()

    return (
        <div>
            <p className="text-white">Click to copy tailwindcss snippet</p>

            <div className="flex gap-2 py-7">
                <a href={'?color=black'} className={`${selectedColor == 'black' && 'border-[#4e4e4e]'} flex justify-center items-center border-[1px] border-[#ddd] w-[100px] rounded-[12px] text-white hover:bg-white hover:text-black cursor-pointer`}>
                    Black
                </a>
                <a href={'?color=yellow'} className={`${selectedColor == 'yellow' && 'border-[#ff0]'} flex justify-center items-center border-[1px] border-[#ddd] w-[100px] rounded-[12px] text-white hover:bg-white hover:text-black cursor-pointer`}>
                    Yellow
                </a>
                <a href={'?color=blue'} className={`${selectedColor == 'blue' && 'border-[#05f]'} flex justify-center items-center border-[1px] border-[#ddd] w-[100px] rounded-[12px] text-white hover:bg-white hover:text-black cursor-pointer`}>
                    Blue
                </a>
            </div>

            <div className="flex justify-center items-center">
                {selectedColor == 'black' && <CopySnippet color={selectedColor} className="bg-[#121212] text-[#fff] py-3 w-[200px] px-2 rounded-[4px] flex justify-center items-center hover:cursor-pointer hover:bg-[#202020]" />}
                {selectedColor == 'yellow' && <CopySnippet color={selectedColor} className="bg-[#f4b942] text-[#080808] py-3 w-[200px] px-2 rounded-[4px] flex justify-center items-center hover:cursor-pointer hover:bg-[#c99d45]" />}
                {selectedColor == 'blue' && <CopySnippet color={selectedColor} className="bg-[#3856ff] text-[#fff] py-3 w-[200px] px-2 rounded-[4px] flex justify-center items-center hover:cursor-pointer hover:bg-[#4b8dd3]" />}
            </div>
        </div>
    )
}


