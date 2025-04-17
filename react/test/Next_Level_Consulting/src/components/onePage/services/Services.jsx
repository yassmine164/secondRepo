import React from "react";
import "./Services.css";

const services = [
  {
    name: "Photography",
    description:
      "Capture your vision with professional photography services, tailored for branding, events, and more.",
    icon: "📸",
    route: "/photography",
  },
  {
    name: "Videography",
    description:
      "Bring your stories to life with high-quality video production, from corporate videos to creative projects.",
    icon: "🎥",
    route: "/videography",
  },
  {
    name: "UI/UX Design",
    description:
      "Craft user-centric interfaces with our expert design services, enhancing user experience and engagement.",
    icon: "🖥️",
    route: "/ui-ux-design",
  },
  {
    name: "Digital Marketing",
    description:
      "Elevate your online presence with strategic digital marketing solutions, including SEO, social media, and content marketing.",
    icon: "📊",
    route: "/digital-marketing",
  },
  {
    name: "App/Web Development",
    description:
      "Develop cutting-edge applications and websites with our full-stack development expertise, ensuring functionality and aesthetics.",
    icon: "💻",
    route: "/app-web-development",
  },
];

const Services = () => {


  return (
    <section className="services-section">
      <h2>Services We Provide</h2>
      <p>
      We offer photography, videography, digital design, web/app development, and UI/UX design to bring your ideas to life. From stunning visuals to seamless digital experiences, we create solutions that captivate and connect. Let us elevate your brand with creativity and precision.
      </p>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;