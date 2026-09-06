import { Link } from 'react-router-dom';
import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="not-found">
        <div className="not-found__blob not-found__blob--teal" />
        <div className="not-found__blob not-found__blob--lime" />

        <section className="not-found__content">
          <div className="not-found__code">404</div>
          <h1 className="not-found__title">Page Not Found</h1>
          <p className="not-found__desc">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="not-found__btn">
            Back to Home
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
