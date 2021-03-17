import React from 'react';
import {SortableElement} from "react-sortable-hoc";
import {withStyles} from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement((props) => {
  const {classes, handleClick, name, color} = props; // not this.props because it's a functional component
  return (
    <div className={classes.root} style={{backgroundColor: color}}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);