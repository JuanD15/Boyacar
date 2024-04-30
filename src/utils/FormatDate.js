import moment from 'moment';

export function formatDate(date) {
    const parseDate = moment(date, 'DD-MM-YYYY');
    const formattedDate = parseDate.format('YYYY-MM-DD');
    return formattedDate;
}