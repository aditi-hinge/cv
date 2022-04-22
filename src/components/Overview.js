import React from "react";

const Overview = (props) => {
  const { infos } = props;

  return (
    <ul>
      {infos.map((info) => {
        return <li key={info.id}>{info.text}</li>;
      })}
    </ul>
  );
};

export default Overview;
