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
 * s - secret, channel will not show up in /whois unless clients share the
channel
 * t - only chanops may change Topic
 * z - messages that would otherwise be blocked (banned, quieted, channel moderation) go to channel operators (shown as *&lt;nick:@#channel&gt; msg*)
 * M - client may speak only when registered and identified to NickServ
 * R - client may join only when registered and identified to NickServ
 * S - client may join only when using SSL Connection

#### Channelmodes with Parameters ####

 * v &lt;nick&gt; - &lt;nick&gt; may speak even when channel is moderated
 * o &lt;nick&gt; - &lt;nick&gt; will get Operator status on the channel
 * l &lt;limit&gt; - channel is limited to &lt;limit&gt; people
 * k &lt;key&gt; - channel may only be joined when passing the appropriate key

#### Channelmodes that take Hostmasks as Parameters ####

 * b - ban this hostmask
 * q - quiet this hostmask. Anyone matching this hostmask will be unable to
speak on the channel
 * e - exempt this hostmaks from bans, quiets and mode +R(egistered only)
 * I - clients matching this hostmask may join channel even when the channel is
+i(nvite only) or +R(egistered only)

## Order of Mode Checks ##

+i => +I => +b => +e

#### Exemption from +R

To allow a client to join a +R channel from which they would otherwise be blocked,
use +I instead of +e.

Both work, but using +e for this purpose is to be considered deprecated.
(Solanum uses +I, and using +e for this purpose won't be added to it, so people
should migrate to +I before we eventually migrate to Solanum.)
