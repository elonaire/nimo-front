import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRight from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    minWidth: "15vw",
    backgroundColor: theme.palette.background.paper
  },
  menu: {
    display: "flex",
    flexDirection: "row"
  },
}));

export default function DropdownMenu(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className={classes.menu}>
      <List className={classes.root}>
        {props.categories.map((category, index) => {
          const labelId = `checkbox-list-label-${index}`;

          return (
            <ListItem
              key={index}
              role={undefined}
              dense
              button
              onClick={handleToggle(index)}
            >
              <ListItemText id={labelId} primary={`${category.name}`} />
              <ChevronRight edge="end" />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
