import { timetable } from '../src/get-timetable'
import { validModuleCode } from '../src/utils'

const moduleCodes = Object.keys(timetable)

describe('has valid module codes', () => {
  test.each(timetable.moduleCodes)('%s is valid', (code) => {
    expect([code, validModuleCode(code)]).toEqual([code, true])
  })
})

const content = Object.values(timetable)

console.log(content[0][0]['timeslots'])
