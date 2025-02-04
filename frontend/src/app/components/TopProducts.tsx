export default function TopProducts() {
    const products = [
      { name: "Product A", sales: 1234 },
      { name: "Product B", sales: 987 },
      { name: "Product C", sales: 765 },
      { name: "Product D", sales: 543 },
      { name: "Product E", sales: 321 },
    ]
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Top Products</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{product.name}</span>
              <span className="font-semibold">{product.sales}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  