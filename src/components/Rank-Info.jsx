import React from "react";

export default function RankInfo(){
    return(
        <div className="w-[290px] h-[42px] absolute top-[-89px]">
  <div className="w-[290px] h-[42px]">
    <p className="absolute left-[99px] top-[104px] text-[25px] font-bold text-center text-[#ededed]">
      3,900 /100,000
    </p>
    <img
      src="бронза-1.png"
      className="w-[50px] h-[42px] absolute left-[45.5px] top-[98.5px] object-cover"
    />
    <p className="absolute left-[63px] top-[113px] text-[15px] font-bold text-center text-[#ededed]">
      R1
    </p>
    <div className="w-[13px] h-[13px] opacity-50">
      <svg
        width={13}
        height={13}
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[322.5px] top-[113.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
      </svg>
      <p className="w-[6.22px] h-[10.74px] absolute left-[326.39px] top-[114px] text-[8px] text-center text-[#464646]">
        i
      </p>
    </div>
  </div>
  <img
    src="монета-1.png"
    className="w-[23px] h-[27px] absolute left-[165.5px] top-[108.5px] object-none"
  />
  <img
    src="монета-2.png"
    className="w-[23px] h-6 absolute left-[298.5px] top-[108.5px] object-cover"
  />
</div>
    )
}