---
layout: master
title: FAQ/Services
---
This is a list of frequently asked questions regarding OFTC's Services and their
answers.  Please make sure to read the documentation page of
[Services](/Services) first, as it may already contain the information you are
looking for.

* toc
{:toc}

# Nicks #

## I want to register a nickname someone else already has. ##

Sorry, nicknames are served on a first come, first served basis.


## But they've been offline for two years! ##

That shouldn't be a problem then.  Please stop by in #oftc and ask for the old
nickname to be removed from the database.


## Some nick was "last seen" several years ago, but has a more recent "last quit" time. ##

Sorry in that case. "Last quit" also counts for "last seen". (The difference is
different authentication methods used for nickserv, access lists vs.
password/cert.)


## How do I identify automatically to NickServ? ##

The best way is to connect using SSL and provide a client certificate. See
[NickServ/CertFP](/NickServ/CertFP).


## My CertFP SSL fingerprint doesn't work anymore! ##

Make sure your certificate has not expired. Use `openssl x509 -text -noout -in
yourcert.pem` to check.


## Is there a minimum length for registered nicks? ##

We require a minimum length of 2 characters for new nick registrations.


# Channels #

## I am not getting autoopped/autovoiced ##

People with CHANOP or MASTER access to the channel will be autooped, if AUTOOP
is enabled for the channel.  To check the setting send "INFO <channel>" to
ChanServ.  By default it will be off.  To enable it ask a MASTER to
"SET <channel> AUTOOP ON".

The same applies for AUTOVOICE instead of AUTOOP.

## Why does ChanServ keep removing operator status of people in my channel? ##

If you've given operator status to users in your channel who aren't on the
access list of the channel or aren't identified with services, ChanServ
will remove operator status from those users. To prevent
this from happening you may either add these users to the access list with
CHANOP role, or ```/msg ChanServ SET #channel LEAVEOPS on```. This has the side
effect that if no one is in your channel when a new user joins he will be given
operator status by the IRCd and services won't remove it.


## How do I get ChanServ to join my channel? ##

ChanServ can carry out all its functions without being permanently in your
channel.  For the rare occasion when it does need to join your channel, it will
join and leave your channel automatically.

