---
layout: master
title: NickServ/CertFP
---
* TOC
{:toc}

# Automatically Identifying Using SSL + CertFP #

This page describes how to use SSL with a certificate fingerprint to
automatically identify your registered nickname with NickServ on connect. You
must have an IRC client that supports SSL with a client certificate.

## Creating a Self-signed Certificate ##

First you need generate a self-signed certificate.  We will be using OpenSSL
which should be available on most Linux and BSD distributions. There are ports
for other platforms including Windows.

### Generate the Key and Certificate ###

We need to generate our certificate and key. We'll use the **openssl** command
with the 'req' option.

{% highlight text %}
% openssl req -nodes -newkey rsa:2048 -keyout nick.key -x509 -days 3650 -out nick.cer
Generating a 2048 bit RSA private key
writing new private key to 'nick.key'
-----
Country Name (2 letter code) [US]:YOURCOUNTRYCODE
State or Province Name (full name) [Texas]:YOURSTATE
Locality Name (eg, city) [San Antonio]:YOURCITY
Organization Name (eg, company) [Stealth3]:YOURTEXTHERE
Organizational Unit Name (eg, section) [ISP]:IRC
Common Name (eg, YOUR name) []:YOUR NAME
Email Address []:YOURMAIL@ADDRESS
{% endhighlight %}

The fields you are asked to fill out here do not matter for connecting to OFTC
so fill them out however you wish. (You can use other key sizes if you want, but
the hash algorithm needs to be SHA-1.) You now have two files, the key in
**nick.key** and the certificate in **nick.cer**. Remember to protect your key
using chmod.

{% highlight text %}
% chmod 400 nick.key
{% endhighlight %}

If you are curious, you can have a closer look at your cert. We are mainly
interested in the certificate fingerprint (CertFP). (This is not a required
step, there are other ways to get the fingerprint.)

{% highlight text %}
% openssl x509 -noout -fingerprint -text < nick.cer
{% endhighlight %}

We now combine certificate and key to a single file **nick.pem** (Remember to
also protect this file because it now includes your private key!):

{% highlight text %}
% cat nick.cer nick.key > nick.pem
% chmod 400 nick.pem
{% endhighlight %}

## Connecting to OFTC with your Cert ##

### Unlisted Clients ###

If you are using a client that is not listed here feel free to submit a
step-by-step howto about it, and we will include it. Either grab a staff member
from #oftc or send a mail to our support address support@oftc.net  with the
information needed. Thank you.

### irssi ###

Move the certificates you created some where safe, for example ~/.irssi/certs.

{% highlight text %}
% mkdir ~/.irssi/certs
% mv nick.{key,cer,pem} ~/.irssi/certs
{% endhighlight %}

Grab the root certificate from SPI to verify the OFTC irc servers.

{% highlight text %}
% wget http://www.spi-inc.org/ca/spi-cacert.crt -O ~/.irssi/certs/spi.pem
% ln -s spi.pem ~/.irssi/certs/CAs.pem
{% endhighlight %}

Now remove the current server and re-add it with the **SSL** flag, using your
newly generated certificate. Note that we use the SSL port **6697** to connect.

{% highlight text %}
/server remove irc.oftc.net
/network add OFTC
/server add -auto -ssl -ssl_cert ~/.irssi/certs/nick.pem -ssl_cafile ~/.irssi/certs/CAs.pem -ssl_verify -network OFTC irc.oftc.net 6697
{% endhighlight %}

Next we need to disconnect and connect back to the server. (A /reconnect does
**not** read the new settings we added.)

{% highlight text %}
/disconnect OFTC
/connect OFTC
{% endhighlight %}

