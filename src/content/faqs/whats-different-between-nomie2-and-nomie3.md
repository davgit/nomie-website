---
title: "What's different between Nomie 2 and Nomie 3?"
tags: 'nomie, app'
version: 3.0
obsolete: true
slug: whats-different-between-nomie2-and-nomie3
---

## What's different between Nomie 2 and Nomie 3?

The more things change, the more they stay the same...

## Differences

| Feature                 | N2                                | N3                                                                               |
| ----------------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| **Tracker Icons**       | A lot of icons                    | Device's Emoji's or text                                                         |
| **Tracking**            | Single tracker per recorded event | Multiple trackers per record                                                     |
| **Price**               | Free + API                        | Free + In-App Purchases                                                          |
| **Limits**              | Unlimited                         | 6 trackers for free, unlimited trackers with one-time in-app purchase            |
| **Reminders**           | NA                                | Yes                                                                              |
| **One-Tap Tracking**    | Yes                               | Optional                                                                         |
| **Fast Tapping**        | Yes                               | No, Nomie 3 doesn't handle fast tapping of one-tap tracker buttons very well yet |
| **Auto importing data** | Yes, with paid API                | [Yes, with Nomie Calendar Import](/faq/can-i-auto-import-data-into-nomie3)       |

Overall Nomie 3 unifies a bunch of the various ideas that accumulated over the years into single design patterns.

## Will 2 data migrate to 3?

Yes! You can import a Nomie 1 or Nomie 2 dropbox backup into Nomie 3.

## Technology

Nomie 3 is a complete rewrite. Rebuilt using [React Native](https://facebook.github.io/react-native/) opposed to [https://ionicframework.com/](Ionic). This results in an overall faster UX experience, and native components. Native components are important, as in Nomie 2 I absolutely abused CSS to get it to look like iOS or Material Design. This also opens up the potential for more animations and fluid UI changes without the overhead of HTML/JS/CSS.

### My initial new take on Nomie 3 was a failure...

When I started working on "Nomie 3" it wasn't actually called Nomie 3. Instead I called it Nomie Notes, as I saw it as a completely new product that focused on writing/analying data from journal entries. In fact, the first versions didn't even have tracker buttons - yep, I killed them initially. Instead you'd type out your note and hashtag the data you wanted to monitor. For example: `Good day today! #ran(3.4miles) and drank #water(43oz)`.

I really wanted to move away from tracker buttons, I really did, but after a little use it was clear typing data points SUCKS. I then start thinking that it'd be nice to have a quick way to add "#water(34)" to my note... DAMN IT... I added the buttons back. But this time, I left the concept of the note, and too this day each record saved in Nomie 3 is actually stored in the database as a note of hash tags.
