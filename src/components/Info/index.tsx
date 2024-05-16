import { useEffect, useRef } from "react";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";

const Info = () => {
  const picanim = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const picElement = picanim.current;

    if (picElement) {
      const timer = setTimeout(() => {
        picElement.classList.add("animate-rotate");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      id="info"
      className="flex w-full relative justify-between bg-gray-100 rounded-2xl lg:max-w-[1000px] sm:p-5 px-2 shadow-2xl sm:mb-24 mb-0"
    >
      <div
        ref={picanim}
        className="absolute sm:bottom-[-30%] bottom-[-20%] sm:left-[10%] left-[-1%] z-10 rotate-[310deg] bg-white sm:w-32 sm:h-40 w-[75px] h-24 flex justify-center items-center shadow-2xl picanim"
      >
        <img src="me.jpg" alt="matin chehrehsaz" className="h-[90%]" />
      </div>
      <div className="sm:w-11/12 grid grid-cols-2 sm:py-8 col-span-2 py-4">
        <div className="text-right flex flex-col gap-y-10 sm:pr-8">
          <div className="flex justify-start gap-x-2 items-center">
            <UserRound size={16} />
            <p className="sm:font-medium text-xs sm:text-lg">
              محمد متین چهره ساز
            </p>
          </div>

          <div className="flex justify-start gap-x-2 items-center">
            <Phone size={16} />
            <p className="sm:font-medium text-xs sm:text-lg">09124878229</p>
          </div>
          <div className="flex justify-start gap-x-2 items-center">
            <Mail size={16} />
            <p className="sm:font-medium text-[11px] sm:text-lg">
              matinchehrehsaz@gmail.com
            </p>
          </div>
          <div className="flex justify-start gap-x-2 items-center">
            <MapPin size={16} />
            <p className="sm:font-medium text-xs sm:text-lg">تهران</p>
          </div>
        </div>
        <div className="text-right flex flex-col gap-y-10 mr-4">
          <p className="sm:font-medium text-xs sm:text-lg">
            سن : 25 سال (متولد 1378)
          </p>
          <p className="sm:font-medium text-xs sm:text-lg">
            وضعیت سربازی : معاف
          </p>
          <p className="sm:font-medium text-xs sm:text-lg">وضعیت تأهل : مجرد</p>
          <p className="sm:font-medium text-xs sm:text-lg">جنسیت: مرد</p>
        </div>
      </div>
      <div className="hidden sm:relative sm:w-1/12 sm:border-r-2 sm:flex sm:items-center sm:justify-center sm:border-dashed sm:border-black">
        <p className="rotate-[270deg] absolute top-[48%] mr-4 font-bold text-lg w-60">
          PERSONAL INFORMATION
        </p>
      </div>
    </div>
  );
};

export default Info;
