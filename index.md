---
layout: master
title: Home
---
# <center><img src="img/oftc-80.png"> Welcome to OFTC!</center> #

The Open and Free Technology Community aims to provide stable and effective
collaboration services to members of the community in any part of the world,
while closely listening to their needs and desires.

OFTC was founded at the end of 2001 by a group of experienced members of the
Open Source and Free Software communities aiming to provide these communities
with better communication, development, and support infrastructure.

OFTC is a member project of [Software in the Public
Interest](http://www.spi-inc.org/), a non-profit organization which was founded
to help organizations develop and distribute open hardware and software.

You can reach the OFTC IRC network by using a traditional [IRC
Client](http://en.wikipedia.org/wiki/List_of_IRC_clients) of choice, or by the
[WebChat](WebChat) that we provide. The webchat enables you to connect to the
network and chat directly from within your browser.

If you have support requests regarding the operation of the network please stop
by `#oftc` or email `support@oftc.net`

**Connection Details:**

 * [irc://irc.oftc.net:6667](irc://irc.oftc.net:6667) (alternative ports: 6668-6670, 7000), IPv4 and IPv6
 * [ircs://irc.oftc.net:6697](ircs://irc.oftc.net:6697) for SSL (alternative port: 9999), IPv4 and IPv6.
   See [CertFP](NickServ/CertFP/) for how to configure certificate-based NickServ identification
 * For IPv6 connections, supply a flag in your client if your operating system's
preference isn't IPv6
 * If you need to force IPv4, connect to
[irc://irc4.oftc.net:6667](irc://irc4.oftc.net:6667)
 * *or alternatively* connect using our [WebChat](WebChat) or use the
boxes at the top of the page
 * Use of [Tor](/Tor) is permitted

We support SSL on all of our servers.  The certificates are signed, indirectly,
by SPI's certification authority.  You can get the root certificate at the SPI
website under
[http://www.spi-inc.org/ca/spi-cacert.crt](http://www.spi-inc.org/ca/spi-cacert.crt),
and if you care you can verify it using [the pgp-signed certificate
fingerprints](http://www.spi-inc.org/ca/spi-cacert.fingerprint.txt).
Alternatively, install a certificate collection (ca-certificates or similar
names are common) that includes it.

<div class='body'>
<h1>News</h1>
{% for post in site.posts %}
{% ifchanged month %}<h2>{{ post.date | date: "%B %Y" }} </h2>{% endifchanged %}
{{ post.content }}
{% endfor %}
</div>
