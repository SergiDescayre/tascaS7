import React from 'react'

const HeadersCards = ({title}) => {
  return (
    <div className="p-2 border-t border-b border-gray-500 block">
      <span>{title}</span>
    </div>
  )
}

export default HeadersCards