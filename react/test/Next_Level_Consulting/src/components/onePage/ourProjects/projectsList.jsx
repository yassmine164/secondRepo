import React from "react";
import Projects from "./ourprojects";

const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      image: "/images/Photography.jpeg",
      service: "Photography",
      price: "500 TND",
      time: "2 weeks",
      clientFeedback: "“Incredible quality, very professional, and punctual!” - Client A",
    },
    {
      id: 2,
      image: "/images/UX_design.jpeg",
      service: "UI/UX Design",
      price: "900 TND",
      time: "1 month",
      clientFeedback: "“Amazing design and user interface that elevated our app’s usability.” - Client B",
    },
    {
      id: 3,
      image: "/images/vd.jpg",
      service: "Videography",
      price: "1500 TND",
      time: "1.5 months",
      clientFeedback: "“High videos quality and smooth transitions, great work!” - Client C",
    },
    {
      id: 4,
      image: "/images/Marketing.jpeg",
      service: "Digital Marketing",
      price: "700 TND",
      time: "3 weeks",
      clientFeedback: "“Our sales increased by 30% in just one month! Highly recommend.” - Client D",
    },
    {
      id: 5,
      image: "/images/DEV.jpeg",
      service: "Mobile App Development",
      price: "2000 TND",
      time: "2 months",
      clientFeedback: "“The app development process was smooth, and the results exceeded expectations.” - Client E",
    },
  ];

  return <Projects projects={projects} />;
};

export default ProjectsList;