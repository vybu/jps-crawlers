
const HOUR = 1000 * 60 * 60;

export function datePlusHours(n = 1) {
    return Date.now() + (n * HOUR)
}