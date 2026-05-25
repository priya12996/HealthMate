// // // import {
// // //   Box,
// // //   Button,
// // //   Container,
// // //   TextField,
// // //   Typography,
// // //   Stack,
// // //   FormControl,
// // //   InputLabel,
// // //   Select,
// // //   MenuItem,
// // // } from "@mui/material";
// // // import Autocomplete from "@mui/material/Autocomplete";
// // // import React, { useState } from "react";
// // // import swal from "sweetalert";
// // // import {
// // //   LocalizationProvider,
// // //   MobileDateTimePicker,
// // // } from "@mui/lab";
// // // import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// // // const Appointment = () => {
// // //   const [city, setCity] = useState("");
// // //   const [cityOptions, setCityOptions] = useState([]);
// // //   const [hospitals, setHospitals] = useState([]);
// // //   const [hospital, setHospital] = useState("");
// // //   const [department, setDepartment] = useState("");

// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [problem, setProblem] = useState("");
// // //   const [date, setDate] = useState(new Date());

// // //   // 🔍 Fetch city suggestions
// // //   const fetchCities = async (value) => {
// // //     if (!value) return;

// // //     const res = await fetch(
// // //       `https://nominatim.openstreetmap.org/search?format=json&q=${value}&countrycodes=in`
// // //     );
// // //     const data = await res.json();

// // //     const cities = data.map((item) => item.display_name);
// // //     setCityOptions(cities);
// // //   };

// // //   // 🏥 Fetch hospitals
// // //   const fetchHospitals = async (selectedCity) => {
// // //     if (!selectedCity) return;

// // //     setCity(selectedCity);
// // //     setHospital("");
// // //     setHospitals([]);

// // //     try {
// // //       const geoRes = await fetch(
// // //         `https://nominatim.openstreetmap.org/search?format=json&q=${selectedCity}`
// // //       );
// // //       const geoData = await geoRes.json();

// // //       if (geoData.length === 0) {
// // //         swal("City not found 😢");
// // //         return;
// // //       }

// // //       const lat = geoData[0].lat;
// // //       const lng = geoData[0].lon;

// // //       const res = await fetch(
// // //         `http://localhost:5000/api/hospitals?lat=${lat}&lng=${lng}`
// // //       );
// // //       const data = await res.json();

// // //       setHospitals(data.elements || []);
// // //     } catch (err) {
// // //       swal("Error fetching hospitals ❌");
// // //     }
// // //   };

// // //   // ✅ Booking
// // //   const handleBooking = () => {
// // //     if (!city || !hospital || !department || !name || !email) {
// // //       swal("Please complete all steps 😤");
// // //       return;
// // //     }

// // //     swal(
// // //       `Appointment booked at ${hospital} (${department}) 🎉`,
// // //       { icon: "success" }
// // //     );
// // //   };

// // //   return (
// // //     <Box sx={{ minHeight: "100vh", p: 3 }}>
// // //       <Container maxWidth="md">

// // //         <Typography variant="h5" sx={{ mb: 3 }}>
// // //           Book Appointment 🏥
// // //         </Typography>

// // //         {/* 📍 SEARCHABLE CITY DROPDOWN */}
// // //         <Autocomplete
// // //           freeSolo
// // //           options={cityOptions}
// // //           onInputChange={(e, value) => fetchCities(value)}
// // //           onChange={(e, value) => fetchHospitals(value)}
// // //           renderInput={(params) => (
// // //             <TextField {...params} label="Search City" fullWidth />
// // //           )}
// // //         />

// // //         {/* 🏥 HOSPITAL */}
// // //         {hospitals.length > 0 && (
// // //           <FormControl fullWidth sx={{ mt: 2 }}>
// // //             <InputLabel>Select Hospital</InputLabel>
// // //             <Select
// // //               value={hospital}
// // //               onChange={(e) => setHospital(e.target.value)}
// // //               label="Select Hospital"
// // //             >
// // //               {hospitals.map((h, i) => (
// // //                 <MenuItem key={i} value={h.tags?.name}>
// // //                   {h.tags?.name || "Hospital"}
// // //                 </MenuItem>
// // //               ))}
// // //             </Select>
// // //           </FormControl>
// // //         )}

// // //         {/* 🏢 DEPARTMENT */}
// // //         {hospital && (
// // //           <FormControl fullWidth sx={{ mt: 2 }}>
// // //             <InputLabel>Select Department</InputLabel>
// // //             <Select
// // //               value={department}
// // //               onChange={(e) => setDepartment(e.target.value)}
// // //               label="Select Department"
// // //             >
// // //               <MenuItem value="Cardiology">Cardiology</MenuItem>
// // //               <MenuItem value="Orthopedic">Orthopedic</MenuItem>
// // //               <MenuItem value="Neurology">Neurology</MenuItem>
// // //               <MenuItem value="General">General</MenuItem>
// // //             </Select>
// // //           </FormControl>
// // //         )}

