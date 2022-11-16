import React from 'react'
import AddIcon from '@mui/icons-material/Add';

function VideoImportCard() {
  return (
    <div id = "videoImportCard" className='w-full'>
        <form className="relative">
                <input type="text" className="nav-search bg-white px-3 py-4 rounded-2xl w-full " placeholder='Paste URL to import a new video'/>
                <span className=" bg-white absolute right-2 rounded-xl top-2 p-2 hover:cursor-pointer"><AddIcon sx = {{color:"white"}}className=''/></span>
            </form>
    </div>
  )
}

export default VideoImportCard