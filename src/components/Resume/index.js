import React from "react";

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p>
          Download my{" "}
          <a href="https://www.linkedin.com/in/christian-vasquez-0a7634164/">
            resume
          </a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>React</li>
          <li>Bootstrap</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>NPM (NODE)</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
