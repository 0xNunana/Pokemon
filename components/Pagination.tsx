import React from 'react'

const Pagination = () => {
  return (
    <div className='max-w-screen-2xl mx-auto mt-16 flex justify-between'>
<ul className='flex gap-4'>
    <li className='bg-[#E1E1E1] p-2'>1</li>
    <li className='bg-[#E1E1E1] p-2'>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
<div>
    <select className='p-2'>
        <option>8</option>
        <option>12</option>
        <option>16</option>
        <option>20</option>
        <option>24</option>
    </select>
</div>
    </div>
  )
}

export default Pagination