import Card from "../Card";
import { Separator } from "../ui/separator";

const Certificates = () => {
  return (
    <div
      id="certificates"
      className="w-full my-12 sm:my-24 flex flex-col relative md:justify-between justify-center items-center lg:max-w-[1000px] bg-fixed rounded-2xl bg-[#5ab7bb] p-6 md:h-[50vh] md:flex-row min-h-[360px] drop-shadow-2xl"
    >
      <Card
        disabled={false}
        link="https://coursera.org/verify/RB894RV2HRQC"
        title="Introduction to Front-End Development"
        img={
          <img
            src="/cour-ht.png"
            alt="coursera certificate"
            className="w-52 h-[50%] min-h-[135px] shadow-lg"
          />
        }
        des={
          <p
            dir="ltr"
            className="flex font-medium w-52 justify-center items-center gap-x-1"
          >
            by
            <a
              href="https://www.coursera.org/meta"
              className=" cursor-pointer"
              target="_blank"
            >
              <img src="/Meta-Logo.png" width="60px" />
            </a>
            &
            <a
              href="https://www.coursera.org/"
              className=" cursor-pointer"
              target="_blank"
            >
              <img src="/Coursera.png" width="70px" />
            </a>
          </p>
        }
      />

      <Separator />

      <Card
        disabled={false}
        link="https://quera.org/certificate/CyyAZELm/"
        title="Front-End development with React"
        img={
          <img
            src="/quera.jpg"
            alt="coursera certificate"
            className="w-52 h-[50%] min-h-[135px] shadow-lg"
          />
        }
        des={
          <p
            dir="ltr"
            className="flex font-medium justify-center items-center gap-x-1 pb-1"
          >
            by
            <a
              href="https://quera.org/"
              className=" cursor-pointer"
              target="_blank"
            >
              <img src="quera-logo2.svg" className="w-[70px]" />
            </a>
          </p>
        }
      />

      <Separator />

      <Card
        disabled={true}
        link=""
        title="Advanced React"
        img={
          <div className="bg-white w-full max-w-52 h-[50%] min-h-[135px] flex justify-center items-center border shadow-xl cursor-not-allowed">
            <p className="font-bold text-lg opacity-50">soon</p>
          </div>
        }
        des={
          <p
            dir="ltr"
            className="flex font-medium w-52 justify-center items-center gap-x-1"
          >
            by
            <a
              href="https://www.coursera.org/meta"
              className=" cursor-pointer"
              target="_blank"
            >
              <img src="/Meta-Logo.png" width="60px" />
            </a>
            &
            <a
              href="https://www.coursera.org/"
              className=" cursor-pointer"
              target="_blank"
            >
              <img src="/Coursera.png" width="70px" />
            </a>
          </p>
        }
      />
    </div>
  );
};

export default Certificates;
