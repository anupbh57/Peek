import React from 'react'
import PostCard from '../Components/PostCard'
import VideoImportCard from '../Components/VideoImportCard'
import Poster from "../user-1.jpg";
import Original from "../user-2.jpg";
import PostImage from "../youtube.jpg"
function Center() {
  return (
    <div id = "center" className='center px-2 w-full mx-auto mt-8'>
        <VideoImportCard/>
        <PostCard img={PostImage} original={Original} poster={Poster}/>
        <PostCard img={PostImage} original={Original} poster={Poster}/>
        <PostCard img={PostImage} original={Original} poster={Poster}/>
        <PostCard img={PostImage} original={Original} poster={Poster}/>
        <PostCard img={PostImage} original={Original} poster={Poster}/>

    </div>
  )
}

export default Center