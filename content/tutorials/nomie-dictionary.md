---
author: Brandon
title: 'Nomie Dictionary'
description: 'An attempt to catalog all the objects / nouns / actions in Nomie'
createdAt: '2020-11-17T00:14:41.516Z'
version: '5'
slug: 'nomie-dictionary'
published: false
emoji: '📘'
---

## Tracker Types

- **Tally Tracker** - A zero config tracker that simply increases the tally for the day each time it's used.
- **Numeric Tracker** - A tracker that lets you manually enter a numeric value
- **Range Tracker** - A tracker that lets you select from between a range of numeric values
- **Pick List Tracker** - Pick from a list
- **Timer Tracker** - A tracker that lets start and stop a timer
- **Combine Trackers** - A tracker to tracker other trackers

## People and Context (added in v5)

- **People** - Like a Tracker, People can be tracked using the @ prefix. People are captured in the note as @username.
- **Context** - Like a Tracker and People, Context lets you track generic things to help you understand what was happening at a highlevel. Unlike Trackers, context cannot contain a value. Context are captured in the note as +contextName

### Event Recording

- **Note** - All data tracked in Nomie is stored as a note. For example: `Today was a +good day, #mood(9) #water(33)` translates into: `{context: "good", trackers: [{ tag: 'mood', value: 9},{ tag: 'water', value: 33}]}`. This note data is then saved as part of an `Event` in Nomie.
- **Event** - A recorded log in Nomie that contains at least an end date, and a note. An event can also contain: `lat,lon,score,start,source`
- **Record** - See Event
- **Log** - See Event
