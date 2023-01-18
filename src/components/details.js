import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    paddingLeft: '10rem',
    paddingBottom: '2rem',
    paddingTop: '1rem',
    position: 'relative'
  },
});

export default function ToggleButtonsMultiple() {
  const classes = useStyles();
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <div>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
        justify="flex-center"
        className={classes.root}
      >
        <ToggleButton value="bold" aria-label="bold">
          ALL
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          APPAREL
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          ELECTRONICS
        </ToggleButton>
        <ToggleButton value="color" aria-label="color">
          FOOTWEAR
        </ToggleButton>
        <ToggleButton value="personal" aria-label="personal">
          PERSONAL CARE
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
