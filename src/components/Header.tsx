import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <Link href="/" className="text-lg font-semibold text-gray-700">Hospital Equipment Management</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
          <Link href="/register" className="text-gray-700 hover:text-gray-900">Register</Link>
          <button className="text-gray-600 focus:outline-none">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2zm6-6v-5c0-2.209-1.791-4-4-4V7c0-2.209-1.791-4-4-4S6 4.791 6 7v1c-2.209 0-4 1.791-4 4v5l-2 2v1h20v-1l-2-2zm-2 0H8v-5c0-1.104.896-2 2-2s2 .896 2 2v5z"/>
            </svg>
          </button>
          <div className="relative">
            <button className="text-gray-600 focus:outline-none">
              <span className="sr-only">View profile</span>
              <Image
                src="/path/to/profile-image.jpg"
                alt="Profile Image"
                className="rounded-full h-8 w-8"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
