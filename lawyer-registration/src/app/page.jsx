export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen text-center bg-blue-600">
      <div className="bg-white p-10 mt-10 md:mt-0 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Advocate Registration</h1>
        <p className="mb-6 text-black">Register to participate in bar council events</p>
        <a href="/register">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base">
            Register as Advocate
          </button>
        </a>
      </div>
    </main>
  );
}
