import Top from "./Top";
import Bottom from "./Bottom"

const Section = ({data}) => {
  // console.log(data);
  return (
    <>
      <Top />
      <Bottom dC={data} />
    </>
  );
};
export default Section;
