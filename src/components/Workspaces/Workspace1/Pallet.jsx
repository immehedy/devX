import React from "react";
import Card from "../../Card";

const Pallet = () => {
  return (
    <>
      <Card title="Pallet Id">
        <ul className="space-y-2">
          <li className="px-3">Mode: </li>
          <hr className="text-primary-light" />
          <li className="px-3">Status: </li>
          <hr className="text-primary-light" />
          <li className="px-3">Mode: </li>
          <hr className="text-primary-light" />
          <li className="px-3">Status: </li>
          <hr className="text-primary-light" />
          <li className="px-3">Mode: </li>
        </ul>
      </Card>
    </>
  );
};

export default Pallet;
