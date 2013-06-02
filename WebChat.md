---
layout: master
title: WebChat
---
## WebChat ##

We provide a web interface for chatting on our network, it can be accessed via
[http://webchat.oftc.net](http://webchat.oftc.net) or
[https://webchat.oftc.net](https://webchat.oftc.net) and is a slightly modified
version of [qwebirc](http://qwebirc.org).

`webchat.oftc.net` only serves static files and requires your browser have
javascript enabled. This particular client will use
[socket.io](http://socket.io) to connect to
[https://webirc.oftc.net:8443](https://webirc.oftc.net:8443) (only
via SSL) and alternate ports will be coming as soon as we can agree on them.

## WebIRC ##

`webirc.oftc.net` is a very thin proxy run directly on our servers which has the
following benefits:

 * No unnecessary third parties between you and OFTC.
 * Your communication with OFTC is always encrypted.
  - Soon you'll be able to identify with services by installing a client
certificate in your browser (see [NickServ/CertFP](/NickServ/CertFP))
 * Speaks raw IRC to your browser (negotiated by socket.io) so you're free to
write your own client.
 * Your IP will appear on the network, and not the IP of the web server that
hosts the client software.
  - Allows OFTC and Channels to better manage themselves.
  - Keeps you from being stuck into strict connection limits.

[Here](/webirc.pem) is the certificate used for `webirc` it is issued by startssl
and should be accepted by most modern browsers.

{% highlight text %}
-----BEGIN CERTIFICATE-----
MIIHUzCCBjugAwIBAgIDCcShMA0GCSqGSIb3DQEBBQUAMIGMMQswCQYDVQQGEwJJ
TDEWMBQGA1UEChMNU3RhcnRDb20gTHRkLjErMCkGA1UECxMiU2VjdXJlIERpZ2l0
YWwgQ2VydGlmaWNhdGUgU2lnbmluZzE4MDYGA1UEAxMvU3RhcnRDb20gQ2xhc3Mg
MSBQcmltYXJ5IEludGVybWVkaWF0ZSBTZXJ2ZXIgQ0EwHhcNMTMwMzMwMTgzNjI0
WhcNMTQwNDAxMTQyNzMzWjBpMRkwFwYDVQQNExBzUzI4S1drOVVXTlY4ZDhxMQsw
CQYDVQQGEwJERTEYMBYGA1UEAxMPd2ViaXJjLm9mdGMubmV0MSUwIwYJKoZIhvcN
AQkBFhZob3N0bWFzdGVyQHNwaS1pbmMub3JnMIICIjANBgkqhkiG9w0BAQEFAAOC
Ag8AMIICCgKCAgEAzPf5E2Ux+PcgILw73Jyan2B9kXc+Y0vXVI42XXJbyatJV5CS
hPT2RFER7JsK3GoI631uoe4kkNIsvWhtAheb02dYOKS+nkSOB+gUW56X9Ae+zZXS
phvdBhzhVe5AUeRn+Erlv23zUDunZ0gqjNJS4W+cs8thMSiX915lc20BOf1mLpkw
Gxu43jg2/Hw3Em22TSnzyjKV5znPeV4UYLd8lsP3LmPgRVEejQxEuON8D5VwQuDm
3/PscbtDPnSlfWOu6/05GUR2KoO3uz8eZ6dUZzzJc8wkxj6JiY04avt5KgximO3K
n/ipFsTrbNnbwkGVTvmkzf1cqnh/Os0x+ihDQ9svamLwUJNturjDnsvOPzonRaMf
oqXIDsfdybG51tSrbkAxju90EXFluytsEEsoGUtFCRVkFhGh1yeqLZ6XhwYAZbTk
BHxEVzONpHeWy2mFy9wtzEYDvbvnXsFwGjy9lt6X6x3sPZuAymHUv/4yzaMFFUFS
yJQjSxVzdNBLqptEFqcmuYEcQZQRNmXGFK4I+CbG1ujcZykij0ESfQIoapMcXnoO
KaBK4dHGQgGJQhHxblUhMo7xhGLaYxLGy8KxRzg+ZSzNcXhRhpYo8DyQyTjBxN6G
lIP8W4YBaIqQDS0kKLU9sGAzL4aUHo2kloqDbrRMsYZDiIQ/W4pEkA70XekCAwEA
AaOCAt4wggLaMAkGA1UdEwQCMAAwCwYDVR0PBAQDAgOoMBMGA1UdJQQMMAoGCCsG
AQUFBwMBMB0GA1UdDgQWBBQSO71L5tScKBynFYVQvkYrx598ujAfBgNVHSMEGDAW
gBTrQjTQmLCrn/Qbawj3zGQu7w4sRTAkBgNVHREEHTAbgg93ZWJpcmMub2Z0Yy5u
ZXSCCG9mdGMubmV0MIIBVgYDVR0gBIIBTTCCAUkwCAYGZ4EMAQIBMIIBOwYLKwYB
BAGBtTcBAgMwggEqMC4GCCsGAQUFBwIBFiJodHRwOi8vd3d3LnN0YXJ0c3NsLmNv
bS9wb2xpY3kucGRmMIH3BggrBgEFBQcCAjCB6jAnFiBTdGFydENvbSBDZXJ0aWZp
Y2F0aW9uIEF1dGhvcml0eTADAgEBGoG+VGhpcyBjZXJ0aWZpY2F0ZSB3YXMgaXNz
dWVkIGFjY29yZGluZyB0byB0aGUgQ2xhc3MgMSBWYWxpZGF0aW9uIHJlcXVpcmVt
ZW50cyBvZiB0aGUgU3RhcnRDb20gQ0EgcG9saWN5LCByZWxpYW5jZSBvbmx5IGZv
ciB0aGUgaW50ZW5kZWQgcHVycG9zZSBpbiBjb21wbGlhbmNlIG9mIHRoZSByZWx5
aW5nIHBhcnR5IG9ibGlnYXRpb25zLjA1BgNVHR8ELjAsMCqgKKAmhiRodHRwOi8v
Y3JsLnN0YXJ0c3NsLmNvbS9jcnQxLWNybC5jcmwwgY4GCCsGAQUFBwEBBIGBMH8w
OQYIKwYBBQUHMAGGLWh0dHA6Ly9vY3NwLnN0YXJ0c3NsLmNvbS9zdWIvY2xhc3Mx
L3NlcnZlci9jYTBCBggrBgEFBQcwAoY2aHR0cDovL2FpYS5zdGFydHNzbC5jb20v
Y2VydHMvc3ViLmNsYXNzMS5zZXJ2ZXIuY2EuY3J0MCMGA1UdEgQcMBqGGGh0dHA6
Ly93d3cuc3RhcnRzc2wuY29tLzANBgkqhkiG9w0BAQUFAAOCAQEAlRK4NHzBAttl
DTQvT/un8vCTSrLcyTnreErT1DnCeeA9yP+gCvuEfdCPOA3Gmb5bTOxKSy9pt9++
srUWGvVIgjg24Dj4EYLJ7VzG+nzsx9rHhXh0eKbkpw6PaWYxyA4gHWH4O1FlVBv6
hoqN0K4MF0eXhrqVvoGcYs5T3Wwj6uwt7jshoTgUDe9oGKSqJk2tajWpOYY7HYLK
VOal1bTh35L0fg5yvsfWv8nWuPkI7xBO5i/aDU2y8yBgzPiHw9p+1AGtEYtERAc1
h2sKECVH08PCdFNe/NW2S6HxOh1TasZGRaqQbrKtE/XxrI+s0yHNkcuagkDSzEK2
q7djVNwWlg==
-----END CERTIFICATE-----
{% endhighlight %}

## Alternate Clients ##

Users are free to implement their own web client that connects to
`webirc.oftc.net` with socket.io to port 8443. Alternate clients do not need to
be hosted on `oftc.net` to allow connections, our usage of socket.io means that
if the client supports websockets or jsonp they can use cross domain
communication.

***There may come a time when OFTC needs to implement some form of "human
detection", if that time comes alternative clients will need to make sure their
clients support that mechanism.***

## List of Alternate Clients ##

There are no known alternate clients at this time.

