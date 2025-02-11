import React, { useCallback, useEffect, useState } from 'react';
import '../styles/main.css';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

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
    ReactGA.event({
      category: 'Visitor',
      action: 'Clicked the Generate button',
    });
  };

  useEffect(() => {
    getName();
  }, [getName]);

  return (
    <main>
      <Helmet>
        <title>Random Pet Name Generator</title>
        <meta
          name='namemypets.app'
          content='Random pet name generator.  A website that randomly generates a pet name.
          The user is able to select either a male or female name.
          Add a name to the database of pet names'
        />
        <meta name='author' content='Petswithoutnames.org' />
        <meta
          name='description'
          content='Randomly generate either male or female pet names.  You can add your own names
          to the pet name database'
        />
        <meta name='robots' content='index follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <h2>A tool to randomly generate a pet name</h2>
      <h3>Scroll down to have AI generate your pet names!</h3>
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
            <div className='results'>
              <p>{petName}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
