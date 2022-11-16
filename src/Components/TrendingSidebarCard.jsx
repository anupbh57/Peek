import React from 'react'

function TrendingSidebarCard(props) {
    return (
        <div className="flex justify-between w-56 my-4 px-2 py-2 rounded-tl-xl rounded-bl-xl hover:bg-white hover:cursor-pointer">
            <div className='flex w-11/12'>
                <span className=" bg-gray-200 rounded-xl p-2 ">
                    {
                    props.icon
                }</span>
                <span className="sidebarmenu-name ml-4 my-auto">
                    {
                    props.name
                }</span>
            </div>
            <span className='m-auto w-1/12'>{props.stat}</span>
        </div>
    )
}

export default TrendingSidebarCard
 