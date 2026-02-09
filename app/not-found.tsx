import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-baby-pink px-4">
      <h1 className="text-2xl font-bold text-gray-800">404</h1>
      <p className="mt-2 text-gray-600">Page not found.</p>
      <Link href="/" className="mt-4 text-rose-600 hover:underline">
        Go home
      </Link>
    </div>
  );
}
