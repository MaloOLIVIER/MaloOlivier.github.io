import React from 'react';
import { Author, cardData, StyledTypography, SyledCard, SyledCardContent } from '../Publications/Publications';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Homepage: React.FC = () => {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleClick = (pdfUrl: string) => {
        window.location.href = pdfUrl;
    };

    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 20, gap: 4 }}
        >

            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ mb: 12 }}>
                    <Typography variant="h1" gutterBottom fontFamily={'Roboto'}>
                        Welcome to my publication research blog
                    </Typography>
                    <Typography variant="h4" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                        This is where you can find my latest research and publications.
                    </Typography>
                    <Typography variant="h4" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                        Please feel free to explore and download my work.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        alt="Malo"
                        image="/static/images/avatar/malo.jpg"
                        title="Malo"
                        sx={{ width: '50%', height: 'auto', mb: 2, borderRadius: '45%' }}
                    />
                    <Typography variant="h6" fontFamily={'Roboto'} sx={{ color: "#4169E1" }}>
                        Malo Olivier
                    </Typography>
                </Grid>
            </Grid>


            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Grid container spacing={2} columns={12}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SyledCard
                            variant="outlined"
                            onClick={() => handleClick("https://arxiv.org/pdf/2407.11828")}
                            onFocus={() => handleFocus(0)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                        >
                            <CardMedia
                                component="img"
                                alt="vibravox"
                                image={cardData[0].img}
                                aspect-ratio="16 / 9"
                                sx={{
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />

                            <SyledCardContent>
                                <Typography gutterBottom variant="caption" component="div" fontFamily={'Roboto'}>
                                    {cardData[0].tag}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" fontFamily={'Roboto'}>
                                    {cardData[0].title}
                                </Typography>
                                <StyledTypography variant="body2" color="text.secondary" gutterBottom fontFamily={'Roboto'}>
                                    {cardData[0].description}
                                </StyledTypography>
                            </SyledCardContent>
                            <Author authors={cardData[0].authors} date={cardData[0].date} />
                        </SyledCard>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SyledCard
                            variant="outlined"
                            onClick={() => handleClick("/static/images/papers/MaloOLIVIER_MasterThesis.pdf")}
                            onFocus={() => handleFocus(0)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                        >
                            <CardMedia
                                component="img"
                                alt="insa"
                                image={cardData[1].img}
                                aspect-ratio="16 / 9"
                                sx={{
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />

                            <SyledCardContent>
                                <Typography gutterBottom variant="caption" component="div" fontFamily={'Roboto'}>
                                    {cardData[1].tag}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" fontFamily={'Roboto'}>
                                    {cardData[1].title}
                                </Typography>
                                <StyledTypography variant="body2" color="text.secondary" gutterBottom fontFamily={'Roboto'}>
                                    {cardData[1].description}
                                </StyledTypography>
                            </SyledCardContent>
                            <Author authors={cardData[1].authors} date={cardData[1].date} />
                        </SyledCard>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    );
};

export default Homepage;