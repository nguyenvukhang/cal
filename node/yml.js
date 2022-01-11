import yaml from 'js-yaml'
import fs from 'fs'

const doc = yaml.load(fs.readFileSync('modules.yml', 'utf8'));

console.log(doc)
