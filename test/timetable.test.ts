import { timetable } from '../src/get-timetable'
import { validModuleCode } from '../src/utils'

describe.each(timetable.moduleCodes)('%s', (code) => {
  expect([code, validModuleCode(code)]).toEqual([code, true])
  const lessonData = timetable.getLessons(code)
  lessonData.forEach(({ weeks, timeslots }, index) => {
    /** weeks should be an array of numbers */
    test(`week data #${index}`, () => {
      expect(weeks).toBeInstanceOf(Array)
      weeks.forEach((n) => expect(typeof n).toBe('number'))
    })
    describe('timeslots', () => {
      if (code === 'HSS1000') console.log(timeslots)
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