To continue please scroll down to [read how to add your certificates fingerprint
to NickServ.](#AddCertFPtoNS)

### XChat 2.8 ###

**XChat supports SSLv3 only, which is not a modern crypto standard anymore.
To connect to OFTC, [XChat must be patched](http://sources.debian.net/src/xchat/2.8.8-7.3/debian/patches/68_dont_force_sslv3.patch/). A suggested alternative client is hexchat.**

This is known to work with XChat 2.8.x. It does **NOT** work with prior
versions!

Copy the nick.pem file to your .xchat2 directory. The filename must be
`<network>.pem`.  In our case this should be **OFTC.pem**. On Windows, the
directory is something like C:\Documents and Settings\(user)\Application
Data\X-Chat 2.

{% highlight text %}
% cp nick.pem ~/.xchat2/OFTC.pem
{% endhighlight %}

Now start up XChat.

We need to tell XChat to connect via SSL to OFTC.

 1. Go to XChat menu and select Network list/.
 1. Find OFTC in the list of networks and select edit.
 1. Check mark 'Use SSL for all the servers on this
network' and 'Accept invalid SSL certificate'.
 1. Click 'Close' and then click 'Connect'.

![xchat](../xchat-settings-1.png)

*Note:* Optionally, we can install SPI's root certificates as a trusted source.
On Debian or Ubuntu this is as simple as 'sudo apt-get install ca-certificates'.
For other OS/distributions get
[http://www.spi-inc.org/ca/spi-cacert.crt](http://www.spi-inc.org/ca/spi-cacert.crt).

To continue please scroll down to [read how to add your certificates fingerprint
to NickServ.](#AddCertFPtoNS)

### KvIRC ###

 1. Go to "Settings -> Configure KvIRC"
 1. Go to "Connection->advanced"
 1. On the Tab "SSL" check 'Use ssl certificate' and 'Use SSL private key' and
point both to the nick.pem file you created.
 1. Change your connection settings and enable the ssl option. Also make sure
it is set to connect to port 6697.

To continue please scroll down to [read how to add your certificates fingerprint
to NickServ.](#AddCertFPtoNS)

### mIRC (version 6.14 and later) ###

You need the OpenSSL DLL files to enable SSL functionality in mIRC. You can
download them pre-compiled or compile your own. You will need libeay32.dll and
ssleay32.dll of OpenSSL 0.9.7d (or newer), and possibly msvcr70d.dll as well.
They must be downloaded and placed in the mIRC folder, or in the Windows system
folder. OpenSSL source is available from http://www.openssl.org/, you may find
links to pre-compiled DLL files at http://www.openssl.org/related/binaries.html.

If mIRC was already running you need to restart it or it wont know about them.

 1. Go Main Options Menu -> Connect -> Options
 1. Click on the newly appeared SSL button (if it isn't there something is
wrong with your OpenSSL installation)
 1. Click on the empty box below 'Private Key File', navigate to where you
placed your nick.pem file and select it.
 1. Do the same for 'Certificate Chain File'

![mirc](../mirc-ssl.png)

 1. Make sure to connect to the network over SSL. This can be done simply now
that you have the required DLLs. The command is '/server irc.oftc.net +6697' -
note the plus sign before the port number. This is what sets mIRC to connect
over SSL. To save this server with the SSL settings, you can simply add the plus
sign before the port number in mIRC's server manager.

To continue please scroll down to [read how to add your certificates fingerprint
to NickServ.](#AddCertFPtoNS)

### ChatZilla ###

 1. Convert the key to pkcs12: openssl pkcs12 -export -out nick.pfx -in nick.pem
 1. Go to the Certificate Manager. You should find that in the Preferences,
Advanced Options, Encryption. Select 'View Certificates' and there you can
import the nick.pfx you just generated
 1. Now connect to OFTC using SSL and Chat****Zilla asks if you want to use the
certificate for authentication. Say yes. (Note that you will have to confirm
sending the certificate once for every server you connect to. As irc.oftc.net is
a rotation it might ask you later again, don't be surprised).

To continue please scroll down to [read how to add your certificates fingerprint
to NickServ.](#AddCertFPtoNS)

### ZNC ###

 1. Follow the instructions found on http://en.znc.in/wiki/Cert
  * This should not be confused with http://en.znc.in/wiki/Certauth which is
used to authenticate your remote client to your instance of znc. You're trying
to authenticate your znc instance with OFTC.

To continue please scroll down to [read how to add your certificates fingerprint
to NickServ.](#AddCertFPtoNS)

### Quassel ###

Quassel settings are stored in ~/.config/quassel-irc.org/ so we can make the
certs in ~/.config/quassel-irc.org/certs/ .

In the “Settings -> Configure Quassel “ menu, the “Identities” section,
“Advanced” tab contains the interface to indicate the certificate.

 1. Load the key (~/.config/quassel-irc.org/certs/mynick.key)
 1. Load the certificate (~/.config/quassel-irc.org/certs/mynick.pem)
 1. Click OK and re-connect to the network.

![quassel](../quassel-identities.png)

You (obviously) need to be using an SSL port for this to work.
http://bugs.quassel-irc.org/projects/1/wiki#IRC-Configuration has some detail on
server settings interface.

To continue please scroll down to [read how to add your certificates fingerprint
to NickServ.](#AddCertFPtoNS)

### Emacs/ERC ###

Get the root certificate from SPI and move it to a safe place, for example
~/.ssl. 

{% highlight text %}
% mkdir ~/.ssl/certs
% wget http://www.spi-inc.org/ca/spi-cacert.crt -O ~/.ssl/spi_ca.pem
{% endhighlight %}

Do the same with the certificate you created.

{% highlight text %}
% mv nick.pem ~/.ssl/
{% endhighlight %}

Now start up Emacs and customize the tls-program variable (e.g. by calling "M-x
customize-variable" and entering "tls-program").

In order to connect with gnutls-cli, add the following entry:

{% highlight text %}
gnutls-cli --priority SECURE256 --x509cafile ~/.ssl/spi_ca.pem --x509certfile ~/.ssl/erc_nick.pem -p %p %h
{% endhighlight %}

In order to connect with openssl, add the following entry:

{% highlight text %}
openssl s_client -connect %h:%p -no_ssl2 -ign_eof -CAfile ~/.ssl/spi_ca.pem -cert ~/.ssl/erc_nick.pem 
{% endhighlight %}

Then call "M-x erc-tls" and connect to irc.oftc.net, port 6697.

More info on using SSL in ERC can be found at [the
EmacsWiki](http://www.emacswiki.org/emacs/ErcSSL).

To continue please scroll down to [read how to add your certificates fingerprint
to NickServ.](#AddCertFPtoNS)

### weechat

Move the certificates you created some where safe, for example ~/.weechat/certs.

{% highlight text %}
% mkdir ~/.weechat/certs
% mv nick.{key,cer,pem} ~/.weechat/certs
{% endhighlight %}
Grab the root certificate from SPI to verify the OFTC irc servers.

{% highlight text %}
% wget http://www.spi-inc.org/ca/spi-cacert.crt -O ~/.weechat/certs/spi.pem
% ln -s spi.pem ~/.weechat/certs/CAs.pem
{% endhighlight %}

Now disconnect and remove the current server. Re-add it with the SSL flag, using
your newly generated certificate. Note that we use the SSL port 6697 to connect.

{% highlight text %}
/disconnect OFTC
/server del OFTC
/server add OFTC irc.oftc.net/6697 -ssl -ssl_verify -autoconnect
/set irc.server.OFTC.ssl_cert %h/certs/nick.pem
{% endhighlight %}

You may need to set the *weechat.network.gnutls_ca_file* variable.
On Debian/Ubuntu you can alternatively move *spi-cacert.crt* to
*/usr/local/share/ca-certificates/* and run the *update-ca-certificates*
command as root.

Now connect back to the server.

`/connect OFTC`

To continue please scroll down to [read how to add your certificates fingerprint
to NickServ.](#AddCertFPtoNS)

### Thunderbird

Convert the key to pkcs12:

{% highlight text %}
openssl pkcs12 -export -out nick.p12 -in nick.pem -name "nick CertFP"
{% endhighlight %}

Go to the Certificate Manager. You should find that in Edit,
Preferences, Advanced, Certificates. Select ‘View Certificates’ and
there you can import the nick.p12 you just generated.

Now connect to OFTC using SSL and Thunderbirds asks, if you want to
use the certificate for authentication. Say yes. (Note that you will
have to confirm sending the certificate once for every server you
connect to. As irc.oftc.net is a rotation it might ask you later again,
don't be surprised.)

To continue please scroll down to [read how to add your certificates fingerprint
to NickServ.](#AddCertFPtoNS)

<a id="AddCertFPtoNS"></a>

## Add your Certificate Fingerprint to your Nick in NickServ ##

If you did everything right you are now using SSL to connect and should see
lines similar to the following in your server window. This will most likely be
above the motd so you may have to scroll up a bit to see it.

{% highlight text %}
11:09 !larich.oftc.net *** Connected securely via TLSv1 AES256-SHA-256
11:09 !larich.oftc.net *** Your client certificate fingerprint is: C77106576ABF7F9F90CCA0F63874A60F2E40A64B
{% endhighlight %}

This tells us that we are now connected via SSL and that our certificate is
working.

To allow NickServ to identify you based on this certificate you need to
associate the certificate fingerprint with your nick. To do this issue the
command **cert add** to Nickserv (try /msg nickserv help cert). Please note you
must be **identified** for this command to work (/msg nickserv identify).

{% highlight text %}
/msg nickserv cert add
11:14 -NickServ(services@services.oftc.net)- CERT list entry C77106576ABF7F9F90CCA0F63874A60F2E40A64B added.
{% endhighlight %}

Nickserv will message back saying that the CertFP was added.  Now the only thing
left to do is reconnect to the server to test it out.

{% highlight text %}
/reconnect
11:15 -!- Irssi: Disconnecting from server irc.oftc.net: [Reconnecting]
11:15 -!- Irssi: Connecting to irc.oftc.net [IP ADDRESS] port 6697
11:15 !larich.oftc.net *** Connected securely via TLSv1 AES256-SHA-256
11:15 !larich.oftc.net *** Your client certificate fingerprint is: C77106576ABF7F9F90CCA0F63874A60F2E40A64B
...
11:15 -NickServ(services@services.oftc.net)- You are connected using SSL and have provided a matching client certificate
11:15 -NickServ(services@services.oftc.net)- for nickname jmoocows. You have been automatically identified.
11:15 -!- Mode change [+R] for user jmoocows
{% endhighlight %}

**Congratulations!** You now have automatic identification via SSL and
certificate fingerprints!

## Benefits ##

You may ask yourself what this gets you now. Well, the answer is simple - you
can drop any nickserv identify script you have run in the past. As you are
identified with your certificate fingerprint you don't need them anymore. And by
using SSL, your connection to the irc server is now encrypted.

The servers also use encryption for the server<->server traffic, so if you and
those you chat with both use ssl encrypted connections - then the whole traffic
between you and them is encrypted.

## Questions ##

Ask on #oftc or mail support@oftc.net .

### irssi does not join some channels on connect ###

If you find that irssi does not auto-join channels on connect which want you to
be identified before you are joining, add **-autosendcmd "wait -oftc 2000"** to
your irssi network settings. This makes irssi wait 2 seconds before any further
action, giving services time to identify you.

{% highlight text %}
% /network add -autosendcmd "wait -oftc 2000" OFTC
{% endhighlight %}

(In case you are wondering "/network add" is irssi's way of modifying existing
networks. /network was called /ircnet in older irssi versions.)

### Expired SSL certificates ###

Client certificates need to be valid. This ensures that user certificates remain
reasonably cryptographically strong. If you encounter problems connecting with
SSL, ensure that your system's real-time clock is set properly, that your
certificate issue date is in the past and that your certificate has not expired.

### Last time I tried ssl connection to an IRC network I experienced a huge lag, is that still to be expected? ###

No. In the early days of supporting ssl connections there were a few problems,
as always when you implement new features. Nowadays, ssl support is very stable
and reliable.  You wont see any difference to a connection without ssl (except
having an encrypted connection, of course). All the network operators and lots
of other people are using SSL connections to OFTC as their only way to access
the network.

