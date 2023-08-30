import { Button} from '@/components/ui/button'
import  Link  from 'next/link'
export default function Home() {
  return (
    <h1>Landing page (unprotected)
        <Link href='/sign_in'>
        <Button >
            Login
        </Button>
        </Link>

        <Link href='/sign_up'>
        <Button >
            Sign Up
        </Button>
        </Link>
        
    </h1>
  )
}
