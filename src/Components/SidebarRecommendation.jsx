import React from 'react'

function SidebarRecommendation(props) {
    return (
        <div className='sidebar-recommendation-video flex hover:bg-white rounded-tr-xl rounded-br-xl px-2 py-2 my-2 border-l-2 border-transparent hover:cursor-pointer'>
            <div className="sb-r-v-left relative">
                <img src={
                    props.img
                } width="100px" className='rounded-lg' alt = "Video cover"></img>
                <div className='sb-r-vr-bottom right-2 flex absolute bottom-1 mr-3' ><img className="right-trending-video-original-user border-2  border-r-transparent rounded-tl-xl rounded-bl-xl border-white w-5 h-5 mb-1"
                   src= {
                    props.original
                } alt = "Original user profile"></img>
                <img className="right-trending-video-poster-user border-2 rounded-full border-white  w-5 h-5 absolute left-3 bottom-1"
                   src= {
                    props.poster
                }alt = "Original poster profile"></img></div>
            </div>
            <div className="sb-r-v-right w-48 text-sm text-left ml-1 font-semibold">
                <div className="sb-r-vr-top">
                    {
                    props.name
                }</div>
                
            </div>
        </div>
    )
}

export default SidebarRecommendation
