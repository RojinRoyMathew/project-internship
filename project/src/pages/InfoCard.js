
import React from 'react';

const InfoCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  );
};

export default InfoCard;
