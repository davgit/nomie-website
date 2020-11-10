type ListenersMap =
  | 'visibility'
  | 'scroll'
  | 'resize'
  | 'show'
  | 'hide'
  | 'scrollEnd'

type BreakpointsMap = {
  readonly [id: string]: number
}

type PositionMap = {
  readonly x: number
  readonly y: number
  readonly height: number
  readonly width: number
  readonly top: number
  readonly left: number
  readonly element?: HTMLElement
}

const BASE_LISTENERS = {
  scrollListener: undefined,
  resizeListener: undefined,
  visibilityListeners: undefined,
}

const LISTENERS = {
  visibility: [],
  scroll: [],
  scrollEnd: [],
  resize: [],
  show: [],
  hide: [],
}

function random() {
  return Math.random().toString(16).substr(3, 12)
}

function getDeviceKey() {
  const baseKey = localStorage.getItem('_device')
  if (!baseKey) {
    const newKey = random()
    localStorage.setItem('_device', newKey)
    return newKey
  } else {
    return baseKey
  }
}

function getHeight(): number {
  return isBrowser() ? window.innerHeight : 0
}

function getWidth(): number {
  return isBrowser() ? window.innerWidth : 0
}

function size() {
  const breakpoints = getBreakpoints()
  const width = getWidth()
  const height = getHeight()
  return {
    get portrait(): boolean {
      return height > width
    },
    get landscape(): boolean {
      return height < width
    },
    get xs(): boolean {
      return width <= breakpoints.xs
    },
    get sm(): boolean {
      return width <= breakpoints.sm && width > breakpoints.xs
    },
    get md(): boolean {
      return width <= breakpoints.md && width > breakpoints.sm
    },
    get lg(): boolean {
      return width <= breakpoints.lg && width > breakpoints.md
    },
    get xl(): boolean {
      return width > breakpoints.lg
    },
    get width(): number {
      return width
    },
    get height(): number {
      return height
    },
    get name(): any {
      const breakpoints = getBreakpoints()
      const id = Object.keys(breakpoints).find((id: any) => {
        return breakpoints[id] >= width
      })
      return id || 'sm'
    },
  }
}

export function getBreakpoints(breakpoints = {}): BreakpointsMap {
  const base = {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1289,
  }
  return { ...base, ...breakpoints }
}

function getNavigator(): {
  readonly userAgent: string
  readonly appName: string
  readonly appVersion: string
} {
  return isBrowser()
    ? navigator
    : { userAgent: 'server', appName: 'Server', appVersion: 'Server' }
}

function getAppVersion(): string {
  return getNavigator() ? getNavigator().appVersion : 'server'
}
function getUserAgent(): string {
  return getNavigator().userAgent
}
function getPath(name: string) {
  return `${getDeviceKey()}/${name}`
}

function getEmptyElementPosition() {
  return {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
    top: 0,
    left: 0,
    element: undefined,
  }
}

function toElement(_ele: HTMLElement | Document): HTMLElement {
  if (_ele instanceof HTMLElement) {
    return _ele
  } else {
    return window.document.body
  }
}

function getElementPosition(_ele?: HTMLElement | Document): PositionMap {
  if (isBrowser() && _ele) {
    const element = toElement(_ele)
    const bounding = element.getBoundingClientRect()
    return {
      x: bounding.x,
      y: bounding.y,
      height: bounding.height,
      width: bounding.width,
      top: Math.abs(bounding.top),
      left: bounding.left,
      element,
    }
  } else {
    return getEmptyElementPosition()
  }
}

function getWindow(): any {
  try {
    return window
  } catch (e) {
    return undefined
  }
}

function isPWA(): boolean {
  if (isBrowser() && getWindow()) {
    return getWindow().matchMedia('(display-mode: standalone)').matches
  }
  return false
}

function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    getUserAgent()
  )
}

function isServer(): boolean {
  return getWindow() ? false : true
}

function isBrowser(): boolean {
  return !isServer()
}

function isApple(): boolean {
  return /ios|Safari|Apple/i.test(getUserAgent())
}

function isIOS(): boolean {
  return /ios/i.test(getUserAgent())
}

function isAndroid(): boolean {
  return /Android/i.test(getUserAgent())
}

function isWindows(): boolean {
  if (isBrowser()) {
    return getAppVersion().indexOf('Win') > -1
  } else {
    return false
  }
}

function isDesktop(): boolean {
  return !isMobile()
}

function subscribe(listener: ListenersMap, func: Function): Function {
  const listeners: any = LISTENERS[listener]
  if (listeners && listeners.indexOf(func) == -1) {
    listeners.push(func)
  }
  return () => {
    LISTENERS[listener] = LISTENERS[listener].filter((loopFunc: Function) => {
      return loopFunc !== func
    })
  }
}

function isDarkmode(): boolean {
  if (getWindow()) {
    return (
      getWindow().matchMedia &&
      getWindow().matchMedia('(prefers-color-scheme: dark)').matches
    )
  } else {
    return false
  }
}

