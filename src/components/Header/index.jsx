import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditNoteIcon from "@mui/icons-material/EditNote";
import WifiIcon from "@mui/icons-material/Wifi";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar, Button } from "@mui/material";
import { useState } from "react";
const Header = () => {
  const buttonSx = {
    fontSize: "10px",
    color: "white",
    backgroundColor: "#53575A",
    "&:hover": {
      border: "solid #FFBF3C",
      color: "white",
      backgroundColor: "#53575A",
    },
  };
  const selectedBtnSx = {
    fontSize: "10px",
    border: "solid #FFBF3C",
    color: "white",
    backgroundColor: "#53575A",
    "&:hover": {
      border: "solid #FFBF3C",
      color: "white",
      backgroundColor: "#53575A",
    },
  };

  const [selected, setSelected] = useState(1);
  const workspaces = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="bg-white h-[60px] py-4 flex justify-start items-center px-2 gap-4 divide-x-2">
      <MenuIcon
        className="bg-primary px-0.5 rounded-md"
        sx={{ color: "white" }}
      />
      <div className="flex-1 flex justify-end gap-2 divide-x-1">
        <div className="px-2 flex justify-end gap-4 items-center">
          <ChevronLeftIcon
            className="bg-[#F1F1F9] rounded-sm"
            sx={{ color: "#808495" }}
          />

          {workspaces?.map((item, index) => (
            <Button
              key={index}
              onClick={() => setSelected(item)}
              sx={selected === item ? selectedBtnSx : buttonSx}>
              workspace-{item}
            </Button>
          ))}

          <ChevronRightIcon
            className="bg-[#F1F1F9] rounded-sm"
            sx={{ color: "#808495" }}
          />
          <EditNoteIcon
            sx={{
              color: "white",
              backgroundColor: "#53575A",
              borderRadius: "3px",
            }}
          />
          <WifiIcon sx={{ color: "#61BD63", fontWeight: "bold" }} />
          <QuestionAnswerIcon sx={{ color: "#53575A", fontWeight: "bold" }} />
          <NotificationsIcon sx={{ color: "#53575A", fontWeight: "bold" }} />
        </div>
        <div className="px-2 flex items-center justify-around">
          <p>John Doe</p>
          <KeyboardArrowDownIcon />
          <Avatar sx={{ width: 28, height: 28 }}>J</Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
