import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { HiArrowCircleLeft } from 'react-icons/hi';
import { IoSend, IoCloseCircle } from 'react-icons/io5';

import './conversation.scss';

const getFormattedDate = (date) => {
  const hours = `${date.getHours()}`;
  const mins = `${date.getMinutes()}`;

  return `${hours.length === 2 ? hours : `0${hours}`}:${
    mins.length === 2 ? mins : `0${mins}`
  }`;
};

const messages = [
  {
    id: '12_me',
    user: 'me',
    date: getFormattedDate(new Date()),
    message: 'Hola, quisiera adopatar a este perrito',
  },
  {
    id: '12_maria',
    user: 'maria',
    date: getFormattedDate(new Date()),
    message: 'Hola, con gusto, necesito unos documentos suyos',
  },
];

const Conversation = ({ handleShow }) => {
  const messageRef = useRef('');
  const chatRef = useRef(null);

  const [chat, setChat] = useState(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    const {
      current: { innerText: value },
    } = messageRef;

    if (value.trim() === '') return;

    setChat([
      ...chat,
      {
        id: `_${  Math.random().toString(36).substr(2, 9)}`,
        user: 'me',
        date: getFormattedDate(new Date()),
        message: value,
      },
    ]);

    setTimeout(() => {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, 100);

    messageRef.current.innerText = '';
  };

  return (
    <div className="conversation">
      <div
        className="mask" 
        onClick={() => handleShow(false)}
        onKeyPress={() => {}}
        tabIndex={0}
        role="button"
      />
      <div className="conv-wrapper">
        <header className="conv-wrapper-header">
          <HiArrowCircleLeft
            className="icon back-arrow"
            onClick={() => handleShow(false)}
          />
          <IoCloseCircle
            className="icon close-icon"
            onClick={() => handleShow(false)}
          />
          <figure className="avatar">
            <img
              src="https://avatars.dicebear.com/api/avataaars/r.svg"
              alt="avatar"
            />
          </figure>
          <h3>Maria dolores</h3>
        </header>

        <section ref={chatRef} className="conv-wrapper-chat">
          {chat.map( ({ id, date, message, user }) => (
            <div
              key={id}
              className={`text-box ${user === 'me' ? 'out' : 'in'}`}
            >
              <p className="date">{date}</p>
              <p className="text">{message}</p>
            </div>
            ))}
        </section>
        <form onSubmit={sendMessage} className="send-msg">
          <span
            ref={messageRef}
            contentEditable="true"
            className="textarea"
            role="textbox"
          />
          <button type="submit" className="send-btn">
            <IoSend className="icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

Conversation.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default Conversation;
