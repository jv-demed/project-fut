// export function getCurrentHour(){
//     const date = new Date();
//     return date.toLocaleTimeString([], { 
//         hour: '2-digit', 
//         minute: '2-digit' 
//     });
// }

export function getMatchTime(startDate) {
    const time = Math.abs(new Date() - new Date(startDate));
    const m = Math.floor(time / 60000);
    const s = Math.floor((time % 60000) / 1000);
    const formattedM = m.toString().padStart(2, '0');
    const formattedS = s.toString().padStart(2, '0');
    return formattedM + ':' + formattedS;
}