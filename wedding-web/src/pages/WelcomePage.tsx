import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Avatar,
  Paper,
  Divider,
  styled,
} from '@mui/material';
import { PhotoCamera, Favorite } from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 600,
  margin: '2rem auto',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  background: '#fff9f9',
  border: '8px double #d4a59a',
  boxShadow: theme.shadows[10],
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
    background: 'linear-gradient(90deg, #d4a59a, #b76e79, #d4a59a)'
  }
}));

const Seal = styled('div')({
  position: 'absolute',
  top: -20,
  right: -20,
  width: 80,
  height: 80,
  backgroundColor: '#b76e79',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  transform: 'rotate(15deg)',
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
  border: '2px solid white'
});

const WeddingInvite: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    avatar: null as File | null
  });
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, avatar: file }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form data here
    navigate('/home');
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#f9e8e8',
      backgroundImage: 'url(https://www.transparenttextures.com/patterns/cream-paper.png)',
      py: 4
    }}>
      <StyledPaper elevation={3}>
        <Seal>
          <Favorite fontSize="small" />
        </Seal>
        
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ 
            color: '#b76e79',
            letterSpacing: 3,
            fontWeight: 500,
            mb: 2,
            position: 'relative',
            '&::before, &::after': {
              content: '""',
              display: 'inline-block',
              width: 50,
              height: 30,
              backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><path d=\'M50,10 C60,20 70,20 80,10 C90,20 90,30 80,40 C90,50 90,60 80,70 C90,80 80,90 70,80 C60,90 50,90 40,80 C30,90 20,80 10,70 C20,60 10,50 20,40 C10,30 10,20 20,10 C30,20 40,20 50,10 Z\' fill=\'%23b76e79\'/></svg>")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.8,
              mx: 1
            }
          }}>
            Wedding Invitation
          </Typography>
          
          <Typography variant="h3" sx={{ 
            color: '#b76e79',
            fontWeight: 700,
            mb: 2,
            fontFamily: '"Playfair Display", serif'
          }}>
            Sarah & Michael
          </Typography>
          
          <Typography variant="body1" sx={{ 
            fontStyle: 'italic',
            color: '#555',
            mb: 3,
            lineHeight: 1.6
          }}>
            Request the pleasure of your company<br />
            as we exchange vows and begin our life together
          </Typography>
        </Box>
        
        <Divider sx={{ my: 3, borderColor: '#f0d6d6' }} />
        
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            margin="normal"
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{
              sx: { backgroundColor: '#fffdfd' }
            }}
          />
          
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              select
              fullWidth
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              variant="outlined"
              sx={{ flex: 1 }}
              InputProps={{
                sx: { backgroundColor: '#fffdfd' }
              }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
            
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
              variant="outlined"
              sx={{ flex: 1 }}
              InputProps={{
                sx: { backgroundColor: '#fffdfd' },
                inputProps: { min: 1 }
              }}
            />
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ color: '#b76e79', mb: 1 }}>
              Your Photo (Optional)
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                component="label"
                variant="outlined"
                startIcon={<PhotoCamera />}
                sx={{
                  borderColor: '#d4a59a',
                  color: '#b76e79',
                  '&:hover': {
                    borderColor: '#b76e79'
                  }
                }}
              >
                Upload
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Button>
              
              {preview && (
                <Avatar
                  src={preview}
                  sx={{ width: 56, height: 56 }}
                />
              )}
            </Box>
          </Box>
          
          <Button
            fullWidth
            variant="contained"
            type="submit"
            size="large"
            sx={{
              backgroundColor: '#b76e79',
              '&:hover': {
                backgroundColor: '#a05a65',
                transform: 'translateY(-2px)'
              },
              py: 1.5,
              mt: 2,
              letterSpacing: 1
            }}
          >
            RSVP
          </Button>
        </Box>
        
        <Divider sx={{ my: 3, borderColor: '#f0d6d6' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
            Saturday, the fifteenth of June
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
            Two thousand twenty-four
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
            At four o'clock in the afternoon
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Rosewood Chapel, 123 Love Lane
          </Typography>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default WeddingInvite;