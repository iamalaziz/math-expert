import React from 'react';
import './_text.scss';
import { RoughNotation } from 'react-rough-notation';

const IntroText = () => {
  return (
    <div className="text">
      <div className="text__container">
        <h2>
          Math can be fun. <strong>I promise.</strong>
        </h2>
        <p>
          There are so many kids and students who needs to learn math, but Math
          is the most frustrating part of their career.
        </p>
        <p>
          When you learn a subject other than math, it is not a big deal making
          some mistakes, anyway you can get to the point you want with one or
          another way. However, when it comes to math, even a single mistake
          leads to wrong results and making whole your work until the result
          just non-sense because of that single mistake.{' '}
        </p>
        <p>
          Since there are various formulas, theories to remember and a great
          patience to overcome failures while solving problems,
          <em> no wonder so many of us don't enjoy practicing Math!</em>
        </p>
        <p>
          Many universities and careers require qualification of math at certain
          degree. To follow those careers of our dreams, math difficulties must
          not be an obstacle
        </p>
        <h3>
          MATH is{' '}
          <RoughNotation type="circle" show="true" color="red">
            implicit subject
          </RoughNotation>
        </h3>
        <p>
          It doesn't matter how many years you spend practicing Math—if you
          don't learn how its underlying systems work, your mental model will
          always be incomplete.
        </p>
        <p>
          Think about how most of us learn Math: we learn how individual
          properties work, instead of focusing on how layout algorithms use
          those properties as inputs. We learn{' '}
          <RoughNotation type="highlight" show="true" color="rgb(255, 178, 62)">
            “cool tricks”
          </RoughNotation>{' '}
          for specific situations, instead of concepts that can be applied
          broadly to any situation.
        </p>
        <p>
          It's like trying to solve a puzzle when you're missing pieces. Except
          it's even worse, since we blame ourselves!
        </p>

        <h3 className="with_gradient">
          <RoughNotation type="underline" show="true" animate="true">
            Nobody is born with Math skills.
          </RoughNotation>
        </h3>
        <p>
          <span className="help">
            I want to help expedite that process for you.
          </span>{' '}
          Over the past year, I've been packaging up all that knowledge and
          experience into a comprehensive self-paced online course.
        </p>
        <p>I call it...</p>
        <div className="logo_bottom">
          <div className="logo_bottom__container">
            <h1 className="logo_bottom__text">
              MATH
              <span>EXPERT</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
