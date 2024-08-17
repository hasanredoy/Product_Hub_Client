import { FaGreaterThan, FaLessThan } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Pagination = ({setCurrentPage,currentPage,itemsCount,count}) => {

  const itemsPerPage = itemsCount;
  const totalPage = Math.ceil(count / itemsPerPage);
  let numberOfPages = [];
  // console.log(numberOfPages);
  for (let i = 0; i < totalPage; i++) {
    // console.log(i);
    numberOfPages.push(i);
  }
  //  previous page controller 
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  // next page controller 
  const handleNext = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className=" min-w-full grid grid-cols-4 lg:flex justify-center gap-5 my-5  p-5">
        <button onClick={handlePrev} className=" btn">
          <FaLessThan></FaLessThan>
        </button>
        {/* eslint-disable-next-line react/prop-types */}
          {numberOfPages?.map((page) => (
            <button
            onClick={() => setCurrentPage(page)}
            className={` btn ${
              currentPage === page && "btn bg-purple-600 text-white font-bold "
            } `}
            key={page}
          >
            {page + 1}
          </button>
        ))}
            <div></div>
        <button onClick={handleNext} className=" btn">
          <FaGreaterThan></FaGreaterThan>
        </button>
        </div>
  );
};

export default Pagination;