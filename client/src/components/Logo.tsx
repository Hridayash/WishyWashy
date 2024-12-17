
import { Droplets } from 'lucide-react'

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-yellow-400 p-2 rounded-full">
        <Droplets className="w-6 h-6 text-[#1e3a8a]" />
      </div>
      <span className="text-xl font-bold">WISHY WASHY</span>
    </div>
  )
}

