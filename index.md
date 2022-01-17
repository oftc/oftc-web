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
Client](https://en.wikipedia.org/wiki/Comparison_of_Internet_Relay_Chat_clients) of choice, or by the
[WebChat](WebChat) that we provide. The webchat enables you to connect to the
network and chat directly from within your browser.

**Connection Details:**

 * [**ircs://irc.oftc.net:6697**](ircs://irc.oftc.net:6697) for SSL (alternative port: 9999), IPv4 and IPv6.
 * [**irc://irc.oftc.net:6667**](irc://irc.oftc.net:6667) for non-SSL (alternative ports: 6668-6670, 7000), IPv4 and IPv6.
 * SSL is supported on all of our servers.  The server certificates are signed
   by the [**Let's Encrypt**](https://letsencrypt.org/) certification authority.
   We also publish DNSSEC-signed **TLSA records** for irc.oftc.net:6697/tcp
   (see `dig _6697._tcp.irc.oftc.net tlsa`).
 * See [**CertFP**](NickServ/CertFP/) for how to configure client certificate-based NickServ identification.
 * If you need to force IPv4, connect to [ircs://irc4.oftc.net:6697](ircs://irc4.oftc.net:6697).
 * We offer a [**WebChat**](WebChat) service (also via the boxes at the top of this page).
 * Use of [Tor](/Tor) is permitted though clearnet or our hidden service on
   [ircs://oftcnet6xg6roj6d7id4y4cu6dchysacqj2ldgea73qzdagufflqxrid.onion](ircs://oftcnet6xg6roj6d7id4y4cu6dchysacqj2ldgea73qzdagufflqxrid.onion:6697).

We offer IRC services (NickServ, ChanServ) for nick and channel registration.

If you have support requests regarding the operation of the network please stop
by `#oftc` or email `support@oftc.net`. We welcome issues and pull requests on
our [GitHub projects](https://github.com/oftc), especially on the
[issue tracking repository](https://github.com/oftc/oftc).

<div class='body'>
<h1>News</h1>
{% for post in site.posts %}
{% ifchanged month %}<h2>{{ post.date | date: "%B %Y" }} </h2>{% endifchanged %}
{{ post.content }}
{% endfor %}

<div><em><a href="feed.xml">Atom/RSS news feed</a></em></div>
</div>
