// delete by specific game id
const deleteGame = (id) =>
  fetch(`/api/games/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
});