import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "lucide-react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen w-full bg-gray-100 dark:bg-gray-900">
            <Loader className="w-12 h-12 text-blue-600 animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;