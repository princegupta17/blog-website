import Allpost from "./Allpost";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "../Slice/userSlice";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getuser() {
      try {
        const response = await axios.get("/api/v1/users/userProfile");
        const user = response.data.data;
        dispatch(getUser(user));
      } catch (error) {
        console.log(error);
      }
    }
    getuser();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="m-16 grid gap-5 grid-cols-4">
        <Allpost />
        <Allpost />
        <Allpost />
        <Allpost />
        <Allpost />
        <Allpost />
        <Allpost />
        <Allpost />
      </div>
      <Footer />
    </>
  );
}

export default Home;
