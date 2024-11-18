import React, { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Input, Button, Typography, Checkbox } from '@mui/joy';

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Typography level="h2" component="h1" sx={{ mb: 2 }}>
        Login
      </Typography>

      {/* Input per inserire l'email */}
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Inserisci la tua email"
          color="neutral"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="lg"
          variant="outlined"
          sx={{ mb: 2 }}
        />
      </FormControl>

      {/* Input per inserire la password */}
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Inserisci la tua password"
          color="neutral"
          type={showPassword ? 'text' : 'password'} // Imposta il tipo dell'input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="lg"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <FormControl>
          <Checkbox
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            label="Mostra password"
            sx={{ mb: 2 }}
          />
        </FormControl>
      </FormControl>

      <Button variant="solid" color="primary" fullWidth>
        Login
      </Button>
    </div>
  );
};