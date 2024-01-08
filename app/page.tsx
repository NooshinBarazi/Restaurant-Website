// import { useState } from "react";
// "use client";
import { useState } from "react";
import Landing from "./Landing";
import RegisterModal from "./components/Register";
import { LoginForm } from "./components/Login/Login";

export default function Home() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return  <Landing />
  // return (
  //   <>
  //     {/* <button onClick={openModal}>send</button>
  //    <RegisterModal open={isModalOpen} onClose={closeModal} /> */}
  //     <LoginForm />
  //   </>
  // );
}
