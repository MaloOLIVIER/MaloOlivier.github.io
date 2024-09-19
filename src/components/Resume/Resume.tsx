import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, List, ListItem, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlaceIcon from '@mui/icons-material/Place';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';


const Resume: React.FC = () => {
    const handleClick = (pdfUrl: string) => {
        window.location.href = pdfUrl;
    };
    return (

        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 20, gap: 4 }}
        >
            <Grid container spacing={2} columns={12} mb={8}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h1" gutterBottom fontFamily={'Roboto'}>
                        Resume
                    </Typography>
                    <Typography variant="h4" gutterBottom fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                        Master of Science in Computing Sciences
                    </Typography>
                    <Typography variant="h4" fontFamily={'Roboto'} sx={{ color: "#4169E1", mb: 8 }}>
                        Research Engineer at Conservatoire National des Arts et Métiers, LMSSC - Paris
                    </Typography>

                    <Box display="flex" alignItems="center" mb={1}>
                        <ChildFriendlyIcon />
                        <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                            28 November 2000
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1}>
                        <HomeIcon />
                        <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                            Île de France
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1}>
                        <PhoneIcon />
                        <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                            +33 6 ** ** ** **
                        </Typography>
                    </Box>
                    <Box
                        component="a"
                        href="https://github.com/MaloOLIVIER"
                        target="_blank"
                        rel="noopener noreferrer"
                        display="flex"
                        alignItems="center"
                        mb={1}
                        sx={{
                            textDecoration: 'none',
                            color: 'inherit',
                            '&:hover': {
                                color: '#4169E1',
                            },
                        }}
                    >
                        <GitHubIcon />
                        <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                            /MaloOLIVIER
                        </Typography>
                    </Box>
                    <Box
                        component="a"
                        href="mailto:MaloOlivier333@gmail.com"
                        display="flex"
                        alignItems="center"
                        mb={1}
                        sx={{
                            textDecoration: 'none',
                            color: 'inherit',
                            '&:hover': {
                                color: '#4169E1',
                            },
                        }}
                    >
                        <EmailIcon />
                        <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                            MaloOlivier333@gmail.com
                        </Typography>
                    </Box>
                    <Box
                        component="a"
                        href="https://www.linkedin.com/in/maloolivier"
                        target="_blank"
                        rel="noopener noreferrer"
                        display="flex"
                        alignItems="center"
                        mb={1}
                        sx={{
                            textDecoration: 'none',
                            color: 'inherit',
                            '&:hover': {
                                color: '#4169E1',
                            },
                        }}
                    >
                        <LinkedInIcon />
                        <Typography variant="body1" fontFamily={'Roboto'} ml={1}>
                            in/maloolivier
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 12 }}>
                    <CardMedia
                        component="img"
                        image="/static/images/avatar/malo.jpg"
                        onClick={() => handleClick("/static/images/papers/CVENMaloOLIVIER.pdf")}
                        title="Malo"
                        sx={{
                            width: '50%',
                            height: 'auto',
                            mb: 2,
                            borderRadius: '45%',
                            transition: 'transform 0.3s, opacity 0.3s', // Smooth transition for hover effects
                            cursor: 'pointer', // Change cursor to pointer
                            '&:hover': {
                                transform: 'scale(1.05)', // Slightly enlarge the image
                                opacity: 0.8, // Slightly reduce opacity
                            },
                        }} />
                    <Typography variant="h6" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                        Malo Olivier
                    </Typography>
                </Grid>
            </Grid>

            <Divider />
            <Grid container spacing={2} columns={12}>

                <Grid size={{ xs: 12, md: 3 }}>

                    <Timeline>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="#4169E1" fontFamily={'Roboto'} sx={{ fontWeight: 'bold' }}>
                                    Since October 2024
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" color="#4169E1" fontFamily={'Roboto'} sx={{ fontWeight: 'bold' }}>
                                    Research Engineer at CNAM, ISL
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    June 2024
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Graduated from INSA Lyon
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    January - June 2024
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    ERASMUS exchange at Stockholms Universitet
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    September 2023 - January 2024
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Graduation Project at CNAM
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    May - August 2023
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Internship at BNP Paribas
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    November 2022 - April 2023
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Part-time at onepoint Montréal
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    June - August 2022
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: '#4169E1' }} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Internship at onepoint Montréal
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary" fontFamily={'Roboto'}>
                                    July - August 2021
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: '#4169E1' }} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" fontFamily={'Roboto'}>
                                    Full-time at Banque de France
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>

                </Grid>

                <Grid size={{ xs: 12, md: 9 }}>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                <Box display="flex" alignItems="center">
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        Research Engineer
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <PlaceIcon sx={{ color: "#4169E1" }} />
                                    <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                        CNAM - ISL
                                    </Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Keep updated!
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                <Box display="flex" alignItems="center">
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        Research assistant in EBEN project | VibraVox dataset
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <PlaceIcon sx={{ color: "#4169E1" }} />
                                    <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                        CNAM Paris
                                    </Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Acoustics experiments and recording sessions for data collection
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Monitoring, quality control and consistency of collected data
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Python speech transcription project based on the CNAM EBEN project (Pytorch, Pytorch Lightning, Hydra, Hugging Face).
                                            Use of a tokenizer, evaluation metrics (Word Error Rate, Character Error Rate, Phoneme Error Rate, CTC cost function, transformer architectures) for S2T and S2P ASR tasks
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Handling of Whisper from open AI and wav2vec2-large-xlsr-53-english
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Work integrated into the journal article presenting the VibraVox dataset
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            High performance multi-GPU computation using IDRIS' Jean ZAY supercomputer
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                <Box display="flex" alignItems="center">
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        Technical Consultant Java
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <PlaceIcon sx={{ color: "#4169E1" }} />
                                    <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                        BNP Paribas Paris
                                    </Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Orchestrator pipeline maintenance and Gherkins/Cucumber testing
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Ingestion pipeline maintenance and Gherkins/Cucumber testing
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Specifications and documentation of accounting Information System
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Acquisition of Business knowledge : accounting, finance, legal
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Acquisition of Teradata knowledge : big data considerations and SQL language
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                <Box display="flex" alignItems="center">
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        DevOps Engineer & FullStack Developer techstud.io associate
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <PlaceIcon sx={{ color: "#4169E1" }} />
                                    <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                        onepoint Montréal, Canada
                                    </Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Implementation and insertion of QA tests in GitLab/Jenkins pipeline for the Connect Building software of the National Bank of Canada (BNC) and the Espace Montmorency, by Montoni
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            FullStack development in Java with Quarkus & Maven and TypeScript with React
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                <Box display="flex" alignItems="center">
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        FullStack Developer
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <PlaceIcon sx={{ color: "#4169E1" }} />
                                    <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                        onepoint Montréal, Canada
                                    </Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            FullStack development, QA tests, modeling, Connect Building software specifications for the National Bank of Canada (BNC) and the Espace Montmorency, by Montoni
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Agile development, Jira ticket management, Figma & Confluence specifications, UAT & production server installation on AWS Cloud
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                <Box display="flex" alignItems="center">
                                    <Typography variant="h6" fontFamily={'Roboto'}>
                                        Business Analyst
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <PlaceIcon sx={{ color: "#4169E1" }} />
                                    <Typography variant="body1" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                                        Banque de France, Courbevoie
                                    </Typography>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Quotation of tax forms
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Correction of stored data
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box display="flex"
                                        alignItems="center">
                                        <FiberManualRecordIcon sx={{ mr: 1 }} />
                                        <Typography variant="body1" fontFamily={'Roboto'}>
                                            Computation and measurement of France's balance of payment and international investment position
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>

        </Container >
    );
};

export default Resume;