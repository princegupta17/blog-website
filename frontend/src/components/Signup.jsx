import { useState } from "react";
import Navbar from "./Navbar";

function Signup() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded"
                placeholder="Name"
              />
            </div>
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
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Profile Picture
              </label>
              <input
                type="file"
                className="w-full p-3 border rounded"
                onChange={handleImageChange}
              />
              {preview && (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="mt-4 w-32 h-32 rounded-full mx-auto"
                />
              )}
            </div>
            <button className="w-full p-3 bg-blue-500 text-white rounded">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
