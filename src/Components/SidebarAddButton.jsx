import React from 'react'

function SidebarAddButton(props) {
  return (
    <div id="sidebar-add-btn" className="flex justify-start w-56 my-4 px-2 py-2 rounded-tl-xl rounded-bl-xl hover:bg-white hover:cursor-pointer" style={{background: props.bg, color:props.accent}}>
        <span className="rounded-xl p-2">{props.icon}</span>
        <span className="sidebarmenu-name ml-4 my-auto">{props.name}</span>  
    </div>
  )
}

export default SidebarAddButton