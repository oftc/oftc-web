---
layout: master
title: CallerId
---

## CallerID

CallerID is a powerful feature to ignore private message from people you did not
explicitly allow to do so.

 * You need to set **/umode +g**, **+G**, or **+j** to enable this [mode](/UserModes)
   * **+g** is the strictest mode, all private messages need to be whitelisted
   * **+G** additionally lets private messages through if the sender and the recipient share a channel. +G taks precedence over +g
   * **+j** additionally lets private messages through if the sender is registered with [NickServ](/NickServ). If the user has +Gj set, they can only receive messages from registered users who also share a channel
 * If someone messages you and (s)he is not your ignorelist, (s)he AND you will
   get a short notice saying that you are +g.
   You will get this message only once every 60 seconds
 * Use **/ACCEPT \<nick>** to allow people to privately message you
 * To remove a user, issue **/ACCEPT -\<nick>**
 * To view your accept list, issue /ACCEPT \*
 * When the accepted user quits, you quit, you are separated by a netsplit, or
   the accepted user changes his nick, the ACCEPT will be invalidated
