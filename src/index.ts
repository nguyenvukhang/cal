import fs from 'fs'
import moment from 'moment'
import { EventAttributes, createEvents } from 'ics'
import { getAcademicYearByWeek } from './get-ay-by-week'
import { AcademicYearByWeek } from './types'
import { dashedStringToNumberedArray } from './utils'
import { timetable } from './get-timetable'
import weekNames from '../data/json/weeks.json'

const weekZeroMonday = moment('01-08-2022', 'DD-MM-YYYY')

function getIcsEvents(
  academicYearByWeek: AcademicYearByWeek
): EventAttributes[] {
  return academicYearByWeek.map(([date, name]) => {
    const [y, m, d] = dashedStringToNumberedArray(date)
    return {
      start: [y, m, d],
      title: name,
      status: 'CONFIRMED',
      duration: {},
    }
  })
}

function main(write = false) {
  const academicYearByWeek = getAcademicYearByWeek(weekNames, weekZeroMonday)
  const icsEvents = getIcsEvents(academicYearByWeek)
  const icsDump: string = createEvents(icsEvents).value || ''
  if (write) fs.writeFileSync('debug2.ics', icsDump)
}

main()
console.log(timetable['CS1010S'][0]['timeslots'])
