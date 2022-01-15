import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Post.css";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import Modal from "react-modal";

function Post({ Id, question, imageUrl, timestamp, users }) {
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleAnswer = (e) => {
    e.preventDefault();
    console.log(null);
    setAnswer("");
    setIsModalOpen(false);
  };
  return (
    <>
    <div className="post">
      <div className="post__info">
        <Avatar
          src="https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
        />
        <h4>Ineffable Curiosity</h4>
        <small>Follow </small>

        {/* <small>Posted by Jesus Ordosgoitty Nov 23</small> */}
      </div>


      <div className="post__body">
        <div className="post__question">
          <p>What life truths are so obvious but often go overlooked by many?</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>Write Model Question</h1>
              <p>
                asked by{" "}
                <span className="name">
                  WasiHuq
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  14-1-2022
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <div className="post__answer">

          <p style={{ position: "relative", paddingBottom: "5px" }}>

            <span>
              She loved it though and thought of it as her being paid to endure the exhausting, and at times painful, make-up process and the acting as being an added bonus. She is even willing to reprise the role as long as she can get the same make-up process again so that she can get right back into the character.She was an absolute badass in the movies and I can't imagine anyone playing the character better than her.Sorry, not sorry, Jennifer.
              Thank you for reading.
              <br />
              <span
                style={{
                  position: "absolute",
                  color: "gray",
                  fontSize: "small",
                  display: "flex",
                  right: "0px",
                }}
              >
              </span>
            </span>
          </p>
        </div>
        <img src='/demo.png' alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>

        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
    <div className="post">
      <div className="post__info">
        <Avatar
          src="https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
        />
        <h4>Ineffable Curiosity</h4>
        <small>Follow </small>

        {/* <small>Posted by Jesus Ordosgoitty Nov 23</small> */}
      </div>


      <div className="post__body">
        <div className="post__question">
          <p>What life truths are so obvious but often go overlooked by many?</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>Write Model Question</h1>
              <p>
                asked by{" "}
                <span className="name">
                  WasiHuq
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  14-1-2022
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <div className="post__answer">

          <p style={{ position: "relative", paddingBottom: "5px" }}>

            <span>
              She loved it though and thought of it as her being paid to endure the exhausting, and at times painful, make-up process and the acting as being an added bonus. She is even willing to reprise the role as long as she can get the same make-up process again so that she can get right back into the character.She was an absolute badass in the movies and I can't imagine anyone playing the character better than her.Sorry, not sorry, Jennifer.
              Thank you for reading.
              <br />
              <span
                style={{
                  position: "absolute",
                  color: "gray",
                  fontSize: "small",
                  display: "flex",
                  right: "0px",
                }}
              >
              </span>
            </span>
          </p>
        </div>
        <img src='/demo.png' alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>

        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
    <div className="post">
      <div className="post__info">
        <Avatar
          src="https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
        />
        <h4>Ineffable Curiosity</h4>
        <small>Follow </small>

        {/* <small>Posted by Jesus Ordosgoitty Nov 23</small> */}
      </div>


      <div className="post__body">
        <div className="post__question">
          <p>What life truths are so obvious but often go overlooked by many?</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 550,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>Write Model Question</h1>
              <p>
                asked by{" "}
                <span className="name">
                  WasiHuq
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  14-1-2022
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleAnswer} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        <div className="post__answer">

          <p style={{ position: "relative", paddingBottom: "5px" }}>

            <span>
              She loved it though and thought of it as her being paid to endure the exhausting, and at times painful, make-up process and the acting as being an added bonus. She is even willing to reprise the role as long as she can get the same make-up process again so that she can get right back into the character.She was an absolute badass in the movies and I can't imagine anyone playing the character better than her.Sorry, not sorry, Jennifer.
              Thank you for reading.
              <br />
              <span
                style={{
                  position: "absolute",
                  color: "gray",
                  fontSize: "small",
                  display: "flex",
                  right: "0px",
                }}
              >
              </span>
            </span>
          </p>
        </div>
        <img src='/demo.png' alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon /> 
          <ArrowDownwardOutlinedIcon />
        </div>

        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
    </>
  );
}

export default Post;
