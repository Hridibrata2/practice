import React, { useState } from 'react';
import './SearchList.css';

function SearchList({ items = [] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(({ name }) => 
    name?.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="search-list">
      <h2 className="search-header">Searchable List</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Type to filter..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <ul className="search-ul">
        {filteredItems.map((item, idx) => (
          <li key={item.id ?? idx} className="search-item">
            {item?.name || 'Unnamed'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;