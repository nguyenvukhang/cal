#!/usr/bin/env python3

import jicson
import json
from datetime import datetime

def pprint(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, sort_keys=True, indent=2)
    print(text)

result = jicson.fromFile('./samples/main.ics')
events = result['VCALENDAR'][0]['VEVENT']
pretty = []
keys = ['CREATED','DTSTART','DTEND','LOCATION','SUMMARY']
for i in events:
    e = {}
    for j in keys:
        e[j] = i.get(j, '')
    pretty_date = datetime.strptime(e.get('CREATED', '20170111T010000Z'), '%Y%m%dT%H%M%SZ')
    e['date'] = pretty_date.strftime("%d/%m/%y")
    e['time'] = pretty_date.strftime("%R")
    pretty.append(e)

pprint(pretty)

# important fields
# created, summary, location, DTend, DTstart, description

# DTSTART:2017 01 11 T 01 00 00 Z

# BEGIN:VEVENT
# DTSTART:20170111T010000Z
# DTEND:20170111T020000Z
# DTSTAMP:20170116T065439Z
# UID:68p30d1ichhj8bb471i38b9kchi30bb26sp62bb160qm4e33cpij8c35c4@google.com
# CREATED:20170111T005803Z
# DESCRIPTION:
# LAST-MODIFIED:20170111T005803Z
# LOCATION:
# SEQUENCE:1
# STATUS:TENTATIVE
# SUMMARY:
# TRANSP:OPAQUE
# BEGIN:VALARM
# ACTION:DISPLAY
# DESCRIPTION:This is an event reminder
# TRIGGER:-P0DT0H10M0S
# END:VALARM
# END:VEVENT
