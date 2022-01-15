import { Avatar } from "@material-ui/core";
import React from "react";
import "./QuoraBox.css";

export default function QuoraBox() {

  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
          src="https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          className="quoraBox__infoAvatar"
        />
        <h5>WasiHaq</h5>
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
