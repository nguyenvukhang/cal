function getWeeks({ weeks = 13, recess = 7 }) {
  const a = [...Array(weeks).keys()]
  const res = {}
  a.forEach((e) => {
    const key = e + 1
    res[key] = key >= recess ? key + 1 : key
  })
  return res
}

console.log(getWeeks({ recess: 7 }))
