import React from "react";
import "animate.css";

const About = () => {
  return (
    <div className="about_area animate__animated animate__fadeIn animate__faster">
      <fieldset className="detail_box">
        <legend>
          <h5>BIO</h5>
        </legend>
        <h6>Father's Name</h6>
        <div>R. Sharad Pai</div>
        <h6>Mother's Name</h6>
        <div>Valsala S Pai</div>
        <h6>Home Address</h6>
        <div>
          Upwan Nagar, Boda Bagh, Rewa , Madhya Pradesh, 486001{" "}
          <a href="https://shorturl.at/jBY49" target="_blank" rel="noreferrer">
            <i className="bi bi-geo-alt-fill"></i>
          </a>
        </div>

        <h6>Date Of Birth</h6>
        <div>12 April 2001</div>
      </fieldset>
      <fieldset className="detail_box">
        <legend>
          <h6>EDUCATION</h6>
        </legend>
        <h6>Primary and Higher Education</h6>
        <div>
          Jyoti Senior Secondary School, Rewa , Madhya Pradesh &nbsp;
          <a href="https://jsssrewa.org/" target="_blank" rel="noreferrer">
            <i className="bi bi-link-45deg"></i>
          </a>
        </div>
        <h6>Class X Percentage</h6>
        <div>95 %</div>
        <h6>Class XII Percentage</h6>
        <div>92.2%</div>
        <h6>Graduation</h6>
        <div>
          Chandigarh University{" "}
          <i>
            (ongoing III <sup>rd</sup> yr)
          </i>
          &nbsp;
          <a href="https://www.cuchd.in/" target="_blank" rel="noreferrer">
            <i className="bi bi-link-45deg"></i>
          </a>
        </div>
      </fieldset>
      <fieldset className="detail_box">
        <legend>
          <h6>HOBBIES AND INTERESTS</h6>
        </legend>
        <h6>Sports Field</h6>
        <div>Love to play badminton, volleyball, cricket and football</div>
        <h6>Music Field</h6>
        <div className="yt_link">
          Self-taught pianist and singer
          <a
            href="https://www.youtube.com/channel/UCFA8KcocLc0iRdTaQwfiQnw"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;My <i className="bi bi-youtube"></i> Channel
          </a>
        </div>
        <h6>Miscellaneous</h6>
        <div>Love painting and to play simulation games</div>
        <h6>Interests</h6>
        <div>To engage in logical computations and practical skills</div>
      </fieldset>
    </div>
  );
};

export default About;
