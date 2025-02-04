import { Bell, Search, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="text-gray-500 ml-2" size={20} />
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="text-gray-500" size={20} />
          <User className="text-gray-500" size={20} />
        </div>
      </div>
    </header>
  )
}

