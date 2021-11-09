import React from "react";
import Navbar from "./Navbar";
import Bbar from "./Bbar";
import "./Home.css";
import { AiOutlineLogout } from "react-icons/ai";
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();

    let Logout = async () => {
        try {
          let check = window.confirm("Are you sure? Wanna Logout");
          if (check) {
            window.localStorage.removeItem("app_token");
            window.localStorage.removeItem("action");
            history.push("/");
          }
        } catch (error) {
          window.alert("some thing went wrong try again");
        }
      };
  return (
    <>
      <Navbar />
      <div className="image5">
     
        <div className="C-center">
          <div className="C-container C-font" data-aos="fade-up">
            <div className="C-title">Hi guys</div>
            <div>Your JWT token :</div>
            <div>{window.localStorage.getItem("app_token")}</div>
            <div>
            <button className="danger"  onClick={Logout}>
              <AiOutlineLogout /> Logout
            </button>
            </div>
          </div>
        </div>
      </div>
      <Bbar />
    </>
  );
}

export default Home;
