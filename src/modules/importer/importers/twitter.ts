import dayjs from 'dayjs'

function cleanItemName(name: string) {
  return name.replace('Measurement', '')
}

export default function (jsonString: string) {
  const trackers: any = {}

  const payload = JSON.parse(
    jsonString.replace('window.YTD.tweet.part0 = ', '')
  )
  const events: Array<any> = payload.map((t: any) => {
    const tweet = t.tweet
    const date = new Date(tweet.created_at)
    return {
      note: `${tweet.full_text} #tweet`,
      end: date.getTime(),
      source: 'twitter',
    }
  })
  return {
    payload,
    nomie: {
      number: '5.5.0',
      created: new Date().toJSON(),
    },
    trackers,
    events,
  }
}
