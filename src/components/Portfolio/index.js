import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

//update descriptions
  const [projects] = useState([
    {
      name: 'Didi-I-Win?',
      description: 'Group Project #1',
      link: "https://robjameva.github.io/Did-I-Win/",
      repo: "https://robjameva.github.io/Did-I-Win/"
    },
    {
      name: 'Sneaker-Sniper',
      description: 'Group Project #2',
      link: "https://sneaker-sniper.herokuapp.com/",
      repo: "https://github.com/nickperel/Sneaker-Sniper"
    },
    {
      name: 'Password Generator',
      description: 'HTML/CSS',
      link: "https://vasqc.github.io/passgen/",
      repo: "https://github.com"
    },
    {
      name: 'Daily Planner',
      description: 'HTML',
      link: "https://vasqc.github.io/dailyplanner/",
      repo: "https://github.com"
    },
    {
      name: 'Weather API',
      description: 'React/JavaScript/CSS',
      link: "https://vasqc.github.io/weatherapi/",
      repo: "https://github.com"
    },
    {
      name: 'Budget Tracker',
      description: 'JavaScript/CSS',
      link: "https://git.heroku.com/vast-savannah-44523.git",
      repo: "https://github.com/vasqc/Budget-Tracker"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;