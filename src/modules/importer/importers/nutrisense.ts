import dayjs from 'dayjs'
import Papa from 'papaparse'

function cleanItemName(name: string) {
  return name.replace('Measurement', '')
}

export default function (csvString: string) {
  const papaCSV = Papa.parse(csvString)
  const trackers: any = {}

  console.log({ papaCSV })
  const rows: Array<any> = papaCSV.data

  const timeGroups: any = {}

  rows.forEach((row: Array<string>, index: number) => {
    if (index > 0) {
      const id: string = cleanItemName(row[0])
      const value: any = row[1]
      const description: string = row[5]
      const date: Date = new Date(row[6])
      const timeFrame: string = dayjs(date)
        .startOf('hour')
        .format('YYYY-MM-DD-HH')

      if (id && id.length) {
        trackers[id] = trackers[id] || { label: id, tag: id, math: 'mean' }
        timeGroups[timeFrame] = timeGroups[timeFrame] || []
        timeGroups[timeFrame].push(
          `
          #${id}${value ? `(${value})` : ''}
        `.trim()
        )
      }
    }
  })

  const events = Object.keys(timeGroups).map((dateKey) => {
    const date = dayjs(dateKey, 'YYYY-MM-DD-HH').toDate()
    return {
      end: date.getTime(),
      note: timeGroups[dateKey].join(' '),
      source: 'nutrisense',
    }
  })

  return {
    nomie: {
      number: '5.5.0',
      created: new Date().toJSON(),
    },
    trackers,
    events,
  }
}
