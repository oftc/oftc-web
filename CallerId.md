---
layout: master
title: CallerId
---

## CallerID

CallerID is a powerful feature to ignore private message from people you did not
explicitly allow to do so.

 * You need to set /umode +g to enable this mode
 * You need to /ACCEPT <nick> people you want to be able to privately message you
 * If someone messages you and (s)he is not your ignorelist, (s)he AND you will get a short notice saying that you are +g
 * You will get this message per source only once every 60 seconds when the accepted user quits, you quit, in a netsplit or the accepted users changes his nick, his ACCEPT will be invalidated
 * To view your accept list, issue /ACCEPT *
 * To remove a user, issue /ACCEPT -<nick>
