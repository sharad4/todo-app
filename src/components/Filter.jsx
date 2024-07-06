import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center mb-4">
      <button
        onClick={() => setFilter('all')}
        aria-pressed={filter === 'all'}
        className={`px-4 py-2 mx-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        aria-pressed={filter === 'active'}
        className={`px-4 py-2 mx-2 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        aria-pressed={filter === 'completed'}
        className={`px-4 py-2 mx-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
