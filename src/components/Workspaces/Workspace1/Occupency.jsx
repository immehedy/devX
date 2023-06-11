import { Button } from "@mui/material";
import React from "react";
import Card from "../../Card";

const Occupency = () => {
  return (
    <>
      <Card title="System Occupancy">
        <div className="px-2 grid grid-cols-2 gap-2">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#125598",
              fontSize: "10px",
              ":hover": { backgroundColor: "#497fb5" },
            }}>
            Bring Car
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#53575A",
              fontSize: "10px",
              ":hover": { backgroundColor: "#8d9194" },
            }}>
            Exit Car
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D32F2F",
              fontSize: "10px",
              ":hover": { backgroundColor: "#e35f5f" },
            }}>
            Delete Car
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E24747",
              fontSize: "10px",
              ":hover": { backgroundColor: "#e57f7f" },
            }}>
            Cancel
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Occupency;
