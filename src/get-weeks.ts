/**
 * returns an array going from '1' to '13', with a recess in between
 */
export function getWeeks(weeks = 13, recess = 7): Array<string> {
  const result: (string | number)[] = []
  for (let i = 1; i <= weeks; i++) {
    if (i === recess) {
      result.push('recess')
    }
    result.push(i)
  }
  return result.map((n) => `${n}`)
}
