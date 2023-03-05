let PaginationMenu = ({
  dataMenusPerPage,
  totalDataMenus,
  paginate,
  currentPage,
}) => {
  let pageNumbers = [];
  console.log(pageNumbers);
  for (let i = 1; i <= Math.ceil(totalDataMenus / dataMenusPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="font-bold text-md py-10 justify-center flex items-center flex-wrap">
        <nav aria-label="Page navigation">
          <ul className="inline-flex gap-4">
            <li>
              {currentPage > 1 && (
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className="h-10 px-5 text-green-600 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-green-100"
                >
                  <svg className="w-4 h-4 fillCurrent" viewBox="0 0 20 20">
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                      fillRule="white"
                    ></path>
                  </svg>
                </button>
              )}
            </li>
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={
                    currentPage == number
                      ? "h-10 px-5  transition-colors duration-150 bg-yellow-200 rounded-lg focus:shadow-outline hover:bg-green-100"
                      : "h-10 px-5  transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-green-100"
                  }
                >
                  {number}
                </button>
              </li>
            ))}
            {currentPage < pageNumbers[pageNumbers.length - 1] && (
              <li>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  className="h-10 px-5 text-green-600 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-green-100"
                >
                  <svg className="w-4 h-4 fillCurrent" viewBox="0 0 20 20">
                    <path
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginationMenu;
