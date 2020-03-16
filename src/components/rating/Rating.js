import React from "react";
import Rating from "@material-ui/lab/Rating";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function SimpleRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">Controlled</Typography> */}
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}

const ReadOnlyRating = () => {
  const [value] = React.useState(4);
  return (
      <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">Ratings</Typography> */}
        <Rating name="read-only" value={value} readOnly />
      </Box>
  );
};

export { ReadOnlyRating };
