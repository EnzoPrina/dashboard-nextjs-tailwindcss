import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  const route = router.asPath.substring(1)

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white capitalize">{route}</h1>
      </div>
    </nav>
  );
}
