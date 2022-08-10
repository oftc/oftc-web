---
layout: master
title: User Cloaks
---

## Cloaks

Cloaks are provided via services; for any cloak to take effect you must identify
with services first.  You can enable your cloak once you are verified by issuing
the following command:

`/msg NickServ SET CLOAK ON`

If you are not verified yet, you can start the process by issuing:

`/msg NickServ REVERIFY`

If no [personalized](#Personalized) cloak has already been set, you will receive
a cloak that is unique to your account with services and will be the same across
connections to [OFTC](/).  Generic cloaks will appear as:

`<uuid>.user.oftc.net`

### (Not) Protecting Your Identity

Cloaks on [OFTC](/) are not a secure means of protecting your identity, and
sometimes not even your hostname/IP.  Cloaks will mask your hostname or IP while
you are connected. There are some exceptions however:

 * There is a small window between connect and cloak set by services where the
original information is visible in /whois for any user
 * If services are down, no cloaks will be set at all
 * Network Operators can see the original information at any time

If these exceptions are ok for you, use cloaks. If they are not, you should not
be connecting from this IP to the internet in the first place.

### Personalization

<a id="Personalized"></a>

[OFTC](/) currently issues personalized user cloaks to those who request them.
Personalized cloaks will be of the form

`<nick>.user.oftc.net`

Note that if you have multiple nicks linked to your account, it will only be set
to the nick that is currently identified as your MASTER nick. Your master nick
must not contain any invalid DNS characters, and when set will be only
lowercase.

Your request with your services info (registered nickname) may be emailed to
`cloakrequest@oftc.net` and when staff have time to handle it you will be
notified.

### OFTC Staff

[OFTC staff members](/staff/) wear cloaks identifying their position, e.g.
`.netop.oftc.net` for network operators.
