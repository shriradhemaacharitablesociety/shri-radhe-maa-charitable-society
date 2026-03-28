"use client";

type Role = "Super Admin" | "Content Editor";

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: Role;
  lastActive: string;
}

const users: AdminUser[] = [
  {
    id: 1,
    name: "Karan Kashyap",
    email: "karankashyap@srm.org",
    role: "Super Admin",
    lastActive: "2026-03-28",
  },
  {
    id: 2,
    name: "Society Admin",
    email: "admin@srm.org",
    role: "Content Editor",
    lastActive: "2026-03-26",
  },
];

const roleBadge: Record<Role, string> = {
  "Super Admin": "bg-crimson-100 text-crimson-600",
  "Content Editor": "bg-saffron-100 text-saffron-700",
};

export default function UsersPage() {
  return (
    <div className="space-y-6 font-sans p-4 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold text-warm-900">User Management</h1>
        <button className="rounded-lg bg-crimson-500 px-4 py-2 text-sm font-medium text-white hover:bg-crimson-600">
          Add User
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-warm-100 bg-white shadow-sm">
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="min-w-[600px] w-full text-left text-sm">
          <thead>
            <tr className="bg-warm-50 text-warm-600">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Last Active</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-warm-100 hover:bg-warm-50">
                <td className="px-5 py-3 font-medium text-warm-900">{u.name}</td>
                <td className="px-5 py-3 text-warm-600">{u.email}</td>
                <td className="px-5 py-3">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${roleBadge[u.role]}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-5 py-3 text-warm-500">{u.lastActive}</td>
                <td className="px-5 py-3">
                  <button className="text-sm font-medium text-crimson-500 hover:text-crimson-700">Edit</button>
                  <span className="mx-2 text-warm-200">|</span>
                  <button className="text-sm font-medium text-warm-500 hover:text-warm-700">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
