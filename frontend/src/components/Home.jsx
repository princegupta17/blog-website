import Allpost from "./Allpost";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
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
