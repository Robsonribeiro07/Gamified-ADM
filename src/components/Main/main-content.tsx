import { ReactNode } from 'react'
import { NavContent } from '../Sidebar/nav-content'

export function MainContent({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[28%_1fr] w-full min-h-screen mt-10 gap-5">
      <NavContent />
      {children}
    </div>
  )
}
