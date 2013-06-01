---
layout: master
title: GroupServ
---
* TOC
{:toc}

# GroupServ #

The latest upgrade of network services has introduced GroupServ. 

GroupServ is a services pseudo-client which allows projects using the network to
register their group with network services. Registering a group allows projects
to join together one or more nicknames, groups can then be added to channel
access lists. A group has a name, a description, a registration date, a privacy
setting, a list of administrators, and a list of members. A group name starts
with an @ ("AT") character to distinguish it from nicknames. The lists of
administrators and members can contain accounts (nicknames).

In particular, using GroupServ allows everybody to create and administer, or
drop a group, list non-private groups, query information about a group

## Register a group ##

Use the command `/msg GroupServ REGISTER @<groupname> <description>` to
register a group. Please use common sense when registering a group, for example
if channel `#oftc` wanted to register a group, they would register
`@oftc`, or `@oftc-users`.

## Configure a group ##

### URL ###

Sets the URL field on a group for display purposes only. The URL address is
shown in the INFO command. Use the command `/msg GroupServ SET @<groupname>
URL <url>` to set the URL field, or `/msg GroupServ SET @<groupname> URL
-` to clear the URL field.

### E-mail ###

Sets the e-mail field on a group for display purposes only. The e-mail address
is shown in the INFO command if PRIVATE is not set. Use the command `/msg
GroupServ SET @<groupname> EMAIL <email>` to set the e-mail field.

### Private ###

Sets the private flag on a group which prevents an e-mail address being shown in
an INFO request, and also prevents a group showing in a LIST. Use the command
`/msg GroupServ SET @<groupname> PRIVATE ON|OFF` to enable or disable this
option.

## View group information ##

Use the command `/msg GroupServ INFO @<groupname>` to get information on a
group. GroupServ will then echo all information that services know about that
group, excluding e-mail addresses for private groups.

## List groups ##

Use the command `/msg GroupServ LIST <pattern>` to list registered groups
that match a specified pattern. For example if you wanted to list all groups
that contained the word `oftc` then use `/msg GroupServ LIST *oftc*`.
Results are limited to 50 matches, so try to be specific with a pattern. Groups
that have the private flag enabled will not be listed.

## Drop a group ##

To delete a group use the command `/msg GroupServ DROP @<groupname>`.
Deleting a group cannot be undone and is the only method of allowing other users
to make use of it, or register it for their use.

# Support #

For support regarding group services please join `#oftc`.
