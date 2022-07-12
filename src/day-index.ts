/**
 * @param {string} day - human readable
 * @returns {number} index of the week
 */
export function dayIndex(day: string): number {
  const dayMap = {
    mon: 0,
    tue: 1,
    wed: 2,
    thu: 3,
    fri: 4,
    sat: 5,
    sun: 6,
    monday: 0,
    tuesday: 1,
    wednesday: 2,
    thursday: 3,
    friday: 4,
    saturday: 5,
    sunday: 6,
  }
  const lower = day.toLowerCase()
  /**
   * return -1 on invalid day
   */
  if (!Object.keys(dayMap).includes(lower)) return -1
  /**
   * return the day index
   */
  return dayMap[lower]
}
