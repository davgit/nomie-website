---
title: 'How do webhooks work in Nomie 3?'
tags: 'nomie, privacy'
version: 3.0
obsolete: true
slug: how-do-webhoooks-work
---

# Webhooks

Since I removed CouchDB in Nomie 3, I still needed away to send data from N3 to external services I have running. Enter the webhook.

In Nomie3 you can create multiple webhooks using POST and PUT. These Webhooks can then be assigned to specific trackers. When you create a event with the specific tracker included, that event will be sent to the Webhook.
