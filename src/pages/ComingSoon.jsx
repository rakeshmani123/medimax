import SiteNav from '../components/SiteNav.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import './ComingSoon.css';

export default function ComingSoon() {
  return (
    <>
      <SiteNav />
      <main className="coming-soon">
        <div className="coming-soon__blob coming-soon__blob--teal" />
        <div className="coming-soon__blob coming-soon__blob--lime" />
        <div className="coming-soon__blob coming-soon__blob--deep" />

        <section className="coming-soon__content">
          <div className="coming-soon__badge">Coming Soon</div>
          <h1 className="coming-soon__title">
            We're Working on<br />
            <span className="coming-soon__accent">Something Great</span>
          </h1>
          <p className="coming-soon__desc">
            Our new website is under construction. Stay tuned for an exciting
            healthcare experience from MediMax Global.
          </p>
          <div className="coming-soon__newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              className="coming-soon__input"
              readOnly
            />
            <button className="coming-soon__btn" type="button">
              Notify Me
            </button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
