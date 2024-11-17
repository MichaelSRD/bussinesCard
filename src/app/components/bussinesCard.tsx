import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ['latin'],
  weight: ["100", "300", "400", "700"],
});

export default function BussinesCard() {
  return (
    <div
      className="pt-40 md:pt-52 rounded-lg bg-slate-500 max-w-[300px] md:max-w-[410px] bg-contain bg-no-repeat "
      style={{ backgroundImage: `url('/hero-image-1.jpg')` }}
    >
      <div>
        <Image
          className="relative top-[1px] "
          src={"/white-overlay.svg"}
          alt={""}
          width={500}
          height={500}
        />
      </div>
      <div
        className={`${lato.className} rounded-bl-md rounded-br-md bg-white `}
      >
        <div className="md:p-8 p-4 pt-0 md:pt-0">
          <p className="text-[1.5rem] font-bold text-[#] ">
            Perfect solution for small business
          </p>
          <p className="text-[1rem] pt-5  text-[#4A5567]">
            Small businesses need to generate leads to grow. You can use tools
            like Ringy.
          </p>
        </div>

        <div className="flex md:p-8 p-4 items-center border-t-[1px] pt-5 border-t-[#e8e9eb]">
          <Image
            className="rounded-full"
            src={"/avatar-image-business-card-1.png"}
            alt={""}
            width={50}
            height={50}
          />
          <div className="ml-4">
            <p className="text-[#111729] text-lg font-bold">Amy Burgess</p>
            <p className="text-[#4A5567] text-[1rem]">Customer Manger, Solution Oy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
