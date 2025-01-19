import React, { useEffect, useState } from 'react';
import EachUser from '../EachUser';
import './index.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import { ThreeDots } from 'react-loader-spinner';

const Home = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortOrder, setSortOrder] = useState('A-Z');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; 

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const filteredUsers = userDetails
    .filter(user => user.name.toLowerCase().includes(searchInput.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'A-Z') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleCheckboxChange = (order) => {
    setSortOrder(order);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Home-container">
      <div className="sub-search-container">
        {/* Search Section */}
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search by name..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchSharpIcon fontSize="medium" className="search-icon" />
        </div>

        {/* Filter Section */}
        <div className="filter-container">
          <FilterAltSharpIcon fontSize="large" className="filter-icon" />
          <label>
            <input
              type="radio"
              name="sortOrder"
              value="A-Z"
              checked={sortOrder === 'A-Z'}
              onChange={() => handleCheckboxChange('A-Z')}
            />
            A-Z
          </label>
          <label>
            <input
              type="radio"
              name="sortOrder"
              value="Z-A"
              checked={sortOrder === 'Z-A'}
              onChange={() => handleCheckboxChange('Z-A')}
            />
            Z-A
          </label>
        </div>
      </div>

      {/* User List */}
      {filteredUsers.length === 0 ? (
        <div className="products-loader-container">
          <ThreeDots color="#0b69ff" height={50} width={50} />
        </div>
      ) : (
        currentUsers.map((eachItem) => <EachUser key={eachItem.id} eachItem={eachItem} />)
      )}

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Display page numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
