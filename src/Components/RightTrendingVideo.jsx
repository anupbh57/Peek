import React from 'react'

function RightTrendingVideo(props) {
    return (
        <div className="right-trending-video">
            <div className="right-trending-video-users text-left w-11/12 m-auto relative">
                <img src ={props.img} width="250px" className='mx-auto' alt = "Video cover"></img>
                <div className='absolute bottom-2 right-2'><span className="right-trending-video-original-user border-2 rounded-full p-1 inline-block bg-purple-200 border-white">
                    {
                    props.original
                }</span>
                <span className="right-trending-video-original-user border-2 rounded-full p-1 bg-green-200 border-white absolute -left-5">
                    {
                    props.poster
                }</span></div>
                
            </div>
            <h5 className="Trending mt-4 mb-8 font-semibold text-center w-11/12 m-auto">Last To Take Hand Off Jet Keeps It!</h5>

        </div>
    )
}

export default RightTrendingVideo
