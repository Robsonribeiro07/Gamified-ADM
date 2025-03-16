import { Shield } from 'lucide-react'
import { AdminCart } from './admin-cart'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
export function Header() {
  return (
    <header className="w-full p-3  h-24 bg-blue-500  rounded-lg items-center flex justify-between ">
      <div className="flex flex-row  items-center justify-center h-full gap-3 ">
        <Avatar className="w-16 h-16 bg-mint-300 rounded-lg">
          <AvatarImage />
          <AvatarFallback className="bg-blue-600">
            <Shield size={30} color="#fff" />
          </AvatarFallback>
        </Avatar>

        <AdminCart />
      </div>

      <div className="text-white flex items-center gap-3 ">
        <div>
          <h1 className="font-medium text-2xl">Access:</h1>
          <h2 className="font-bold text-3xl">FULL</h2>
        </div>

        <div>
          <h1 className="text-2xl font-medium">Coins</h1>
          <h2 className="text-yellow font-semibold text-3xl">1500</h2>
        </div>
      </div>
    </header>
  )
}