// // //         {/* 👤 DETAILS */}
// // //         {department && (
// // //           <>
// // //             <TextField
// // //               label="Your Name"
// // //               fullWidth
// // //               sx={{ mt: 2 }}
// // //               value={name}
// // //               onChange={(e) => setName(e.target.value)}
// // //             />

// // //             <TextField
// // //               label="Your Email"
// // //               fullWidth
// // //               sx={{ mt: 2 }}
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //             />

// // //             <LocalizationProvider dateAdapter={AdapterDateFns}>
// // //               <Stack spacing={3} sx={{ mt: 2 }}>
// // //                 <MobileDateTimePicker
// // //                   value={date}
// // //                   onChange={(newValue) => setDate(newValue)}
// // //                   label="Select Date & Time"
// // //                   renderInput={(params) => <TextField {...params} />}
// // //                 />
// // //               </Stack>
// // //             </LocalizationProvider>

// // //             <TextField
// // //               label="Problem"
// // //               fullWidth
// // //               multiline
// // //               rows={3}
// // //               sx={{ mt: 2 }}
// // //               value={problem}
// // //               onChange={(e) => setProblem(e.target.value)}
// // //             />

// // //             <Button
// // //               onClick={handleBooking}
// // //               fullWidth
// // //               variant="contained"
// // //               sx={{ mt: 3 }}
// // //             >
// // //               Confirm Appointment
// // //             </Button>
// // //           </>
// // //         )}

// // //       </Container>
// // //     </Box>
// // //   );
// // // };

// // // export default Appointment;

// // // // import React from 'react';
// // // // import {
// // // //   Avatar, Box, Button, Card, CardActionArea,
// // // //   CardActions, CardContent, Container, Grid, Typography
// // // // } from '@mui/material';
// // // // import HomeIcon from '@mui/icons-material/Home';
// // // // import { HashLink } from 'react-router-hash-link';
// // // // import { useNavigate } from "react-router-dom"; // ✅ ADD THIS
// // // // import useDocData from '../../../Hooks/useDocData';
// // // // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // // // import LoadingScreen from '../../LoadingScreen/LoadingScreen';

// // // // const Doctors = () => {
// // // //   const doctors = useDocData();
// // // //   const navigate = useNavigate(); // ✅ ADD THIS

// // // //   return (
// // // //     <div id='doctors'>
// // // //       {doctors[0].length !== 0 ? <>
// // // //         <Box sx={{ bgcolor: '#fce4ec', color: 'primary.main', p: 2, mb: 2, mt: 6, textAlign: "center" }}>
// // // //           <Container maxWidth="xl">
// // // //             <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }}
// // // //               variant='h5'
// // // //             >
// // // //               Our team always ready to assist you
// // // //             </Typography>

// // // //             <Grid container spacing={3}>
// // // //               {
// // // //                 doctors[0]?.map((doctor) => (
// // // //                   <Grid key={doctor.doc_id} item xs={12} sm={6} md={4} lg={3} sx={{ mx: 'auto' }}>
// // // //                     <Card sx={{
// // // //                       mx: 'auto',
// // // //                       boxShadow: 10,
// // // //                       maxWidth: 345,
// // // //                       transition: '0.5s all ease-in-out',
// // // //                       ':hover': {
// // // //                         color: '#e91e63',
// // // //                         boxShadow: 1
// // // //                       },
// // // //                       'img': { transition: '0.5s all ease-in-out' },
// // // //                       ':hover img': {
// // // //                         transform: 'scale(1.1)'
// // // //                       }
// // // //                     }}>

// // // //                       <CardActionArea>
// // // //                         <Avatar
// // // //                           alt="doctor image"
// // // //                           src={doctor?.doc_img}
// // // //                           sx={{
// // // //                             width: 256, height: 256, mx: 'auto'
// // // //                           }}
// // // //                         />

// // // //                         <CardContent sx={{ display: 'flex', mx: 'auto', my: 2 }}>
// // // //                           <Typography gutterBottom variant="h5" component="div">
// // // //                             Specialist in {doctor.specialize}
// // // //                           </Typography>
// // // //                         </CardContent>
// // // //                       </CardActionArea>

// // // //                       <CardActions sx={{ textAlign: "center", justifyContent: 'center' }}>
// // // //                         {/* ✅ BUTTON UPDATED */}
// // // //                         <Button
// // // //                           onClick={() => navigate("/appointment")}
// // // //                           sx={{ mt: 2, mb: 1 }}
// // // //                           variant="contained"
// // // //                           className="CheckButton"
// // // //                         >
// // // //                           Make an Appointment
// // // //                           <AddCircleIcon />
// // // //                         </Button>
// // // //                       </CardActions>

// // // //                     </Card>
// // // //                   </Grid>
// // // //                 ))
// // // //               }
// // // //             </Grid>

