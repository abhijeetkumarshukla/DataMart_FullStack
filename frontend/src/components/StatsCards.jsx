const StatsCards = ({ total }) => {

  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-6
      mb-8
    "
    >

      <div className="bg-white p-6 rounded-xl shadow border">
        <p className="text-gray-500 text-sm">
          Total Products
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-2">
          {total}
        </h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow border">
        <p className="text-gray-500 text-sm">
          Categories
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-2">
          6
        </h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow border">
        <p className="text-gray-500 text-sm">
          Dataset Size
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-2">
          Large
        </h3>
      </div>

    </div>
  );
};

export default StatsCards;