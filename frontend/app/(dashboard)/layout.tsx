import  Navbar  from '@/components/ui/Navbar'

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
  return (
    <div className='relative h-full'>
        <div className='hidden h-full md:w-64 md:flex md:flex-col md:fixed md:inset-y-0 z-50 bg-gray-800'>
            <div>
                Hello Sidebar
            </div>
        </div>

        <main className="md:pl-64">
            Dashboard page
            <Navbar/>
        </main>
    </div>
  )
}

export default DashboardLayout