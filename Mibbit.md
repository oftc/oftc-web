---
layout: master
title: Mibbit
---
## Mibbit ##

### Background ###

It was becoming increasingly difficult for OFTC to provide a quality experience
for those using Mibbit, as abuse by a single user would often lead to an outage
for significant swaths of Mibbit users. Simultaneously Mibbit wasn't able to
keep up with the block list for preventing tor exit nodes from using their
service, which compounded the outages Mibbit users would experience.

### The Core Problem ###

OFTC needed a mechanism to cut down on abuse to provide a quality experience
for everyone else using OFTC legitimately. Mibbit wanted us to enable the
WEBIRC command for their exit nodes. This would have required OFTC to give Mibbit
a free pass to tell us how someone is connecting to OFTC via Mibbit. This was
not a satisfactory solution, and for a few years we've discussed among ourselves
and with Mibbit alternative solutions.

### Our Solution ###

OFTC finally arrived at a solution that we thought was a workable for everyone.
OFTC would enable a socket.io listener on its servers exposing raw IRC to web
clients, removing the middle man between consumers of web clients and OFTC
itself. The down side of this would require some engineering work to be done on
Mibbits end. On the plus side, anyone and everyone can create the web UI that
they prefer without having to provide a server side mechanism to connect to
OFTC, or without having to get permission beforehand.

#### The Client ####

Users are not necessarily forced to use our [WebChat](/Webchat) -- there's just
no other web client available currently. We would sincerely welcome additional clients,
as this is undoubtly the way forward with regards to web applications, and it 
would help strengthen the adaptation of the technology throughout the IRC networks.

### The Consequences ###

The decision to ban Mibbit exit nodes was not taken lightly, and wasn't
unilateral. We communicated with Mibbit our intentions, and negotiated a date
that would provide them time to do the engineering work for a seamless
experience for its users. That date came and went, and Mibbit had not done the
work to move to the new system.

### For the Future ###

We hope that Mibbit will one day do the work required to once again be able to
provide access to OFTC.
