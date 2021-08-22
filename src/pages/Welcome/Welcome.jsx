import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Loader } from '../../components';

import './welcome.scss';

const Welcome = () => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      id: 'step-1',
      img:
        'https://s3-alpha-sig.figma.com/img/0654/3acf/bafbe4f95c1c3e1268e42860b73c8f5e?Expires=1629676800&Signature=KiHHBmvO0sViJ48MF7u5amhEi~Rsr1o8bivTmSCqxWm1OcrxileTgcAEG6dYdTAvUb~QIBLZV7IM204DlqoIZBdgrzVwq20zGeJ6YzShvYXCyL4fiq2CdOGO4P6Z9kPDKubKTBxQflMotaw0~JRWUWT75g-ujOeYn9pjmar1wqcVgPU-88H6xzpt9Py03BBIvtryODrUzVRvVnhlnhN47X4pIZmcJoA~GUdg-H4Wcwz~qLPkjqazZOr1euyBZiRA3Ex~IMV6yfpOxU00CWErKTa9me982cCvlfV~J9ZLmHWqUPCJz-V6NxNmsoZvWbqjv~DkYN3pm4XI800x1uOmKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Encuentra a tu amigo fiel',
      text:
        'Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida.Si estás pensando en tener un nuevo integrante en tu familia; ¡estás en el lugar correcto!',
    },
    {
      id: 'step-2',
      img:
        'https://s3-alpha-sig.figma.com/img/e864/32a1/607eebafca0c9b109df07ae829bc31cc?Expires=1629676800&Signature=VMZWX5uA-ig0heOOUsXRSeIorawlSQ8SytI2fr43BxEY59ZQpNlik76TtL1v4IVke1bUK91wCgRO0umrwyG6llSh6I4GS1EaoSIujBerhZbmNH~Xs7O9mf13JyWxP0Jgfpw35TS83EXcRvsYCUqEID~~DFsWMYGHtPrzcmUuprwXnLqK9XhXu1o3Tk4Y-Wq9Pd6L63BudEnWsGo0eOqdiY~dzAxV5PDGTIE3ZHmD~qdZ4LrxqA2Q--UgsH9go1mllMVA18C6eDdIJONOi97ZFiWpa15SzRep6cyHhS2nCjD29QK3tS9lo-VoT4N5MJLu46y2lSYQ75m8DD4PC9XlUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Crea una nueva historia',
      text:
        'Adoptar puede ser una de las experiencias más grandiosas de tu vida,donde compartirás bellos momentos con estos amiguitos fieles, tiernos y llenos de amor para regalar',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const goHome = () => {
    // clean anchor tag
    window.history.replaceState(null, null, null);

    setTimeout(() => {
      history.replace('home');
    }, 100);
  };

  const handleChangeStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep < steps.length) {
      return setCurrentStep(currentStep + 1);
    }

    goHome();
  };

  return (
    <div className="welcome">
      {isLoading ? (
        <Loader label="Preparando todo..." />
      ) : (
        <div className="welcome-wrapper">
          <section className="slides">
            {steps.map(({ id, img, title, text }) => (
              <div key={id} id={id} className="step">
                <figure className="step-img">
                  <img alt="pets" src={img} />
                </figure>
                <div className="step-text">
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </section>
          <a
            href={`#step-${currentStep + 1}`}
            onClick={handleChangeStep}
            className="next-btn"
          >
            {currentStep + 1 === steps.length - 1
              ? 'Siguiente'
              : 'Ver las mascotas'}
          </a>
          <button
            className="skip-btn" 
            onClick={goHome}
            onKeyPress={() => {}}
            tabIndex={0}
            type="button"
          >
            Saltar
          </button>
        </div>
      )}
    </div>
  );
};

export default Welcome;
