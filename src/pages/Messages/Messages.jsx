/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import { Layout, Conversation } from '../../components';

import './messages.scss';

const Messages = () => {
  const [selectedConv, setSelectedConv] = useState('');
  const [showConv, setShowConv] = useState(false);

  const handleShowConv = (show) => setShowConv(show);

  return (
    <Layout activeTab="msgs">
      <div data-page className="messages">
        <h1>Mensajes</h1>

        <section className="inbox">
          <li
            className="msg" 
            onClick={() => handleShowConv(true)}
            onKeyPress={() => {}}
            type="button"
          >
            <figure className="avatar">
              <img
                src="https://avatars.dicebear.com/api/avataaars/r.svg"
                alt=""
              />
            </figure>

            <div className="data">
              <span className="name">Maria Dolores</span>
              <span className="date">4:36</span>
              <p className="comment">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                quibusdam aliquid dolorem quod placeat in quisquam ducimus
                ipsum. Beatae magnam et eligendi ad ex eaque exercitationem
                fugit eius cum. Enim.
              </p>
            </div>
            <BiChevronRight className="icon chevron" />
          </li>
        </section>
      </div>
      {showConv && <Conversation handleShow={handleShowConv} />}
    </Layout>
  );
};

export default Messages;
