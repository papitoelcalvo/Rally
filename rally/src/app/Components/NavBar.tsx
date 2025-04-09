import { NextPage } from "next";

interface Props {}

const NavBar: NextPage<Props> = ({}) => {
  return (
    <div className=" text-white absolute w-full h-[10vh] bg-[#000000b2] flex items-center justify-between pl-10 pr-10">
      <img
        src="https://www.itesa.edu.do/web/wp-content/uploads/2024/06/itesa-logo.png"
        alt=""
        className="w-[30vh]"
      />
      <nav>
        <ul className="flex">
          <a href="">
            {" "}
            <li className="text-[1.6em] pl-[5vh]">Inicio</li>
          </a>{" "}
          <a href="">
            {" "}
            <li className="text-[1.6em] pl-[5vh]">Rally</li>
          </a>{" "}
          <a href="#Contacto">
            {" "}
            <li className="text-[1.6em] pl-[5vh]">Contacto</li>
          </a>
          <a href="">
            {" "}
            <li className="text-[1.6em] pl-[5vh]">Login</li>
          </a>{" "}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
