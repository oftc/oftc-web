---
layout: master
title: WebChat
---
## WebChat ##

We provide a web interface for chatting on our network at
**[https://webchat.oftc.net](https://webchat.oftc.net)**.

*webchat.oftc.net* is a slightly modified version of [qwebirc](http://qwebirc.org).
It only serves static files. Your browser will use javascript and
[socket.io](http://socket.io) to directly connect to the API at
**[https://webirc.oftc.net:8443](https://webirc.oftc.net:8443)**.

## WebIRC ##

*webirc.oftc.net* is a thin proxy run directly on our servers that
acts as a https&lt;-&gt;IRC gateway:

 * No unnecessary third parties between you and OFTC.
 * Your communication with OFTC is always encrypted.
   * Soon you'll be able to identify with services by installing a client
certificate in your browser (see [NickServ/CertFP](/NickServ/CertFP))
 * Speaks raw IRC to your browser (negotiated by socket.io) so you're free to
write your own client.
 * Your IP will appear on the network, and not the IP of the web server that
hosts the client software.
   * Allows OFTC and channels to better manage themselves.
   * Keeps you from being stuck into strict connection limits.

## Alternate Clients ##

Users are free to implement their own web client that connects to
*webirc.oftc.net* with socket.io to port 8443. Alternate clients do not need to
be hosted on *oftc.net* to allow connections, our usage of socket.io means that
if the client supports websockets or jsonp they can use cross domain
communication.

*Note:* There may come a time when OFTC needs to implement some form of "human
detection", if that time comes alternative clients will need to make sure their
clients support that mechanism.

 * There are no known alternate clients at this time.
