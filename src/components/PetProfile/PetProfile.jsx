import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { HiArrowCircleLeft, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import { IoMaleSharp, IoCloseCircle } from 'react-icons/io5';
import { IoMdFemale } from 'react-icons/io';

import './pet-profile.scss';

const PetProfile = ({ pet, handleShow }) => {
  const {
    id,
    photo,
    name,
    gender,
    race,
    age,
    address,
    owner,
    personality,
    history,
  } = pet;

  const [isFav, setIsFav] = useState(false);

  const handleAddToFavs = () => {
    // addToGlobalFavFn
    setIsFav(!isFav);
  };

  return (
    <div className="pet-profile">
      <div
        className="mask"
        onClick={() => handleShow({ show: false })}
        onKeyPress={() => {}}
        tabIndex={0}
        role="button"
      />
      <div className="pet-profile-wrapper">
        <header className="img-header">
          <HiArrowCircleLeft
            className="icon back-arrow"
            onClick={() => handleShow({ show: false })}
          />
          <IoCloseCircle
            className="icon close-icon"
            onClick={() => handleShow({ show: false })}
          />
          <figure>
            <img src={photo} alt="pet-profile" />
          </figure>
        </header>

        <section className="content-data">
          <i 
            className="fav"
            onClick={handleAddToFavs}
            onKeyPress={() => {}}
            tabIndex={0}
            role="button"
          >
            <FiHeart className={`icon ${isFav ? 'active' : ''}`} />
          </i>

          <div className="name-gender">
            <h2 className="place-name">{name}</h2>
            {gender === 'male' ? (
              <IoMaleSharp className="icon male" />
            ) : (
              <IoMdFemale className="icon female" />
            )}
          </div>

          <div className="chip-wrapper">
            <div className="chip-data">
              <img
                alt="race"
                src="https://s3-alpha-sig.figma.com/img/f2bd/0f0c/bbd2eed8ee6a59fe9c68d9969b1bd3ca?Expires=1629676800&Signature=OjdO9fC~pgUvAsFhGUj42ubhqWplFvFt6IIdCox~MLVbTvog8NG6H8BPfj9i9GEG4dMDd8v9mYNwra1Nn4RyopDXX-cAC-J7XvKSbAE1CFyIGsIhBOGxGgUSSMP4sQqmYJWkpce2Tq9PPL1aq7Ot9s~XNDMew8E4Y~fFePm5EljqwbaGrr6HxLBbUbv~EfM5Ox0Iprhcdf1GInQbzBwq6hshLANyFap3LQL~zttwseYo-DB9JO2NQzKhLdnwj0s8cAyZwtQaidsNJMfWY82zW0-YTiqdWmLNGV5oLAiSm-ggZuL3UbqAOfvENcFNyAxbfl0S0yIjMH22PiMm0zmKMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                className="icon chip-icon"
              />
              <small className="data">{race}</small>
            </div>
            <div className="chip-data">
              <img
                alt="pedigree"
                className="icon chip-icon"
                src="https://s3-alpha-sig.figma.com/img/242c/f7fa/8d5ab7fd340788b6c85aca7b86475e04?Expires=1629676800&Signature=QPem2QtFhglETyIwyr2FP7gmb2QohYHJReHqL8xNxRedTLyZQzrAlzeC7rdEEvk6dFEnocMPGorlmK-MIWzgzKbFzqs6KubVdNEBbNoMtPlXEF7q6edwAx6GJliTqBzCheU70UIcbF141bUilXec3Rz-Bac7tVwv49EHV319gUtGpp-oIqGAb7NuPxNHKpEXM1jw1ghe9qVzjT~Ua-pBetdH-j3zQwk0c4S9mqlWVAD4oW0KHlnMT32emgbAZ2inlo-EMTa-vRQPD~FE4rBrb9V3OKjBuaPcoxtWprAE60jhMODjCChq2P8IuAtn0SfTGYaI83bHlcVJXPy7Kk4xAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              />
              <small className="dadta">{age}</small>
            </div>
          </div>

          <section className="location">
            <HiOutlineLocationMarker className="icon" />
            <span>{address}</span>
          </section>

          <section className="attributes">
            <h3>Personalidad</h3>
            <div className="chip-attr-wrapper">
              {personality.map((attr) => {
                const { icon, label } = attr;
                return (
                  <div key={label} className="attr">
                    <img alt={label} src={icon} className="icon" />
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="history">
            <h3>
              Historia de
              {' '}
              {name}
              {' '}
            </h3>
            <p>{history}</p>
          </section>
        </section>

        <footer className="footer-user">
          <div className="user">
            <figure className="avatar">
              <img src={owner.avatar} alt=" " />
            </figure>
            <div className="user-data">
              <small>Publicado por</small>
              <strong>{owner.name}</strong>
            </div>
          </div>
          <a href={`tel:${owner.phone}`} className="btn">
            Contactar
          </a>
        </footer>
      </div>
    </div>
  );
};

PetProfile.propTypes = {
  handleShow: PropTypes.func.isRequired,
  pet: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    race: PropTypes.string,
    age: PropTypes.string,
    // personality: PropTypes.arrayOf(PropTypes.object),
    history: PropTypes.string,
  }).isRequired,
};

export default PetProfile;
