export const winner = (grid) => {

  // horizontal wins
  if (grid[0] != '' && grid[0] == grid[1] && grid[0] == grid[2]) {
    return grid[0]
  }
  if (grid[3] != '' && grid[3] == grid[4] && grid[3] == grid[5]) {
    return grid[3]
  }
  if (grid[6] != '' && grid[6] == grid[7] && grid[6] == grid[8]) {
    return grid[6]
  }

  // vertical wins
  if (grid[0] != '' && grid[0] == grid[3] && grid[0] == grid[6]) {
    return grid[0]
  }
  if (grid[1] != '' && grid[1] == grid[4] && grid[1] == grid[7]) {
    return grid[1]
  }
  if (grid[2] != '' && grid[2] == grid[5] && grid[2] == grid[8]) {
    return grid[2]
  }

  // diagonal wins
  if (grid[0] != '' && grid[0] == grid[4] && grid[0] == grid[8]) {
    return grid[0]
  }
  if (grid[2] != '' && grid[2] == grid[4] && grid[2] == grid[6]) {
    return grid[2]
  }

  // game still ongoing
  // if (grid.some(el => el === '')) {
  //   return null
  // }

  // game is over and no winner is found so return string 'draw'
  return 'draw'
}
