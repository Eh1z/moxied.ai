"use client";

import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { 
    LayoutDashboard, 
    MessagesSquareIcon, 
    ImageIcon, 
    FileVideoIcon, 
    Music2Icon, 
    Code2Icon,
    Settings,
    Settings2,  
 } from "lucide-react";

const montserrat = Montserrat({ 
    weight: "600", 
    subsets: ["latin"] 
});

const routes = [
    {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-[#313BAC] ',
    },
    {
    label: 'Conversation',
    icon: MessagesSquareIcon,
    href: '/conversation',
    color: 'text-[#313BAC] ',
    },
    {
        label: 'Code Generation',
        icon: Code2Icon,
        href: '/code',
        color: 'text-[#313BAC] ',
    },
    {
        label: 'Image Generation',
        icon: ImageIcon,
        href: '/image',
        color: 'text-[#313BAC] ',
    },
    {
        label: 'Video Generation',
        icon: FileVideoIcon,
        href: '/video',
        color: 'text-[#313BAC] ',
    },
    {
        label: 'Music Generation',
        icon: Music2Icon,
        href: '/music',
        color: 'text-[#313BAC] ',
    },
    {
        label: 'Settings',
        icon: Settings2,
        href: '/settings',
        color: 'text-black'
    },
];

const Sidebar = () => {

    const pathname = usePathname();

  return (
    <div className='space-y-4 py-4 flex flex-col h-full '>
        <div className='px-3 py-2 flex-1'>
            <Link href='/dashboard'
            className='flex items-center pl-3 mb-20'>
                <div className="relative w-10 h-10 mr-5">
                    <Image
                    fill
                    alt=''
                    src='/logo.png'
                    />
                </div>
                <div className={cn("text-2xl font-bold", montserrat.className)}>
                    Moxied
                </div>
            </Link>

            <div className="space-y-5">
                {routes.map((route) => (
                    <Link 
                    href={route.href}
                    key={route.href}
                    className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer   hover:text-[#313BAC] hover:bg-white rounded-lg transition", 
                    pathname === route.href ?
                    "text-[#313BAC] bg-white" :
                    "text-black"
                    )}
                    >
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("w-5 h-5 mr-3", route.color)}/>
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar