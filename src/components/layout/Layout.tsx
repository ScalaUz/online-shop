import { Outlet, useOutlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "components/pages/Home";

interface Props {}

const Layout = (props: Props) => {
  const outlet = useOutlet();

  return (
    <>
      <Header></Header>
      {outlet ? <Outlet /> : <Home></Home>}
      <Footer></Footer>
    </>
  );
};

export default Layout;
