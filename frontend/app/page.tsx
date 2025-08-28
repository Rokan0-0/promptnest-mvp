export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-900">🚀 Welcome to Promptnest</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-md text-center">
        Share, discover, and optimize AI prompts with the community.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get Started
        </a>
        <a
          href="/about"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}
