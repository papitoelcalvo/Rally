import { NextPage } from "next";

interface Props {}

const Rally: NextPage<Props> = ({}) => {
  return (
    <div className="">
      <div className="w-full h-[100vh] pt-[10vh]">
        <div className="w-full h-[90vh] bg-black"></div>
      </div>
      <div className="w-full h-[100vh] pt-[10vh]">
        <div className="w-full h-[90vh] bg-black"></div>
      </div>
      <div className="w-full h-[100vh] pt-[10vh]">
        <div className="w-full h-[90vh] flex ">
          <div className="w-0 h-0 border-b-[400px] border-b-red-500 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent -rotate-90"></div>
          <div className="w-0 h-0 border-b-[400px] border-b-red-500 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent rotate-180"></div>
          <div className="w-0 h-0 border-b-[400px] border-b-red-500 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent "></div>
        </div>
      </div>
    </div>
  );
};

export default Rally;