// // // //             <HashLink smooth to="/home#home" className='text-style'>
// // // //               <Button variant="contained" startIcon={<HomeIcon />} sx={{ mb: 5, mt: 5 }}>
// // // //                 Back to Home
// // // //               </Button>
// // // //             </HashLink>

// // // //           </Container>
// // // //         </Box>
// // // //       </> : <LoadingScreen />}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Doctors;


// // // import {
// // //   Box,
// // //   Button,
// // //   Container,
// // //   TextField,
// // //   Typography,
// // //   Stack,
// // //   FormControl,
// // //   InputLabel,
// // //   Select,
// // //   MenuItem,
// // // } from "@mui/material";
// // // import Autocomplete from "@mui/material/Autocomplete";
// // // import React, { useState } from "react";
// // // import swal from "sweetalert";
// // // import {
// // //   LocalizationProvider,
// // //   MobileDateTimePicker,
// // // } from "@mui/lab";
// // // import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// // // const Appointment = () => {
// // //   const [city, setCity] = useState("");
// // //   const [cityOptions, setCityOptions] = useState([]);
// // //   const [hospitals, setHospitals] = useState([]);
// // //   const [hospital, setHospital] = useState("");
// // //   const [department, setDepartment] = useState("");

// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [problem, setProblem] = useState("");
// // //   const [date, setDate] = useState(new Date());

// // //   // 🔍 Fetch city suggestions
// // //   const fetchCities = async (value) => {
// // //     if (!value) return;

// // //     const res = await fetch(
// // //       `https://nominatim.openstreetmap.org/search?format=json&q=${value}&countrycodes=in`
// // //     );
// // //     const data = await res.json();

// // //     const cities = data.map((item) => item.display_name);
// // //     setCityOptions(cities);
// // //   };

// // //   // 🏥 Fetch hospitals
// // //   const fetchHospitals = async (selectedCity) => {
// // //     if (!selectedCity) return;

// // //     setCity(selectedCity);
// // //     setHospital("");
// // //     setHospitals([]);

// // //     try {
// // //       const geoRes = await fetch(
// // //         `https://nominatim.openstreetmap.org/search?format=json&q=${selectedCity}`
// // //       );
// // //       const geoData = await geoRes.json();

// // //       if (geoData.length === 0) {
// // //         swal("City not found 😢");
// // //         return;
// // //       }

// // //       const lat = geoData[0].lat;
// // //       const lng = geoData[0].lon;

// // //       const res = await fetch(
// // //         `http://localhost:5000/api/hospitals?lat=${lat}&lng=${lng}`
// // //       );
// // //       const data = await res.json();

// // //       setHospitals(data.elements || []);
// // //     } catch (err) {
// // //       swal("Error fetching hospitals ❌");
// // //     }
// // //   };

// // //   // ✅ Booking
// // //   const handleBooking = () => {
// // //     if (!city || !hospital || !department || !name || !email) {
// // //       swal("Please complete all steps 😤");
// // //       return;
// // //     }

// // //     swal(
// // //       `Appointment booked at ${hospital} (${department}) 🎉`,
// // //       { icon: "success" }
// // //     );
// // //   };

// // //   return (
// // //     <Box sx={{ minHeight: "100vh", p: 3 }}>
// // //       <Container maxWidth="md">

// // //         <Typography variant="h5" sx={{ mb: 3 }}>
// // //           Book Appointment 🏥
// // //         </Typography>

// // //         {/* 📍 SEARCHABLE CITY */}
// // //         <Autocomplete
// // //           freeSolo
// // //           options={cityOptions}
// // //           onInputChange={(e, value) => fetchCities(value)}
// // //           onChange={(e, value) => fetchHospitals(value)}
// // //           renderInput={(params) => (
// // //             <TextField {...params} label="Search City" fullWidth />
// // //           )}
// // //         />

// // //         {/* 🏥 HOSPITAL */}
// // //         {hospitals.length > 0 && (
// // //           <FormControl fullWidth sx={{ mt: 2 }}>
// // //             <InputLabel>Select Hospital</InputLabel>
// // //             <Select
// // //               value={hospital}
// // //               onChange={(e) => setHospital(e.target.value)}
// // //               label="Select Hospital"
// // //             >
// // //               {hospitals
// // //                 .filter((h) => h.tags && h.tags.name) // ✅ FIX APPLIED
// // //                 .map((h, i) => (
// // //                   <MenuItem key={i} value={h.tags.name}>
// // //                     {h.tags.name}
// // //                   </MenuItem>
// // //                 ))}
// // //             </Select>
// // //           </FormControl>
// // //         )}

