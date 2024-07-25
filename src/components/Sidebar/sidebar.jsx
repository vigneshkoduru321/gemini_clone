import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./sidebar.css";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickMenu = () => {
    setShowMenu((pre) => !pre);
  };

  const { onSent, previousPrompts, setRecentPrompt, onClickNew } =
    useContext(Context);

  return (
    <div className="side-bar">
      <div className="top">
        <img
          onClick={onClickMenu}
          className="menu-icon cursor"
          src={assets.menu_icon}
          alt="menu-icon"
        />
        <button onClick={() => onClickNew()} className="new-chat-button cursor">
          <img className="plus-icon" src={assets.plus_icon} alt="plus-icon" />
          {showMenu && "new chat"}
        </button>
        <div className="recents-container">
          {showMenu && (
            <>
              <p className="recent-heading">Recents</p>
              <div className="recents">
                {previousPrompts.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        onSent(item);
                      }}
                      className="recent-entry cursor"
                    >
                      <img
                        className="msg-icon"
                        src={assets.message_icon}
                        alt="msg-icon"
                      />
                      <p>{item.slice(0, 18)} ...</p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-container">
          <img
            className="sidebar-icon"
            src={assets.question_icon}
            alt="sidebar-icon"
          />
          {showMenu && <p>Help</p>}
        </div>
        <div className="bottom-container">
          <img
            className="sidebar-icon"
            src={assets.history_icon}
            alt="sidebar-icon"
          />
          {showMenu && <p>Activity</p>}
        </div>
        <div className="bottom-container">
          <img
            className="sidebar-icon"
            src={assets.setting_icon}
            alt="sidebar-icon"
          />
          {showMenu && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
