import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Login() {
    const fazerLogin = (evento) => {
        evento.preventoDefault();
        const dadosLogin = new FormData(evento.currentTarget);
        console.log({
            email: dadosLogin.get('email'),
            senha: dadosLogin.get('senha'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" justify="center" alignItems="center" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Entrar
                        </Typography>
                        <Box component="form" noValidate onSubmit={fazerLogin} sx={{ mt: 1 }}>
                            <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus />
                            <TextField margin="normal" required fullWidth id="senha" label="Senha" name="senha" autoComplete="current-senha" />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Lembre-se de mim"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Entrar
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/cadastro" variant="body2">
                                        {"Ainda não possui uma conta? Cadastre-se"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}