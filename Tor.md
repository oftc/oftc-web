---
layout: master
title: OFTC and Tor
---
* toc
{:toc}

# OFTC and Tor

OFTC also works hard to allow legitimate use of Tor on our network, where and
when appropriate.

OFTC does **not** require users to first connect in the clear and register with
services to allow connecting via Tor, however we reserve the right to disable
new connections during times of abuse, see below for more information.

You can find more information about Tor itself by connecting and joining the
#tor channel.

## Connecting

To connect to OFTC via Tor, use either the

 * standard [**ircs://irc.oftc.net:6697**](ircs://irc.oftc.net:6697) IRC hostname, or
 * our hidden service on
   [ircs://oftcnet6xg6roj6d7id4y4cu6dchysacqj2ldgea73qzdagufflqxrid.onion](ircs://oftcnet6xg6roj6d7id4y4cu6dchysacqj2ldgea73qzdagufflqxrid.onion).

## KLines

Take into consideration however that because of the "anonymous" nature of Tor
it is often ripe for abuse. That is, spam emanating from or ban evasion by
means of connecting via Tor. While we do our best to not adversely effect
legitimate or at least civil users of Tor, from time to time an exit node may
fall prey to a KLine while we work to mitigate abuse.

## Disabled Connections

OFTC reserves the right to prevent new connections via Tor during times of
abuse. That is, users who can maintain their connection will not be affected,
however a new connection will be refused. Once OFTC takes this measure (which
we often view as a last resort) new connects will be refused so long as we
still see the abuse attempts, this duration can range from an hour to day(s).

## Channel ban policies

Some channels may chose to disallow connections from Tor connections. This is
the choice of the channel, and not a decision by the network. However, it is
also common for channels to allow an exception for identified Tor users, who
have turned on their cloak.

If you are having trouble connecting to a channel, try
"/msg nickserv set cloak on" and re-attempt the join.

## Future Work

We are working to create a mechanism by which we can allow users who have
previously registered an account with services to continue to connect and use
OFTC even though we are blocking new anonymous connections. A user must have
previously registered however, if they want to connect via Tor while new
connections are disabled they will have to then connect in the clear to
register. However, when Tor is allowed they will be free to register.

The preferred mechanism for this will likely be an SSL certificate issued
from our own trusted CA that users can [configure their client (or
stunnel/socat)](/NickServ/CertFP) to use and thus the ircd will exempt them
from that particular check. It may be that we also allow nickserv
identification to exempt users.

The software and policy for these have not yet been written, but work on them
is ongoing.
