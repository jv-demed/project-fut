export function formattedTime(start, current) {
    const time = Math.abs(new Date(current) - new Date(start));
    const m = Math.floor(time / 60000);
    const s = Math.floor((time % 60000) / 1000);
    const formattedM = m.toString().padStart(2, '0');
    const formattedS = s.toString().padStart(2, '0');
    return formattedM + ':' + formattedS;
}

export function convertToSeconds(date1, date2){
    const diff = Math.abs(date2 - date1);
    return Math.round(diff / 1000);
}