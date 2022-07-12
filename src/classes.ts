import moment from 'moment'
import ics from 'ics'
import yaml from 'js-yaml'
import fs from 'fs'

const data = yaml.load(fs.readFileSync('modules.yml', 'utf8'))
const semStart = moment('2022-01-10', 'YYYY-MM-DD')

function dayNum(str: string) {
  const day = { mon: 0, tue: 1, wed: 2, thu: 3, fri: 4, sat: 5, sun: 6 }
  const s = str.slice(0, 3).toLowerCase()
  return day[s]
}

function getWeeks({ weeks = 13, recess = 7 }) {
  const a = [...Array(weeks).keys()]
  const res = {}
  a.forEach((e) => {
    const key = e + 1
    res[key] = key >= recess ? key : key - 1
  })
  return res
}

function makeEvents(data, semStart, weekDist) {
  const all = Object.keys(data)
  const res = []
  all.forEach((module) => {
    if (!(module in data)) {
      return
    }
    data[module].forEach((m) => {
      m.weeks.forEach((w) => {
        const events = m.timeslots.map((ts) => {
          const date = semStart.clone()
          // console.log('week is', w, 'distance is', weekDist[w], typeof weekDist[w])
          date.add(weekDist[w], 'weeks')
          const [year, month, day] = date
            .add(dayNum(ts.day), 'days')
            .format('YYYY-MM-DD')
            .split('-')
            .map((e) => parseInt(e))
          const [hour, minute] = ts.start.split(':').map((e) => parseInt(e))
          return {
            start: [year, month, day, hour, minute],
            title: ts.type ? `${module}: ${ts.type}` : ts.title,
            location: ts.location || '',
            duration: ts.duration,
          }
        })
        res.push(...events)
      })
    })
  })
  return res
}

const weekDist = getWeeks({ recess: 7 })
const res = makeEvents(data, semStart, weekDist)

function writeICS(res, output) {
  const { error, value } = ics.createEvents(res)

  if (error) {
    console.log(error)
  } else {
    console.log(value)
    fs.writeFile(output, value, function (err) {
      if (err) return console.log(err)
    })
  }
}

const exportICS = true
exportICS ? writeICS(res, 'classes.ics') : console.log(res)
