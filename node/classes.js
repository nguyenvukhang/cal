import moment from 'moment'
import ics from 'ics'
import modules from './modules.js'

const semStart = moment('2022-01-10', 'YYYY-MM-DD')

function dayNum(str) {
  const day = { mon: 0, tue: 1, wed: 2, thu: 3, fri: 4, sat: 5, sun: 6 }
  const s = str.slice(0, 3).toLowerCase()
  return day[s]
}

function makeEvents(modules, semStart) {
  const res = []
  modules.forEach((module) => {
    module.weeks.forEach((w, i) => {
      if (w) {
        const date = semStart.clone()
        date.add(i, 'weeks')
        const events = module.timeslots.map((ts) => {
          const [year, month, day] = date
            .add(dayNum(ts.day), 'days')
            .format('YYYY-MM-DD')
            .split('-')
            .map((e) => parseInt(e))
          const [hour, minute] = ts.start.split(':').map((e) => parseInt(e))
          return {
            start: [year, month, day, hour, minute],
            title: ts.type ? `${module.name}: ${ts.type}` : ts.title,
            location: ts.location,
            duration: ts.duration,
          }
        })
        res.push(...events)
      }
    })
  })

  return res
}

const res = makeEvents(modules, semStart)

function writeICS(res) {
  const { error, value } = ics.createEvents(res)

  if (error) {
    console.log(error)
  } else {
    console.log(value)
  }
}

const whackICS = true
whackICS ? writeICS(res) : console.log(res)
