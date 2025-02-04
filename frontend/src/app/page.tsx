import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SalesOverview from "./components/SalesOverview"
import TopProducts from "./components/TopProducts"
import CustomerDemographics from "./components/CustomerDemographics"

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SalesOverview />
            <TopProducts />
            <CustomerDemographics />
          </div>
        </main>
      </div>
    </div>
  )
}

