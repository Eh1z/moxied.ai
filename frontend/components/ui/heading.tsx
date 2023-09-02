import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeadingComponentProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const HeadingComponent = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor
} : HeadingComponentProps) => {
  return (
    <>
    <div className='px-5 lg:px-8 flex items-center gap-x-3 mb-8'>
      <div className={cn("p-2 w-fit rounded-lg", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)}/>
      </div>

      <div>
      <h2 className='text-2xl font-bold'>
        {title}
      </h2>
      <p className='text-sm text-muted-foreground'>
        {description}
      </p>
      </div>
    </div>
    </>
  )
}

export default HeadingComponent