// // //         {/* 🏢 DEPARTMENT */}
// // //         {hospital && (
// // //           <FormControl fullWidth sx={{ mt: 2 }}>
// // //             <InputLabel>Select Department</InputLabel>
// // //             <Select
// // //               value={department}
// // //               onChange={(e) => setDepartment(e.target.value)}
// // //               label="Select Department"
// // //             >
// // //               <MenuItem value="Cardiology">Cardiology</MenuItem>
// // //               <MenuItem value="Orthopedic">Orthopedic</MenuItem>
// // //               <MenuItem value="Neurology">Neurology</MenuItem>
// // //               <MenuItem value="General">General</MenuItem>
// // //             </Select>
// // //           </FormControl>
// // //         )}

// // //         {/* 👤 DETAILS */}
// // //         {department && (
// // //           <>
// // //             <TextField
// // //               label="Your Name"
// // //               fullWidth
// // //               sx={{ mt: 2 }}
// // //               value={name}
// // //               onChange={(e) => setName(e.target.value)}
// // //             />

// // //             <TextField
// // //               label="Your Email"
// // //               fullWidth
// // //               sx={{ mt: 2 }}
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //             />

// // //             <LocalizationProvider dateAdapter={AdapterDateFns}>
// // //               <Stack spacing={3} sx={{ mt: 2 }}>
// // //                 <MobileDateTimePicker
// // //                   value={date}
// // //                   onChange={(newValue) => setDate(newValue)}
// // //                   label="Select Date & Time"
// // //                   renderInput={(params) => <TextField {...params} />}
// // //                 />
// // //               </Stack>
// // //             </LocalizationProvider>

// // //             <TextField
// // //               label="Problem"
// // //               fullWidth
// // //               multiline
// // //               rows={3}
// // //               sx={{ mt: 2 }}
// // //               value={problem}
// // //               onChange={(e) => setProblem(e.target.value)}
// // //             />

// // //             <Button
// // //               onClick={handleBooking}
// // //               fullWidth
// // //               variant="contained"
// // //               sx={{ mt: 3 }}
// // //             >
// // //               Confirm Appointment
// // //             </Button>
// // //           </>
// // //         )}

// // //       </Container>
// // //     </Box>
// // //   );
// // // };

// // // export default Appointment;


// // import {
// //   Box,
// //   Button,
// //   Container,
// //   TextField,
// //   Typography,
// //   Stack,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// // } from "@mui/material";
// // import Autocomplete from "@mui/material/Autocomplete";
// // import React, { useState } from "react";
// // import swal from "sweetalert";
// // import {
// //   LocalizationProvider,
// //   MobileDateTimePicker,
// // } from "@mui/lab";
// // import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// // const Appointment = () => {
// //   const [city, setCity] = useState("");
// //   const [cityOptions, setCityOptions] = useState([]);
// //   const [hospitals, setHospitals] = useState([]);
// //   const [hospital, setHospital] = useState("");
// //   const [department, setDepartment] = useState("");

// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [problem, setProblem] = useState("");
// //   const [date, setDate] = useState(new Date());

// //   // 🔍 Fetch city suggestions
// //   const fetchCities = async (value) => {
// //     if (!value) return;

// //     const res = await fetch(
// //       `https://nominatim.openstreetmap.org/search?format=json&q=${value}&countrycodes=in`
// //     );
// //     const data = await res.json();

// //     const cities = data.map((item) => item.display_name);
// //     setCityOptions(cities);
// //   };

// //   // 🏥 Fetch hospitals
// //   const fetchHospitals = async (selectedCity) => {
// //     if (!selectedCity) return;

// //     setCity(selectedCity);
// //     setHospital("");
// //     setHospitals([]);

// //     try {
// //       const geoRes = await fetch(
// //         `https://nominatim.openstreetmap.org/search?format=json&q=${selectedCity}`
// //       );
// //       const geoData = await geoRes.json();

// //       if (geoData.length === 0) {
// //         swal("City not found 😢");
// //         return;
// //       }

// //       const lat = geoData[0].lat;
// //       const lng = geoData[0].lon;

// //       const res = await fetch(
// //         `http://localhost:5000/api/hospitals?lat=${lat}&lng=${lng}`
// //       );
// //       const data = await res.json();

// //       if (!data.elements || data.elements.length === 0) {
// //         swal("No hospitals found 😢");
// //       }

// //       setHospitals(data.elements || []);
// //     } catch (err) {
// //       swal("Error fetching hospitals ❌");
// //     }
// //   };

// //   // ✅ Booking
// //   const handleBooking = () => {
// //     if (!city || !hospital || !department || !name || !email) {
// //       swal("Please complete all steps 😤");
// //       return;
// //     }

// //     swal(
// //       `Appointment booked at ${hospital} (${department}) 🎉`,
// //       { icon: "success" }
// //     );
// //   };

// //   // ✅ FILTER ONLY VALID HOSPITALS
// //   const validHospitals = hospitals.filter((h) => h.tags?.name);

// //   return (
// //     <Box sx={{ minHeight: "100vh", p: 3 }}>
// //       <Container maxWidth="md">

