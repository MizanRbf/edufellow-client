import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <header></header>
      <main className="min-h-[calc(100vh-230px)]">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default RootLayout;
