export function formatGameDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    };
    // Format: "Oct 23, 2025, 5:00 PM"
    const formatted = date.toLocaleString('en-US', options);
    // Rearrange to "Oct 23 @ 5:00PM, 2025"
    const [monthDay, year, time] = formatted.match(/^([A-Za-z]+ \d+), (\d+), (.+)$/)!.slice(1);
    return `${monthDay} @${time.replace(' ', '')} ${year}`;
}

export function convertCheckboxToBoolean(value: string | undefined): boolean {
    return value === 'on' ? true : false;
}