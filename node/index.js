import ics from 'ics'
import ical from 'node-ical'

const weeks = [
  ['Week 0', '2021-08-02'],
  ['Week 1', '2021-08-09'],
  ['Week 2', '2021-08-16'],
  ['Week 3', '2021-08-23'],
  ['Week 4', '2021-08-30'],
  ['Week 5', '2021-09-06'],
  ['Week 6', '2021-09-13'],
  ['Recess Week', '2021-09-20'],
  ['Week 7', '2021-09-27'],
  ['Week 8', '2021-10-04'],
  ['Week 9', '2021-10-11'],
  ['Week 10', '2021-10-18'],
  ['Week 11', '2021-10-25'],
  ['Week 12', '2021-11-01'],
  ['Week 13', '2021-11-08'],
  ['Reading Week', '2021-11-15'],
  ['Exam Week 1', '2021-11-22'],
  ['Exam Week 2', '2021-11-29'],
  ['Vacation Week 1', '2021-12-06'],
  ['Vacation Week 2', '2021-12-13'],
  ['Vacation Week 3', '2021-12-20'],
  ['Vacation Week 4', '2021-12-27'],
  ['Vacation Week 5', '2022-01-03'],
  ['Week 1', '2022-01-10'],
  ['Week 2', '2022-01-17'],
  ['Week 3', '2022-01-24'],
  ['Week 4', '2022-01-31'],
  ['Week 5', '2022-02-07'],
  ['Week 6', '2022-02-14'],
  ['Recess Week', '2022-02-21'],
  ['Week 7', '2022-02-28'],
  ['Week 8', '2022-03-07'],
  ['Week 9', '2022-03-14'],
  ['Week 10', '2022-03-21'],
  ['Week 11', '2022-03-28'],
  ['Week 12', '2022-04-04'],
  ['Week 13', '2022-04-11'],
  ['Reading Week', '2022-04-18'],
  ['Exam Week 1', '2022-04-25'],
  ['Exam Week 2', '2022-05-02'],
  ['Vacation Week 1', '2022-05-09'],
  ['Vacation Week 2', '2022-05-16'],
  ['Vacation Week 3', '2022-05-23'],
  ['Vacation Week 4', '2022-05-30'],
  ['Vacation Week 5', '2022-06-06'],
  ['Vacation Week 6', '2022-06-13'],
  ['Vacation Week 7', '2022-06-20'],
  ['Vacation Week 8', '2022-06-27'],
  ['Vacation Week 9', '2022-07-04'],
  ['Vacation Week 10', '2022-07-11'],
  ['Vacation Week 11', '2022-07-18'],
  ['Vacation Week 12', '2022-07-25'],
]

const weekEvents = weeks.map((w) => {
  const [year, month, date] = w[1].split('-').map((e) => parseInt(e))
  return {
    start: [year, month, date],
    title: w[0],
    status: 'CONFIRMED',
  }
})

const { error, value } = ics.createEvents(weekEvents)

if (error) {
  console.log(error)
} else {
  console.log(value)
}
