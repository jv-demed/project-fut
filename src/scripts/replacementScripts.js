export function existsPlayer(team, player){
    return team.some(p => p.id === player.id);
}

export function addPlayer(team, player){
    return [...team, player];
}

export function removePlayer(team, player){
    return team.filter(p => p.id != player.id);
}