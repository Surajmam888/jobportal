import React from "react";
import { Container, Grid, Paper, Typography, TextField, Button, Stack } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted!");
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 5,mb:5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <Stack spacing={3} py={3}>
                        <Typography variant="h3">Get in touch</Typography>
                        <Typography variant="h6">
                            We are always happy to receive ideas, feedback, recommendations, and critiques.
                        </Typography>
                        <Stack spacing={2}>
                            <Stack direction={"row"} spacing={4}>
                                <HomeOutlinedIcon color="secondary" fontSize="large" />
                                <Stack>
                                    <Typography variant="h5" sx={{ fontWeight: 400 }}>Address</Typography>
                                    <Typography>
                                        Vijay Nagar
                                        Indore Mr9<br />
                                        452002
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={"row"} spacing={4}>
                                <EmailOutlinedIcon color="secondary" fontSize="large" />
                                <Stack>
                                    <Typography variant="h5" sx={{ fontWeight: 400 }}>Email</Typography>
                                    <Typography>info@example.com</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={"row"} spacing={4}>
                                <CallOutlinedIcon color="secondary" fontSize="large" />
                                <Stack>
                                    <Typography variant="h5" sx={{ fontWeight: 400 }}>Talk with us</Typography>
                                    <Typography>(+91) 626416 9243</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={"row"} spacing={3} sx={{ placeItems: "center" }}>
                                {/* {socialMediaLinks.map((social) => (
                                    <Stack component={"a"} href={social.link} target="_blank">
                                        <Typography color="secondary" fontSize="large">
                                            {social.icon}
                                        </Typography>
                                    </Stack>
                                ))} */}
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Paper elevation={0} sx={{ mt: 3, p: 1, borderRadius: 3, minHeight: "380px", boxShadow: "6px 6px 20px 0px #b4b2b240;" }}>
                        <Grid container spacing={2} p={2}>
                            <Grid item xs={12} md={6}>
                                <TextField required fullWidth label="Full Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required fullWidth type="email" label="Email" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required fullWidth label="Subject" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Phone" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    multiline
                                    rows={6}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
                                <Button type="submit" variant="contained" sx={{backgroundColor:"#81C408", padding:"15px 15px 15px 15px", width:"30%", borderRadius:"15px"}}>Submit</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">Company Location</Typography>
                    {/* <iframe
                        width="100%"
                        height={500}
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.5023361083113!2d8.521384175988011!3d47.46063967117676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900ba567ec878b%3A0x9bd3965c750ede8d!2sNachmieter24%20-%20Nachmieteragentur%20%26%20Nextflat.ch!5e0!3m2!1sen!2sin!4v1682061547210!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                    /> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14718.964637760524!2d75.88825034999999!3d22.7378602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713691606583!5m2!1sen!2sin" width="100%"
                        height={500}
                        style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
