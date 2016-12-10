---
layout: master
title: UserModes
---
## Usermodes ##

#### Modes Users Can Set

 * D - (Deaf) - Client won't see any channel messages/text
 * g - (callerid) - Block private messages unless whitelisted, see [CallerId](/CallerId)
 * G - (soft callerid) - Block private message unless whitelisted or sender and recipient share a channel (overrides +g)
 * i - (invisible) - Client is invisible to /who and /names #channel (unless
you share the channel)
  - by default users are set +i
  - this does not hide your channels in /whois (that is dependent on [Channel
Modes](/ChannelModes))
 * w - (wallop) - Client may receive wallops

#### Modes Not Set By Users

 * R - (Registered) - Client is identified to [NickServ](/NickServ)
 * l - (local Operator)
 * o - (global Operator)

#### Modes available to Operators

 * S - (God) - God mode - chanop-like status everywhere and a bit of extra info
shown in whois etc
 * b - (Bots) - Notices regarding possible spambots
 * c - (conn) - [Dis]connection notifications
 * f - (full) - Notifications when a class is full
 * k - (kills)
 * n - (nchange) - Follow nick changes
 * r - (reject) - Notifications of rejected clients in valid username
 * s - (servernotice)
 * u - (unauth) - Notifications of connections that don't fit an auth block
 * y - (spy) - whois/stats/channel creation notifications
 * z - (operwall)

#### Unused

 * C - (Server) - Server only
 * a - (Admin)
 * d - (debug) - Debug information relating to the ircd
 * x - (external)
