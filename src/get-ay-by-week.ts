import type { AcademicYearByWeek } from './types'
import type { Moment } from 'moment'

/**
 * gets an array of pairs:
 * [
 *   ['<YYYY-MM-DD>', '<Name of week>'],
 *   ...
 * ]
 *
 * @param {string[]} weekNames
 * @param {Moment} weekZeroMonday
 * @returns {AcademicYearByWeek}
 */
export function getAcademicYearByWeek(
  weekNames: string[],
  weekZeroMonday: Moment
): AcademicYearByWeek {
  return weekNames.map((name, index) => {
    const date = weekZeroMonday.clone().add(index, 'weeks').format('YYYY-MM-DD')
    return [date, name]
  })
}
