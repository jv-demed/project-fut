export function existsPlayer(team, player){
    return team.some(p => p.id === player.id);
}

export function addPlayer(team, player){
    return [...team, player];
}

export function removePlayer(team, player) {
    const index = team.findIndex(p => p.id === player.id);
    if (index !== -1) {
      const updatedTeam = [...team];
      updatedTeam.splice(index, 1);
      return updatedTeam;
    }
    return team;
  }