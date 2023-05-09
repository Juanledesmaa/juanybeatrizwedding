

import React, {Fragment} from 'react';
import { Button, Dialog, Grid, } from '@material-ui/core'

const LocationMap = ({ maxWidth, button, buttonClass }) => {

  const openMaps = () => {
    const url = "https://goo.gl/maps/XCY7mE5NefaA7LSN8";
    if (navigator && navigator.app) {
      navigator.app.loadUrl(url, { openExternal: true });
    } else {
      window.open(url, "_blank");
    }
  };

    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    const styles = (theme) => ({
        root: {
          margin: 0,
          padding: theme.spacing(2),
        },
        closeButton: {
          position: 'absolute',
          right: theme.spacing(1),
          top: theme.spacing(1),
          color: theme.palette.grey[500],
        },
      });

    return (
        <Fragment>
            <Button
                className={`btn ${buttonClass}`}
                onClick={openMaps}>
                {button}
                Ver ubicación
            </Button>
        </Fragment>
    );
}
export default LocationMap


