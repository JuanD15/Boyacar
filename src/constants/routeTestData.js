import { getURL } from "../services/ImagesServices"

const feedData = [
    {
        id: 0,
        origin: 'Tunja',
        destination: 'Villa de Leyva',
        approximateDepartureTime: '1:00pm - 2:00pm',
        departureDate: '28/05/2024',
        approximatePrice: '10000',
        driverRating: 4.3,
        numberOfOpinios: 10,
        driverFirstName: 'Felipe',
        driverFirstLastName: 'Álvarez',
        driverAge: 35,
        driverPhotography: '',
        freeSeats: 2
    },
    {
        id: 1,
        origin: 'Tunja',
        destination: 'Duitama',
        approximateDepartureTime: '1:00pm - 2:00pm',
        departureDate: '28/05/2024',
        approximatePrice: '10000',
        driverRating: 4.2,
        numberOfOpinios: 15,
        driverFirstName: 'Juan',
        driverFirstLastName: 'Lopez',
        driverAge: 32,
        driverPhotography: '',
        freeSeats: 3
    },
    {
        id: 2,
        origin: 'Tunja',
        destination: 'Sogamoso',
        approximateDepartureTime: '1:00pm - 2:00pm',
        departureDate: '28/05/2024',
        approximatePrice: '12000',
        driverRating: 3.8,
        numberOfOpinios: 10,
        driverFirstName: 'Fernando',
        driverFirstLastName: 'Fernandez',
        driverAge: 28,
        driverPhotography: '',
        freeSeats: 2
    },
    {
        id: 3,
        origin: 'Tunja',
        destination: 'Paipa',
        approximateDepartureTime: '1:00pm - 2:00pm',
        departureDate: '28/05/2024',
        approximatePrice: '4000',
        driverRating: 4.0,
        numberOfOpinios: 12,
        driverFirstName: 'Alejandro',
        driverFirstLastName: 'Smith',
        driverAge: 37,
        driverPhotography: '',
        freeSeats: 4
    },
]
export default feedData