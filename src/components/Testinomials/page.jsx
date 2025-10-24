import React from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const testimonials = [
  {
    imgSrc: 'p1.png',
    name: 'Full name',
    stars: [fasStar, fasStar, fasStar, fasStar, fasStar],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    imgSrc: 'p2.png',
    name: 'Full name',
    stars: [fasStar, fasStar, fasStar, farStar, farStar],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    imgSrc: 'p3.png',
    name: 'Full name',
    stars: [fasStar, fasStar, fasStar, fasStar, farStar],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="inner">
        <h1>Testimonials</h1>
        <div className="border"></div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col" key={index}>
              <div className="testimonial">
                <div className="stars">
                  {testimonial.stars.map((star, starIndex) => (
                    <FontAwesomeIcon key={starIndex} icon={star} className="star-icon" />
                  ))}
                </div>
                <p>{testimonial.text}</p>
                <img src={testimonial.imgSrc} alt={testimonial.name} />
                <div className="name">{testimonial.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
