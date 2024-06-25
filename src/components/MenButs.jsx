import React, { useState } from "react";

export default function MenuButtons({setLead}){
    function handleLead(){
        setLead(true)
    }

    return(
        <div className="w-[382px] h-[84.42px] absolute top-[-89px]">
        <div className="w-[382px] h-[84.42px]">
          
          {/* MENU BUTTONS HITBOXES */}
          <div onClick={handleLead} className="bg-blue-300 cursor-pointer w-[59px] h-[45px] absolute top-[660px] left-[22px] z-40 opacity-50">Leaders</div>
          <div className="bg-blue-300 cursor-pointer w-[59px] h-[45px] absolute top-[660px] left-[88px] z-40 opacity-50">Friends</div>
          <div className="bg-blue-900  w-[65px] h-[54px] absolute top-[653px] left-[155px] z-40 opacity-50">Coming soon</div>
          <div className="bg-blue-300 cursor-pointer w-[59px] h-[45px] absolute top-[660px] left-[227px] z-40 opacity-50">Quests</div>
          <div className="bg-blue-300 cursor-pointer w-[59px] h-[45px] absolute top-[660px] left-[293px] z-40 opacity-50">Treasure</div>
          
          <div className="w-[382px] h-[84.42px] ">
            <img
              src="menubuts.png"
              className="w-[382px] h-[84.42px] absolute left-[-4.5px] top-[633.5px] object-cover"
            />
            <p className="w-[76.45px] h-[21.09px] absolute left-[79px] top-[690px] text-[13px] font-medium text-center text-[#ededed]">
              Friends
            </p>
            <p className="w-[76.45px] h-[21.09px] absolute left-[13px] top-[690px] text-[13px] font-medium text-center text-[#ededed]">
              Leaders
            </p>
            <p className="w-[76.45px] h-[21.09px] absolute left-[150px] top-[680px] opacity-75 text-[13px] font-medium text-center text-[#ededed]">
              Retreat
            </p>
            <p className="w-[66.24px] h-[10.39px] absolute left-[154px] top-[693px] opacity-75 text-[8px] font-medium text-center text-white">
              Coming soon
            </p>
            <img
              src="ресурс-1-2.png"
              className="w-[46px] h-[27px] absolute left-[94.5px] top-[666.5px] object-none"
            />
            <img
              src="ресурс-1-3.png"
              className="w-[39px] h-[33px] absolute left-[170.5px] top-[652.5px] object-none"
            />
            <img
              src="цепь-с-медом-3.png"
              className="w-[40.37px] h-[19.31px] absolute left-[171.67px] top-[672.71px] object-cover"
            />
          </div>
          <div className="w-[139px] h-[48.25px]">
            <p className="w-[71px] h-[24.2px] absolute left-[220px] top-[689.05px] text-[13px] font-medium text-center text-[#ededed]">
              Quests
            </p>
            <p className="w-[71px] h-[24.2px] absolute left-72 top-[689.05px] text-[13px] font-medium text-center text-[#ededed]">
              Treasure
            </p>
            <img
              src="ресурс-3@2x-1.png"
              className="w-[21px] h-7 absolute left-[245.5px] top-[664.5px] object-none"
            />
          </div>
          <div className="w-[29px] h-[26px] absolute left-[37px] top-[666px] overflow-hidden" />
          <div className="w-[38px] h-9 absolute left-[304px] top-[662px] overflow-hidden bg-[url('ресурс-5-1.png')] bg-cover bg-no-repeat bg-center" />
        </div>
        <img src="звезда-1.png" className="w-9 h-9 absolute left-[32.5px] top-[661.5px] object-cover" />
      </div> 
    )
}