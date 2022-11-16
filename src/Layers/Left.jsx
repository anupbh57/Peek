import React from 'react'
import SidebarMenu from '../Components/SidebarMenu'
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TrendingSidebarCard from '../Components/TrendingSidebarCard';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SidebarAddButton from '../Components/SidebarAddButton';

function Left() {
    return (
        <div className='left border-r-gray-200 border-r-2 pl-4'>
            <div className='left-top'>
                <SidebarMenu icon={<HomeIcon/>}
                    name="Home"/>
                <SidebarMenu icon={<ChatBubbleIcon/>}
                    name="Your treads"/>
                <SidebarMenu icon={<TurnedInIcon/>}
                    name="Your treads"/>
            </div>

            <div className="left-trending">
              <h2 className="Trending mt-8 mb-8 text-left font-semibold">Trending Channels</h2>
              <TrendingSidebarCard icon={<FiberManualRecordIcon fontSize="small" sx={{ color: "#5446c8"}}/>}
                    name="PewDiePie" stat={<ArrowDropUpIcon sx={{color: "#5446c8"}}/>}/>
              <TrendingSidebarCard icon={<FiberManualRecordIcon fontSize="small" sx={{ color: "#5446c8"}}/>}
                    name="Youtube" stat={<ArrowDropUpIcon sx={{color: "#5446c8"}}/>}/>
              <TrendingSidebarCard icon={<FiberManualRecordIcon fontSize="small" sx={{ color: "#5446c8"}}/>}
                    name="Mr Beast" stat={<ArrowDropDownIcon sx={{color: "#5446c8"}}/>}/>
              <TrendingSidebarCard icon={<FiberManualRecordIcon fontSize="small" sx={{ color: "#5446c8"}}/>}
                    name="The Weeknd" stat={<ArrowDropUpIcon sx={{color: "#5446c8"}}/>}/>
             
            </div>
            <div className='left-button mt-8'>
              <SidebarAddButton bg="rgb(83 61 225)" accent="white" icon={<PlayCircleOutlineIcon/>}
                    name="Add a new video"/>
            </div>
           
        </div>
    )
}

export default Left
