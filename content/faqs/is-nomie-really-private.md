---
title: 'Is Nomie really private?'
tags: 'nomie, privacy'
slug: is-nomie-really-private
---

# v4 & v5 answer: Yep! Nomie is really private.

Nomie v4 and v5 introduced the option to store data in [Blockstack's](https://blockstack.org) GaiaHub platform. Blockstack works by first creating an anonymous account that is saved to Blockstack's blockchain ledger. Once you have a blockstack account, Apps (like Nomie) can use that account to read/write encrypted data to a special folder in your Blockstack Storage bucket - that only YOU have the key to decrypt. Please note, if you lose your secret key from Blockstack, you will never be able to get your data. Period.

If you use Nomie 4 or 5 using Local Only storage - the data never leaves your device. However, please note that Apple has started clearing apps that haven't been opened for a while, and it's possible they could delete your Nomie data. Please consider using Blockstack for a better data preservation.

## How can I test it?

1. If you inspect the web requests when you save a log, or create a tracker - you will see the data that is being passed to Blockstack is first encrypted THEN sent to Blockstack.
2. Check out the source code at https://github.com/open-nomie/nomie

# v3 answer: Yes, Nomie is really private.

Nomie only store your information on your device, not in a server. This is why there are no need for accounts. It's also why you should backup regularly, as you lose your data if you lose your phone.

In fact, Nomie goes a step further than just storing data on your device. Unlike other apps, Nomie doesn't even use tools like Google Analytics or Mix Panel to track app usage. I'm damn serious about this.

### How can I test it?

Turn off the internet and you can still use Nomie. The only things that will not work are: Maps, and Time of Day/Day of Week stats. All 3 are rendered from HTML pulled from Nomie.app.

You could also monitor your devices network activity with an external tool.
