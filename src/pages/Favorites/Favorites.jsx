import React, { useEffect, useState } from 'react';
import { Layout, PetList, Loader } from '../../components';

import { cats, dogs } from '../../data';

import './favorites.scss';

const favPets = [...cats, ...dogs];

const Favorites = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout activeTab="favorites">
      {isLoading ? (
        <Loader label="Cargando tus mascotas favoritas..." />
      ) : (
        <>
          <div data-page className="favorites">
            <h1>Mascotas favoritas</h1>

            <div className="fav-list">
              <PetList animalsList={favPets} />
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Favorites;
