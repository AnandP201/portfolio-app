import React, { useState, useEffect } from "react";
import { Loader, Modal } from "rsuite";
import "animate.css";
import axios from "axios";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const [modalData, setModalData] = useState({});

  useEffect(() => {
    axios
      .get("/certificates/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const closeSideBar = () => {
    document.getElementById("cert").style.display = "none";
  };

  const showSideBar = () => {
    document.getElementById("cert").style.display = "block";
  };

  return (
    <div className="skills_page animate__animated animate__fadeIn animate__faster">
      <button
        className="open_side"
        onClick={() => {
          showSideBar();
        }}
      >
        <i className="bi bi-card-list"></i>{" "}
      </button>

      <div
        className="certificates animate__animated animate_fadeIn animate__slower"
        id="cert"
      >
        <span
          className="visible_xs close_btn"
          onClick={() => {
            closeSideBar();
          }}
        >
          <i className="bi bi-x-circle-fill"></i>{" "}
        </span>
        <h3 align="center">
          <i className="bi bi-trophy-fill" style={{ color: "yellow" }}></i>
        </h3>

        <div className="scroll_c">
          {loading && (
            <div className="loader">
              <Loader size="md" />
            </div>
          )}

          {!loading && (
            <div className="certificates_area">
              {data.map((item) => {
                return (
                  <div
                    className="square"
                    key={item._id}
                    onClick={() => {
                      setIsOpen(true);
                      setModalData(item);
                    }}
                  >
                    <img src={item.image} height="100" width="200" alt="cert" />
                    <div>{item.course}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Modal
          show={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
          size="md"
          style={{ color: "black" }}
        >
          <Modal.Header>
            <h5>
              {modalData.course}&nbsp;
              <a href={modalData.link} target="_blank" rel="noreferrer">
                <i className="bi bi-link-45deg"></i>
              </a>
            </h5>
          </Modal.Header>
          <Modal.Body
            style={{
              overflow: "hidden",
            }}
          >
            <img
              src={modalData.image}
              height="400"
              width="900"
              alt="certificate"
              style={{ marginLeft: "-55px" }}
            />
          </Modal.Body>
        </Modal>
      </div>

      <div className="skills_card">
        <div className="skills_area animate__animated animate_fadeIn animate__slower">
          <h4 align="center">SKILLS</h4>
          <div className="lang animate__animated animate_fadeIn animate__slower">
            <div className="lang_icon">
              <img
                src="https://image.flaticon.com/icons/png/512/226/226777.png"
                height="80"
                width="80"
                alt="java_logo"
              />
            </div>
            <div className="lang_info">
              <h6>Java</h6>
              <p>
                Java Basics, Java Swing and AWT, Web Connectivity , Android
                Development, Java Managing HTTP Requests
              </p>
            </div>
          </div>
          <div className="lang animate__animated animate_fadeIn animate__slower">
            <div className="lang_icon">
              <img
                src="https://journeyofthegeekcom.files.wordpress.com/2019/01/python_logo.png"
                height="80"
                width="80"
                alt="py_logo"
              />
            </div>
            <div className="lang_info">
              <h6>Python</h6>
              <p>
                Python Data Structures, Web Scraping using BeautifulSoup, Python
                Tkinter GUI
              </p>
            </div>
          </div>
          <div className="lang animate__animated animate_fadeIn animate__slower">
            <div className="lang_icon">
              <img
                src="https://docs.microsoft.com/cs-cz/windows/images/c-logo.png"
                height="80"
                width="80"
                alt="c/c++_logo"
              />
            </div>
            <div className="lang_info">
              <h6>C/C++</h6>
              <p>
                Advanced data structures - Trees, Graphs, Object Oriented
                Concepts, File read/write operations
              </p>
            </div>
          </div>
          <div className="lang animate__animated animate_fadeIn animate__slower">
            <div className="lang_icon">
              <img
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                height="80"
                width="80"
                alt="js_logo"
              />
            </div>
            <div className="lang_info">
              <h6>HTML, CSS and JavaScript</h6>
              <p>
                Responsive web designing, Web Connectivity with MongoDB
                database, <br />
                <font color="blue">
                  <b>
                    <i>ReactJS</i>
                  </b>
                </font>{" "}
                Framework (React Hooks, Conditional Rendering, SPA's,Routing
                pages,SCSS etc.)
              </p>
            </div>
          </div>

          <div className="lang animate__animated animate_fadeIn animate__slower">
            <div className="lang_icon">
              <img
                src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"
                height="80"
                width="80"
                alt="js_logo"
              />
              <img
                src="https://toppng.com/uploads/preview/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png"
                height="50"
                width="50"
                alt="js_logo"
              />
            </div>
            <div className="lang_info">
              <h6>MySQL/MongoDB</h6>
              <p>
                MySQL and MongoDB fundamentals- queries, concepts, CRUD
                functions in handling and managing database <br />
                Connecting MySQL and MongoDB with JAVA / Web, Advanced MySQL
                concepts - joins, transactions, commit, rollback etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
