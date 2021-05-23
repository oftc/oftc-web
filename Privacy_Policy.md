---
layout: master
title: Privacy Policy
---

# Privacy Policy and Data Retention

This section describes how OFTC makes use of the information you provide when
you use the OFTC IRC network and OFTC.net website (hereinafter collectively
referred to as 'OFTC services').

If you are asked to provide information when using OFTC services, such
information will not be used for any purposes other than those described in
this section.

OFTC collects and uses certain information about users in order to provide
services and enable certain functions.

OFTC may collect the following information:
* Nickname/account on the OFTC network
* Last time an account was used
* IP address/hostname
* Name and E-mail address
* IRC channels created

Collecting the above data helps OFTC deliver its services to you.

Specifically, OFTC may use data:
* To improve the provided services.
* To enable you to reset your password/recover your account.
* To contact you in relation to nickname and channel registrations with OFTC services.
* To respond to a specific enquiry made via e-mail or the support system.
* To analyze traffic for illegal and illegitimate activity (e.g. botnets, spam).
* To scan connecting hosts for well-know vulnerabilities and open proxies.

Your OFTC account is kept until you delete it, or it is deleted for inactivity.
OFTC retains logs of IRC events for the purpose of debugging and restoration
for a maximum of 90 days. OFTC's backups are on encrypted storage.

OFTC does not log any IRC traffic content, neither from public channels, nor from
private messages. Individual users connected to the network are able to log
traffic they receive, but we ask all users to act responsibly with that data.
Specifically, publishing IRC channel log files must not be done without consent
of the channel owners.

OFTC uses DNS blacklists to check for well-known sources of illegal and
illegitimate activity. IP addresses of incoming connections are forwarded to
the blacklist nameserver. Addresses that we have found to be sources of such
activity are submitted for inclusion in these blacklists. Blacklists currently
in use at OFTC are:
* dnsbl.dronebl.org
* rbl.efnetrbl.org

We regularly evaluate new blacklists. The above list will be updated if the
blacklist is permanently included after an evaluation period of 30 days.

Please note that the OFTC website and network may contain links to other
websites, and OFTC has no control of websites outside of the OFTC.net domain.
If you provide information to a website or service to which OFTC links, OFTC
shall not be responsible for its protection and privacy.

If you have any questions about OFTC policies, or about your data at OFTC,
please e-mail <a href="mail:support@oftc.net">support@oftc.net</a>.
Specifically, you can ask OFTC which data we have stored about you, and you may
demand this data be deleted.

# Data visible to other users
Your usage of OFTC services may disclose information to other users
also using OFTC services. That information may include:
* Nickname
* IP address/hostname
* Channels you joined
* The value of your ircname
* For registered nicks: Various account timestamps
* Your last quit message, if any
* The URL string you can set yourself using `/msg nickserv set url`
* If your nick is verified or not
* Your e-mail address **if** private is turned off.

## IP address/hostname
The IP address/hostname can be hidden by using a cloak, see `/msg
nickserv help set cloak`, but please be aware that a cloak only
applies after successful nickserv login, so there may be a time frame
where your host is visible. Consider using
[**CertFP**](/NickServ/CertFP/) to keep that time as small as possible.
Additionally, many IRC clients are able to only join channels after
Nickserv confirmed your login (sometimes with the help of a script).

## e-mail address
Your e-mail address will be shown to other users, if you have **NOT**
set *PRIVATE* to on. Use `/msg nickserv set private on` to do so.
Note that the default of this changed on 2021-05-23, any accounts
created afterwards have the default **ON**, any account before are
default **OFF**.

## Channels you joined
Channels you joined are visible
* if the channel has [Channelmode +s](/ChannelModes/) set, to anyone
  who shares the channel with you,
* to anyone, if [Channelmode +s](/ChannelModes/) is not set.

## Ircname value
The *ircname* is a field you can set freely within your client. Many
people set this to their realname, some channels may ask for this
even. But the actual value set is entirely up to you, so put whatever
you are comfortable with sharing (but don't forget the [Network Policy](/Network_Policy/)).

## Account timestamps
When you register (and later identify) to your account, Nickserv keeps
timestamps of those actions. These are visible to other users, and
are:
* **Time registered** - When you registered the nick
* **Nickname last seen** - Last time you have been online and
  identified to services
* **Account last quit** - (Not if you are connected) When you last
  left the network.


This policy was last updated on: 23 May 2021.

*This Privacy Policy was adapted from the freenode.net Privacy Policy
(licensed under CC BY-SA-NC 4.0).*
