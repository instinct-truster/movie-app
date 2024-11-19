import { Outlet, Link } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <header>
        <h2>Movie App</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>Copyright 2024</footer>
    </>
  );
}
