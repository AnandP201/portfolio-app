import React, { useEffect, useState } from "react";
import ProjectTile from "./Components/ProjectTile";
import axios from "axios";
import { Loader } from "rsuite";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/projects/")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="projects_page animate__animated animate__fadeIn">
      {loading && <Loader center size="md" content="Loading page.." />}
      {!loading && (
        <div className="text_p">
          <div className="image_p">
            <img
              src="https://www.pngitem.com/pimgs/m/370-3705866_programming-project-help-computer-programmer-png-transparent-png.png"
              height="300"
              width="500"
              alt="desc_p"
            />
          </div>
          <div className="text">
            Some of my recent projects,
            <br />I <font color="#363737">worked</font> upon &nbsp;
            <i className="bi bi-arrow-right-square-fill animate__animated animate__fadeInDown"></i>
          </div>
        </div>
      )}

      {!loading && (
        <div className="main_content">
          {projects.map((item) => {
            return (
              <ProjectTile
                title={item.title}
                desc={item.desc}
                iconObj={item.tools}
                repo={item.repo}
                preview={item.preview}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;
