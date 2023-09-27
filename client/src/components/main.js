import React, { useCallback, useEffect, useState } from 'react';
import '../styles/main.css';
import { Helmet } from 'react-helmet';

function Main() {
  const [isMale, setIsMale] = useState(true);
  const [petName, setPetName] = useState();

  const getName = useCallback(() => {
    fetch(`${process.env.REACT_APP_HOST}/names?is_male=${isMale}`)
      .then((response) => response.json())
      .then((data) => {
        setPetName(data[0].name);
      })
      .catch((error) => console.log(error));
  }, [isMale]);

  const handleClick = () => {
    getName();
  };

  useEffect(() => {
    getName();
  }, [getName]);

  return (
    <main>
      <Helmet>
        <title>Random Pet Name Generator website namemypets.app</title>
        <meta
          name='namemypets.app'
          content='pet name generator.  A website that randomly generates a pet name based on male or female. Add a name to the database of pet names'
        />
      </Helmet>
      <h2>A tool to randomly generate a pet name!</h2>
      <div className='flex-container'>
        <div className='content'>
          <div className='gender-btn-container'>
            <button
              type='button'
              onClick={() => {
                setIsMale(true);
              }}
              className={`gender-btn ${isMale ? 'active' : ''}`}
            >
              Male
            </button>
            <button
              type='button'
              onClick={() => {
                setIsMale(false);
              }}
              className={`gender-btn ${isMale ? '' : 'active'}`}
            >
              Female
            </button>
          </div>
          <div className='generate-btn-container'>
            <button
              className='generate-btn'
              type='button'
              onClick={handleClick}
            >
              Generate
            </button>
          </div>
          <div className='card-container'>
            <p>{petName}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
