# DataMart Dashboard

A modern React dashboard for managing and exploring product data.
The application allows users to browse products, search, paginate results, and view detailed information for each product.

The project focuses on **clean architecture, performance optimization, and a modern UI using Tailwind CSS**.

---

# 🚀 Features

* Product Dashboard
* Product Detail Page
* Search Products
* Pagination
* Statistics Cards
* Responsive Layout
* Lazy Loading (Performance Optimization)
* Modern UI with Tailwind CSS
* Sidebar Navigation
* Loading Spinner

---

# 🧱 Tech Stack

### Frontend

* React
* React Router
* Tailwind CSS
* Vite
* Axios

### Backend (API)

* Node.js
* Express
* MongoDB

---

# 📁 Project Structure

```
frontend
│
├── src
│   ├── api
│   │   └── productApi.js
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Pagination.jsx
│   │   ├── StatsCards.jsx
│   │   └── Loader.jsx
│   │
│   ├── hooks
│   │   └── useProducts.js
│   │
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   └── ProductDetail.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

# ⚙️ Installation Guide

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```
git clone <repository-url>
cd datamart
```

---

### 2️⃣ Install Dependencies

Navigate to the frontend folder and install dependencies.

```
cd frontend
npm install
```

---

### 3️⃣ Start the Development Server

```
npm run dev
```

The app will start at:

```
http://localhost:5173
```

---

# 📦 Environment Variables

If the backend API runs on a different port, create a `.env` file.

Example:

```
VITE_API_URL=http://localhost:5000/api
```

---

# 📊 Application Pages

## Dashboard

The dashboard displays:

* Product statistics
* Search functionality
* Paginated product list
* Sidebar navigation

---

## Product Detail

Each product has a dedicated page displaying:

* Product name
* Category
* Price
* Description

The page is loaded dynamically using route parameters.

---

# 🔎 Search Feature

Users can search products by name.
Search results update dynamically using API requests.

---

# 📄 Pagination

Pagination is implemented to improve performance and usability when dealing with large datasets.

Users can navigate between pages of products easily.

---

# ⚡ Performance Optimizations

## Lazy Loading

The application uses **React.lazy** and **Suspense** for route-based code splitting.

Example:

```
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
```

Benefits:

* Smaller initial bundle size
* Faster initial page load
* Components loaded only when needed

---

## Memoization

Product cards are wrapped with **React.memo** to prevent unnecessary re-renders.

```
export default React.memo(ProductCard);
```

---

# 🎨 UI & Styling

The UI is built using **Tailwind CSS**.

Features include:

* Responsive layout
* Hover animations
* Modern dashboard layout

---

# 🌙 Dark Mode

Dark mode is implemented using Tailwind's `dark` class.

The theme is toggled dynamically and saved in `localStorage`.

---

# 🔄 Data Fetching

Data is fetched using **Axios**.

Example:

```
axios.get("/products")
```

A custom hook `useProducts` handles:

* API calls
* Loading state
* Product data

---

# 📱 Responsive Design

The dashboard is fully responsive and works across:

* Desktop
* Tablet
* Mobile

---

# 📌 Future Improvements

Possible enhancements for future versions:

* Product creation and editing
* Authentication
* Advanced analytics
* Charts and graphs
* Product images
* Export reports

---

# 👨‍💻 Author

Developed as part of a technical assignment to demonstrate:

* React architecture
* API integration
* UI design
* Performance optimization

---

# ThankYou.
 
