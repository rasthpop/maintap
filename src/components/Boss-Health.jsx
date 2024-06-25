import React from "react";

export default function HealthBar(){
    return(
    <div className="w-[328px] h-[26px]">
  <div className="w-[328px] h-[26px]">
    <img
      src="src/assets/rectangle-34.png"
      className="w-[328px] h-[26px] absolute left-[21.5px] top-[214.5px] rounded-[39px] object-cover"
    />
  </div>
  <div className="w-[326px] h-[26px]">
    <img
      src="src/assets/rectangle-34-2.png"
      className="w-[326px] h-[26px] absolute left-[21.5px] top-[214.5px] rounded-[39px] object-none"
    />
  </div>
  <p className="w-[145px] h-[21px] absolute left-[116px] top-[219px] text-sm font-medium text-center text-[#ecebea]">
    xxxxx/xxxxx HP
  </p>
</div>
)}