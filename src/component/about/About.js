import React from "react";
import "./about.css";
import ME from "../../imgfolder/me1.jpg";

export default function About() {
  return (
    <section id="about">
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container ">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <p>
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. */}
            I am currently a Computer Science Engineering Student at Global
            Group of Institutions , Jabalpur. I am looking forward for an
            opportunity to work as a student or as intern , where I can learn
            new skills, expand my knowledge. I've learned ,C++, Python, Core
            Java ,HTML,CSS, Javascript , React.My Interest are focused on
            Frontend Web Development, I have made several projects using
            Javascript, React to improve my skills and experience. I am self
            disciplined, self motivated, hardworking and dedicated person.
          </p>
          <div className="about_btn">
            <a href="mailto:kanojiapriyanshi15@gmail.com" className="btn  ">
              Lets's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
