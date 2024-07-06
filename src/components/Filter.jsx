import React from 'react'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className='flex justify-around mb-4'>
        <button onClick={() => setFilter('all')} className={`p-2 ${filter === 'all' ? 'font-bold' : ''}`}>All</button>
        <button onClick={() => setFilter('completed')} className={`p-2 ${filter === 'completed' ? 'font-bold' : ''}`}>Completed</button>
        <button onClick={() => setFilter('active')} className={`p-2 ${filter === 'active' ? 'font-bold' : ''}`}>Active</button>
    </div>
  )
}

export default Filter