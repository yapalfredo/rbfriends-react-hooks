import React from "react";

const Card = ({ name, email, id }) => {
  // const {name, email, id} = props;
  // cleaner way to do destructuring  is by passing them above in the constructor

  return (
    <div className="tc bg-light-blue  dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="Robot" src={`https://robohash.org/${name}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
