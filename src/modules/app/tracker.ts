export type ITrackerType =
  | 'tick'
  | 'value'
  | 'range'
  | 'picker'
  | 'note'
  | 'timer'
export type ITrackerMath = 'sum' | 'mean'

export function toTag(str: string) {
  return (str || '')
    .replace(/('|"|\?|-|\)|\(|\*|\&|\||\$|\@|\+|\#)/gi, '')
    .trim()
    .replace(/( )/g, '_')
    .toLowerCase()
}

export function nid() {
  return new Date().getTime().toString(16)
}

export class Tracker {
  public id?: string // Id of Tracker
  public tag: string // Tag of Tracker
  public label?: string // Label of the Tracker
  public type?: ITrackerType // Type of Tracker
  public color?: string // Color of Tracker
  public math?: ITrackerMath // Sum Mean?
  public ignore_zeros?: boolean // Ignore Zeros when doing maths
  public uom?: string // Unit of Measure KEY
  public emoji?: string // Emoji for the Tracker
  public default?: number // Default value for a tracker
  public max?: number // Max of a Range
  public min?: number // Min of a Range
  public step?: number // Steps for Range
  public score?: number // Current Score?
  public score_calc?: any // Positivity Score calc
  public goal?: any // NOT USED
  public one_tap?: boolean // One tapper?
  public include?: string // Content to always include when tracking this tracker
  public note?: string // Content to include when a note tracker
  public hidden?: boolean // Hidden from All Board
  public started?: number // If its started (and a timer based tracker)
  public picks?: Array<string> // Picks for a Picker type of tracker
  public _dirty?: boolean

  constructor(starter: any = {}) {
    // Starter is generic object with params
    starter = starter || {}
    // The tracker name
    this.tag = this.toTag(starter.tag || '')
    //
    if (!this.tag.length) {
      this._dirty = true
    } else {
      this._dirty = undefined
    }
    this.id = starter.id || nid()
    // Set the Type of the Input
    this.type = starter.type || 'tick'
    // Set the color if it's passed
    this.color = starter.color || '#369DD3'
    // Set Math if it's passed
    this.math = starter.math || 'sum'
    // Set Zeros is its passed
    this.ignore_zeros = starter.ignore_zeros || false
    // Set UOM or default to num
    this.uom = starter.uom || 'num'
    // Set if encrypt
    // this.always_encrypt = starter.always_encrypt === true ? true : false
    // SEt Emoji
    this.emoji = starter.emoji || '⚪'
    // set Default value
    this.default = starter.default
    // max
    if (this.type === 'range') {
      this.max = starter.max ? starter.max.toString() : '10'
      // min
      this.min = starter.max ? starter.min.toString() : '1'
      // step
      this.step = starter.step || '1'
    }
    // score
    this.score = starter.score
    // Dynamic Score
    this.score_calc = starter.score_calc
    // Goal Config
    this.goal = starter.goal
    // one tap
    this.one_tap = starter.one_tap === true ? true : false
    // include
    this.include = starter.include || ''
    // Primary NOte
    this.note = starter.note

    // Hide from All Board
    this.hidden = starter.hidden === true ? true : false

    // If it's a timer, set if started else null
    if (this.type === 'timer') {
      this.started = starter.started
    }

    this.picks = starter.picks || undefined

    if (starter.label) {
      this.label = starter.label
    } else {
      this.label = this.tag
    }
  }

  public toTag(str: string) {
    return toTag(str)
  }
}
