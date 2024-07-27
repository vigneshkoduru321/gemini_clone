import React, { useContext, useState } from "react";

import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    onClickNew,
  } = useContext(Context);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="main">
      <div className="top-container">
        <button className="cursor" onClick={() => onClickNew()}>
          <p>Gemini</p>
        </button>
        <img
          className="user-profile"
          src={assets.user_icon}
          alt="user-profile"
        />
      </div>
      {!showResult ? (
        <div>
          <div className="greet-container">
            <h1 className="greeting-heading">Hello, User.</h1>
            <h1 className="assist-heading">How can I help you today?</h1>
          </div>
          <div className="cards-container">
            <div
              onClick={() =>
                onSent("Briefly summarize this concept: urban planning")
              }
              className="card"
            >
              <p>Briefly summarize this concept: urban planning</p>
              <img
                className="card-icon"
                src={assets.bulb_icon}
                alt="card-icon"
              />
            </div>
            <div
              onClick={() =>
                onSent(
                  "Brainstorm team bonding activities for our work retreat"
                )
              }
              className="card"
            >
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img
                className="card-icon"
                src={assets.message_icon}
                alt="card-icon"
              />
            </div>
            <div
              onClick={() => onSent("Tell me about React js and React native")}
              className="card"
            >
              <p>Tell me about React js and React native</p>
              <img
                className="card-icon"
                src={assets.code_icon}
                alt="card-icon"
              />
            </div>
            <div
              onClick={() =>
                onSent(
                  "Suggest beautiful places to see on an upcoming road trip"
                )
              }
              className="card"
            >
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img
                className="card-icon"
                src={assets.compass_icon}
                alt="card-icon"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <div className="result-title">
            <img
              className="user-title-profile"
              src={assets.user_icon}
              alt="user-title-profile"
            />
            <p>{recentPrompt}</p>
          </div>
          <div>
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <div className="result-data">
                <img
                  className="gemini-icon"
                  src={assets.gemini_icon}
                  alt="gemini-icon"
                />
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={onChangeInput}
          className="input"
          placeholder="Enter a prompt here"
        />
        <div className="icons-container">
          <img
            className="input-icon"
            src={assets.gallery_icon}
            alt="input-icon"
          />
          <img className="input-icon" src={assets.mic_icon} alt="input-icon" />
          {input !== "" && (
            <img
              onClick={onSent}
              className="input-icon cursor"
              src={assets.send_icon}
              alt="input-icon"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
