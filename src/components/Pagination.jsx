import React from "react";

const Pagination = ({ count, filteredCount, currentPage, setCurrentPage, pages }) => {
  const pageCount = Array.from({ length: pages }, (_, index) => {
    return index + 1;
  });

  function handlePageChange(e) {
    setCurrentPage(e);
  }

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button key={pageNumber} className={`join-item btn btn-sm sm:btn-md border-none  ${activeClass ? "bg-base-300 border-base-300" : ""}`} onClick={(e) => handlePageChange(parseInt(e.target.innerHTML))}>
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: currentPage === 1 }));

    if (currentPage > 2) {
      pageButtons.push(
        <button className="join-item btn btn-sm sm:btn-md" key="dots-1">
          ...
        </button>
      );
    }

    if (currentPage != 1 && currentPage != pages) {
      pageButtons.push(addPageButton({ pageNumber: currentPage, activeClass: true }));
    }

    if (currentPage < pages - 1) {
      pageButtons.push(
        <button className="join-item btn btn-sm sm:btn-md" key="dots-2">
          ...
        </button>
      );
    }

    if (pages != 1) {
      pageButtons.push(addPageButton({ pageNumber: pages, activeClass: currentPage === pages }));
    }
    return pageButtons;
  };

  return (
    <div className="mt-6 col-span-2 text-end">
      <div className="join ">
        <button
          className="join-item btn btn-sm sm:btn-md "
          onClick={() => {
            let prevPage = currentPage - 1;
            if (prevPage < 1) prevPage = 1;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>

        {renderPageButtons()}

        <button
          className="join-item btn btn-sm sm:btn-md "
          onClick={() => {
            let nextPage = currentPage + 1;
            if (nextPage > pages) nextPage = pages;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
