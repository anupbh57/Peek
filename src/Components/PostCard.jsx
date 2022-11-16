import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
function PostCard(props) {
  return (
    <div className='post-card w-3/4 m-auto'>
        <h2 className="post-title text-left text-2xl font-semibold my-4">This is a title</h2>
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
                        <div>Mr Beast</div>
                        <div className='text-xs'>2 hours ago</div>
                    </div>
                </div>
                <div className="post-head-icons flex flex-end my-auto">
                    <ArrowCircleUpIcon />
                    <ArrowCircleDownIcon />
                </div>
            </div>
        <img src={props.img} alt="post cover" className="post-title" />
    </div>
  )
}

export default PostCard