/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PetProfile from '../PetProfile/PetProfile';

import './pet-list.scss';

const PetList = ({ animalsList }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedPet, setSelectedPet] = useState({});

  const handleShowPets = ({ show, pet = null }) => {
    if (pet) {
      setSelectedPet(pet);
    }
    setShowProfile(show);
  };

  return (
    <>
      <ul className="pet-list">
        {animalsList.map((pet) => {
          const { id, photo, name, race } = pet;
          return (
            <li
              key={id}
              className="pet-card"
              onClick={() => handleShowPets({ show: true, pet })}
              onKeyPress={() => {}}
            >
              <figure className="pet">
                <img src={photo} alt={id} />
                <figcaption className="data">
                  <p className="race">{race}</p>
                  <p className="name">{name}</p>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
      {showProfile && (
        <PetProfile pet={selectedPet} handleShow={handleShowPets} />
      )}
    </>
  );
};

PetList.propTypes = {
  animalsList: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string,
      name: PropTypes.string,
      race: PropTypes.string,
    })
  ).isRequired,
};

export default PetList;
