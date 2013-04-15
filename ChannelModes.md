---
layout: master
title: ChannelModes
---
## Channelmodes ##

#### Channelmodes without Parameters ####

 * c - no color messages allowed
 * i - invite only
 * m - moderated
 * n - no external messages (from clients that are not on the channels)
 * p - protected, only channel ops can use /invite
 * s - secret, channel will not show up in /whois unless clients share the channel
 * t - only chanops may change Topic
 * z - moderated, messages of clients not voiced or op'd go to channel operators
 * M - client may speak only when registered and identified to NickServ
 * R - client may join only when registered and identified to NickServ
 * S - client may join only when using SSL Connection

#### Channelmodes with Parameters ####

 * v <nick> - <nick> may speak even when channel is moderated
 * o <nick> - <nick> will get Operator status on the channel
 * l <limit> - channel is limited to <limit> people
 * k <key> - channel may only be joined when passing the appropriate key

#### Channelmodes that take Hostmasks as Parameters ####

 * b - ban this hostmask
 * q - quiet this hostmask. Anyone matching this hostmask will be unable to speak on the channel
 * e - exempt this hostmaks from bans and quiets
 * I - clients matching this hostmask may join channel even when the channel is +i(nvite only)

## Order of Mode Checks ##

+i => +I => +b => +e

