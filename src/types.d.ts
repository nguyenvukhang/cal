export type DateWithWeekName = [string, string]
export type AcademicYearByWeek = DateWithWeekName[]

export type LessonType = 'LEC' | 'REC' | 'TUT' | 'LAB'

export type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

export type Timeslot = {
  day: Day
  type: LessonType
  start: string
  duration: {
    hours?: number
    minutes?: number
  }
  location: string
}

export type LessonData = {
  weeks: number[]
  timeslots: Timeslot[]
}

export type ModuleData = LessonData[]

export type YamlTimetable = Record<string, ModuleData>
