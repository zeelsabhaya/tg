const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Michael Lee", email: "michael@example.com", role: "Moderator" },
];

const Users = () => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Users</h2>
      <table className="min-w-full bg-white dark:bg-gray-800 dark:text-white rounded shadow">
        <thead>
          <tr className="text-left border-b dark:border-gray-700">
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
