---
layout: master
title: Services
---
The IRC services is a common name for our set of helper systems for managing
your nicknames and channels. They can be used to provide you with access with
certain privileges and protection.

* TOC
{:toc}

## How to use Services ##

### Register your account ###

If you don't already have an account, you can register one with `/msg NickServ
REGISTER <password> <e-mail>`

This will register a nickname in our database for your use. Registering your
nickname ensures it is reserved for your use and cannot be used by others if you
do not wish them to use it. It also allows you to associate various pieces of
information with your nickname and also to have access to registered channels.

You can now also identify with NickServ on connect using SSL connections and
client certificates. For more information about this feature please look at
[NickServ/CertFP](/NickServ/CertFP).

`/msg NickServ help` will give you an overview of other NickServ commands.

### Verify your account ###

When you register an account, NickServ will give you a link to a web page
where you can verify your account. You will need to solve a CAPTCHA in
order to verify your account. The link will expire after one hour, but
you can ask for a new link with `/msg NickServ REVERIFY`. If you need any
assistance, please ask for help from OFTC staff in #oftc or on support@oftc.net.

### Register your channel ###

For channel registration, the ChanServ bot is provided. To register a channel
`/msg ChanServ REGISTER <#channel> <description>`. As with NickServ, `/msg
ChanServ help` will give you a help screen.  You must be opped in the channel
and registered and identified with NickServ before you can register a channel.
If you need any assistance, please ask for help from OFTC staff in channel
#oftc.

Please note that since OFTC is a topical and not a general purpose network some
restrictions apply:

 * If the channel bears the name of an existing and reasonably well known
project, that project may intervene and take responsibility of the channel.
Similarly, if the channel bears the name of an existing and reasonably
well-known project, OFTC's staff may intervene if the channel is abusive to its
users. If this is the case, the channel will be tagged "Community-run" and a
manager assigned by OFTC.
 * Channels which are off-topic to our network may remain provided they meet
two conditions: that the channel's mode remains +s and that it is not using the
name of an existing, reasonably well-known project. Warez channels and 
channels engaging in illegal activity are expressly forbidden.
 * Channels that are not open to the public are also ok, provided they meet two
conditions: Such channels have to remain +s and they may not use the name of an
existing, well known project.

If your channel is the victim of frequent flooding attacks you can enable
FloodServ for this channel using `/msg ChanServ SET <#channel> FloodServ on`.
This should not be done lightly and if there is no need.

### Get help ###

For basic help with the services, you can send the help command to the bots, eg:
`/msg ChanServ HELP`

If you're still stuck, pop on to #oftc and our staff will do the best to help
you.

Also check out Service's [Frequently Asked Questions](/FAQ/Services).


## What's New ##

A lot of things have changed from our old services, this list details what will
effect the end users.

### NickServ ###

 * There is now a separation between "accounts" and "nicknames"
  * Linked nicks work differently as a result, you link your current nick to
the "master" nick, the account data of the master is used, and any channel
access lists the two nicks were on are merged, if the nicks are both on the
same channel access list the higher role is selected
  * You may select a different "master" nickname from a list of your linked
nicks that will be used when showing information about your account.
 * Account access lists are now implemented. These are a list of host masks you
may sign in from, or be automatically identified from.
  * Note: not all services functions may be allowed without first being
identified via your password
 * Password Identification: you can now optionally supply a nickname to the
`/msg nickserv identify` command and be automatically /nick'd to that name if
your authentication is successful
 * Regain: If your nickname is being held by services (eg: if it was recently
enforced) you can `/msg nickserv regain nickname` to be changed to that nick.
You need to be already identified as the account or specify the password
 * Automatic Identification: you can now also identify with NickServ on connect
using SSL connections and client certificates. For more information about this
feature please look at [NickServ/CertFP](/NickServ/CertFP).

### ChanServ ###

 * The most significant change is the revamping of channel access levels.
Instead of levels being defined and assigned by numerical values, there are
now 3 basic roles a user can be assigned. Levels are assigned based on accounts
not on nicks, any linked nick assigned to an access list will allow any other
similarly linked nick the same access.
  * MASTER - replaces FOUNDER/SUCCESSOR in our previous suite of services, a
user with this role will be allowed full control and management of a channel
  * CHANOP - allows a user to OP/DEOP as well as manage the AKICK list
  * MEMBER - allows a user to be recognized as a member of the channel. Such
users can use `/msg chanserv invite` to gain access to an invite only channel,
and to see channel settings but not to modify them
  * In the database migration any user with a level greater than 5 is set to
CHANOP, less than 5 they're assigned MEMBER, and only the FOUNDER/SUCCESSOR
nick is assigned MASTER level. If you've had other users with those access
levels, you'll need to change their level to MASTER
 * Channel registrations no longer require passwords. Channel passwords from
previous services have no meaning

### FloodServ ###

 * The means by which FloodServ monitors and enforces has completely changed.
While there are no knobs for you to tweak, it's a slightly nicer operation,
issuing a +q (quiet) on a particular offending hostmask in a channel. Please
note that a network flood will still result in an AKILL

### MemoServ ###

 * No longer exists, this feature was rarely used under our old set of services.
If you're looking to retrieve any data from it you may email support@oftc.net
