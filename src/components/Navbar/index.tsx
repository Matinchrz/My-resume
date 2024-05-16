import { Link } from "react-scroll";
import NavbarMobile from "../NavbarMobile";
import { Separator } from "../ui/separator";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#6ba28f] p-6 px-10 sticky top-2 rounded-xl mx-4 lg:justify-center z-[100] shadow-xl">
      <div className="text-sm lg:flex-grow flex justify-between items-center w-full lg:max-w-[1000px]">
        <div className="sm:hidden">
          <NavbarMobile />
        </div>
        <div className="hidden sm:flex justify-between items-center w-full">
          <Link
            to="info"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-200}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium mr-2 cursor-pointer md:text-base hover:text-[#6a6d64]"
          >
            اطلاعات شخصی
          </Link>
          <Separator />
          <Link
            to="about"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-200}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium mr-2 cursor-pointer md:text-base hover:text-[#6a6d64] "
          >
            درباره من
          </Link>
          <Link
            to="skills"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-150}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium mr-2 cursor-pointer md:text-base hover:text-[#6a6d64]"
          >
            مهارت‌های فنی
          </Link>
          <Link
            to="history"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-200}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium mr-2 cursor-pointer md:text-base hover:text-[#6a6d64]"
          >
            سوابق تحصیلی
          </Link>
          <Link
            to="certificates"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-200}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium mr-2 cursor-pointer md:text-base hover:text-[#6a6d64]"
          >
            گواهی‌ها
          </Link>
          <Link
            to="projects"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-200}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium mr-2 cursor-pointer md:text-base hover:text-[#6a6d64]"
          >
            پروژه ها
          </Link>
          <Link
            to="site"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-200}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium mr-2 cursor-pointer md:text-base hover:text-[#6a6d64]"
          >
            این سایت
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
