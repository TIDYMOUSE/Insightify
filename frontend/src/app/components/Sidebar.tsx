import { BarChart2, ShoppingBag, Users, Settings } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="bg-blue-600 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
              <BarChart2 size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/products" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
              <ShoppingBag size={20} />
              <span>Products</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/customers" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
              <Users size={20} />
              <span>Customers</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/settings" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700">
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

