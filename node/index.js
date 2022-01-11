import ics from 'ics'
import moment from 'moment'
import fs from 'fs'

const weekNames = JSON.parse(fs.readFileSync('weekNames.json'))

const AYstart = moment('02-08-2021', 'DD-MM-YYYY')

const weeks = weekNames.map((name, index) => {
  const thisWeek = AYstart.clone()
  thisWeek.add(index, 'weeks')
  return [thisWeek.format('YYYY-MM-DD'), name]
})

const weekEvents = weeks.map((w) => {
  const [year, month, date] = w[0].split('-').map((e) => parseInt(e))
  return {
    start: [year, month, date],
    title: w[1],
    status: 'CONFIRMED',
  }
})

const { error, value } = ics.createEvents(weekEvents)

if (error) {
  console.log(error)
} else {
  console.log(value)
}
