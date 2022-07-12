import { timetable } from '../src/get-timetable'
import { LessonData, Timeslot } from '../src/types'
import { validModuleCode } from '../src/utils'

function assertTimeslots(timeslots: Timeslot[]) {
  describe('timeslots', () => {
    expect(timeslots).toBeInstanceOf(Array)
    timeslots.forEach((ts, tsIndex) => {
      test(`data #${tsIndex}`, () => {
        expect([
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ]).toContain(ts.day)
      })
    })
    // weeks.forEach((n) => expect(typeof n).toBe('string'))
  })
}

function assertWeeks(index: number, lessonData: LessonData) {
  const { weeks, timeslots } = lessonData
  describe(`week data #${index}`, () => {
    /** weeks should be an array of numbers */
    expect(weeks).toBeInstanceOf(Array)
    weeks.forEach((n) => expect(typeof n).toBe('number'))
    assertTimeslots(timeslots)
  })
}

describe.each(timetable.moduleCodes)('%s', (code) => {
  expect([code, validModuleCode(code)]).toEqual([code, true])
  const lessonData = timetable.getLessons(code)
  lessonData.forEach((lessonData, index) => {
    assertWeeks(index, lessonData)
  })
})

// const allLessonData = Object.values(timetable.data).reduce((acc, cur) => {
//   acc.push(...cur)
//   return acc
// }, [] as LessonData[])
//
// test('check weeks', () => {
//   const weeks = allLessonData.map(l => l.weeks)
//   console.log(weeks)
// })
//
// test('check timeslots', () => {})
