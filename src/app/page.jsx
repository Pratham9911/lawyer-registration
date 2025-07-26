export default function Home() {
  return (
    <main className="relative flex justify-center items-center min-h-screen text-center bg-[url('/court.jpg')] bg-cover bg-center">
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-md text-center border border-gray-300">

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


