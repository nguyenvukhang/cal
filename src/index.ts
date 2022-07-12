import moment from 'moment'
import { EventAttributes, createEvents } from 'ics'
import type { Moment } from 'moment'
import weekNames from '../data/json/weeks.json'
import fs from 'fs'

type DateWithWeekName = [string, string]
type AcademicYearByWeek = DateWithWeekName[]

const log = console.log

const weekZeroMonday = moment('01-08-2022', 'DD-MM-YYYY')

/**
 * gets an array of pairs:
 * [
 *   ['<YYYY-MM-DD>', '<Name of week>'],
 *   ...
 * ]
 *
 * @param {string[]} weekNames
 * @param {Moment} weekZeroMonday
 * @returns {[string, string][]}
 */
function getDatesWithWeekNames(
  weekNames: string[],
  weekZeroMonday: Moment
): AcademicYearByWeek {
  return weekNames.map((name, index) => {
    const date = weekZeroMonday.clone().add(index, 'weeks').format('YYYY-MM-DD')
    return [date, name]
  })
}

/**
 * useful to convert YYYY-MM-DD to [YYYY, MM, DD]
 */
function dashedStringToNumberedArray(str: string): number[] {
  return str.split('-').map((e) => parseInt(e))
}

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

function main() {
  const academicYearByWeek = getDatesWithWeekNames(weekNames, weekZeroMonday)
  const icsEvents = getIcsEvents(academicYearByWeek)
  const icsDump: string = createEvents(icsEvents).value || ''
  fs.writeFileSync('debug2.ics', icsDump)
}

main()
