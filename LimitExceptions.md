---
layout: master
title: Limit Exceptions
---
The OFTC Network limits the number of connections coming from hosts to
limit the resources that may be used by misconfigured software.

If you receive the message: `No more connections from this host allowed.
See http://www.oftc.net/oftc/LimitExceptions for more info.` when you
are not allowed to connect to OFTC, you have hit one of our limits.

If this happens to you, please write to support@oftc.net; include the 
day and time (as well as timezone) you received this message. If you 
think you know why the connections are being rejected (such as a 
CGI::IRC gateway, behind a NAT firewall, etc.) please let us know.

If you know you are using a NAT firewall, please include the IP
addresses of your NAT firewalls (some networks use more than a single
publicly-routable IP address), how long you think it will be valid (e.g.,
a short-term conference vs a long-term business), as well as how many
connections you believe would make a reasonable ceiling.

OFTC has no limitations on users connecting with two or three clients,
however we do suggest ChanServ and NickServ as possible alternatives to
running your own channel bots.
