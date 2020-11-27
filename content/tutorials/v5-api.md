---
author: Brandon
title: "Setting up Nomie's API"
description: 'Step up your tracking game with automated tracking'
createdAt: '2020-11-09T00:14:41.516Z'
version: '5'
slug: 'v5-api'
emoji: '🚀'
---

<img src="https://media.giphy.com/media/PDsgxQoXvUZGg/giphy.gif" width="100%" />

# What's the API?

An API ("application programming interface") is how two programs can talk to each other remotely. Nomie's API lets you send data from external apps / websites / services into Nomie. **Nomie's API DOES NOT send data OUT of the app**, only for bringing data in (for security purposes).

## Rules of the API

- You have 10 slots available at any time. (10 slot limitation cannot be increased - for now)
- One note saved to the API fills one slot.
- Auto Import will clear out the slots once all have been imported.
- The API will return an error when no more slots are available.

### Enabling your Nomie API.

1. Go to Settings
2. Tap the Data Tab
3. Tap Nomie API
4. Tap "Generate API Key"

![Nomie Generate API](https://shareking.s3.amazonaws.com/Screen-Shot-2020-11-09-21-16-05.48-1604974572.png)

This should generate you a new API Key

![Nomie API Key](https://shareking.s3.amazonaws.com/Screen-Shot-2020-11-09-21-00-46.28-1604973654.png)

## Sending Data to your API

- **URL**: https://nomieapi.com/log
- **METHOD**: POST
- **BODY**: application/json

### Body JSON payload options

- **note** - the content of the note to save in Nomie. Can include #tracker, @people, +context, text, anything
- **api_key** - your api key
- **lat** - latitude of a location
- **lng** - longitude of a location
- **date** - Date of event - any [javascript date format](https://www.w3schools.com/js/js_date_formats.asp)

### Minimum required body payload

```
{
  "note": "Content of Note to save to nomie",
  "api_key": "YOUR API KEY"
}
```

### All Available Options

```
{
	"lat": 31.3456,
	"lng" : -81.43235,
	"date": "2020-09-14T12:00:00.130Z",
	"note" : "#tracker(123) @person +context",
	"api_key": "YOUR API KEY"
}
```

### Curl Example

```
curl --request POST \
  --url https://nomieapi.com/log \
  --header 'Content-Type: application/json' \
  --data '{
	"lat": 31.3456,
	"lng" : -81.43235,
	"date": "2020-09-14T12:00:00.130Z",
	"note" : "NOTE CONTENT HERE",
	"api_key": "YOUR API KEY"
}'
```

![](https://shareking.s3.amazonaws.com/Screen-Shot-2020-11-09-21-21-29.34-1604974897.png)

Once you've successfully pushed a note into the API, tap the "Captured" tab, and you should see your note. Click "Accept" to import it into Nomie.

![](https://shareking.s3.amazonaws.com/Screen-Shot-2020-11-09-21-22-52.12-1604974979.png)

**Pro Tip**: having to manually accept each log is annoying. Enable Auto Accept to automatically import logs each time you launch nomie.

![](https://shareking.s3.amazonaws.com/Screen-Shot-2020-11-09-21-25-02.63-1604975115.png)
