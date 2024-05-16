import { AlignJustify } from "lucide-react";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetDescription,
} from "../ui/sheet";
import { Link } from "react-scroll";

const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent side={"top"} className="flex flex-col p-0">
        <SheetDescription className="grid grid-cols-2 gap-y-3 p-8 bg-[#6ba28f]">
          <Link
            to="info"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-120}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium hover:text-[#6a6d64] mr-2 cursor-pointer"
          >
            اطلاعات شخصی
          </Link>{" "}
          <Link
            to="about"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-120}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium hover:text-[#6a6d64] mr-2 cursor-pointer"
          >
            درباره من
          </Link>
          <Link
            to="skills"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-120}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium hover:text-[#6a6d64] mr-2 cursor-pointer"
          >
            مهارت‌های فنی
          </Link>
          <Link
            to="history"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-120}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium hover:text-[#6a6d64] mr-2 cursor-pointer"
          >
            سوابق تحصیلی
          </Link>
          <Link
            to="certificates"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-120}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium hover:text-[#6a6d64] mr-2 cursor-pointer"
          >
            گواهی‌ها
          </Link>
          <Link
            to="projects"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-120}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium hover:text-[#6a6d64] mr-2 cursor-pointer"
          >
            پروژه ها
          </Link>
          <Link
            to="section1"
            spy={true}
            activeClass="text-[#cab2a9] underline underline-offset-8"
            smooth={true}
            offset={-120}
            duration={1000}
            className="flex justify-between items-center lg:inline-block lg:mt-0 text-[#e6ead8] font-medium hover:text-[#6a6d64] mr-2 cursor-pointer"
          >
            مهارت‌
          </Link>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
export default NavbarMobile;
