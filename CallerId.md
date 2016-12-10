---
layout: master
title: CallerId
---

## CallerID

CallerID is a powerful feature to ignore private message from people you did not
explicitly allow to do so.

 * You need to set /umode +g (or +G) to enable this mode
 * You need to /ACCEPT \<nick> people you want to be able to privately message
   you
 * If someone messages you and (s)he is not your ignorelist, (s)he AND you will
   get a short notice saying that you are +g
 * You will get this message only once every 60 seconds
 * When the accepted user quits, you quit, you're separated by a netsplit, or
   the accepted user changes his nick, the ACCEPT will be invalidated
 * To view your accept list, issue /ACCEPT \*
 * To remove a user, issue /ACCEPT -\<nick>

The difference between +g and +G is that +G always lets private messages
through if the sender and the recipient share a channel. If both +g and +G are
set, +G takes precedence.
