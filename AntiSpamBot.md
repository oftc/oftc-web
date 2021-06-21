---
layout: master
title: Anti-Spam Bot
---

# What is AntiSpamBot? Why am I voiced? What's going on?

As an anti-spam measure, a channel that you are in has decided to configure
itself such that new people are unable to talk. A bot saw your messages,
determined it probably isn't the below-described spam, gave you the ability to
speak, and restated your message so the rest of the channel can see it.

**Regular users**:
There is nothing you need to do. You might want to register your nick if you
want to stick around on OFTC for a while, but otherwise you're fine. Ask in
#oftc if you need help registering your nick.

**Channel operators**:
If you would like the bot in your channel, or would like it to leave your
channel, tell us in #oftc. Read the next couple of sections for more
information.


## How does the bot work?

The bot ops itself in all its channels. Then it sets the channel modes `+M` and
`+z`.  This means unidentified nicks are muted, but instead of being totally
muted, their messages go to ops instead. See <https://oftc.net/ChannelModes/> for
more information.

*Identified nicks are unaffected and can speak freely.*

The bot checks the first message that unidentified nicks send. If it looks like
spam, it k-lines the nick's host. The channel (except for its ops) does not see
the spam message.  If the message does *not* look like spam, it voices (`+v`) the
nick and restates the message so that everyone in the channel can see it.

## Who runs the bot?

Pastly, an OFTC network operator, runs the bot. Other OFTC staff members can
also control it. Ask in #oftc if you would like the bot to join (or leave) your
channel.

## What other solutions exist?

Reference <https://oftc.net/ChannelModes/>.

`+R` perfectly stops the spam, as it is. Unidentified nicks also can't join your
channel, however.

`+m` perfectly works, but it's up to your ops to voice people so they can talk
;).

`+i` perfectly works, but you need to keep inviting people, of course.

`+Mz` works okay, and is what this bot does, as long as your ops voice people as
needed.

`+s` seems to work after a while, as the spambots seem to refresh their list of
channels periodically and `+s` makes the channel hidden.

## What does the spam look like? Why is it happening?

Freenode, another IRC network like OFTC, is imploding. For information on that,
see:

- <https://anarc.at/blog/2021-05-24-leaving-freenode/>
- <https://www.kline.sh/>
- <https://fuchsnet.ch/freenode-resign-letter.txt>
- <https://www.devever.net/~hl/freenode_suicide>

The original freenode staff have created and moved to libera.chat, and most
freenode users have followed. <https://isfreenodedeadyet.com/>

Someone(s) is capitalizing on this drama to spam as many channels on as many
IRC networks as possible. Their motivation is unknown, but it's probably to
make libera staff look bad.

The spam looked like this for a few weeks (multiple lines w/additional text):

   THІЅ  ⅭHᎪⲚΝΕL  ΗᎪS  ᎷОVΕD  ТO  IRⲤ.ⅬⅠΒEᏒA.CHAᎢ  #HAΜᏒΑⅮΙⲞ

And we're starting to see spam like this now too:

   YOUR SHIT CHATS MAKE ME SO MAD I PUNCH HOLES IN MY WALL!!! THATS Y I MOVED 2 IRC.LIBERA.CHAT #MIDIPIX (imgur link redacted)

## Is the spam still happening?

As of June 21st, 2021, it seems to be done for now. AntiSpamBot is offline
until needed again.
