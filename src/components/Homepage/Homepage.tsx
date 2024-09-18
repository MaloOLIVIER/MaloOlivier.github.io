import React from 'react';
import './Homepage.css';
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

    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };
    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
        >
            <div className="homepage">
                <h1>Welcome to My Research Papers Blog</h1>
                <p>This is where you can find my latest research and publications.</p>
                <p>Please feel free to explore and download my work.</p>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Grid container spacing={2} columns={12}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <SyledCard
                                variant="outlined"
                                onFocus={() => handleFocus(0)}
                                onBlur={handleBlur}
                                tabIndex={0}
                                className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                            >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    image={cardData[0].img}
                                    aspect-ratio="16 / 9"
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'divider',
                                    }}
                                />

                                <SyledCardContent>
                                    <Typography gutterBottom variant="caption" component="div">
                                        {cardData[0].tag}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {cardData[0].title}
                                    </Typography>
                                    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                        {cardData[0].description}
                                    </StyledTypography>
                                </SyledCardContent>
                                <Author authors={cardData[0].authors} />
                            </SyledCard>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <SyledCard
                                variant="outlined"
                                onFocus={() => handleFocus(0)}
                                onBlur={handleBlur}
                                tabIndex={0}
                                className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                            >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    image={cardData[0].img}
                                    aspect-ratio="16 / 9"
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'divider',
                                    }}
                                />

                                <SyledCardContent>
                                    <Typography gutterBottom variant="caption" component="div">
                                        {cardData[0].tag}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {cardData[0].title}
                                    </Typography>
                                    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                        {cardData[0].description}
                                    </StyledTypography>
                                </SyledCardContent>
                                <Author authors={cardData[0].authors} />
                            </SyledCard>
                        </Grid>
                    </Grid>
                </Box>

            </div>
        </Container>
    );
};

export default Homepage;