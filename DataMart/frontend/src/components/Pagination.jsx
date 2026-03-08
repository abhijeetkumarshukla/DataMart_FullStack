const Pagination = ({ page, setPage }) => {

  return (
    <div className="flex justify-center items-center gap-3 mt-10">

      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        className="
          px-4
          py-2
          bg-gray-200
          rounded-md
          hover:bg-gray-300
        "
      >
        Previous
      </button>

      <span className="font-medium text-gray-700">
        Page {page}
      </span>

      <button
        onClick={() => setPage((p) => p + 1)}
        className="
          px-4
          py-2
          bg-blue-600
          text-white
          rounded-md
          hover:bg-blue-700
        "
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;