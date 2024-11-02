import { useState } from "react";


function App() {
     // Mock data array of items
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  
  // State for the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Items per page
  const itemsPerPage = 10;

  // Maximum number of page numbers to show at a time
  const maxPageNumbersToShow = 5;

  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the range of page numbers to display
  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <>
      <div>
      <h1>Pagination Example with Page Numbers</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              backgroundColor: currentPage === number ? '#007bff' : '#f0f0f0',
              color: currentPage === number ? 'white' : 'black',
              border: '1px solid #ddd',
              cursor: 'pointer'
            }}
          >
            {number}
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
    </>
  )
}

export default App
