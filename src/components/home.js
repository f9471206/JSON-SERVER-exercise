import React, { useEffect, useState } from "react";
import testServce from "../services/test.service";
import Getdata from "./getdata";
import PostData from "./postdata";

const Home = () => {
  const [allData, setAllData] = useState("");

  useEffect(() => {
    testServce
      .home()
      .then((d) => {
        setAllData(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div style={{ padding: "5rem", maxWidth: "1200px", margin: "auto" }}>
      <PostData allData={allData} setAllData={setAllData} />
      <Getdata allData={allData} setAllData={setAllData} />
    </div>
  );
};

export default Home;
