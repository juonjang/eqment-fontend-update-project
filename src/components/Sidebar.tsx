import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen flex flex-col fixed">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <Link href="/" className="text-xl font-semibold">Hospital Management</Link>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
          </li>
          <li>
            <Link href="/forms" className="block py-2 px-4 rounded hover:bg-gray-700">Forms</Link>
          </li>
          <li>
            <Link href="/users" className="block py-2 px-4 rounded hover:bg-gray-700">Users</Link>
          </li>
          <li>
            <Link href="/equipment" className="block py-2 px-4 rounded hover:bg-gray-700">Equipment</Link>
          </li>
          <li>
            <Link href="/responses" className="block py-2 px-4 rounded hover:bg-gray-700">Responses</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <Link href="/settings" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</Link>
      </div>
    </aside>
  );
}
