import React from 'react'
import Icon from '../icon.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';


function Nav() {
    return (
        <div id="nav" className='bg-white px-8 py-4 flex flex-row justify-between'>
            <div className="nav-left flex flex-row justify-start my-auto basis-1/6">
                <img src={Icon}
                    className="h-8" alt="Main logo"></img>
                <span className="site-name text-2xl font-semibold ml-2">Peek</span>
            </div>
            <form className="nav-center relative basis-2/6 justify-end hidden lg:flex xl:flex 2xl:flex">
                <input type="text" className="nav-search bg-gray-100 px-3 py-4 rounded-2xl w-4/5 " placeholder='Type to search'/>
                <span className=" bg-white absolute right-2 rounded-xl top-2 p-2 hover:cursor-pointer"><SearchIcon className=''/></span>
            </form>
            <ul className="nav-menus flex flex-row justify-around basis-5/12 m-auto max-w-lg font-medium">
                <li className="nav-menu-item gray-text">Menu</li>
                <li className="nav-menu-item gray-text">Communities</li>
                <li className="nav-menu-item gray-text">Videos</li>
                <li className="nav-menu-item gray-text">Dashboard</li>
            </ul>
            <span className="bg-white rounded-xl p-2 hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden basis-1/12 hover:cursor-pointer"><SearchIcon/></span>

            <div className="nav-icons flex justify-end m-auto basis-1/12">
                <span className="rounded-full top-2 p-2 mr-4 hover:cursor-pointer text-xs"><NotificationsIcon className='text-grey text-xs'/></span>
                <span className="rounded-full top-2 p-2 hover:cursor-pointer"><PersonIcon/></span>
            </div>

        </div>
    )
}

export default Nav
