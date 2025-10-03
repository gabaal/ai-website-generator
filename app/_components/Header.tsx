'use client'

import { Button } from "@/components/ui/button"
import { SignInButton, useUser } from "@clerk/nextjs"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const MenuOptions = [
    {
        name: 'Pricing',
        path: '/pricing'
    },
    {
        name: 'Contact us',
        path: '/contact-us'
    }
]
function Header() {

    const {user} = useUser()
    return (
        <div className="flex items-center justify-between p-4 shadow">

            {/* Logo X */}
            <div className="flex gap-2 items-center">
                <Image src="/logo.svg" alt="Logo" width={35} height={35} />
                <h2 className="font-bold text-xl">AI Web Generator</h2>
            </div>

            {/* Menu Options */}
            <div className="flex gap-3">
                {MenuOptions.map((menu, index) => (
                    <Button key={index} variant='ghost'>{menu.name}</Button>
                ))}
            </div>

            {/* Get Started Button */}

                <div>
                    {!user ? <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
                <Button>Get Started <ArrowRightIcon /></Button></SignInButton>
                :
                <Link href={'/workspace'}>
                    <Button>Go to Workspace <ArrowRightIcon /></Button>
                </Link>}

                </div>

            
        </div>
    )
}
export default Header