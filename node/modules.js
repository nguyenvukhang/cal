const modules = [
  {
    name: 'MA2219',
    weeks: [1, 2, 3, 4, 5, 6, false, 7, 8, 9, 10, 11, 12, 13],
    timeslots: [
      {
        day: 'Monday',
        start: '16:00',
        duration: { hours: 2 },
        type: 'LEC',
        location: 'LT28',
      },
      {
        day: 'Thursday',
        start: '16:00',
        duration: { hours: 2 },
        type: 'LEC',
        location: 'LT28',
      },
    ],
  },
  {
    name: 'HSS1000',
    weeks: [1, 2, 3, 4, 5, 6, false, 7, 8, 9, 10, 11, 12, 13],
    timeslots: [
      {
        day: 'Wednesday',
        start: '8:00',
        duration: { hours: 2 },
        type: 'LEC',
        location: 'https://nus-sg.zoom.us/j/82861841265',
      },
    ],
  },
  {
    name: 'HSI1000',
    weeks: [1, 2, 3, 4, 5, 6, false, 7, 8, 9, 10, 11, 12, 13],
    timeslots: [
      {
        day: 'Thursday',
        start: '12:00',
        duration: { hours: 2 },
        type: 'LEC',
        location:
          'https://nus-sg.zoom.us/j/83722816709?pwd=KzlCZzBqZWcvYno5azVpYmJLOTVqZz09',
      },
    ],
  },
  {
    name: 'CS1010S',
    weeks: [1, 2, 3, 4, 5, 6, false, 7, 8, 9, 10, 11, 12, 13],
    timeslots: [
      {
        day: 'Wednesday',
        start: '14:00',
        duration: { hours: 2 },
        type: 'LEC',
        location: 'E-Learning',
      },
    ],
  },
  {
    name: 'PC1432',
    weeks: [1, 2, 3, 4, 5, 6, false, 7, 8, 9, 10, 11, 12, 13],
    timeslots: [
      {
        day: 'Wednesday',
        start: '10:00',
        duration: { hours: 2 },
        type: 'LEC',
        location:
          'https://nus-sg.zoom.us/j/87224482307?pwd=VFhsdjFUdUViYWk4YnQ5MXBLZ0lPdz09',
      },
      {
        day: 'Friday',
        start: '10:00',
        duration: { hours: 2 },
        type: 'LEC',
        location:
          'https://nus-sg.zoom.us/j/87224482307?pwd=VFhsdjFUdUViYWk4YnQ5MXBLZ0lPdz09',
      },
    ],
  },
]

export default modules
