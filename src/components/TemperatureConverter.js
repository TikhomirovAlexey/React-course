import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState} from "react";


function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const temperatureConverterCelsiusInFahrenheit = (event) => {
        if (event.target.value == '' || isNaN(event.target.value)) {
            setFahrenheit('');
            setCelsius('');
        } else {
            setCelsius(event.target.value);
            setFahrenheit((9 / 5 * event.target.value) + 32);
        }

    }

    const temperatureConverterFahrenheitInCelsius = (event) => {
        if (event.target.value == '' || isNaN(event.target.value)) {
            setFahrenheit('');
            setCelsius('');
        } else {
            setFahrenheit(event.target.value);
            setCelsius(5 / 9 * (event.target.value - 32));
        }
    }

    return (
        <Card variant="outlined" sx={{ maxWidth: 500 }}>
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" gap='48px'>
                    <Typography gutterBottom variant="h5" component="div">
                        Цельсия
                    </Typography>
                    <TextField id="outlined-celsius" label="C" variant="outlined" onChange={temperatureConverterCelsiusInFahrenheit} value={celsius}
                        InputLabelProps={{
                            shrink: true,
                        }} />
                </Stack>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" gap='48px'>
                    <Typography gutterBottom variant="h5" component="div">
                        Фаренгейт
                    </Typography>
                    <TextField id="outlined-fahrenheit" label="F" variant="outlined" onChange={temperatureConverterFahrenheitInCelsius} value={fahrenheit}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Stack>
            </Box>
        </Card>
    );
}

export default TemperatureConverter;