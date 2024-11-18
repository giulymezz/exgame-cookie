import React, { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Input, Button, Typography, Box, Checkbox, FormHelperText } from '@mui/joy';

export const Signup: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const evaluatePasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[@$!%*?&]/.test(password)) score += 1;
    return score;
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setStrength(evaluatePasswordStrength(newPassword));
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Le password non corrispondono.');
    } else if (password === '' || confirmPassword === '') {
      setError('Inserisci e conferma la tua password.');
    } else {
      setError('');
      alert('Registrazione completata con successo!');
    }
  };

  const getBarColor = (index: number) => {
    if (strength >= index + 1) {
      return ['#FF4C4C', '#FF8C42', '#FBD83D', '#4CAF50'][index]; // Colori dal rosso al verde
    }
    return '#E0E0E0'; // Colore grigio per barre non riempite
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Typography level="h2" component="h1" sx={{ mb: 2 }}>
        Sign-up
      </Typography>

      <FormControl>
        <FormLabel>Nome</FormLabel>
        <Input
          placeholder="Inserisci il tuo nome"
          color="neutral"
          size="lg"
          variant="outlined"
          sx={{ mb: 2 }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Cognome</FormLabel>
        <Input
          placeholder="Inserisci il tuo cognome"
          color="neutral"
          size="lg"
          variant="outlined"
          sx={{ mb: 2 }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Inserisci l'email"
          color="neutral"
          size="lg"
          variant="outlined"
          sx={{ mb: 2 }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Inserisci la tua password"
          value={password}
          onChange={handlePasswordChange}
          sx={{ mb: 1 }}
        />
        <Box sx={{ display: 'flex', gap: '4px', mb: 1 }}>
          {[...Array(4)].map((_, index) => (
            <Box
              key={index}
              sx={{
                height: '10px',
                width: '25%',
                backgroundColor: getBarColor(index),
                borderRadius: '2px',
              }}
            />
          ))}
        </Box>
        <FormHelperText sx={{ mb: 2 }}>
          La password deve essere lunga almeno 8 caratteri e contenere lettere maiuscole, minuscole, numeri e simboli speciali.
        </FormHelperText>
        <Checkbox
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
          label="Mostra password"
          sx={{ mb: 2 }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Conferma password</FormLabel>
        <Input
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Conferma la password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          sx={{ mb: 1 }}
        />
        <Checkbox
          checked={showConfirmPassword}
          onChange={() => setShowConfirmPassword(!showConfirmPassword)}
          label="Mostra conferma password"
          sx={{ mb: 2 }}
        />
      </FormControl>

      {/* Messaggio di errore */}
      {error && (
        <Typography level="body2" color="danger" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Button variant="solid" color="primary" fullWidth onClick={handleRegister}>
        Register
      </Button>
    </div>
  );
};
