import React from 'react'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'

function AppHeader() {
  return (
    <div className='p-3 w-full flex justify-between items-center shadow'>
        <SidebarTrigger />
        
    </div>
  )
}

export default AppHeader