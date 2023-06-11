import React from "react";
import GridLayout from "react-grid-layout";
import Header from "../components/Header";
import Alarms from "../components/Workspaces/Workspace1/Alarms";
import CareerProps from "../components/Workspaces/Workspace1/CareerProps";
import Commands from "../components/Workspaces/Workspace1/Commands";

import Conveyor from "../components/Workspaces/Workspace1/Conveyor";
import ExitLists from "../components/Workspaces/Workspace1/ExitLists";
import FillRate from "../components/Workspaces/Workspace1/FillRate";
import Occupency from "../components/Workspaces/Workspace1/Occupency";
import Pallet from "../components/Workspaces/Workspace1/Pallet";
import Panel from "../components/Workspaces/Workspace1/Panel";
import RoomSensors from "../components/Workspaces/Workspace1/RoomSensors";

const Dashboard = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 7 },
    { i: "b", x: 1, y: 0, w: 1, h: 3 },
    { i: "c", x: 1, y: 1, w: 1, h: 2 },
    { i: "d", x: 1, y: 2, w: 1, h: 2 },
    { i: "e", x: 2, y: 0, w: 3, h: 3 },
    { i: "f", x: 2, y: 2, w: 1, h: 3 },
    { i: "g", x: 3, y: 2, w: 2, h: 3 },
    { i: "h", x: 5, y: 0, w: 1, h: 2 },
    { i: "i", x: 5, y: 2, w: 1, h: 2 },
    { i: "j", x: 5, y: 4, w: 1, h: 2 },
  ];
  return (
    <>
      <Header />
      <GridLayout
        className="layout"
        isResizable={false}
        layout={layout}
        cols={6}
        rowHeight={100}
        autoSize={true}
        width={1430}
        >
        <div key="a" className="bg-white text-primary text-[14px]">
          <Conveyor />
        </div>
        <div key="b" className="bg-white text-primary text-[14px]">
          <CareerProps />
        </div>
        <div key="c" className="bg-white text-primary text-[14px]">
          <Commands />
        </div>
        <div key="d" className="bg-white text-primary text-[14px]">
          <Occupency />
        </div>
        <div key="e" className="bg-[#2D2C3F]">
          <Panel />
        </div>
        <div key="f" className="bg-white text-primary text-[14px]">
          <Pallet />
        </div>
        <div key="g" className="bg-white text-primary text-[14px]">
          <FillRate />
        </div>
        <div key="h" className="bg-white text-primary text-[14px]">
          <RoomSensors/>
        </div>
        <div key="i" className="bg-white text-primary text-[14px]">
          <ExitLists/>
        </div>
        <div key="j" className="bg-white text-primary text-[14px]">
          <Alarms/>
        </div>
      </GridLayout>
    </>
  );
};

export default Dashboard;
