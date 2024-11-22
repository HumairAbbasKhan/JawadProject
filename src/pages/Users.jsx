import React from "react";

const users = [
  {
    id: "2504c2aa",
    health: "Good",
    healthClass: "text-green-600",
  },
  {
    id: "8783cba0",
    health: "Okay",
    healthClass: "text-yellow-600",
  },
  {
    id: "4c3f7a26",
    health: "Poor",
    healthClass: "text-orange-600",
  },
  {
    id: "472efd0a",
    health: "Critical",
    healthClass: "text-red-600",
  },
];

const UserPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <div className="overflow-x-auto mx-28 pl-16">
        <table className="min-w-full max-w-full bg-white shadow-md rounded-lg mx-auto border border-gray-00">
          <thead>
            <tr className="h-[54px] bg-customBlue text-left text-sm uppercase text-blue-700 border-b border-gray-300">
              <th className="py-3 px-4 border-r border-gray-300">Id</th>
              <th className="py-3 px-4 border-r border-gray-300">Health</th>
              <th className="py-3 px-4 border-r border-gray-300">Inspect</th>
              <th className="py-3 px-4 border-r border-gray-300">Reach out</th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={`border-b border-gray-300 ${
                  user.health === "Critical" ? "bg-red-200" : ""
                }`}
              >
                <td className="py-3 px-4 border-r border-gray-300">
                  {user.id}
                </td>
                <td
                  className={`py-3 px-4 font-semibold border-r border-gray-300 ${user.healthClass}`}
                >
                  {user.health}
                </td>
                <td className="py-3 px-4 text-center border-r border-gray-300">
                  <button className="text-blue-600 hover:text-blue-800">
                    ➜
                  </button>
                </td>
                <td className="py-3 px-4 text-center border-r border-gray-300">
                  <button className="text-blue-600 hover:text-blue-800">
                    🗨️
                  </button>
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="text-red-600 hover:text-red-800">✖</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
