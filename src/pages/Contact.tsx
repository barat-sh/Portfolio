import { alpha, Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import profileImage from '../assets/profileImage.png';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import XIcon from '@mui/icons-material/X';

export default function Contact() {
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
          justifyContent: 'center',
          alignItems: 'center',
          pt: { xs: 14, sm: 30 },
          pb: { xs: 8, sm: 12 },
        }}
      >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={4}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            useFlexGap
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                maxWidth: 450
              }}
            >
              <CardContent>
                <Box display={'flex'}>
                    <Avatar style={{ height: '80px', width: '80px'}} src= {profileImage} />
                    <Box ml={2} mt={1}>
                        <Typography variant="h6" fontSize={'1.5rem'} fontWeight={600} color="text.primary">
                            Barath Elangovan
                        </Typography>
                        <Typography fontWeight={600} color="text.secondary">
                            Junior Software Engineer
                        </Typography>
                    </Box>
                </Box>
                <Typography mt={2} variant="body1" color="text.secondary">
                    My name is Barath. I am a Full-Stack Engineer with over a 2years of experience in engineering end-to-end systems. I work as SDE-1 <Link href="https://turbohire.co/solutions/?utm_term=turbohire&utm_campaign=Brand_2023_India&utm_source=google&utm_medium=cpc&hsa_acc=7304365205&hsa_cam=20331579833&hsa_grp=157671904504&hsa_ad=664353706044&hsa_src=g&hsa_tgt=kwd-842078977113&hsa_kw=turbohire&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw0MexBhD3ARIsAEI3WHK1RwmIaX6Ds4dUxvTQ-YPH0jwgFitSsPsEQHYCjG-FfHhdhIG1B_saAj6BEALw_wcB">@TurboHire</Link>, and act as TA at <Link href='https://www.scaler.com/teaching-assistant/'>Scaler Neoversity</Link>.
                </Typography>
              </CardContent>
            </Card>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box>
                    <Typography variant='h6' fontSize={'3rem'} fontWeight={600} color={'text.primary'}>
                        Contact
                    </Typography>
                    <Typography fontWeight={600} color="text.secondary">
                        Want to get in touch? Interested in working together?
                    </Typography>
                    <Box mt={4} display={'flex'} gap={1}>
                        <AttachEmailIcon />
                        <Typography>Email: barath0121@gmail.com</Typography>
                    </Box>
                    <Box mt={2} display={'flex'} gap={1}>
                        <XIcon />
                        <Typography>Twitter: barat_tw</Typography>
                    </Box>
                </Box>
            </Box>
          </Stack>
      </Container>
    </Box>
  );
}