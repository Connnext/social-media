// src/pages/Home/Home.tsx
import React from "react";
import { Link } from "react-router";
import { ROUTES } from "utils/constants/routes";

function Home() {
  return (
    <div>
      <h1>Stories</h1>
      <h1>CreateNewPost</h1>
      <h1>Sort</h1>
      <h1>NewsFeed</h1>
    </div>
  );
}

export default Home; // Экспорт компонента как default
