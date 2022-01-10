#!/usr/bin/env python3

import jicson
import json

def pprint(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, sort_keys=True, indent=2)
    print(text)

result = jicson.fromFile('./samples/main.ics')
pprint(result)
