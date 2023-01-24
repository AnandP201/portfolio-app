import React, { useState } from "react";
import { Modal } from "rsuite";
import "animate.css";

const Home = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="home animate__animated animate__fadeIn  animate__faster">
      <div className="bg-circle animate__animated animate__pulse animate__faster"></div>
      <div className="bg-rectangle animate__animated animate__pulse animate__faster"></div>
      <div className="home_card ">
        <div className="visible_xs">
          <img
            src="https://www.pngitem.com/pimgs/m/501-5017607_programmer-png-clipart-computer-programming-software-programmer-cartoon.png"
            height="250"
            width="250"
            alt="clip"
          />
        </div>
        <div className="info">
          <br />
          <br />
          <br />
          Hey ,<br /> Cheers for the day , it's me
          <br />
          <span className="user">Anand S Pai</span> <br />
          I'm a front-end developer and Java developer
          <br />
          <ul>
            <li>UI/UX Front End Developer</li>
            <li>Java Developer</li>
            <li>Android Developer</li>
          </ul>
          <br />
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <i className="bi bi-envelope-fill"></i> &nbsp;Contact Me
          </button>
          <div className="visible_xs sLinks">
            Follow me
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
            <div>
              <a
                href="https:www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/AnandP201"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/anand-s-pai-687422210"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="imgRef">
          <img
            src="https://www.pngitem.com/pimgs/m/501-5017607_programmer-png-clipart-computer-programming-software-programmer-cartoon.png"
            height="500"
            width="500"
            alt="clip"
          />
        </div>
      </div>

      <Modal
        show={open}
        onHide={() => {
          setIsOpen(false);
        }}
        style={{ marginTop: "100px", borderRadius: "10px" }}
      >
        <Modal.Header>
          <h5>Contact Info</h5>
        </Modal.Header>
        <Modal.Body>
          <h6>E-Mail</h6>
          <div>pie1002anand@gmail.com</div>
          <br />
          <h6>Contact Number</h6>
          <div>8817027318</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
