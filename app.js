const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const ulParent = document.createElement('ul');

for(let game of warriorsGames){
    const gameLi = document.createElement('li');
    const {homeTeam,awayTeam} = game;  // warriors could be the home team or away team
    const {team :hTeam, points:hPoints} = homeTeam;
    const {team :aTeam, points:aPoints} = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam}`;
    
    let scoreLine;
    if(aPoints > hPoints){
         scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    }
    else{
         scoreLine = `${aPoints} - <b>${hPoints}</b>`;
    }

    const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;  // Just saying if homeTeam name is 'Golden State' then warriors are the hometeam, if not they are the away team
    const className = warriors.isWinner ? 'win' : 'loss';
    gameLi.classList.add(className);

    gameLi.innerHTML = `${teamNames} ${scoreLine}`;
    ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);