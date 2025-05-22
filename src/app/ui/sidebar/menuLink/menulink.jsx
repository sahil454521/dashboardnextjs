import Link from 'next/link'
import React from 'react'

const Menulink = ({item}) => {
  return (
    <div>
      <Link href={item.path} className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-200 rounded-md">
        {item.icon} {item.title}
      </Link>
    </div>
  )
}

export default Menulink