// //         <Typography variant="h5" sx={{ mb: 3 }}>
// //           Book Appointment 🏥
// //         </Typography>

// //         {/* 📍 CITY */}
// //         <Autocomplete
// //           freeSolo
// //           options={cityOptions}
// //           onInputChange={(e, value) => fetchCities(value)}
// //           onChange={(e, value) => fetchHospitals(value)}
// //           renderInput={(params) => (
// //             <TextField {...params} label="Search City" fullWidth />
// //           )}
// //         />

// //         {/* 🏥 HOSPITAL */}
// //         {validHospitals.length > 0 && (
// //           <FormControl fullWidth sx={{ mt: 2 }}>
// //             <InputLabel>Select Hospital</InputLabel>
// //             <Select
// //               value={hospital}
// //               onChange={(e) => setHospital(e.target.value)}
// //               label="Select Hospital"
// //             >
// //               {validHospitals.map((h, i) => (
// //                 <MenuItem key={i} value={h.tags.name}>
// //                   {h.tags.name}
// //                 </MenuItem>
// //               ))}
// //             </Select>
// //           </FormControl>
// //         )}

// //         {/* 😢 NO HOSPITAL CASE */}
// //         {hospitals.length > 0 && validHospitals.length === 0 && (
// //           <Typography sx={{ mt: 2, color: "red" }}>
// //             No named hospitals found 😢
// //           </Typography>
// //         )}

// //         {/* 🏢 DEPARTMENT */}
// //         {hospital && (
// //           <FormControl fullWidth sx={{ mt: 2 }}>
// //             <InputLabel>Select Department</InputLabel>
// //             <Select
// //               value={department}
// //               onChange={(e) => setDepartment(e.target.value)}
// //               label="Select Department"
// //             >
// //               <MenuItem value="Cardiology">Cardiology</MenuItem>
// //               <MenuItem value="Orthopedic">Orthopedic</MenuItem>
// //               <MenuItem value="Neurology">Neurology</MenuItem>
// //               <MenuItem value="General">General</MenuItem>
// //             </Select>
// //           </FormControl>
// //         )}

// //         {/* 👤 DETAILS */}
// //         {department && (
// //           <>
// //             <TextField
// //               label="Your Name"
// //               fullWidth
// //               sx={{ mt: 2 }}
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //             />

// //             <TextField
// //               label="Your Email"
// //               fullWidth
// //               sx={{ mt: 2 }}
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />

// //             <LocalizationProvider dateAdapter={AdapterDateFns}>
// //               <Stack spacing={3} sx={{ mt: 2 }}>
// //                 <MobileDateTimePicker
// //                   value={date}
// //                   onChange={(newValue) => setDate(newValue)}
// //                   label="Select Date & Time"
// //                   renderInput={(params) => <TextField {...params} />}
// //                 />
// //               </Stack>
// //             </LocalizationProvider>

// //             <TextField
// //               label="Problem"
// //               fullWidth
// //               multiline
// //               rows={3}
// //               sx={{ mt: 2 }}
// //               value={problem}
// //               onChange={(e) => setProblem(e.target.value)}
// //             />

// //             <Button
// //               onClick={handleBooking}
// //               fullWidth
// //               variant="contained"
// //               sx={{ mt: 3 }}
// //             >
// //               Confirm Appointment
// //             </Button>
// //           </>
// //         )}

// //       </Container>
// //     </Box>
// //   );
// // };

// // export default Appointment;


// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Stack,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import Autocomplete from "@mui/material/Autocomplete";
// import React, { useState } from "react";
// import swal from "sweetalert";
// import {
//   LocalizationProvider,
//   MobileDateTimePicker,
// } from "@mui/lab";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// const Appointment = () => {
//   const [city, setCity] = useState("");
//   const [cityOptions, setCityOptions] = useState([]);
//   const [hospitals, setHospitals] = useState([]);
//   const [hospital, setHospital] = useState("");
//   const [department, setDepartment] = useState("");

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [problem, setProblem] = useState("");
//   const [date, setDate] = useState(new Date());

//   // 🔥 SAFE hospital name (MAIN FIX)
//   const getHospitalName = (h) => {
//     return h.tags?.name || "Nearby Hospital";
//   };

//   // 🔍 Fetch city suggestions
//   const fetchCities = async (value) => {
//     if (!value) return;

//     const res = await fetch(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${value}&countrycodes=in`
//     );
//     const data = await res.json();

//     const cities = data.map((item) => item.display_name);
//     setCityOptions(cities);
//   };

//   // 🏥 Fetch hospitals
//   const fetchHospitals = async (selectedCity) => {
//     if (!selectedCity) return;

//     setCity(selectedCity);
//     setHospital("");
//     setHospitals([]);

//     try {
//       const geoRes = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${selectedCity}`
//       );
//       const geoData = await geoRes.json();

