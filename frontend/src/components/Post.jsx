import Navbar from "./Navbar";
import Footer from "./Footer";
import Comment from "./Comment";

function Post() {
  return (
    <>
      <Navbar />
      <div className="m-8 bg-white">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Post"
          className="pb-3 w-96 h-48 object-cover rounded-md"
        />
        <p className="pb-2 text-2xl font-bold text-[#183B56]">title</p>
        <p className="pb-4 font-normal text-base  text-[#183B56]">
          description
        </p>
        <form className="flex flex-col w-44 h-12 gap-4 mb-12">
          <input
            type="text"
            placeholder="Comment"
            className="pb-6 bg-slate-300"
          />
          <button className="bg-sky-800 rounded-lg w-20 h-10">Submit</button>
        </form>
        <p className="pb-3 font-normal text-base  text-[#183B56]">Comments</p>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <Footer />
    </>
  );
}

export default Post;
