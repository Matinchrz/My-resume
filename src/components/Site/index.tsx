const AboutThisSite = () => {
  return (
    <div
      className="sm:my-24 my-16 rounded-2xl flex w-full bg-gray-100 lg:max-w-[1000px] p-5 shadow-2xl flex-col justify-center gap-y-4 items-center"
      id="site"
    >
      <p className="sm:font-medium sm:text-base text-sm">
        در این سایت از React با Vite به همراه Typescript و Tailwind استفاده کردم
        و پکیج هایی که استفاده شده شامل :
      </p>

      <a href="https://ui.shadcn.com/">
        <p className="flex gap-x-2 justify-center items-center font-medium  sm:text-base text-sm">
          Shadcn/ui
          <img className="w-[15px] h-[15px]" src="shadcn.png" />
        </p>
      </a>

      <a href="https://lucide.dev/">
        <p className="flex gap-x-2 justify-center items-center font-medium  sm:text-base text-sm">
          Lucide : icon
          <img src="lucide.svg" />
        </p>
      </a>

      <p className="sm:font-medium sm:text-base text-sm">
        در اجرای انیمیشن ها از پکیجی استفاده نشده و تمامی انیمیشن ها با CSS
        نوشته شده و این سایت full responsive نوشته شده است.
      </p>
    </div>
  );
};
export default AboutThisSite;
