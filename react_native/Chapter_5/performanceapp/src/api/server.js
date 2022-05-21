module.exports = () => {
  const data = {
    games: []
  }

  for (let index = 0; index < 500; index++) {
    data.games.push({
      id: index + 1,
      likes: 5,    
      game: `Game ${index + 1}`,
  })
  }

  return data;
}