//       if (geoData.length === 0) {
//         swal("City not found 😢");
//         return;
//       }

//       const lat = geoData[0].lat;
//       const lng = geoData[0].lon;

//       const res = await fetch(
//         `http://localhost:5000/api/hospitals?lat=${lat}&lng=${lng}`
//       );
//       const data = await res.json();

//       if (!data.elements || data.elements.length === 0) {
//         swal("No hospitals found 😢");
//       }

//       setHospitals(data.elements || []);
//     } catch (err) {
//       swal("Error fetching hospitals ❌");
//     }
//   };

//   // ✅ Booking
//   const handleBooking = () => {
//     if (!city || !hospital || !department || !name || !email) {
//       swal("Please complete all steps 😤");
//       return;
//     }

//     swal(
//       `Appointment booked at ${hospital} (${department}) 🎉`,
//       { icon: "success" }
//     );
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3 }}>
//       <Container maxWidth="md">

//         <Typography variant="h5" sx={{ mb: 3 }}>
//           Book Appointment 🏥
//         </Typography>

//         {/* 📍 CITY */}
//         <Autocomplete
//           freeSolo
//           options={cityOptions}
//           onInputChange={(e, value) => fetchCities(value)}
//           onChange={(e, value) => fetchHospitals(value)}
//           renderInput={(params) => (
//             <TextField {...params} label="Search City" fullWidth />
//           )}
//         />

//         {/* 🏥 HOSPITAL */}
//         {hospitals.length > 0 && (
//           <FormControl fullWidth sx={{ mt: 2 }}>
//             <InputLabel>Select Hospital</InputLabel>
//             <Select
//               value={hospital}
//               onChange={(e) => setHospital(e.target.value)}
//               label="Select Hospital"
//             >
//               {hospitals.map((h, i) => (
//                 <MenuItem key={i} value={getHospitalName(h)}>
//                   {getHospitalName(h)}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         )}

//         {/* 🏢 DEPARTMENT */}
//         {hospital && (
//           <FormControl fullWidth sx={{ mt: 2 }}>
//             <InputLabel>Select Department</InputLabel>
//             <Select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               label="Select Department"
//             >
//               <MenuItem value="Cardiology">Cardiology</MenuItem>
//               <MenuItem value="Orthopedic">Orthopedic</MenuItem>
//               <MenuItem value="Neurology">Neurology</MenuItem>
//               <MenuItem value="General">General</MenuItem>
//             </Select>
//           </FormControl>
//         )}

//         {/* 👤 DETAILS */}
//         {department && (
//           <>
//             <TextField
//               label="Your Name"
//               fullWidth
//               sx={{ mt: 2 }}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <TextField
//               label="Your Email"
//               fullWidth
//               sx={{ mt: 2 }}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <LocalizationProvider dateAdapter={AdapterDateFns}>
//               <Stack spacing={3} sx={{ mt: 2 }}>
//                 <MobileDateTimePicker
//                   value={date}
//                   onChange={(newValue) => setDate(newValue)}
//                   label="Select Date & Time"
//                   renderInput={(params) => <TextField {...params} />}
//                 />
//               </Stack>
//             </LocalizationProvider>

//             <TextField
//               label="Problem"
//               fullWidth
//               multiline
//               rows={3}
//               sx={{ mt: 2 }}
//               value={problem}
//               onChange={(e) => setProblem(e.target.value)}
//             />

//             <Button
//               onClick={handleBooking}
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3 }}
//             >
//               Confirm Appointment
//             </Button>
//           </>
//         )}

//       </Container>
//     </Box>
//   );
// };

// export default Appointment;


// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Stack,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import Autocomplete from "@mui/material/Autocomplete";
// import React, { useState } from "react";
// import swal from "sweetalert";
// import {
//   LocalizationProvider,
//   MobileDateTimePicker,
// } from "@mui/lab";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// const Appointment = () => {
//   const [city, setCity] = useState("");
//   const [cityOptions, setCityOptions] = useState([]);
//   const [hospitals, setHospitals] = useState([]);
//   const [hospital, setHospital] = useState("");
//   const [department, setDepartment] = useState("");

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [problem, setProblem] = useState("");
//   const [date, setDate] = useState(new Date());

//   // ✅ FIXED hospital name
//   const getHospitalName = (h) => {
//     if (h.tags?.name) return h.tags.name;
//     if (h.tags?.amenity) return `${h.tags.amenity} (${h.id})`;
//     return `Hospital ${h.id}`;
//   };
// const fetchCities = async (value) => {
//   if (!value || value.length < 3) return;

//   try {
//     const res = await fetch(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${value}&countrycodes=in`,
//       {
//         headers: {
//           Accept: "application/json",
//         },
//       }
//     );

//     const data = await res.json();

//     const cities = data.map((item) => ({
//       label: item.display_name,
//       lat: item.lat,
//       lon: item.lon,
//     }));

