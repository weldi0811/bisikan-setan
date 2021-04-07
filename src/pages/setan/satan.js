/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import useSatan from './satan.hook';
import './satan.scss';

const Setan = () => {
  const { getSatanSpawn, photo } = useSatan();

  useEffect(() => {
    getSatanSpawn();
  }, []);

  return (
    <div className="SatanWrapper">
      <h1 className="Title">Selamat menunaikan ibadah puasa</h1>
      <img src={photo} alt="img" className="SatanImg" />
      <h1 className="Title">Semangat ya</h1>
    </div>
  );
};

export default Setan;
