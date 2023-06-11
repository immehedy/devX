import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { useState } from "react";
const Card = ({ title, children }) => {
  const [minimize, setMinimize] = useState(false);
  return (
    <div className="rounded-md">
      <div className="px-2 py-1 bg-primary w-full flex justify-start gap-2 items-center rounded-t-md">
        <h3 className="flex-1 text-white">{title}</h3>
        <ErrorOutlineIcon sx={{ color: "#FFBF3C" }} />
        <SettingsIcon sx={{ color: "#FFBF3C" }} />
        <CloseIcon sx={{ color: "#FFBF3C" }} />
      </div>

      {(!minimize && children) && <div className="py-4">{children}</div>}

      {/* <div className="px-2 py-1 flex justify-end w-full rounded-b-md">
        <CloseFullscreenIcon onClick={() => setMinimize(!minimize)} sx={{ color: "#53575A", cursor: "pointer" }} />
      </div> */}
    </div>
  );
};

export default Card;
