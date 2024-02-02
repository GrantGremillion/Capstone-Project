import * as React from 'react';
import {Box, Container, Typography, Divider} from '@mui/material';

// Our own custom-built components 
import HomeNavBar from '../Components/HomeNavBar';

// background images
import bg from '.././Images/bg.jpg';
import dark_bg from '.././Images/dark_bg.jpg';
// handles darkmode toggle on the page
import {DARKMODE} from '.././Config';

function Home() {
  
  if (DARKMODE) {
    return (
      <div>
          <Box
          className="bg"
          style={{
          backgroundImage: `url(${dark_bg})`,
          backgroundSize: "cover",
          zIndex: '-1',
          position: 'fixed', // Make sure it covers the whole viewport
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          }}>
        </Box>
        <HomeNavBar></HomeNavBar>

        {/* Container that will hold all home page components */}
        <Container fixed>
          <Box sx={{height: '100vh', width: '120%', marginTop: '5%', marginLeft: '-10%', bgcolor: '#216E6B'}} >
            <div style={{ textAlign: 'center'}}>
              <Typography variant='h3' gutterBottom sx={{color: 'white', fontFamily: 'Courier New', paddingTop: '3%'}}>
                Notifications
              </Typography>
              <Divider> </Divider>
              <Typography sx={{color: 'white', fontSize: 'x-large', fontFamily: 'Courier New', paddingTop: '4%'}}>
                This area whill be used to display any direct messages from freinds or announcments from teachers in a class you are in
              </Typography>
            </div> 
          </Box>
          <Box sx={{height: '100vh', width: '120%', marginTop: '5%', marginLeft: '-10%', bgcolor: '#216E6B'}} />
        </Container>
      </div>
    );
  }
  else {
    return (
      <div>
        <Box
          className="bg"
          style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          zIndex: '-1',
          position: 'fixed', // Make sure it covers the whole viewport
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          }}>
        </Box>
        <HomeNavBar></HomeNavBar>
  
        {/* Container that will hold all home page components */}
        <Container fixed>
          <Box sx={{height: '100vh', width: '120%', marginTop: '5%', marginLeft: '-10%', bgcolor: '#e0f2f1'}} >
            <div style={{ textAlign: 'center'}}>
              <Typography variant='h3' gutterBottom sx={{fontFamily: 'Courier New', paddingTop: '3%'}}>
                Notifications
              </Typography>
              <Divider></Divider>
              <Typography sx={{fontSize: 'x-large', fontFamily: 'Courier New', paddingTop: '4%'}}>
                This area whill be used to display any direct messages from freinds or announcments from teachers in a class you are in
              </Typography>
            </div> 
          </Box>
          <Box sx={{height: '100vh', width: '120%', marginTop: '5%', marginLeft: '-10%', bgcolor: '#e0f2f1'}} />
        </Container>
      </div>
    );
  }
}

export default Home;
  