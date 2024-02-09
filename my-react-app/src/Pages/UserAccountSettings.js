// The react framework
import React, {useState} from 'react';
// Material UI components
// FormGroup and FormControlLabel are needed for switches with text.
import {Button, Grid, Container, Box, Switch, FormGroup, FormControlLabel} from '@mui/material';
// Premade components we set up and put in the Components folder for reusability
import HeaderBox from '.././Components/HeaderBox';
import PlainNavBar from '../Components/PlainNavBar';
// Used to navigate between web pages
import { useNavigate } from 'react-router-dom';
// solid background image for website
import bg from '.././Images/bg.jpg';
import dark_bg from '.././Images/dark_bg.jpg';
import * as themes from '.././Config';
//import GoBackButton from '../Components/GoBackButton';

function UserAccountSettings() {

    // Handles the page's button presses (temporarily)
    const navigate = useNavigate();
    const handleClick = () => {
        // Use navigate to go to the UserProfile page
        alert('Placeholder: functionality not implemented yet!');
    }
    const goToProfile = () => {
        // Use navigate to go to the UserProfile page
        navigate("/UserProfile");
    }

    // initialize darkmode switch's state with DARKMODE's value
    const [check, setCheck] = useState(themes.DARKMODE);

    // handle's the change of the switch
    function handleChange() {
        setCheck((prevCheck) => !prevCheck);    // this actually toggles the switch's state
        themes.darkmodeToggle();
    }

    // checks for the theme the page is in, and applys it to these variables
    if (themes.DARKMODE) {
        var containerColor = themes.darkContainer;
        var buttonColor = themes.darkButton;
        var textColor = themes.darkText;
        var background = dark_bg;
    }
    else {
        var containerColor = themes.normalContainer;
        var buttonColor = themes.normalButton;
        var textColor = themes.normalText;
        var background = bg;
    }

    return (
        <div>
            {/* Box used to display background image - bg.jpg */}
            <Box
                className="bg"
                style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                zIndex: '-1',
                position: 'fixed', // Make sure it covers the whole viewport
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                }}>
            </Box>
        
            <PlainNavBar text='Edu Hub Collaborate'></PlainNavBar >
            {/* Container and Grid organizes HeaderBox and Buttons */}
            <Container maxWidth='sm' style={{ background: containerColor, marginTop: '75px', height: '700px', marginBottom:'75px'}} >
                <Grid container spacing={5}
                    direction="column"
                    alignItems="center"
                    justifyContent="center">

                    <Grid item xs={12} style={{ marginTop: '20px', marginBottom: '20px'}}>
                        <HeaderBox text={'Account Settings'}></HeaderBox>
                    </Grid>

                    {/* Creates buttons and sliders. */}
                    <Grid item xs={1}>
                        <Button size="small"  onClick={handleClick} style={{ color: textColor, width: '250px', background: buttonColor}} sx={{fontFamily: 'Courier New', fontSize: 'large', marginTop: '0%'}} >
                            Change Display Name
                        </Button>
                    </Grid>

                    <Grid item xs={2}>
                        <Button size="small"  onClick={handleClick} style={{ color: textColor, width: '200px', background: buttonColor}} sx={{fontFamily: 'Courier New', fontSize: 'large', marginTop: '0%'}} >
                            Change Password
                        </Button>
                    </Grid>
        
                    <Grid item xs={3}>
                        <Box
                            sx={{
                            width: 200,
                            height: 40,
                            borderRadius: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'default',
                            fontSize: '2rem', 
                            bgcolor: buttonColor,
                            color: 'primary.white',
                            zIndex: '0',
                            fontFamily: 'Courier New',
                            fontSize: 30
                            }}>

                            <FormGroup>
                                <FormControlLabel control={<Switch onChange={handleChange} checked={check} color='default' />} label="Dark Theme" sx={{color: textColor}} />
                            </FormGroup>

                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Button size="small"  onClick={goToProfile} style={{ color: textColor, width: '250px', background: buttonColor}} sx={{fontFamily: 'Courier New', fontSize: 'large', marginTop: '0%'}} >
                            Return to Profile
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    
    );
}
export default UserAccountSettings;