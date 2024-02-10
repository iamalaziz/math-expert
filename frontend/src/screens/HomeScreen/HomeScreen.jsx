import React from 'react';
import { NavLink } from 'react-router-dom';
import IntroText from './IntroText';
import './_home.scss';

const HomeScreen = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="hero-text hero">
          <h1>
            <span>
              <img src="./thunder.gif" alt="thunder gif" />
            </span>
            Math Expert.
          </h1>
          <h3>
            The interactive learning experience designed to help math learners
            become confident with Math
          </h3>
          <p>
            Maths is more than just numbers. With unlimited questions, engaging
            item types, and real-world scenarios, <span>Math Expert</span> helps
            learners experience maths at its most mesmerising!
          </p>
          <button>
            <NavLink to="/questions" className="hero__btn">
              CHALLENGES
            </NavLink>
          </button>
        </div>
        <video
          src="./hero-video.mp4"
          className="video"
          autoPlay={true}
          loop="loop"
        />
      </div>
      <IntroText />
    </section>
  );
};

export default HomeScreen;
