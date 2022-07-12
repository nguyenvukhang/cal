import moment from 'moment'
import type { Moment } from 'moment'
import weekNames from '../data/json/weeks.json'

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
): [string, string][] {
  return weekNames.map((name, index) => {
    const date = weekZeroMonday.clone().add(index, 'weeks').format('YYYY-MM-DD')
    return [date, name]
  })
}

const dates = getDatesWithWeekNames(weekNames, weekZeroMonday)
console.log(dates)
