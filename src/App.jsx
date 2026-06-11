import Footer from "./Componet/Footer";
import Section from "./Componet/Exstention_list/Section";
import Header from "./Componet/Header";
import data from "../public/data.json"
const App = () => {
  const info = JSON.stringify(data)
  console.log(info);
  return (
    < >
      <Header />
      <Section data={info}/>
      <Footer />
    </>
  );
};
export default App;
