---
author: Brandon
title: 'Blockstack Storage Deprecated'
description: 'What to do if you use Blockstack with Nomie 5.'
createdAt: '2021-05-22T00:14:41.516Z'
slug: 'blockstack-storage'
emoji: '😪'
---

## Blockstack Storage is Deprecated in Nomie

[See the video explainer here](https://www.reddit.com/r/nomie/comments/ml94so/nomies_future_without_stacks_is_unclear/)

TL;DW: Stacks announced they're shutting down the web auth that Nomie uses for storing data in Stacks Storage (formerly Blockstack storage) - date TBD.

While this sucks, it is a necessary aspect of this free/open-source dance. So, what should you do? There are two solutions available to you.

1. Create a Nomie Export of your data. (settings / data / 📦 Generate Backup)

![Nomie 5 Storage Selector](https://shareking.s3.amazonaws.com/Screen-Shot-2021-05-22-09-00-30.64-1621688435.png)

2. Change your Storage Location from Blockstack to either LocalStorage or CouchDB.

## What's the Difference?

Both of these options store data on your device, but the CouchDB options allow you to connect Nomie to an external CouchDB server so your data is synced in real-time. Please note, this option is buggy if you try to sync multiple devices.

## What's the plan moving forward?

No new storage engine is added since Nomie 5 is no longer in feature development. The focus will now be on developing a better remote storage option for Nomie 6.
