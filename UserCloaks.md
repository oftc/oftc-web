---
layout: master
title: User Cloaks
---

## Cloaks

Cloaks are provided via services; for any cloak to take effect you must identify
with services first.  You can enable your cloak by simply issuing the following
command (assuming you are already identified with services)

`/msg nickserv SET CLOAK ON`

If no [personalized](#Personalized) cloak has already been set, you will receive
a cloak that is unique to your account with services and will be the same across
connections to [OFTC](/).  Default cloaks will appear as:

`<uuid>.user.oftc.net`

*Note:* accounts registered **after 2016-11-08** need an additional
verification step to be able to use cloaks. This is being implemented and not
automated yet; ask on #oftc if your account isn't working for it yet.

Visit the [Staff page](/staff/) to identify staff and their cloaks.

### (Not) Protecting Your Identity

Cloaks on [OFTC](/) are not a secure means of protecting your identity, and
sometimes not even your hostname/IP.  Cloaks will mask your hostname or IP while
you are connected. There are some exceptions however:

 * There is a small window between connect and cloak set by services where the
orignal information is visible in /whois for any user
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
notified. (Pressuring staff for an answer will not expedite the process or cast
favor on your request.)
