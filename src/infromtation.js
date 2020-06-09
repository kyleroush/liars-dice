import React from 'react';
import Typography from '@material-ui/core/Typography';

class Information extends React.Component {
  
  render() {

    return (
      <div>
        <Typography  variant="h6" >
          How To Play
        </Typography>
        <Typography>
          1) Either create or join a session.
        </Typography>
        <Typography>
          2) Wait for all the other players to join then click start.
        </Typography>
        <Typography>
          3) If you are up first place your bet.
        </Typography>
        <Typography>
          4) When it is your turn decide if you want to call the previous person a liar and total up the dice or if you want to raise the bet.
        </Typography>
        <Typography>
          5) You total up the dice (ones are wild) and who ever was wrong loses a dice.
        </Typography>
        <Typography>
          6) The round starts over till only one person has dice.
        </Typography>
      </div>
    );
  }
}

export default Information;