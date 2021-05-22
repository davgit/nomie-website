---
author: Brandon
title: 'Blockstack Storage Deprecated'
description: 'Here's what to do if you're a Nomie 5 blockstack user.'
createdAt: '2021-01-03T00:14:41.516Z'
slug: 'blockstack-storage'
emoji: '😪'
---

## Blockstack Storage is Deprecated in Nomie

[See the video explainer here](https://www.reddit.com/r/nomie/comments/ml94so/nomies_future_without_stacks_is_unclear/)

TL;DW: Stacks announced they're shutting down the web auth that Nomie uses for storing data in Stacks Storage (formerly Blockstack storage) - date TBD.

While this sucks, it's part of the dance. So what should you do - you have two options.

First, you need to generate a Nomie Export of your data. (settings / data / 📦 Generate Backup)

![Nomie 5 Storage Selector](https://shareking.s3.amazonaws.com/Screen-Shot-2021-05-22-09-00-30.64-1621688435.png)

Next you need to change the Storage Location from Blockstack to either LocalStorage or CouchDB.

What's the Difference?

Both of these options store data on your device, but the CouchDB options allows you to connect Nomie to an external CouchDB server so your data is synced in real-time. Please note, this option is buggy if you try to sync multiple devices.

Sorry for the problems.

B