//     setCityOptions(cities);
//   } catch (error) {
//     console.log("City fetch error:", error);
//   }
// };

//   // 🏥 Fetch hospitals
//   const fetchHospitals = async (selectedCity) => {
//     if (!selectedCity) return;

//     const cityName =
//       typeof selectedCity === "string"
//         ? selectedCity
//         : selectedCity.label;

//     const lat =
//       typeof selectedCity === "string"
//         ? null
//         : selectedCity.lat;

//     const lng =
//       typeof selectedCity === "string"
//         ? null
//         : selectedCity.lon;

//     setCity(cityName);
//     setHospital("");
//     setHospitals([]);

//     try {
//       let finalLat = lat;
//       let finalLng = lng;

//       // अगर lat/lng नहीं मिला तो fetch करो
//       if (!finalLat || !finalLng) {
//         const geoRes = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`
//         );
//         const geoData = await geoRes.json();

//         if (geoData.length === 0) {
//           swal("City not found 😢");
//           return;
//         }

//         finalLat = geoData[0].lat;
//         finalLng = geoData[0].lon;
//       }

//       const res = await fetch(
//         `http://localhost:5000/api/hospitals?lat=${finalLat}&lng=${finalLng}`
//       );
//       const data = await res.json();

//       if (!data.elements || data.elements.length === 0) {
//         swal("No hospitals found 😢");
//       }

//       setHospitals(data.elements || []);
//     } catch (err) {
//       swal("Error fetching hospitals ❌");
//     }
//   };

//   // ✅ Booking
//   const handleBooking = () => {
//     if (!city || !hospital || !department || !name || !email) {
//       swal("Please complete all steps 😤");
//       return;
//     }

//     swal(
//       `Appointment booked at ${hospital} (${department}) 🎉`,
//       { icon: "success" }
//     );
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3 }}>
//       <Container maxWidth="md">

//         <Typography variant="h5" sx={{ mb: 3 }}>
//           Book Appointment 🏥
//         </Typography>

//         {/* 📍 CITY */}
//         <Autocomplete
//           freeSolo
//           options={cityOptions}
//           getOptionLabel={(option) =>
//             typeof option === "string" ? option : option.label
//           }
//           onInputChange={(e, value) => fetchCities(value)}
//           onChange={(e, value) => fetchHospitals(value)}
//           renderInput={(params) => (
//             <TextField {...params} label="Search City" fullWidth />
//           )}
//         />

//         {/* 🏥 HOSPITAL */}
//         {hospitals.length > 0 && (
//           <FormControl fullWidth sx={{ mt: 2 }}>
//             <InputLabel>Select Hospital</InputLabel>
//             <Select
//               value={hospital}
//               onChange={(e) => setHospital(e.target.value)}
//               label="Select Hospital"
//             >
//               {hospitals.map((h, i) => (
//                 <MenuItem key={i} value={getHospitalName(h)}>
//                   {getHospitalName(h)}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         )}

//         {/* 🏢 DEPARTMENT */}
//         {hospital && (
//           <FormControl fullWidth sx={{ mt: 2 }}>
//             <InputLabel>Select Department</InputLabel>
//             <Select
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//               label="Select Department"
//             >
//               <MenuItem value="Cardiology">Cardiology</MenuItem>
//               <MenuItem value="Orthopedic">Orthopedic</MenuItem>
//               <MenuItem value="Neurology">Neurology</MenuItem>
//               <MenuItem value="General">General</MenuItem>
//             </Select>
//           </FormControl>
//         )}

//         {/* 👤 DETAILS */}
//         {department && (
//           <>
//             <TextField
//               label="Your Name"
//               fullWidth
//               sx={{ mt: 2 }}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <TextField
//               label="Your Email"
//               fullWidth
//               sx={{ mt: 2 }}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <LocalizationProvider dateAdapter={AdapterDateFns}>
//               <Stack spacing={3} sx={{ mt: 2 }}>
//                 <MobileDateTimePicker
//                   value={date}
//                   onChange={(newValue) => setDate(newValue)}
//                   label="Select Date & Time"
//                   renderInput={(params) => <TextField {...params} />}
//                 />
//               </Stack>
//             </LocalizationProvider>

//             <TextField
//               label="Problem"
//               fullWidth
//               multiline
//               rows={3}
//               sx={{ mt: 2 }}
//               value={problem}
//               onChange={(e) => setProblem(e.target.value)}
//             />

//             <Button
//               onClick={handleBooking}
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3 }}
//             >
//               Confirm Appointment
//             </Button>
//           </>
//         )}

//       </Container>
//     </Box>
//   );
// };

// export default Appointment;




