import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import MicNoneIcon from "@mui/icons-material/MicNone";
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
      "Hi there! I'm Osai, dedicated to helping you understand your HealthCare Benefits. Let's get started!  🩺📋",
    ],
    typeSpeed: 40,
  });
  return (
    <div>
      <div className="row flex justify-center items-center mt-3">
        {" "}
        <img
          src="https://i.imgur.com/CzM76M2.png"
          width="45"
          height="30"
          alt="error"
        />
      </div>
      <div className="row m-4">
        <span
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          className="bg-blue-100 font-semibold  p-3 text-sm rounded-lg"
        >
          {typeEffect}
        </span>
        {/* <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }} className="bg-blue-100 rounded-lg ml-5">
            I use Popover.
          </Typography>
        </Popover> */}
        <div className="text-xs my-3 px-3 text-gray-400">Today,03:06</div>
      </div>
      <div className="row m-4 flex flex-col items-end "><div >
      </div>
        <div 
          aria-owns={open ? "2mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          className="bg-gray-300 font-semibold  p-3 text-sm rounded-lg"
        >
          🩺 Does my plan cover specialists?
        </div>
        <Popover
          id="2mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }} className="bg-gray-300 rounded-lg ml-5">
            Copy
          </Typography>
        </Popover>
        <div className="text-xs my-3 px-3 text-gray-400 ">Today,03:06</div>
  
      </div>
      <div className="row m-4">
        <div 
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          className="bg-blue-100 font-semibold max-w-5xl  p-3 text-sm rounded-lg"
        >
          Yes, your Clearwater Health Benefits plan does cover specialist
          visits. The cost for a specialist visit is $100 per visit for a
          network provider. Please note that you do not need a referral to see a
          specialist.<br></br><br></br>
           You can find a specialist within your network by using the
          Multiplan PHCS provider search tool:
          https://www.multiplan.com/webcenter/portal/ProviderSearch. If you need
          to find a provider outside of the PHCS Specific Services network, you
          can use this feature: https://pnoa-ppo.com/. 
          <br></br>
          <br></br>Remember, if you have any
          questions or need further assistance, you can always reach out to the
          customer service number provided on your ID card.
        </div>
        {/* <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }} className="bg-blue-100 rounded-lg ml-5">
            I use Popover.
          </Typography>
        </Popover> */}
        <div className="text-xs my-3 px-3 text-gray-400">Today,03:06</div>
      </div>
      <div
        className="row float-bottom "
        style={{
          position: "fixed", // Set the position to fixed
          bottom: 30, // Align it at the bottom
          left: "50%", // Center it horizontally
          transform: "translateX(-50%)", // Adjust for centering
          bgcolor: "#fff", // Set the background color
          zIndex: 1000,
        }}
      >
        <div className="flex">
          <span className="text-xs rounded-lg p-3 font-semibold bg-blue-100 my-2">
            🩺 Does my plan cover specialists?
          </span>
          <span className="text-xs rounded-lg p-3 font-semibold bg-blue-100 m-2">
            📋 What kind of services does ClearShare cover?
          </span>
          <span className="text-xs rounded-lg p-3 font-semibold bg-blue-100 my-2">
            See more{" "}
          </span>
        </div>
        <Paper
          component="form"
          sx={{
            p: "0px 4px",
            display: "flex",
            alignItems: "center",
            width: "45vw",
            borderRadius: "06px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Write your message "
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            sx={{
              p: "06px",
              bgcolor: "black",
              margin: "05px",
              borderRadius: "10px",
            }}
          >
            <MicNoneIcon sx={{ color: "white" }} />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}
