export default function Home() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-10">
        <h1 className="text-4xl font-bold mb-4">🚀 Welcome to PromptNest</h1>
        <p className="mb-6 text-lg text-gray-600">
          Your MVP is live. Choose where to go:
        </p>
        <div className="flex gap-4">
          <a
            href="/dashboard"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            View Dashboard
          </a>
          <a
            href="/create"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Create Prompt
          </a>
        </div>
      </main>
    );
  }
  