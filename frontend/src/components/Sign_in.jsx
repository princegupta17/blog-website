import Navbar from "./Navbar";

function Sign_in() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 border rounded"
                placeholder="Password"
              />
            </div>
            <button className="w-full p-3 bg-blue-500 text-white rounded">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Sign_in;
