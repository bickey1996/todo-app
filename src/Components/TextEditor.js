import React, { Component } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles, withTheme, useTheme } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
});

class TextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className="textContainer">
        <div>
          <CloseIcon onClick={this.props.setChecked} />
        </div>
        <div className="textBox">
          <textarea
            className="text-editor"
            placeholder="What would you like to add?"
          />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(TextEditor);
