import { timetable } from '../src/get-timetable'
import { validModuleCode } from '../src/utils'

describe('has valid module codes', () => {
  test.each(timetable.moduleCodes)('%s is valid', (code) => {
    expect([code, validModuleCode(code)]).toEqual([code, true])
  })
})
