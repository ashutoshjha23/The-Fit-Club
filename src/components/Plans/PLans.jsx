import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const PLans = () => {
  return (
    <div className="plans" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="program-header" id="plans-header">
        <span className="stroke-text">Ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">with us </span>
      </div>
      {/* Plans Card */}
      <div className="plans-cards">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
              <div>
                <span>See more benifits -&gt;</span>
              </div>
              <button className="btn">Join now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PLans;
