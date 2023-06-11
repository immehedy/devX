import React from "react";
import Card from "../../Card";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Conveyor = () => {
  return (
    <>
      <Card title="Conveyor Id -01">
        <h5 className="px-2 mb-2 font-semibold">Lift Conveyor 1</h5>
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
          <hr className="text-primary-light" />
          <li className="px-3">Status: </li>
          <hr className="text-primary-light" />
          <li className="px-3">Mode: </li>
          <hr className="text-primary-light" />
          <li className="px-3">Status: </li>
          <hr className="text-primary-light" />
          <li className="px-3">Mode: </li>
          <hr className="text-primary-light" />
          <li className="px-3">Status: </li>
        </ul>
        <div className="px-2 py-1">
          <div className="px-2 py-1 bg-primary text-white w-full flex justify-between gap-2 items-center rounded-t-md">
            <p className="font-semibold">Conveyor Commands</p>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
          </div>
        </div>
        <div className="px-2 py-1">
          <div className="px-2 py-1 bg-primary text-white w-full flex justify-between gap-2 items-center rounded-t-md">
            <p className="font-semibold">Conveyor Config</p>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
          </div>
        </div>

        <div className="px-2 py-1">
          <div className="border border-primary-light rounded-md">
            <div className="px-2 py-1 bg-primary text-white w-full flex justify-between gap-2 items-center rounded-t-md">
              <p className="font-semibold">Links</p>
              <KeyboardArrowUpIcon sx={{ color: "#FFBF3C" }} />
            </div>
            <hr className="text-[#FFBF3C]" />
            <div className="rounded-b-md">
              <ul className="space-y-2 py-2">
                <li className="hover:bg-primary-light hover:text-white px-2">
                  Room 01 : Oda 1
                </li>
                <li className="hover:bg-primary-light hover:text-white px-2">
                  Pallet [0] : 260 - No Car
                </li>
                <li className="hover:bg-primary-light hover:text-white px-2">
                  Carrier 2 (Turntable) : Turntable 1
                </li>
                <li className="hover:bg-primary-light hover:text-white px-2">
                  Carrier 1 (Lift) : Lift 1
                </li>
                <li className="hover:bg-primary-light hover:text-white px-2">
                  Facility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Conveyor;
