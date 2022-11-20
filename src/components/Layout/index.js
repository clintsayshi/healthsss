import React from "react";
//import Footer from "../Footer";
import NavigatonHeader from "../NavigationHeader";

function Layout({ children }) {
  return (
    <div>
      <NavigatonHeader />

      {children}

      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
