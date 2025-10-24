"use client";
import React, { useState } from "react";
import "./Accordion.css"; // Make sure to put the CSS in this file

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is 3D Printing and how it works?",
      answer:
        "3D Printing indicates the manufacturing process that develops or creates 3D parts in layers from the CAD data. The 3D Printing technology is important as it provides direct manufacturing. It indicates the design that goes from you to the physical product directly via any Printer or computer"
    },
    {
      question: "What is HTML?",
      answer:
        "HTML, aka HyperText Markup Language, is the dominant markup language for creating websites and anything that can be viewed in a web browser.",
    },
    {
      question:
        "What are some basic technical skills of a Front-End developer?",
      answer: (
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Frameworks (CSS and JavaScript frameworks)</li>
          <li>Responsive Design</li>
          <li>Version Control/Git</li>
          <li>Testing/Debugging</li>
          <li>Browser Developer Tools</li>
          <li>Web Performance</li>
          <li>SEO (Search Engine Optimization)</li>
          <li>Command Line</li>
          <li>CMS (Content Management System)</li>
        </ul>
      ),
    },
    {
      question: "What is HTTP?",
      answer:
        "HTTP, aka HyperText Transfer Protocol, is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.",
    },
    {
      question: "What is CORS?",
      answer:
        "CORS, aka Cross-Origin Resource Sharing, is a mechanism that enables many resources (e.g. images, stylesheets, scripts, fonts) on a web page to be requested from another domain outside the domain from which the resource originated.",
    },
  ];

  return (
    <div className="accordion">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion-text">
        Everything you need to know about the 3D Printing
      </div>
      {faqData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-item-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            {item.question}
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === index ? "1000px" : "0", // Adjust '1000px' based on the content height
            }}
          >
            <div className="accordion-item-body-content">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
