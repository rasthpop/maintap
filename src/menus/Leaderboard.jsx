import React from "react";

export default function Leaderboard(){
    return(
        <main className="w-[375px] h-[576px] z-50">
  <div className="w-[375px] h-[552px] absolute left-[-1.5px] top-[179.5px] rounded-tl-[40px] rounded-tr-[41px] bg-[#a67752] border-[3px] border-[#521a0c]" />
  <div className="w-[141px] h-[29px]">
    <div className="w-[141px] h-[29px]">
      <p className="absolute left-28 top-[197px] text-2xl font-medium text-center text-[#ededed]">
        Leaderboard:
      </p>
    </div>
  </div>
  <div className="w-[17.68px] h-[17.68px]">
    <div className="w-1 h-[21px] absolute left-[347.35px] top-[204.5px] bg-[#ececec]" />
    <div className="w-1 h-[21px] absolute left-[332.5px] top-[207.33px] bg-[#ececec]" />
  </div>
  <div className="w-[349px] h-[429px] absolute left-[12.5px] top-[244.5px] rounded-[20px] bg-[#835339]" />
  <div className="w-[302px] h-[397px]">
    <p className="w-[108px] absolute left-[33px] top-[339px] text-base font-medium text-left text-white">
      Username
   </p>
    <p className="w-[147px] absolute left-[188px] top-[339px] text-base font-medium text-left text-white">
      1.000.000 Honey
    </p>
    
  </div>
  <img src="src/assets/star.png" className="w-0 h-0 absolute left-[169.5px] top-[252.5px] object-cover" />
  <img
    src="звезда-2.png"
    className="w-[50px] h-[50px] absolute left-[162.5px] top-[156.5px] object-cover"
  />
</main>
    )
}