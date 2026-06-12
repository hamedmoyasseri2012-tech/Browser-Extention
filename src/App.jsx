import Footer from "./Componet/Footer";
import Section from "./Componet/Exstention_list/Section";
import Header from "./Componet/Header";

import data from "../public/data.json";
import { useState } from "react";

const App = () => {
  const source = JSON.stringify(data);
  const [info, setInfo] = useState(data);

  // console.log("information: ",info);

  // console.log("source: ",source);

  return (
    <>
      <Header />
      <Section data={info} />
      <Footer />
    </>
  );
};
export default App;
