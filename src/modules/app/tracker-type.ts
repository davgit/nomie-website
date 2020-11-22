import { ITrackerType } from './tracker'

export interface TrackerTypeConfig {
  emoji: string
  label: string
  description?: string
  id?: ITrackerType
}

export interface TrackerTypesConfig {
  [type: string]: TrackerTypeConfig
}

const types: TrackerTypesConfig = {
  tick: {
    emoji: '☝️',
    label: 'Tally Tracker',
  },
  value: {
    emoji: '🔢',
    label: 'Number Input',
  },
  range: {
    emoji: '🎚',
    label: 'Range',
  },
  picker: {
    emoji: '✅',
    label: 'Pick from a List',
  },
  timer: {
    emoji: '⏲',
    label: 'Timer',
  },
  note: {
    emoji: '🎳',
    label: 'Combine Trackers',
  },
}

export function getTypeDetails(type: string): TrackerTypeConfig | undefined {
  if (types[type]) {
    return types[type]
  } else {
    return undefined
  }
}

export default types
