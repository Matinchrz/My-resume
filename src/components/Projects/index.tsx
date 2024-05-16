const Projects = () => {
  return (
    <div
      id="projects"
      className="sm:my-24 my-12 rounded-2xl flex w-full justify-between bg-gray-100 lg:max-w-[1000px] p-5 shadow-2xl"
    >
      <a
        href=""
        target="_blank"
        className="flex justify-center items-center gap-x-1 font-bold pointer-events-none"
        dir="ltr"
      >
        My GitHub
        <img src="github.png" alt="github" className="w-[20px]" />
      </a>
    </div>
  );
};
export default Projects;
