// src/config/puckConfig.js
import { useState, useEffect } from "react";

export const config = {
  components: {
    Hero: {
      fields: {
        title: {
          type: "text",
          value: "Welcome to our site!",
          label: "Title",
        },
        description: {
          type: "textarea",
          value: "This is a brief description of our hero section.",
          label: "Description",
        },
        button: {
          type: "text",
          value: "Learn More",
          label: "Button Text",
        },
        image: {
          type: "text",
          value: "https://via.placeholder.com/800x400",
          label: "Image URL",
        },
        video: {
          type: "text",
          value: "",
          label: "Video URL",
        },
        link: {
          type: "text",
          value: "https://example.com",
          label: "Link URL",
        },
        class: {
          type: "text",
          value: "",
          label: "Class Name",
        },
        id: {
          type: "text",
          value: "",
          label: "ID",
        },
        topMargin: {
          type: "text",
          value: "0px",
          label: "Top Margin",
        },
        bottomMargin: {
          type: "text",
          value: "0px",
          label: "Bottom Margin",
        },
      },
      render: function Hero({ title, description, video, link, button, image, class: className, id, topMargin, bottomMargin }) {
        return (
          <section className={`hero ${className}`} id={id} style={{ marginTop: topMargin, marginBottom: bottomMargin }}>
            {video ? (
              <video className="hero__video" autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="hero__image" style={{ backgroundImage: `url(${image})` }}></div>
            )}
            <div className="hero__content">
              <h1>{title}</h1>
              <h3>{description}</h3>
              <a href={link}>{button}</a>
            </div>
          </section>
        );
      },
    },
    // ... שאר הקומפוננטות שלך (Banner, Boxs, TextBlock, וכו')
  },
};