import * as React from "react";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useTypewriter } from "react-simple-typewriter";

export default function LandingPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const [typeEffect] = useTypewriter({
    words: [
      "Hi there! I'm Osai, dedicated to helping you understand your HealthCare Benefits. Let's get started! 🩺📋",
    ],
    typeSpeed: 40,
  });
  return (
    <div>
      <div className="row flex justify-center items-center mt-3">
        {" "}
        <img
          src="https://i.imgur.com/CzM76M2.png"
          width="65"
          height="40"
          alt="error"
        />
      </div>
      <div className="row mx-5 my-4">
        <span
         aria-owns={open ? 'mouse-over-popover' : undefined}
         aria-haspopup="true"
         onMouseEnter={handlePopoverOpen}
         onMouseLeave={handlePopoverClose}
          className="bg-blue-100 font-semibold  p-4 text-xl rounded-lg"
        >
          {typeEffect}
        </span>
        <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
          <Typography sx={{ p: 1 }} className="bg-blue-100 rounded-lg ml-5" >I use Popover.</Typography>
      </Popover>
        <div className="text-xs my-5 px-4 text-gray-400">Today,03:06</div>
      </div>
      <div className="row">
        <div className="flex">
          <span className="text-xl rounded-lg p-4 font-semibold bg-blue-100 ">
            🩺 Does my plan cover specialists?
          </span>
          <span className="text-xl rounded-lg p-4 font-semibold bg-blue-100 ">
            📋 What kind of services does ClearShare cover?
          </span>
          <span className="text-xl rounded-lg p-4 font-semibold bg-blue-100 ">
            See more{" "}
          </span>
          
        </div>
      
      </div>
      Hello World
    </div>
  );
}
