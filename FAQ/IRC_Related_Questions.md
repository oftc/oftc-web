---
layout: master
title: FAQ/IRC_Related_Questions
---
* This will be the TOC
{:toc}

## What IRC servers can I connect to? ##

Please see the [OFTC](/), it lists the servers and ports you should use.

Do not connect to individual servers, always let the DNS rotation pick one for
you. This employs GeoDNS to take you to a server nearby. It also allows us to do
load-balancing on servers and take out servers that will go down for
maintenance.

## What are "Services"? ##

On OFTC's IRC network, in order to improve the user's experience, we allow the
use of a software package which is typically classed as "Services." The systems
included, and their uses, are: NickServ, which is responsible for nickname
registration and user preferences; ChanServ, responsible for channel
registration,control, and preferences.

Details are explained on the [Services](/Services) page. Please also see [the
frequently asked questions about Services](../Services).

## What User Modes are available? ##

Please see [User Modes](/UserModes) for more information

## What Channel Modes are available? ##

Please see [Channel Modes](/ChannelModes) for more information

## Why am I port-scanned on connect? ##

To keep trojaned hosts away, we try to identify open proxies and similar
services on connecting clients. Please just ignore connections from
zombie-scan.oftc.net, the connects are harmless. (If you really don't like them,
use a firewall.)

## Who are all these users with the host-mask nick.something.oftc.net? ##

 * `<nick>.<role>.oftc.net` is a [Staff](/staff) member, they have these masks
to be easily identified as to what role they play. A complete explanation is
available at [Staff](/staff)
 * `<nick>.user.oftc.net` is a user cloak. Please see
[UserCloaks](/UserCloaks) for more information.

## How can I sponsor a server or join the project's staff? ##

OFTC's survival depends on the generous contributions of server sponsors and
volunteers. The current application form is located at
[Application](/Application).

## What is OFTC's IRC server naming scheme? ##

OFTC's server naming scheme is "science terms, except people's names".

