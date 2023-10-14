import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      {/* TODO: rewrite Layout to use Outlet Layout in Reactjs */}
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
