import moment from 'moment';
import { es } from 'date-fns/locale';
import { format, parseISO } from 'date-fns';

export function formatDate(date) {
    const parseDate = moment(date, 'DD-MM-YYYY').utc();
    return parseDate.format('YYYY-MM-DD');
}

export function prettyDate(date) {
    const formatedDate = formatDate(date);
    const dateObject = parseISO(formatedDate);
    return format(dateObject, 'EEEE dd \'de\' MMMM', { locale: es });
}
