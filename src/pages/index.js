import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import MainLayout from "../components/MainLayout";
/*-------------------------------------------------------------*/
import Header from "../components/Section/Header";

function Home() {
  const [currentPosition, setCurrentPosition] = useState();

  return (
    <Layout>
      <MainLayout />
    </Layout>
  );
}

export default Home;
