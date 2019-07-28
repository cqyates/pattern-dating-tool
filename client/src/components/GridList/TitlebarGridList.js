import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from "./tileData";

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 12px 40px 0 rgba(0, 0, 0, 0.38)',
    },
    gridList: {
      width: 350,
      height: 540,
      margin: "auto",
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

  export default function TitlebarGridList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} />
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} style={{height:"100%"}}/>
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.author}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }