import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7vxrkwp",
        "template_jv3eaus",
        form.current,
        "Y5uOgRzRYY6dpE0TSD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join">
      <div className="left-join">
        <hr />
        <div>
          <span className="stroke-text">Ready to </span>
          <span>level up</span>
        </div>
        <div>
          <span>your body </span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-join">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
