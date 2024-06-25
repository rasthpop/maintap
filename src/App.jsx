import {React, useState} from "react"
import BossTable from "./components/Boss-Info"
import HealthBar from "./components/Boss-Health"
import MenuButtons from "./components/MenButs"
import RankInfo from "./components/Rank-Info"
import Leaderboard from "./menus/Leaderboard"


export default function App(props) {
  const [lead, setLead ] = useState(false)

  return (
    <div >
  {/* BOSS */}
    <BossTable />
    <HealthBar/>

  {/*BEAR HITBOX*/}
      {/* <div className="w-[290px] h-[339px] absolute left-[50px] top-[255px] bg-red-600 opacity-50 z-40 cursor-pointer" ></div>   */}
      {/* <img src="bear.png" className="w-[304px] h-[406px] absolute left-[50px] top-[225px] object-cover" /> */}
  
  {/* UI */}
    <RankInfo/>
    <MenuButtons
    setLead={setLead}
    /> 
    {lead && 
    <Leaderboard
     
    />} 

    <img src="bg.png" className="w-[378px] h-[629px]  object-cover absolute top-[89px] z-[-1]" />
    </div>
  )
}


