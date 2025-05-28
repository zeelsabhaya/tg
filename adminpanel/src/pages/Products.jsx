const products = [
  { id: 101, name: "iPhone 14", price: "$999", stock: 25 },
  { id: 102, name: "Samsung Galaxy S22", price: "$899", stock: 10 },
  { id: 103, name: "MacBook Pro", price: "$1999", stock: 5 },
];

const Products = () => {
  return (
    <div className="overflow-x-auto dark:text-white"> 
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
        <thead>
          <tr className="text-left border-b dark:border-gray-700">
            <th className="p-4">Product</th>
            <th className="p-4">Price</th>
            <th className="p-4">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
