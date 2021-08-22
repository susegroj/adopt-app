import React, { useEffect, useState } from 'react';

import { PetList, Layout, Loader } from '../../components';
import { dogs, cats } from '../../data';

import './home.scss';

const allPets = { cats, dogs };

const petsCategories = [
  {
    id: 'dogs',
    label: 'Perros',
    avatar:
      'https://s3-alpha-sig.figma.com/img/e69f/c0ca/1a79ff5740e5c4382ccd19ffac4241b0?Expires=1629676800&Signature=hxkY9hnVcx6wQk3aJl2qEaCBHXNIKwmp0jQP311zfnAz6OjVzhuc2m0GhuLlY8XRaHCJ8XJRmoxhXh8BRH9yJCamoAV5WbI7pylqqFaLbfT0OY94XC4ElaGWFeJ7rC2Cg2cJgIHC7pOXgHjXX9K-4guiazxVfieU6QIHfGf1ERmComdb~7ymfjc8Cdd1~j40GDcf34MUXEcLuwAFH4QDBOXRuhO8ragRaIsY5sPevhEbtH~VxJC3d4cXO86PdhCI-8chqSNeUnKQtSQers0bgJsWNWDc62icmRYXezHYYQCnufgQXj32VC0qne~FxI7bb-Ip-cZEzUeI2wps88pFOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: 'cats',
    label: 'Gatos',
    avatar:
      'https://s3-alpha-sig.figma.com/img/49e1/7e6f/e2727c0c411d2e9afa03c89a933e1afe?Expires=1629676800&Signature=WCu5PgDwyoLJzEZPYuKbnz1s-iFBbV7RnGUfg1flFrt4FkQLa-i2Ks8-kBKq0XLk7kCmKNqmpzF21r1CMO13gIpS45QiQuO-7A53z~CAvIdkgcDUfKFrfcMLhJBCeSIAE-ZI9eiOLldlWMtRMTTsSJnf9c-lK2312wlBUeYknGG9mwB5TvXuJRXs1gUmcFt6Dk44L9Z5u5f6EbcUGaFLU-zME58WtwFjc9aJS6nbtc1uRbsOBHje~3m9g~3ir75E3KZZ1uY55p6eDOMAb-HBnrVaNvIImaJ9E9EspFFFmuT3r~JI18cb9wBmlAPvtyytg47mT6PNiGoOVjpG30AQ6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];

const Home = () => {
  const [categorySelected, setCategorySelected] = useState('dogs');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleChangePets = (event) => {
    const {
      target: { value },
    } = event;

    setCategorySelected(value);
  };

  return (
    <Layout activeTab="home">
      {isLoading ? (
        <Loader label="Cargando mascotas" />
      ) : (
        <div data-page className="home">
          <h1>Adopta a una adorable mascota</h1>
          <p className="category-title">Categorías de mascotas</p>

          <div className="categories">
            {petsCategories.map(({ id, label, avatar }) => (
              <label
                key={id}
                className={`category ${
                  id === categorySelected ? 'active' : ''
                }`}
                name="pets-categories"
              >
                <figure>
                  <img src={avatar} alt="" />
                </figure>
                <span>{label}</span>
                <input
                  onChange={handleChangePets}
                  checked={id === categorySelected}
                  type="radio"
                  id={id}
                  value={id}
                  name="pets-categories"
                />
              </label>
            ))}
          </div>

          <PetList animalsList={allPets[categorySelected]} />
        </div>
      )}
    </Layout>
  );
};

export default Home;
