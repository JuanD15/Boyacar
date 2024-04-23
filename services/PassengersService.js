import axios from 'axios';

const API_URL = 'http://192.168.1.86:3000/api/pasajero';

export function postPassenger(passenger) {
    console.log(passenger);
    axios.post(API_URL, passenger)
        .then(response => {
            console.log('Respuesta del servidor:', response.data);
        })
        .catch(error => {
            console.error('Error al enviar datos al servidor:', error);
        });
}

