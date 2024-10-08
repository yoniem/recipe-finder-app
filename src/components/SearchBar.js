import React, { useState } from 'react';

function SearchForm() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to fetch recipes based on the query
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

export default SearchForm;
