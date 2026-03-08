import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

import { useProducts } from "../hooks/useProducts";

const Dashboard = () => {

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { products, total, loading } =
    useProducts(page, search);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="flex-1 p-6 md:p-8">

          <div className="max-w-7xl mx-auto space-y-6">

            {/* Stats */}
            <StatsCards total={total} />

            {/* Search */}
            <SearchBar onSearch={setSearch} />

            {/* Product List */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 transition">

              <ProductList
                products={products}
                loading={loading}
              />

            </div>

            {/* Pagination */}
            <Pagination
              page={page}
              setPage={setPage}
            />

          </div>

        </main>

      </div>

    </div>
  );
};

export default Dashboard;