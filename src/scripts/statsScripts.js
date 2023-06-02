export function getGoalAverage(player){
    if(player.matches === 0){
        return 0;
    }return (player.goals / player.matches)
}

export function getSuccessRate(player){
    if(player.matches === 0){
        return '##';
    }
    const maxPontuation = player.matches * 3;
    const playerPontuation = (player.wins * 3) + player.ties;
    const successRate = (playerPontuation / maxPontuation) * 100;
    return `${successRate.toFixed(2)}%`;
}