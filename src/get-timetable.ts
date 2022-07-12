import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'
import type { ModuleData, YamlTimetable } from './types'

const yamlData = yaml.load(
  fs.readFileSync(path.resolve(__dirname, '../timetable.yml')).toString()
) as YamlTimetable

class Timetable {
  moduleCodes: string[]
  data: Record<string, ModuleData>
  constructor(timetable: YamlTimetable) {
    this.moduleCodes = Object.keys(timetable)
    this.data = timetable
  }
  getLessons(moduleCode: string): ModuleData {
    return this.data[moduleCode] || []
  }
}

export const timetable = new Timetable(yamlData)
