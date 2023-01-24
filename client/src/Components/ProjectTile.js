import React from "react";

const ProjectTile = ({ title, desc, iconObj, repo, preview }) => {
  const img = {
    react: "https://img.icons8.com/office/16/000000/react.png",
    java: "https://img.icons8.com/color/16/000000/java-coffee-cup-logo--v2.png",
    python: "https://img.icons8.com/color/48/000000/python.png",
    html: "https://img.icons8.com/color/48/000000/html-5.png",
    mongodb: "https://img.icons8.com/color/48/000000/mongodb.png",
    css: "https://img.icons8.com/color-glass/48/000000/css.png",
    boot: "https://img.icons8.com/color/48/000000/bootstrap.png",
    node: "https://img.icons8.com/color/48/000000/nodejs.png",
    fire: "https://img.icons8.com/color/48/000000/google-firebase-console.png",
  };

  return (
    <div className="tile">
      <h4>
        {title}
        &nbsp;{" "}
        {preview && (
          <span>
            <a href={preview} target="_blank" rel="noreferrer">
              <i className="bi bi-arrow-up-right-circle-fill"></i>
            </a>
          </span>
        )}
      </h4>
      <div className="project_links">
        <div>
          <a href={repo} target="_blank" rel="noreferrer">
            <b> GitHub </b>
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
      <div className="project_desc">{desc}</div>

      <div className="tools">
        {iconObj.map((item, key) => {
          return (
            <div key={key}>
              <img
                src={img[item.toLowerCase()]}
                height="20"
                width="20"
                alt="logo"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTile;
