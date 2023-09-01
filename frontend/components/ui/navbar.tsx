import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs'

import MobileSidebar from '@/components/ui/mobile_sidebar';

const Navbar = () => {
  return (
    <div className='flex items-center p-4'>
        <MobileSidebar/>
        <div  className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/'/>
        </div>
    </div>
  )
}

export default Navbar