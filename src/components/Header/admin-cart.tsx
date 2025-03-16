import { Star } from 'lucide-react'

export function AdminCart() {
  return (
    <div className="w-[11vw] h-[85%] bg-blue-600 rounded-lg items-cente text-white items-center  px-4 flex justify-between">
      <div className="flex flex-col">
        <h1>Prof Luis Paulo</h1>
        <h2 className="text-xs">Administrador #982345</h2>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-yellow-300">
        <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
      </div>
    </div>
  )
}
