import { Box, styled, Typography, useMediaQuery } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Outline = styled(Box)(({ theme }) => ({
   position: 'relative',
   padding: '0.8rem',
   width: '100%',
   maxWidth: '400px',
   border: '1px solid rgba(0, 0, 0, 0.05)',
   background: '#fafafa',
}));

const Square = styled(Box)(({ reverse }) => ({
   position: 'absolute',
   borderRight: reverse ? 0 : '1px solid rgba(0, 0, 0, 0.05)',
   borderBottom: reverse ? 0 : '1px solid rgba(0, 0, 0, 0.05)',
   borderTop: reverse ? '1px solid rgba(0, 0, 0, 0.05)' : 0,
   borderLeft: reverse ? '1px solid rgba(0, 0, 0, 0.05)' : 0,
   width: '20px',
   height: '20px',
   background: '#fafafa',
   top: '30%',
   zIndex: 200,
   left: reverse ? '100%' : 0,
   transform: 'translateX(-50%) rotate(135deg)',
}));

const ContentBox = styled(Box)(({ theme, bgColor }) => ({
   backgroundColor: bgColor,
   padding: '2rem',
   width: '100%',
   height: '100%',
   position: 'relative',
   zIndex: 300,
   textAlign: 'left',
}));

const TimeLine = () => {
   console.log(true);
   return (
      <Box id='fecha' sx={{ pt: '3.5rem' }}>
         <Typography
            sx={{
               fontFamily: "'Parisienne', cursive",
               fontSize: '5rem',
               color: '#FF847C',
               mb: 6,
            }}
         >
            Timeline
         </Typography>
         <Timeline position='alternate'>
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineDot
                     sx={{
                        backgroundImage:
                           'url("https://i.ibb.co/kSmzjGJ/Screenshot-2022-06-17-112643.png")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: {
                           xs: '80px',
                           md: '130px',
                        },
                        width: {
                           xs: '80px',
                           md: '130px',
                        },
                        boxShadow: '0',
                     }}
                  />
                  <TimelineConnector
                     sx={{
                        height: '130px',
                        width: 0,
                        border: '1px dashed #ffeded',
                     }}
                  />
               </TimelineSeparator>
               <TimelineContent sx={{ marginTop: -5 }}>
                  <Outline>
                     <Square />
                     <ContentBox bgColor='#f4f3e2'>
                        <Box>
                           <Typography
                              variant='h5'
                              color='#FF847C'
                              sx={{
                                 fontFamily: "'Parisienne', cursive",
                                 fontSize: '2rem',
                              }}
                           >
                              Ceremonia Religiosa
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{
                                 my: 3.5,
                                 textTransform: 'uppercase',
                                 color: 'rgb(127, 127, 127)',
                                 fontSize: '12px',
                                 letterSpacing: '0.1rem',
                              }}
                           >
                              DIECIOCHO HORAS
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{
                                 mb: 1,
                                 color: '#7f7f7f',
                                 fontWeight: 'bold',
                              }}
                           >
                              Capilla San Pablo Apóstol
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{ color: '#7f7f7f' }}
                           >
                              Habrá camiones que saldrán del hotel a las 5:50
                              P.M.
                           </Typography>
                        </Box>
                     </ContentBox>
                  </Outline>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineDot
                     sx={{
                        backgroundImage:
                           'url("https://i.ibb.co/r0gHkvM/color-palette-1.png")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: {
                           xs: '80px',
                           md: '130px',
                        },
                        width: {
                           xs: '80px',
                           md: '130px',
                        },
                     }}
                  />
                  <TimelineConnector
                     sx={{
                        height: '130px',
                        width: 0,
                        border: '1px dashed #ffeded',
                     }}
                  />
               </TimelineSeparator>
               <TimelineContent
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
               >
                  <Outline>
                     <Square reverse />
                     <ContentBox bgColor='#fef6f8'>
                        <Box>
                           <Typography
                              variant='h5'
                              color='#FF847C'
                              sx={{
                                 fontFamily: "'Parisienne', cursive",
                                 fontSize: '2rem',
                              }}
                           >
                              Ceremonia Civil
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{
                                 my: 3.5,
                                 textTransform: 'uppercase',
                                 color: 'rgb(127, 127, 127)',
                                 fontSize: '12px',
                                 letterSpacing: '0.1rem',
                              }}
                           >
                              DIECIOCHO HORAS
                           </Typography>

                           <Typography
                              variant='body1'
                              sx={{ color: '#7f7f7f' }}
                           >
                              Playa privada Live Aqua Beach Resort Cancún,
                              Cancún.
                           </Typography>
                        </Box>
                     </ContentBox>
                  </Outline>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineDot
                     sx={{
                        backgroundImage:
                           'url("https://i.ibb.co/r0gHkvM/color-palette-1.png")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '100px',
                        width: '100px',
                     }}
                  />
                  <TimelineConnector
                     sx={{
                        height: '130px',
                        width: 0,
                        border: '1px dashed #ffeded',
                     }}
                  />
               </TimelineSeparator>
               <TimelineContent>
                  <Outline>
                     <Square />
                     <ContentBox bgColor='#f4f3e2'>
                        <Box>
                           <Typography
                              variant='h5'
                              color='#FF847C'
                              sx={{
                                 fontFamily: "'Parisienne', cursive",
                                 fontSize: '2rem',
                              }}
                           >
                              Recepción
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{
                                 my: 3.5,
                                 textTransform: 'uppercase',
                                 color: 'rgb(127, 127, 127)',
                                 fontSize: '12px',
                                 letterSpacing: '0.1rem',
                              }}
                           >
                              VEINTE HORAS
                           </Typography>

                           <Typography
                              variant='body1'
                              sx={{ color: '#7f7f7f' }}
                           >
                              Live Aqua Beach Resort Cancún, Cancún.
                           </Typography>
                        </Box>
                     </ContentBox>
                  </Outline>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelineSeparator>
                  <TimelineDot
                     sx={{
                        backgroundImage:
                           'url("https://i.ibb.co/r0gHkvM/color-palette-1.png")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '100px',
                        width: '100px',
                     }}
                  />
                  <TimelineConnector
                     sx={{
                        height: '130px',
                        width: 0,
                        border: '1px dashed #ffeded',
                     }}
                  />
               </TimelineSeparator>
               <TimelineContent
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
               >
                  <Outline>
                     <Square reverse />
                     <ContentBox bgColor='#fef6f8'>
                        <Box>
                           <Typography
                              variant='h5'
                              color='#FF847C'
                              sx={{
                                 fontFamily: "'Parisienne', cursive",
                                 fontSize: '2rem',
                              }}
                           >
                              After Party
                           </Typography>
                           <Typography
                              variant='body1'
                              sx={{
                                 my: 3.5,
                                 textTransform: 'uppercase',
                                 color: 'rgb(127, 127, 127)',
                                 fontSize: '12px',
                                 letterSpacing: '0.1rem',
                              }}
                           >
                              UNA HORAS
                           </Typography>

                           <Typography
                              variant='body1'
                              sx={{ color: '#7f7f7f' }}
                           >
                              Club Heaven
                           </Typography>
                        </Box>
                     </ContentBox>
                  </Outline>
               </TimelineContent>
            </TimelineItem>
         </Timeline>
      </Box>
   );
};

export default TimeLine;
