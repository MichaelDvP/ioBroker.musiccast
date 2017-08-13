![Logo](admin/musiccast.png)
# ioBroker.musiccast

[![NPM version](http://img.shields.io/npm/v/iobroker.musiccast.svg)](https://www.npmjs.com/package/iobroker.musiccast)
[![Downloads](https://img.shields.io/npm/dm/iobroker.musiccast.svg)](https://www.npmjs.com/package/iobroker.musiccast)
[![Build Status](https://travis-ci.org/foxthefox/ioBroker.musiccast.svg?branch=master)](https://travis-ci.org/foxthefox/ioBroker.musiccast)


[![NPM](https://nodei.co/npm/iobroker.musiccast.png?downloads=true)](https://nodei.co/npm/iobroker.musiccast/)

adapter for Yamaha MusicCast devices like WX-010/030, YSP-1600

## Installation:
Installation requires nodejs v4 at minimum

from npm
```javascript
npm install iobroker.musiccast
```
actual version from github (this might not every time work, when development is in progress)
```javascript
npm install https://github.com/foxthefox/ioBroker.musiccast/tarball/master --production
```

## Settings
The admin page the "+" can be used for adding manually the IP address, DeviceID, Type and Name.
Press the search button for discovery. If you have multiple devices, you have to hit the button multiple times until all devices are discovered. Unfortunately the discovery returns only one object at the time and this could be any of your MusicCast devices. 

If you want to see the playtime updated for the tracks you listen, please enable/check the respective checkbox. Be aware that increases the message count (every second for every device the pingpong of updates).

## available Objects
The following objects are currently implemented:

|Object|Value|settable|Description|
|--------|-------|:-:|--------|
|{zone}.power|boolean|x|true/false -> ON/Standby|
|{zone}.mute|boolean|x|true/false -> muted/ not muted|
|{zone}.volume|value|x|0...max (max depending on device)|
|{zone}.input|text|x|inputs depending on device|
|{zone}.input_list|text|-|possible inputs|
|{zone}.sound_program|text|x|set sound program|
|{zone}.sound_program_list|text|-|possible sound programs|
|{zone}.link_control|text|x|set link control|
|{zone}.link_control_list|text|-|possible link control settings|
|{zone}.link_audio_delay|text|x|set link audio delay|
|{zone}.link_audio_delay_list|text|-|possible link link audio delay settings|
|{zone}.clearVoice|boolean|x|clear Voice control|
|{zone}.low|value|x|level EQ low|
|{zone}.mid|value|x|level EQ mid|
|{zone}.high|value|x|level EQ high|
|{zone}.subwoofer_volume|value|x|level subwoofer volume|
|{zone}.bass|value|x|level bass|
|{zone}.treble|value|x|level treble|
|{zone}.balance|value|x|level balance|
|{zone}.direct|boolean|x|set direct|
|{zone}.pure_direct|boolean|x|set pure direct|
|{zone}.enhancer|boolean|x|set enhancer|
|{zone}.bass_extension|boolean|x|set bass extension|
|{zone}.sleep|value|x|sleep timer|
|netusb.input|value|x|set/actual input|
|netusb.playPause|boolean|x|set Play/Pause|
|netusb.playback|text|-|status net player|
|netusb.stop|boolean|x|set Stop|
|netusb.next|boolean|x|set Forward|
|netusb.prev|boolean|x|set Rewind|
|netusb.shuffle|boolean|x|toggle shuffle|
|netusb.shuffle_stat|text|-|shuffle status|
|netusb.repeat|boolean|x|toggle repeat|
|netusb.repeat_stat|text|-|repeat status|
|netusb.artist|text|-|artist name|
|netusb.album|text|-|album name|
|netusb.track|text|-|track name|
|netusb.albumarturl|text|-|http address for album art|
|netusb.playtime|value|-|played time in s|
|netusb.recent_info|json|-|history of played items|
|netusb.preset_info|json|-|saved presets/favourites|
|netusb.presetrecallnumber|value|x|recall the # in the favourite list|
|netusb.usbdevicetype|text|-|type of connected USB device|
|netusb.attribute|value|-|which possibiolites has the service, to be decoded|
|system.api_version|value|-|API Version|
|system.system_version|value|-|System Version|
|system.inputs.{service}|value|-|available input service|
|system.inputs.{service}.account_enable|value|-|available input service enabled|
|system.inputs.{service}.distribution_enable|value|-|available input service distributable|
|system.inputs.{service}.play_info_type|value|-|available input service type|
|cd.playPause|boolean|x|set Play/Pause|
|cd.playback|text|-|status CD player|
|cd.stop|boolean|x|set Stop|
|cd.next|boolean|x|set Forward|
|cd.prev|boolean|x|set Rewind|
|cd.shuffle|boolean|x|toggle shuffle|
|cd.shuffle_stat|text|-|shuffle status|
|cd.repeat|boolean|x|toggle repeat|
|cd.repeat_stat|text|-|repeat status|
|cd.device_stat|text|-|device status|
|cd.playtime|value|-|current playback time|
|cd.totaltime|value|-|current track total time|
|cd.disctime|value|-|CD total time|
|cd.tracknumber|value|-|track current in playback|
|cd.totaltracks|value|-|total CD tracks|
|cd.artist|text|-|artist name|
|cd.album|text|-|album name|
|cd.track|text|-|track name|
|clock.auto_sync|boolean|x|Clock auto sync|
|clock.format|string|x|Clock format 12h/24h|
|clock.alarm_on|boolean|x|Clock alarm status on/off|
|clock.volume|number|x|Clock alarm volume|
|clock.fade_interval|number|x|Clock alarm fade interval|
|clock.fade_type|number|x|Clock alarm fade type| 
|clock.mode|string|x|Clock alarm mode oneday/weekly| 
|clock.repeat|boolean|x|Clock alarm repeat if oneday is specified|
    
|clock.{day}.enable|boolean|x|Clock Setup validity| 
|clock.{day}.time|string|-|Clock alarm start up time hhmm 00-23,00-59| 
|clock.{day}.beep|boolean|x|Clock Beep validity|
|clock.{day}.playback_type|string|-|Clock alarm playback type resume/preset|
|clock.{day}.resume_input|string|-|Clock alarm resume input ID|
|clock.{day}.preset_type|string|-|Clock alarm preset type|
|clock.{day}.preset_num|number|-|Clock alarm preset input ID| 
|clock.{day}.preset_netusb_input|string|-|Clock alarm netusb input ID| 
|clock.{day}.preset_netusb_text|string|-|Clock alarm netusb text| 
|clock.{day}.preset_tuner_band|string|-|Clock alarm tuner band|
|clock.{day}.preset_tuner_number|number|-|Clock alarm tuner frequency or station ID|


## ToDo
* support of lists
* change of interaction values to nice naming
* fastforward/fastrewind for NETUSB/CD
* bluetooth
* dialog level

## Changelog
#### 0.0.7
* tuner support
* clock support (information mainly)
* support of more zones
* support of mc-link
* setting of min and max values according features

#### 0.0.6
* widget set matching the objects and control
* cd.shuffle_stat boolean -> text
* new netusb.shuffle_stat (text)
* status update via subscribing UDP messages
* switch for update on playtime info (disabling reduces traffic)

#### 0.0.5
* cleanup in admin page
* improvement for object creation
* more objects on netusb
* more objects in system
* added support of CD

#### 0.0.4
* new objects and functions (input, sound_prog, EQ, clearVoice)
* search/discovery in admin page

#### 0.0.3
* more objects implemented

#### 0.0.2
* minor corrections

#### 0.0.1
* initial release with setting of IP in config-page, 
* available commands power, mute, volume
