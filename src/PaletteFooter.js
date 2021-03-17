import React from 'react';
import styles from './styles/PaletteFooterStyles';
import {withStyles} from "@material-ui/styles";

function PaletteFooter(props) {
  const {paletteName, emoji, classes} = props; // not this.props cos this ain't a functional component
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);