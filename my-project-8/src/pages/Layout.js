import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
    <Header />
      <nav id="main_nav">
        <ul id="main_nav_items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sleeptracker">Log A Symptom</Link>
          </li>
          <li>
            <Link to="/disorders">Sleep-Wake Disorders</Link>
          </li>
          <li>
            <Link to="/statistics">Sleep Calendar</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
    <Outlet />
    <Footer />
    </>
  )
};

export default Layout;