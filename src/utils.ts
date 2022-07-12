import fs from 'fs'

export function readJSON(filepath: string) {
  return JSON.parse(fs.readFileSync(filepath).toString())
}
