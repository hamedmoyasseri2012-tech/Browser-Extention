import Top from "./Top";
import Bot from "./Bot";

const Section = ({data}) => {
  // console.log(data);
  return (
    <>
      <Top />
      <Bot mamd={data} />
    </>
  );
};
export default Section;
