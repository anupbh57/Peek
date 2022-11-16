import React from 'react'
import Youtube from '../youtube.jpg'
import RightTrendingVideo from '../Components/RightTrendingVideo';
import PersonIcon from '@mui/icons-material/Person';
import SidebarRecommendation from '../Components/SidebarRecommendation';
import Poster from "../user-1.jpg";
import Original from "../user-2.jpg"

function Right() {
    return (
        <div className='right border-l-gray-300 border-l-2 pr-4'>
            <div className='right-top'>
                <h2 className="Trending mt-8 mb-8 text-left font-semibold ml-4">Featured Video</h2>
                <RightTrendingVideo img={Youtube}
                    original={<PersonIcon/>}
                    poster={<PersonIcon/>}/>
            </div>
            <hr className='w-3/4 m-auto h-4'></hr>
            <h2 className="Trending mt-8 mb-8 text-left font-semibold ml-4">Recommendations</h2>
            <div className='right-bottom'>
                <SidebarRecommendation name="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    img={Youtube}
                    poster={Poster}
                    original={Original}/>
                <SidebarRecommendation name="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    img={Youtube}
                    poster={Poster}
                    original={Original}/>
                <SidebarRecommendation name="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    img={Youtube}
                    poster={Poster}
                    original={Original}/>
                <SidebarRecommendation name="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    img={Youtube}
                    poster={Poster}
                    original={Original}/>
            </div>
        </div>
    )
}

export default Right
