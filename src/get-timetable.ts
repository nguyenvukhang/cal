import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

export const timetable = yaml.load(
  fs.readFileSync(path.resolve(__dirname, '../timetable.yml')).toString()
)
