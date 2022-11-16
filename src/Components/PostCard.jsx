import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Reply, YouTube } from '@mui/icons-material';
import { display } from '@mui/system';
function PostCard(props) {
  return (
    <div className='post-card m-auto p-4 bg-white mt-4 rounded-lg hover:cursor-pointer'>
        <h2 className="post-title text-left text-2xl font-semibold my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <div className="post-head flex justify-between">
                <div className='flex bottom-1 mr-3 relative' >
                    <img className="right-trending-video-original-user border-2 rounded-md border-white w-7 h-7 absolute -bottom-1 -left-1"
                    src= {
                    props.original
                    } alt = "Original user profile"></img>
                    <img className="right-trending-video-poster-user border-2 rounded-xl border-white  w-14 h-14"
                   src= {
                    props.poster
                    }alt = "Original poster profile"></img>
                    <div className='ml-2 my-auto italic text-left'>
                        <div>Lorem Ipsum</div>
                        <div className='text-xs'>2 hours ago</div>
                    </div>
                </div>
                <div className="post-head-icons flex flex-end my-auto">
                <span className='mr-2 text-sm my-auto text-green-400'>300k</span>
                    <ArrowCircleUpIcon />
                    <ArrowCircleDownIcon />
                </div>
            </div>
        <img src={props.img} alt="post cover" className="post-image mt-4 rounded-xl" width="700px" />
        <div className="post-action flex flex-start mt-4">
            <div className="post-action-comment px-4 py-2 bg-gray-100 rounded-lg hover:cursor-pointer"><ChatBubbleIcon sx={{color:"gray", fontSize:"20px", margin:"auto"}}/><span className='ml-2 text-sm m-auto'>109 Comments</span></div>
            <div className="post-action-comment px-4 py-2 bg-gray-100 rounded-lg ml-2 relative hover:cursor-pointer"><ChatBubbleIcon sx={{color:"gray", fontSize:"20px"}}/><YouTube sx={{color:"red", fontSize:"15px", position: "absolute", bottom: "8px", right: "10px"}}/></div>
            <div className="post-action-comment px-4 py-2 bg-gray-100 rounded-lg ml-2 hover:cursor-pointer"><Reply sx={{color:"gray", fontSize:"20px"}}/></div>
        </div>
    </div>
  )
}

export default PostCard