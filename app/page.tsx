// import { useState } from "react";
// "use client";
import { useState } from "react";
import Landing from "./Landing";
import { LoginForm } from "./components/Login/Login";
import { RegisterForm } from "./components/Register/Register";
import { CompleteInformation } from "./components/Register/CompleteInformation";
import { NumberVerification } from "./components/Register/NumberVerification";

export default function Home() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return  <Landing />
  // return <NumberVerification />
 
}
