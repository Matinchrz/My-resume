import { useState } from "react";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [firstShow, setFirstShow] = useState(true);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
    setFirstShow(false);
  };

  const mySkills = [
    "HTML5",
    "CSS3",
    "React",
    "JavaScript",
    "Next.JS",
    "Git",
    "Tailwind",
    "TypeScripe",
    "SASS",
  ];

  return (
    <div id="skills" className="my-24 flex flex-col w-full items-center">
      <div className="cube cursor-pointer" onClick={toggleSkills}>
        <div className="face front flex flex-col justify-center items-center gap-y-0.5">
          <img src="react.png" alt="react" width="50px" />
          <p>React</p>
        </div>
        <div className="face back  flex flex-col justify-center items-center gap-y-0.5">
          <img src="git.png" alt="git" width="50px" />
          <p>Git</p>
        </div>
        <div className="face left  flex flex-col justify-center items-center gap-y-0.5">
          <img src="html5.png" alt="html5" width="50px" />
          <p>HTML5</p>
        </div>
        <div className="face right  flex flex-col justify-center items-center gap-y-0.5">
          <img src="js.png" alt="js" width="50px" />
          <p>JS</p>
        </div>
        <div className="face top  flex flex-col justify-center items-center gap-y-0.5">
          <img src="tailwind.png" alt="tailwind" width="50px" />
          <p>Tailwind</p>
        </div>
        <div className="face bottom  flex flex-col justify-center items-center gap-y-0.5">
          <img src="css3.png" alt="css3" width="50px" />
          <p>CSS3</p>
        </div>
      </div>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 mt-24 w-full ${
          firstShow ? "hidden" : showSkills ? "show" : "hide"
        }`}
      >
        {mySkills.map((item) => (
          <div className="p-2 m-1 salam bg-white rounded-2xl" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
