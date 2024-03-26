import Pagination from 'react-bootstrap/Pagination';

export default function PaginationComponent({ currentPage, setCurrentPage, totalPages }) {
    let items = [];
  
    // Add first and previous buttons
    items.push(
      <Pagination.First onClick={() => setCurrentPage(1)} />,
      <Pagination.Prev onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)} />
    );
  
    // Add specific page indexes
    for (let number = 1; number <= totalPages; number++) {
      if (number === 1 || number === totalPages || (number >= currentPage - 2 && number <= currentPage + 2)) {
        items.push(
          <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
            {number}
          </Pagination.Item>
        );
      } else if (number === 2 || number === totalPages - 1) {
        // Add ellipsis
        items.push(<Pagination.Ellipsis />);
      }
    }
  
    // Add next and last buttons
    items.push(
      <Pagination.Next onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)} />,
      <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
    );
  
    return <Pagination className='justify-content-center'>{items}</Pagination>;
  }
  