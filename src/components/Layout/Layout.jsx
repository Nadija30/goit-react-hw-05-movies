import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <h1 className={css.headerTitle}>Movies finder</h1>
        <nav className={css.headerNav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.footer}>
        <p className={css.footerText}>
          &copy; {new Date().getFullYear()} Movie finder footer
        </p>
      </footer>
      <ToastContainer autoClose={3000} />
    </>
  );
};
