import React, { useState } from 'react';
import { Box, Button, Stack, Typography, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';

interface AuthProps {
  activeView: string;
  onSwitchView: (view: string) => void;
  onClose: () => void;
}

const Auth: React.FC<AuthProps> = ({ activeView, onSwitchView, onClose }) => {
  // Login formasi uchun state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Register formasi uchun state
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Login inputlarini boshqarish
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Register inputlarini boshqarish
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Login submit
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', loginData);
    // Bu yerda login logikangiz bo'ladi
  };

  // Register submit
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register data:', registerData);
    // Bu yerda register logikangiz bo'ladi
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Close button */}
      <Button
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: -10,
          top: -10,
          minWidth: 'auto',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
        }}
      >
        <Close />
      </Button>

      {/* Auth buttons */}
      <Stack direction="row" spacing={1} sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Button
          fullWidth
          variant={activeView === 'login' ? 'contained' : 'text'}
          onClick={() => onSwitchView('login')}
          sx={{
            borderRadius: 0,
            borderBottom: activeView === 'login' ? 2 : 0,
            borderColor: 'primary.main'
          }}
        >
          Login
        </Button>
        <Button
          fullWidth
          variant={activeView === 'register' ? 'contained' : 'text'}
          onClick={() => onSwitchView('register')}
          sx={{
            borderRadius: 0,
            borderBottom: activeView === 'register' ? 2 : 0,
            borderColor: 'primary.main'
          }}
        >
          Register
        </Button>
      </Stack>

      {/* Login Form */}
      {activeView === 'login' && (
        <form onSubmit={handleLoginSubmit}>
          <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
            Hisobingizga kiring
          </Typography>
          
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleLoginChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Parol"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleLoginChange}
            margin="normal"
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Kirish
          </Button>

          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            <Button variant="text" size="small">
              Parolni unutdingizmi?
            </Button>
          </Typography>
        </form>
      )}

      {/* Register Form */}
      {activeView === 'register' && (
        <form onSubmit={handleRegisterSubmit}>
          <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
            Yangi hisob yarating
          </Typography>
          
          <TextField
            fullWidth
            label="Ism"
            name="name"
            value={registerData.name}
            onChange={handleRegisterChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={registerData.email}
            onChange={handleRegisterChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Parol"
            name="password"
            type="password"
            value={registerData.password}
            onChange={handleRegisterChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Parolni tasdiqlang"
            name="confirmPassword"
            type="password"
            value={registerData.confirmPassword}
            onChange={handleRegisterChange}
            margin="normal"
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Ro'yxatdan o'tish
          </Button>

          <Typography variant="caption" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
            Hisob yaratish orqali siz Foydalanish shartlari va Maxfiylik siyosati bilan rozilik bildirasiz
          </Typography>
        </form>
      )}
    </Box>
  );
};

export default Auth;