import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ search, setSearch, handleSearch }) => (
  <Form inline className="mb-4">
    <Form.Control
      type="text"
      placeholder="Enter ingredient"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mr-sm-2"
    />
    <Button variant="primary" onClick={handleSearch}>Search</Button>
  </Form>
);

export default SearchBar;
