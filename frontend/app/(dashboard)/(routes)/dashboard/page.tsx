"use client"
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'

import { cn } from "@/lib/utils";

import { 
    LayoutDashboard, 
    MessagesSquareIcon, 
    ImageIcon, 
    FileVideoIcon, 
    Music2Icon, 
    Code2Icon,
    ArrowRight
 } from "lucide-react";

const DashboardPage = () => {

    const tools = [
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

    ]

    const router = useRouter();

  return (
    <>
    <div className='mb-8 space-y-5'>
        <h2 className='text-xl md:text-2xl font-bold text-center'>
            Elevate Your Workflow Efficiency with AI-Powered Generation.
        </h2>
        <p className='font-light text-sm md:text-lg text-center text-muted-foreground '>
        Revolutionize your productivity with AI-generated solutions. From content creation to data analysis, our technology empowers your workflow.
        </p>
    </div>

    <div className='px-5 md:px-20 lg:px-32 space-y-5'>
        {tools.map((tool) => (
            <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className='p-4 border-black/5 flex items-center justify-between hover:shadow-lg cursor-pointer transition'
            >
                <div className='flex items-center gap-x-3'>
                    <div className={cn("p-2 w-fit rounded-lg bg-[#EDF2F8]", )}>
                        <tool.icon className={cn("w-8 h-8", tool.color)}/>
                    </div>

                    <div className='font-semibold'>
                        {tool.label}
                    </div>

                </div>
                <ArrowRight className='w-5 h-5'/>
            </Card>
        ))}
    </div>
    </>
    
  )
}

export default DashboardPage