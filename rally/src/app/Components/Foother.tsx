import { NextPage } from "next";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

interface Props {}

const Foother: NextPage<Props> = ({}) => {
  return (
    <div
      id="Contacto"
      className="w-full h-[70vh] bg-[url(https://www.laprovinciadivarese.it/wp-content/uploads/2024/01/San-Giovanni-Bosco.jpg)] bg-cover bg-repeat"
    >
      <div className="w-full h-full bg-[#000000a9] flex items-center justify-center">
        <div>
          <img
            src="https://www.itesa.edu.do/web/wp-content/uploads/2024/06/itesa-logo.png"
            alt=""
            className="w-[50vh]"
          />
          <p className="text-white ">
            Formando buenos cristianos y honrados ciudadanos.
          </p>
        </div>
        <div className="w-[2px] h-3/4 m-[10vh] bg-gray-400"></div>
        <div className="flex flex-col text-white">
          <h2 className="flex items-center text-[1.6em] m-[2vh]">
            <IoLink className=" mr-[2vh]" />
            Enlaces de interes
          </h2>
          <a className="text-[1.2em] mt-[1vh]" href="">
            Parroquia María Auxiliadora
          </a>
          <a className="text-[1.2em] mt-[1vh]" href="">
            Centro Salesiano OMA
          </a>
          <a className="text-[1.2em] mt-[1vh]" href="">
            Centro Salesiano Unida 27 de Febrero
          </a>
          <a className="text-[1.2em] mt-[1vh]" href="">
            Oratorio Centro Juvenil
          </a>
          <a className="text-[1.2em] mt-[1vh]" href="">
            Educación laboral{" "}
          </a>
        </div>
        <div className="w-[2px] h-3/4 m-[10vh] bg-gray-400"></div>
        <div>
          <div className="mb-[3vh]">
            <div className="  text-white flex items-center text-[1.4em]">
              <FaPhoneAlt />
              <p className="ml-[2vh]">Telefono</p>
            </div>
            <p className="text-white ml-[5vh]">809-536-9191</p>
          </div>
          <div className="mb-[3vh]">
            <div className="  text-white flex items-center text-[1.4em]">
              <MdEmail />
              <p className="ml-[2vh]">Email</p>
            </div>
            <p className="text-white ml-[5vh]">info@itesa.edu.do</p>
          </div>
          <div className="mb-[3vh]">
            <div className="  text-white flex items-center text-[1.4em]">
              <FaLocationDot />
              <p className="ml-[2vh]">Dirección</p>
            </div>
            <p className="text-white ml-[5vh] w-[30vh]">
              Av.Albert Thomas 66, Santo Domingo DN.
            </p>
          </div>

          <div className="flex text-[2.5em] text-white">
            <a href="https://www.instagram.com/itesa.rd/">
              <IoLogoInstagram className="m-2 bg-black p-2 rounded-full hover:bg-gray-900" />
            </a>
            <a href="https://www.facebook.com/ITESARD">
              <FaFacebook className="m-2 bg-blue-700 p-2 rounded-full hover:bg-blue-600" />
            </a>
            <a href="https://www.youtube.com/@institutotecnicosalesianoi4680">
              <FaYoutube className="m-2 bg-red-600 p-2 rounded-full hover:bg-red-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foother;
