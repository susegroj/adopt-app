/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

import { Layout } from '../../components';

import './profile.scss';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    toast.success('¡Perfil actualizado!', {
      style: {
        width: '100%',
        boxShadow: '1px 1px 5px #713200',
        padding: '16px',
      },
    });
  };

  const handleEditMode = (value) => setEditMode(value);

  return (
    <>
      <Layout activeTab="profile">
        <Toaster position="top-center" />
        <div data-page className="profile">
          <h1>Perfil</h1>

          <section className="avatar">
            <figure>
              <img
                src="https://avatars.dicebear.com/api/avataaars/r.svg"
                alt="avatar"
              />
              <figcaption>Juan Méndez</figcaption>
            </figure>
            <button 
              className="edit-btn"
              onClick={() => handleEditMode(true)}
              onKeyPress={() => {}}
              tabIndex={0}
              type="button"
            >
              Editar cuenta
            </button>
          </section>

          <form onSubmit={handleSubmit(onSubmit)} className="profile-data">
            <label>
              <p>Nombre</p>
              <input
                {...register('firstName', { required: true })}
                type="text"
                defaultValue="Juan"
                placeholder="Ej. Jorge"
              />
            </label>
            <label>
              <p>Apellidos</p>
              <input
                {...register('lastName', { required: true })}
                type="text"
                defaultValue="Sánchez Morales"
                placeholder="Ej. Sánchez Morales"
              />
            </label>
            <label>
              <p>Correo</p>
              <input
                {...register('email', {
                  required: 'This is required',
                  pattern: {
                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message: 'Invalid email address',
                  },
                })}
                type="mail"
                defaultValue="juan@gmail.com"
                placeholder="mymail@email.com"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </label>
            <label>
              <p>Teléfono</p>
              <input
                type="telephone"
                defaultValue="3531009875"
                placeholder="3531007568"
              />
            </label>

            {editMode && (
              <button type="submit" className="save-btn">
                Guardar
              </button>
            )}
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
