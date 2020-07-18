import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
//import Zoom from "material-ui/svg-icons/action/zoom-in";

class Result extends Component {
  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map((img) => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  By <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomIn color='white' />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt='' />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }
    return <div>{imageListContent}</div>;
  }
}

export default Result;
