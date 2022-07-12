import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'
import type { YamlTimetable } from './types'

const yamlData = yaml.load(
  fs.readFileSync(path.resolve(__dirname, '../timetable.yml')).toString()
) as YamlTimetable

class Timetable {
  moduleCodes: string[]
  constructor(timetable: YamlTimetable) {
    this.moduleCodes = Object.keys(timetable)
  }
}

export const timetable = new Timetable(yamlData)
