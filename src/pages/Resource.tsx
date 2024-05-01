import { alpha, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Vimlogo from '../assets/VImlogo.png'
import Reactpracticeimg from '../assets/Reactpracticeimg.png'

const userTestimonials = [
    {      
      img: <img src={Vimlogo} style={{ maxWidth: '100%', height: 'auto' }} alt="" />,
      name: 'Effective NeoVim Setup for 2024',
      occupation: 'Junior Engineer',
      link: 'https://github.com/barat-sh/Vim-Setup.git',
      action: 'View Neovim setup',
      testimonial:
        "NeoVim has rapidly been growing in popularity, so an up-to-date and effective NeoVim setup for Full-Stack Web Development can be hard to come by. That's why this repo covers how to setup a versatile and functional NeoVim configurations...",
    },
    {      
        img: <img src={Reactpracticeimg} style={{ maxWidth: '100%', height: 'auto' }} alt="" />,
        name: 'React deployment service',
        occupation: 'Junior Engineer',
        link: 'https://github.com/barat-sh/Vim-Setup.git',
        action: 'View Github repo',
        testimonial:
          "Going into 2024, NextJS and React are becoming the de-facto standard of the web industry, so now more than ever, it's important to hone in on your React skills and ensure that you're pushing out quality code. I've prepared a comprehensive list of practices to follow, as well as a couple of pro tips to take your code to the next level 🚀",
    },
  ];
  
export default function Resource() {

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 8, sm: 12 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Container
      id="resource"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" fontWeight={700} color="text.primary">
          Resources
        </Typography>
        {/* <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography> */}
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                {testimonial.img}
                <Typography variant="h6" fontWeight={600} color="text.primary">
                  {testimonial.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
                <Box display={'flex'} pt={2} justifyContent={'center'}>
                    <Button variant='contained' onClick={()=>{window.location.href = testimonial.link}} style={{ backgroundColor: 'black', borderRadius: '5px'}}>{testimonial.action}</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
        
      </Container>
    </Box>
  );
}