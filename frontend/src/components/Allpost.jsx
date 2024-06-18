function Allpost() {
  return (
    <>
      <div className="h-96 w-72 bg-slate-100 rounded-md">
        {/* image div */}
        <div className="h-1/2">
          <img
            src="https://imgs.search.brave.com/zIt2UsaFjjPvNaXRG35zE0nmzOjd-fThbpsZ6OxnEbQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDAzOTI0/LzI1MDIvaS80NTAv/ZGVwb3NpdHBob3Rv/c18yNTAyMTg2My1z/dG9jay1waG90by1o/dG1sLXdlYi1jb2Rl/LmpwZw"
            alt="try image"
            className="h-full w-full object-cover rounded-t-md"
          />
        </div>

        {/* description div */}
        <div className="h-1/2 p-5 flex flex-col">
          {/* title */}
          <div className="mb-2">
            <a href="/post/id">
              <p className="text-2xl font-bold text-[#183B56]">
                Future of work
              </p>
            </a>
          </div>

          {/* description */}
          <div className="mb-4">
            <p className="font-normal text-base  text-[#183B56]">
              Majority of peole will work in jobs that don’t exist today.
            </p>
          </div>

          {/* user */}
          <div className="space-x-16">
            <span className="italic font-bold text-sm text-[#183B56]">
              Prince Gupta
            </span>
            <span className="text-[#5A7184] font-normal italic text-sm">
              2nd May
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allpost;
