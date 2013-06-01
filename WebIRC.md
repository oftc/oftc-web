---
layout: master
title: WebIRC
---
## The Problem ##

Web gateways for IRC add an interesting level of complexity to the successful
administration of a given network. As with any gateway (NAT or otherwise) there
is a struggle to provide sufficient means to mitigate abuse while not disrupting
service for civil--well at least legitimate--users. One solution to this problem
is to allow the gateway to provide a hint about the client connecting, which the
ircd can then use to cloak the client with their real hostname. The argument for
such action is that existing network and channel bans will work without
modification, so users attempting to use the web gateway to evade bans will lose
this as an avenue to continue their abuse. The argument against the current
implementations of the WEBIRC extension is that networks are expected to accept
the hint as gospel without further verification. This is not to say that
networks mistrust the operators of web irc gateways, just that the potential for
abuse still exists with or without the operator of the gateways knowledge.

## A Solution ##

 * Client is identified as being from a web gateway
 * The client is sent a notification that their use of the network is limited
until requirements are met
 * A numeric and notice are sent to the client containing a unique URL
identifying their current connection
 * When the URL is visited the client is then able to use network as normal
  * Or some other form of acceptable validation

### Client Purgatory ###

Purgatory for a client will most likely be signified with a
[UserMode](/UserModes). The client will only be allowed to join channels with a
specific [ChannelMode](/ChannelModes) that allow those types of users (i.e.
support channels). To limit abuse, the [ChannelMode](/ChannelModes) should only
be set by opers or by server. The client will also only be able to PRIVMSG when
inside those channels, or to specifically assigned clients (namely services or
opers).

### Notification ###

A numeric and notice are sent so that older clients will continue to function on
the network without requiring modification. By sending the numeric it is desired
that web clients will automate the process for users to a certain degree. At the
very least we'd hope clients wouldn't navigate away from the web gateway to hit
the link.

### Identification ###

To bring the client out of purgatory, the client must either hit the link or
identify with services. The website serving the link will know how to notify the
network that a given client may be brought out of purgatory. The website will
either respond in the affirmative or refuse the connection and provide a reason.
It may become necessary in the future to require some form of challenge and
response to verify that it is a human making the request (perhaps via a form of
captcha), clients that plan on automating the process should keep this in mind.

### Cloaking ###

Because the network has a secondary source for the validity of the connections
source, the client will then be cloaked to appear as if they're coming from
their real host and not from the web gateway.

