export function existsPlayer(team, player){
    return team.some(p => p.id === player.id);
}

export function addPlayer(team, player){
    return [...team, player];
}

export function removePlayer(team, player){
    return team.filter(p => p.id != player.id);
}

export function replacementSame(team, player1, player2){
    const auxTeam = [...team];
    const i1 = auxTeam.findIndex(p => p.id === player1.id);
    const i2 = auxTeam.findIndex(p => p.id === player2.id);
    auxTeam[i1] = team[i2];
    auxTeam[i2] = team[i1];
    return auxTeam;
}

export function replacementOther(team1, team2, player1, player2){
    const auxTeam1 = [...team1];
    const auxTeam2 = [...team2];
    const i1 = auxTeam1.findIndex(p => p.id === player2.id);
    const i2 = auxTeam2.findIndex(p => p.id === player1.id);
    auxTeam1[i1] = team2[i2];
    auxTeam2[i2] = team1[i1];
    return [auxTeam1, auxTeam2];
}