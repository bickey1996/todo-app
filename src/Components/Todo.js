import React, { Component } from "react";

import { withStyles, withTheme, useTheme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import Zoom from "@material-ui/core/Zoom";
import Slide from "@material-ui/core/Slide";
import TextEditor from "./TextEditor";

const styles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
    display: "inline-flex",
  },
});

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      checked: false,
    };
  }

  render() {
    const { classes, theme } = this.props;
    const { checked } = this.state;
    const transitionDuration = {
      enter: "500ms",
      exit: "0ms",
    };

    const fabs = [
      {
        color: "primary",
        className: classes.fab,
        icon: <AddIcon />,
        label: "Add",
        size: "medium",
      },
      {
        color: "secondary",
        className: classes.fab,
        icon: <DeleteIcon />,
        label: "Delete",
        size: "large",
      },
    ];
    return (
      <div className="container">
        {!checked && (
          <React.Fragment>
            <div className="d-flex justify-content-between mb-2">
              <div className="flex-column">
                <h1>Hello Floyd Mullins</h1>
                <span className="text-lighter">You have 3 tasks</span>
              </div>{" "}
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <div className="card-container mt-2">
              <div
                className="card p-2"
                onDrag={() => this.setState({ value: 1 })}
                draggable="true"
                onDragEnd={() => this.setState({ value: 0 })}
              >
                <div className="d-flex  justify-content-between">
                  <div className="flex-column">
                    <span>Complete 10 push ups</span>
                    <br></br>
                    <span className="text-lighter">Due Fri Aug 6</span>
                  </div>{" "}
                  <div>
                    <AccessAlarmsIcon />
                  </div>
                </div>
              </div>
            </div>
            <center>
              {fabs.map((fab, index) => (
                <div className={classes.fab}>
                  <Zoom
                    key={fab.color}
                    in={this.state.value === index}
                    timeout="500ms"
                    style={{
                      transitionDelay: `${
                        this.state.value === index ? "500" : "0"
                      }ms`,
                    }}
                    unmountOnExit
                  >
                    <Fab
                      aria-label={fab.label}
                      className={fab.className}
                      color={fab.color}
                      size={fab.size}
                      onClick={() => {
                        this.setState({ checked: true });
                      }}
                    >
                      {fab.icon}
                    </Fab>
                  </Zoom>
                </div>
              ))}
            </center>
          </React.Fragment>
        )}
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <TextEditor
            setChecked={() => {
              this.setState({ checked: false });
            }}
          />
        </Slide>
      </div>
    );
  }
}
export default withStyles(styles)(Todo);
