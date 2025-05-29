const Dashboard = () => {
  const stats = [
    { title: "Total Users", value: 1324 },
    { title: "Products", value: 278 },
    { title: "Revenue", value: "$12,430" },
    { title: "Orders", value: 190 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
          <h2 className="text-2xl font-bold dark:text-white">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
