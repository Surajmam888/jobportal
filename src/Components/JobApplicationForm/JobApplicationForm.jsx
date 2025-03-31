// import React, { useState } from 'react';
// import { TextField, Button, MenuItem, Grid, Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';
// import CloseIcon from '@mui/icons-material/Close';

// const JobApplicationForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         lastName: '',
//         email: '',
//         mobile: '',
//         appliedPosition: '',
//         startDate: dayjs(),
//         interviewDate: dayjs(),
//         coverLetter: '',
//         resume: null
//     });

//     const [open, setOpen] = useState(false);

//     const positions = ['Front End Developer','Back End Developer', 'Designer', 'Product Manager', 'Sales','Java Developer','Wordpress Developer'];

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleDateChange = (key, value) => {
//         setFormData({
//             ...formData,
//             [key]: value,
//         });
//     };

//     const handleFileChange = (e) => {
//         setFormData({
//             ...formData,
//             resume: e.target.files[0],
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data:', formData);
//         setOpen(false);
//     };

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <Box>
//             <Box onClick={handleOpen}>
//             Apply Now
//             </Box>

//             <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
//                 <DialogTitle>
//                     Job Application Form
//                     <IconButton
//                         aria-label="close"
//                         onClick={handleClose}
//                         sx={{
//                             position: 'absolute',
//                             right: 8,
//                             top: 8,
//                             color: (theme) => theme.palette.grey[500],
//                         }}
//                     >
//                         <CloseIcon />
//                     </IconButton>
//                 </DialogTitle>
//                 <DialogContent>
//                     <form onSubmit={handleSubmit}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     label="First Name"
//                                     name="name"
//                                     fullWidth
//                                     value={formData.name}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     label="Last Name"
//                                     name="lastName"
//                                     fullWidth
//                                     value={formData.lastName}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     label="Email"
//                                     name="email"
//                                     type="email"
//                                     fullWidth
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     label="Mobile Number"
//                                     name="mobile"
//                                     fullWidth
//                                     value={formData.mobile}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     label="Applied Position"
//                                     name="appliedPosition"
//                                     select
//                                     fullWidth
//                                     value={formData.appliedPosition}
//                                     onChange={handleInputChange}
//                                     required
//                                 >
//                                     {positions.map((position, index) => (
//                                         <MenuItem key={index} value={position}>
//                                             {position}
//                                         </MenuItem>
//                                     ))}
//                                 </TextField>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                     <DatePicker
//                                         label="Earliest Possible Start Date"
//                                         value={formData.startDate}
//                                         onChange={(date) => handleDateChange('startDate', date)}
//                                         renderInput={(params) => <TextField {...params} fullWidth />}
//                                         required
//                                     />
//                                 </LocalizationProvider>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                     <DatePicker
//                                         label="Preferred Interview Date"
//                                         value={formData.interviewDate}
//                                         onChange={(date) => handleDateChange('interviewDate', date)}
//                                         renderInput={(params) => <TextField {...params} fullWidth />}
//                                         required
//                                     />
//                                 </LocalizationProvider>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     label="Cover Letter"
//                                     name="coverLetter"
//                                     fullWidth
//                                     multiline
//                                     rows={4}
//                                     value={formData.coverLetter}
//                                     onChange={handleInputChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Button
//                                     variant="contained"
//                                     component="label"
//                                     fullWidth
//                                 >
//                                     Upload Resume*
//                                     <input
//                                         type="file"
//                                         name="resume"
//                                         hidden
//                                         onChange={handleFileChange}
//                                         required
//                                     />
//                                 </Button>
//                                 {formData.resume && <Typography>{formData.resume.name}</Typography>}
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleSubmit} variant="contained" color="primary">
//                         Apply
//                     </Button>
//                     <Button onClick={handleClose} variant="outlined" color="primary">
//                         Cancel
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </Box>
//     );
// };

// export default JobApplicationForm;



import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        mobile: '',
        appliedPosition: '',
        startDate: dayjs(),
        interviewDate: dayjs(),
        coverLetter: '',
        // resume: null    
    });

    const [open, setOpen] = useState(false);
    const positions = ['Front End Developer', 'Back End Developer', 'Designer', 'Product Manager', 'Sales', 'Java Developer', 'Wordpress Developer'];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the form data to be sent to the API
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('lastName', formData.lastName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('mobile', formData.mobile);
        formDataToSend.append('appliedPosition', formData.appliedPosition);
        formDataToSend.append('startDate', formData.startDate.format('YYYY-MM-DD')); // Formatting the date as 'YYYY-MM-DD'
        formDataToSend.append('interviewDate', formData.interviewDate.format('YYYY-MM-DD')); // Formatting the date as 'YYYY-MM-DD'
        formDataToSend.append('coverLetter', formData.coverLetter);
        // if (formData.resume) {
        //     formDataToSend.append('resume', formData.resume); // Appending the resume file
        // }

        try {
            // Make the POST request to the API
            const response = await axios.post('http://localhost:3001/user/save', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data', // This tells the server that you're sending a form with files
                },
            });

            console.log('API Response:', response.data);
            setOpen(false); // Close the dialog on successful submission
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Box onClick={handleOpen}>
                Apply Now
            </Box>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>
                    Job Application Form
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First Name"
                                    name="name"
                                    fullWidth
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Name"
                                    name="lastName"
                                    fullWidth
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    fullWidth
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Mobile Number"
                                    name="mobile"
                                    fullWidth
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Applied Position"
                                    name="appliedPosition"
                                    select
                                    fullWidth
                                    value={formData.appliedPosition}
                                    onChange={handleInputChange}
                                    required
                                >
                                    {positions.map((position, index) => (
                                        <MenuItem key={index} value={position}>
                                            {position}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Earliest Possible Start Date"
                                        value={formData.startDate}
                                        onChange={(date) => handleDateChange('startDate', date)}
                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                        required
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Preferred Interview Date"
                                        value={formData.interviewDate}
                                        onChange={(date) => handleDateChange('interviewDate', date)}
                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                        required
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Cover Letter"
                                    name="coverLetter"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={formData.coverLetter}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    fullWidth
                                >
                                    Upload Resume*
                                    <input
                                        type="file"
                                        name="resume"
                                        hidden
                                        onChange={handleFileChange}
                                        required
                                    />
                                </Button>
                                {formData.resume && <Typography>{formData.resume.name}</Typography>}
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        Apply
                    </Button>
                    <Button onClick={handleClose} variant="outlined" color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default JobApplicationForm;