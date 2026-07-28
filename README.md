<img width="1909" height="988" alt="image" src="https://github.com/user-attachments/assets/4f26541c-36d3-4e6b-83e3-226502f92a51" />


```markdown
# 📊 E-Commerce Sales Analytics Dashboard

A modern, responsive sales analytics dashboard built with React.js and Tailwind CSS. It fetches real e-commerce order data, calculates key business metrics (KPIs), and visualizes sales trends dynamically.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF7300?style=for-the-badge&logo=react&logoColor=white)

## ✨ Features

- **Real-time Data Fetching:** Fetches live e-commerce cart/order data from DummyJSON API.
- **Dynamic KPIs:** Calculates and displays Total Revenue, Total Orders, Units Sold, and Average Order Value (AOV) using raw JavaScript array methods.
- **Interactive Data Visualization:** 
  - Bar Chart for Top Customer Revenue.
  - Donut Chart for Order Size Distribution.
- **Dynamic Filtering:** A dropdown to filter the dashboard to show the last 5, 10, or 20 orders. All charts and tables update reactively.
- **Fully Responsive:** Mobile-first design that adapts seamlessly to desktop, tablet, and mobile screens.
- **Professional UI/UX:** Built with a component-driven architecture using Tailwind CSS, featuring a sticky sidebar, top navigation, and reusable UI primitives.

## 🛠️ Tech Stack

- **Frontend Library:** React.js (Vite)
- **Styling:** Tailwind CSS v4
- **Charting Library:** Recharts
- **Icons:** Lucide React
- **API:** [DummyJSON](https://dummyjson.com/)

## 🚀 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ecommerce-sales-dashboard.git
   cd ecommerce-sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## 🏗️ Architecture & Best Practices

This project follows professional frontend development practices:
- **Separation of Concerns:** Business logic (analytics calculations) is separated from UI components (`src/lib/analytics.js`).
- **Custom Hooks:** Data fetching (`useFetchData`) and stateful filtering logic (`useOrderFilter`) are extracted into reusable custom hooks.
- **Component Composition:** The UI is broken down into reusable, atomic components (`src/components/ui`) and feature-specific sections (`src/features/dashboard`).

## 📂 Folder Structure

```text
src/
├── components/       # Shared/global UI components (layout, ui, charts)
├── features/         # Feature-specific components (dashboard sections)
├── hooks/            # Custom React hooks (data fetching, filtering)
├── lib/              # Utility functions (analytics calculations)
├── App.jsx           # Root component
└── main.jsx          # Application entry point
```
```