import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useState } from "react";
import swal from "sweetalert";
import { db } from "../../Login/Firebase/Firebase.config";
import { collection, addDoc } from "firebase/firestore";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Appointment = () => {
  const [city, setCity] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [hospital, setHospital] = useState("");
  const [department, setDepartment] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [date, setDate] = useState(new Date());

  // ✅ Hospital Name Fix
  const getHospitalName = (h) => {
    if (h.tags?.name) return h.tags.name;
    if (h.tags?.amenity) return `${h.tags.amenity} (${h.id})`;
    return `Hospital ${h.id}`;
  };

  // 🔍 Fetch Cities (SAFE)
  const fetchCities = async (value) => {
    if (!value || value.length < 3) return;

    try {
      const res = await fetch(
        `https://corsproxy.io/?https://nominatim.openstreetmap.org/search?format=json&q=${value}&countrycodes=in`
      );

      const data = await res.json();

      const cities = data.map((item) => ({
        label: item.display_name,
        lat: item.lat,
        lon: item.lon,
      }));

      setCityOptions(cities);
    } catch (error) {
      console.log("City fetch error:", error);
    }
  };

  // 🏥 Fetch Hospitals
  const fetchHospitals = async (selectedCity) => {
    if (!selectedCity) return;

    const cityName =
      typeof selectedCity === "string"
        ? selectedCity
        : selectedCity.label;

    const lat =
      typeof selectedCity === "string"
        ? null
        : selectedCity.lat;

    const lng =
      typeof selectedCity === "string"
        ? null
        : selectedCity.lon;

    setCity(cityName);
    setHospital("");
    setHospitals([]);

    try {
      let finalLat = lat;
      let finalLng = lng;

      if (!finalLat || !finalLng) {
        const geoRes = await fetch(
          `https://corsproxy.io/?https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`
        );
        const geoData = await geoRes.json();

        if (geoData.length === 0) {
          swal("City not found 😢");
          return;
        }

        finalLat = geoData[0].lat;
        finalLng = geoData[0].lon;
      }

      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
      const res = await fetch(
        `${BACKEND_URL}/api/hospitals?lat=${finalLat}&lng=${finalLng}`
      );
      const data = await res.json();

      if (!data.elements || data.elements.length === 0) {
        swal("No hospitals found 😢");
      }

      setHospitals(data.elements || []);
    } catch (err) {
      swal("Error fetching hospitals ❌");
    }
  };

  // ✅ Booking (Saves to Cloud Firestore)
  const handleBooking = async () => {
    if (!city || !hospital || !department || !name || !email) {
      swal("Please complete all steps 😤");
      return;
    }

    try {
      // Save appointment to Cloud Firestore
      await addDoc(collection(db, "appointments"), {
        city,
        hospital,
        department,
        name,
        email,
        problem: problem || "",
        date: date instanceof Date ? date.toISOString() : new Date(date).toISOString(),
        createdAt: new Date().toISOString()
      });

      swal(
        `Appointment booked at ${hospital} (${department}) 🎉`,
        { icon: "success" }
      );
    } catch (error) {
      console.error("Firestore Save Error:", error);
      swal("Failed to save appointment to Database ❌");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", p: 3 }}>
      <Container maxWidth="md">

        <Typography variant="h5" sx={{ mb: 3 }}>
          Book Appointment 🏥
        </Typography>

        {/* 📍 CITY */}
        <Autocomplete
          freeSolo
          options={cityOptions}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.label
          }
          onInputChange={(e, value) => {
            if (value.length >= 3) {
              fetchCities(value);
            }
          }}
          onChange={(e, value) => fetchHospitals(value)}
          renderInput={(params) => (
            <TextField {...params} label="Search City" fullWidth />
          )}
        />

        {/* 🏥 HOSPITAL */}
        {hospitals.length > 0 && (
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Select Hospital</InputLabel>
            <Select
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              label="Select Hospital"
            >
              {hospitals.map((h, i) => (
                <MenuItem key={i} value={getHospitalName(h)}>
                  {getHospitalName(h)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {/* 🏢 DEPARTMENT */}
        {hospital && (
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Select Department</InputLabel>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="Select Department"
            >
              <MenuItem value="Cardiology">Cardiology</MenuItem>
              <MenuItem value="Orthopedic">Orthopedic</MenuItem>
              <MenuItem value="Neurology">Neurology</MenuItem>
              <MenuItem value="General">General</MenuItem>
            </Select>
          </FormControl>
        )}

        {/* 👤 DETAILS */}
        {department && (
          <>
            <TextField
              label="Your Name"
              fullWidth
              sx={{ mt: 2 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label="Your Email"
              fullWidth
              sx={{ mt: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3} sx={{ mt: 2 }}>
                <MobileDateTimePicker
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  label="Select Date & Time"
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>

            <TextField
              label="Problem"
              fullWidth
              multiline
              rows={3}
              sx={{ mt: 2 }}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
            />

            <Button
              onClick={handleBooking}
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Confirm Appointment
            </Button>
          </>
        )}

      </Container>
    </Box>
  );
};

export default Appointment;