function css(name: string, value: string): void {
  const root: any = document.querySelector(':root')
  if (root) {
    root.style.setProperty(name, value)
  }
}

function setPayload(payload: any) {
  if (isBrowser()) {
    payload.m = new Date().getTime()
    localStorage.setItem(getPath('d'), JSON.stringify(payload))
  }
}

function getPayload() {
  // Make sure its a browser
  if (isBrowser()) {
    // Get payload from local Storage
    const payloadStr: any = localStorage.getItem(getPath('d'))
    // Set base Payload if empty
    const basePayload = {
      c: new Date().getTime(),
      id: random(),
      l: 0,
      m: new Date().getTime(),
    }
    // If we have a String
    if (payloadStr) {
      try {
        // Try and parse the payload
        const payload = JSON.parse(payloadStr)
        return { ...basePayload, ...payload }
      } catch (e) {
        console.error(e.message)
        return basePayload
      }
    } else {
      return basePayload
    }
  }
  return {}
}

// Listener Holders

let bounce: any
export function scrolled(evt: any) {
  clearInterval(bounce)
  bounce = setTimeout(() => {
    LISTENERS.scrollEnd.forEach((func: Function) => {
      func(evt)
    })
  }, 500)
  LISTENERS.scroll.forEach((func: Function) => {
    func(evt)
  })
}

export function canShare(): boolean {
  return isBrowser() ? navigator.hasOwnProperty('share') : false
}

export function canVibrate(): boolean {
  return isBrowser()
    ? typeof navigator.vibrate == 'function'
      ? true
      : false
    : false
}

function resized(evt: any) {
  LISTENERS.resize.forEach((func: Function) => {
    func(evt)
  })
}

function onScroll(func: Function, element?: any): Function {
  // Assign element to window.doc if not element provided
  element = element || window.document
  // If no base scrollListener listeneing - created it
  if (!BASE_LISTENERS.scrollListener && element) {
    BASE_LISTENERS.scrollListener = element.addEventListener('scroll', () => {
      scrolled(getElementPosition(element))
    })
  }
  // Subscribe to the scroll listener
  if (element) {
    return subscribe('scroll', func)
  } else {
    return () => {
      console.log('Remove me')
    }
  }
}

function onScrollEnd(func: Function, element?: any): Function {
  element = element || window.document
  if (element) {
    return subscribe('scrollEnd', func)
  } else {
    return () => {}
  }
}

function initiateVisibilityListeners() {
  if (!BASE_LISTENERS.visibilityListeners && isBrowser()) {
    BASE_LISTENERS.visibilityListeners = addListener(
      getWindow(),
      'visibilitychange',
      visbilityChange
    )
  }
}

function tellListeners(name: ListenersMap, payload: any) {
  ;(LISTENERS[name] || []).forEach((func: Function) => {
    func(payload)
  })
}

function visbilityChange(evt: any) {
  if (document.visibilityState === 'visible') {
    tellListeners('show', evt)
  } else if (document.visibilityState === 'hidden') {
    tellListeners('hide', evt)
  }
}

function onHide(func: Function) {
  initiateVisibilityListeners()
  return subscribe('hide', func)
}
function onShow(func: Function) {
  initiateVisibilityListeners()
  return subscribe('show', func)
}

function addListener(element: HTMLElement, name: any, func: any): any {
  element.removeEventListener(name, func)
  return element.addEventListener(name, func)
}

export function onResize(func: Function) {
  if (!BASE_LISTENERS.resizeListener) {
    BASE_LISTENERS.resizeListener = addListener(getWindow(), 'resize', () => {
      resized({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    })
  }
  return subscribe('resize', func)
}

export class Device {
  id: string
  usage: {
    opens: number
    last: Date
    first: Date
  } = { opens: 0, last: new Date(), first: new Date() }
  constructor() {
    const payload = getPayload()
    payload.l = (payload.l || 0) + 1
    this.id = payload.id
    this.usage.opens = payload.l
    this.usage.last = new Date(payload.m)
    this.usage.first = new Date(payload.c)
    setPayload(payload)
  }
  get size() {
    return size()
  }
  public onScroll = onScroll
  public onScrollEnd = onScrollEnd
  public onResize = onResize
  public onShow = onShow
  public onHide = onHide
  public css = css
  public get pwa(): boolean {
    return isPWA()
  }
  get mobile(): boolean {
    return isMobile()
  }
  get browser(): boolean {
    return isBrowser()
  }
  get server(): boolean {
    return isServer()
  }
  get apple(): boolean {
    return isApple()
  }
  get ios(): boolean {
    return isIOS()
  }
  get android(): boolean {
    return isAndroid()
  }
  get windows(): boolean {
    return isWindows()
  }
  get desktop(): boolean {
    return isDesktop()
  }
  get dark(): boolean {
    return isDarkmode()
  }
  public canShare = canShare
  public canVibrate = canVibrate
}

export default Device
