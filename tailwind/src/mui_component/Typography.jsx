import {
  Typography,
  Button,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Fab,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Slider from "@mui/material/Slider";
function Typo() {
  const [age, setAge] = useState("");
  const [value, setValue] = useState(50);
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  const handleSlider = (event, newValue) => {
    setValue(newValue); // Update the value state when the slider changes
  };
  return (
    <>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Button variant="text">MUI</Button>
      <Button variant="outlined" className="bg-red-300">
        MUI
      </Button>

      <Button
        variant="text"
        size="medium"
        startIcon={<DeleteIcon />}
        className="m-8"
      >
        MUI
      </Button>
      <span className="m-8">
        <Button variant="contained">MUI</Button>
      </span>
      <span className="p-2 mx-4">
        <Slider
          className="max-w-60"
          value={value}
          onChange={handleSlider}
          aria-labelledby="continuous-slider"
          valueLabelDisplay="on"
        />
        {value}
      </span>
      <IconButton size="medium" className="bg-slate-400">
        <DeleteIcon />
      </IconButton>
      <Fab variant="extended">Navigate</Fab>

      <div className="w-24 m-6">
        <FormControl fullWidth>
          <InputLabel id="age-select-label">Age</InputLabel>
          <Select
            value={age}
            label="Age"
            onChange={handleChange}
            labelId="age-select-label"
          >
            <MenuItem value={10}>Ram</MenuItem>
            <MenuItem value={20}>Shyam</MenuItem>
            <MenuItem value={30}>Hari</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default Typo;
