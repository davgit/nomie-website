---
title: 'How do I auto import data into Nomie 3?'
tags: 'nomie, how-to, tracker'
version: '3.0'
obsolete: true
slug: can-i-auto-import-data-into-nomie3
---

# Automatically import data from your calendar into Nomie 3

Nomie 3 can read your calendars (if you allow it). If Nomie 3 finds any calendar events with `#nomie` in the event title. It will import it.

To enable this feature: go to **Settings > Auto import from Calendar**.

## Examples

Once enabled, create a calendar event for today, and add one of the following to the title.

- **#nomie Today I drank #water(40) and #ran(12.4)**
- **#nomie #temp(45) #humidity(94)**

Note: You can also use the calendars note field - but you must still include `#nomie` in the event's title

## Setting up Automation via IFTTT

Now that you can import data from your calendar, you should head over to [IFTTT](https://ifttt.com) and start setting up things to add to your calendar.

- Sleep tracking via Fitbit
- Fitness tracking via Strava
- Weather tracking via Weather Channel
- Pollen tracking via Weather Channel

## My Fitbit activity

In IFTTT I've setup an applet to run each time my fitbit records my daily activity.

![](https://snaps.nomie.io/Screen-Shot-2018-09-25-09-16-21.jpg)
![](https://snaps.nomie.io/Screen-Shot-2018-09-25-09-17-16.jpg)

Which then get's turned into this record

![IFTTT Fitbit Activity record within Nomie](https://snaps.nomie.io/Screen-Shot-2018-09-25-09-18-20.jpg)
