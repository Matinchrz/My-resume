const History = () => {
  return (
    <div
      id="history"
      className="w-full sm:my-24 my-12 flex relative justify-center items-center lg:max-w-[1000px] bg-fixed rounded-2xl bgfix h-[55vh] shadow-2xl"
    >
      <div className="flex w-full flex-col justify-between items-center gap-y-6 bg-white opacity-80 rounded-xl h-full p-6 py-8">
        <div className="absolute top-[-6%] right-0 bg-white rounded-t-xl pt-2 px-4 pb-4">
          <p className="font-medium text-xs sm:text-lg">
            Educational Background
          </p>
        </div>
        <div className="sm:flex flex flex-col justify-between items-center gap-x-2 ">
          <img
            src="/uni-logo.png"
            alt="uni-logo"
            className="w-[60px] sm:w-[120px]"
          />
          <p className="font-medium sm:text-2xl text-xl">
            دانشگاه آزاد اسلامی علوم تحقیقات
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-2 w-[90%] sm:max-w-[350px] px-3">
          <p className="font-medium text-lg sm:text-2xl">مقطع کارشناسی</p>
          <p className="font-medium text-lg sm:text-2xl">رشته هوافضا</p>
        </div>
        <p className="font-medium sm:text-2xl text-xl">مهر ۱۳۹۶ تا تیر ۱۴۰۱</p>
      </div>
    </div>
  );
};
export default History;
