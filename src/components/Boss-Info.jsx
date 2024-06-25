import React from "react";

export default function BossTable(){
    return(
        <div className="w-[329px] h-[61px]">
  <div className="w-[329px] h-[61px]">
    <img
      src="src/assets/Rectangle41.png"
      className="w-[329px] h-[61px] absolute left-5 top-[145px] rounded-[10px] object-cover"
    />
    <div className="w-[106px] h-[34.45px]">
      <img
        src="ресурс-1@2x-1.png"
        className="w-[12.99px] h-[14.29px] absolute left-[88.66px] top-[182.37px] object-cover"
      />
      <img
        src="череп-1.png"
        className="w-[25px] h-[25px] absolute left-[60.5px] top-[165.5px] object-cover"
      />
      <p className="w-14 h-[11px] absolute left-[98px] top-[182px] text-[10px] font-medium text-center text-[#f0f0f0]">
        Level: LEVEL
      </p>
      <p className="w-[78px] h-[23px] absolute left-[89px] top-[162.71px] text-base font-medium text-left text-[#ededed]">
        B_NAME
      </p>
    </div>
  </div>
  <div className="w-[78px] h-[37.74px]">
    <p className="w-[66.24px] h-[10.39px] absolute left-[161px] top-[181.87px] opacity-75 text-[10px] font-medium text-center text-white">
      Coming soon
    </p>
    <p className="w-[78px] h-[23px] absolute left-[154px] top-[162.71px] opacity-75 text-base font-medium text-center text-[#ededed]">
      HP heal
    </p>
    <img
      src="src/assets/цепь-с-медом-1.png"
      className="w-[50.37px] h-[24.09px] absolute left-[167.53px] top-[164.14px] object-cover rotate-[16.96deg]"
    />
  </div>
  <div className="w-[101px] h-[41.29px]">
    <p className="w-[101px] h-[23px] absolute left-[218px] top-[162.71px] text-base font-medium text-center text-[#ededed]">
      Loot
    </p>
    <p className="w-[88px] h-[23px] absolute left-[229px] top-[181px] text-[10px] font-medium text-center text-[#ededed]">
      xxxxx
    </p>
  </div>
  <img
    src="src/assets/монета-2.png"
    className="w-[11px] h-3 absolute left-[245.5px] top-[181.5px] object-cover "
  />
</div>
    )
}