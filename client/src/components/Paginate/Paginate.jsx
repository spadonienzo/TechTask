import './Paginate.css'

const Paginate = ({ itemsPerPage, currentPage, setCurrentPage, totalItems }) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pages.push(i);
    }
  
    const handleNext = () => {
      if (currentPage < pages.length) setCurrentPage(currentPage + 1);
      else alert("No more pages found");
    };
  
    const handlePrevious = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
      else alert("No more pages found");
    };
  
    const onSpecificPage = (n) => {
      setCurrentPage(n);
    };
  
    return (
      <div className='pagination'>
        <a display={true} onClick={handlePrevious}>&laquo;</a>
        {pages?.map((nPage) => (
            <a className={currentPage === nPage ? 'active' : 'a'} onClick={() => onSpecificPage(nPage)}>
            {nPage}
            </a>
        ))}
        <a display={true} onClick={handleNext}>&raquo;</a>
      </div>
    );
  };
  
  export default Paginate;