---
layout: master
title: CodingProjects
---
OFTC currently develops 3 projects for its purposes: [oftc-hybrid](#oftc-hybrid) our IRC daemon, [oftc-ircservices](#oftc-ircservices) our IRC services suite, and [oftcdns](#oftcdns) a geoip dns responder to handle user distribution across our servers. OFTC uses [GitHub](https://github.com) for its source browsing and bug tracking, please see the section below for the url of the project you're interested in. You can find tarball releases of our projects at http://www.oftc.net/releases/.  Developers contributing to our code base should read and be familiar with [Subversion](Subversion).

Projects:

 * [IRCd](#oftc-hybrid)
 * [Services](#oftc-ircservices)
 * [DNS](#oftcdns)

<a id="oftc-hybrid"></a>
## IRCd ##

OFTC uses a modified [hybrid](http://www.ircd-hybrid.org) code base for its IRCd. In the repository, /trunk is where the next version of oftc-hybrid is being developed.  The version that is currently in use on the OFTC network can be found in /branches/oftc-hybrid-1.6. Please submit feature requests and bug reports to the github project. You can find our current goals for IRCd at [CodingPlan](CodingPlan).

 * browse source, submit, and view bugs https://github.com/oftc/oftc-hybrid
 * anonymous access: git clone git://github.com/oftc/oftc-hybrid.git
 * developer access: git clone ssh://git@git.oftc.net/oftc-hybrid.git

<a id="oftc-ircservices"></a>
## Services ##

OFTC created a new suite of services based on the core of [hybrid](http://www.ircd-hybrid.org) to ease integration into our network. In the repository, /trunk tracks our new features, while /branches/oftc-ircservices-1.5 tracks our current version linked into the network. Please submit feature requests and bug reports to the github project. You can find our current goals for services at [ServicesPlan](ServicesPlan).

 * browse source, submit, and view bugs https://github.com/oftc/oftc-ircservices
 * anonymous access: git clone git://github.com/oftc/oftc-ircservices.git
 * developer access: git clone ssh://git@git.oftc.net/oftc-ircservices.git

<a id="oftcdns"/></a>
## DNS ##

OFTC uses a system based on python and twistd-names to manage even distribution among its IRC network based on geoip location and server and network statistics. Please submit feature requests and bug reports to the github project.

 * browse source, submit, and view bugs https://github.com/oftc/oftc-tools
 * anonymous access: git clone git://github.com/oftc/oftc-tools.git
 * developer access: git clone ssh://git@git.oftc.net/oftc-tools.git

