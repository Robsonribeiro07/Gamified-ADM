import { Plus } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu'
import { Nav } from '../../Desktop/Sidebar/nav/nav'
import { NavContent } from '../../Desktop/Sidebar/nav/nav-content'
import { NavContentMobile } from './nav-content'
import { Button } from '@/components/ui/button'

export function DropdowmNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none ">
        <Button variant="secondary" className="w-14 h-14 cursor-pointer">
          <Plus size={30} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="h-[50vh] mr-3 bg-blue-500">
        <NavContentMobile />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
