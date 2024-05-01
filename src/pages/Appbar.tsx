import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PestControlIcon from '@mui/icons-material/PestControl';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const logoStyle = {
  width: '45px',
  height: 'auto',
  cursor: 'pointer',
  color: '#365941',
  paddingLeft: '3px'
};

function Appbar() {
    const navigate = useNavigate();

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="sm">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: 'transparent',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-8px',
                px: 0,
              }}
            >

              <PestControlIcon style={logoStyle} />
              <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                <MenuItem onClick={()=> {navigate('/')}}
                  sx={{ py: '8px', px: '14px' }}
                >
                  <Typography variant="body2" style={{ color: 'grey'}} >
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem onClick={()=>{navigate('/resource')}}
                  sx={{ py: '6px', px: '18px' }}
                >
                  <Typography variant="body2" style={{ color: 'grey'}}>
                    Resource
                  </Typography>
                </MenuItem>
                <MenuItem onClick={()=> {navigate('/contact')}}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" style={{ color: 'grey'}}>
                    Contact
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Button
                color="error"
                variant="outlined"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-in/"
                target="_blank"
                style={{ borderRadius: "20px"}}
              >
                Mentoring
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Appbar;