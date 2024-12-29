---
layout: master
title: Staff
---
* toc
{:toc}

# Who are the OFTC Staff?

The Network Staff are responsible for the maintenance and well-being of the
Network and its users.

When connected to our IRC network, staff are identifiable by their
[cloaked](/UserCloaks) hostmasks: `<nickname>.<role>.oftc.net`.

Staff are assigned to their roles during annual staff-wide 
[elections](/ElectionResults/) from the 8th to the 11th of every October. 
Between elections, staff may be promoted, demoted, added, or removed by the
Network Operations Committee, as outlined in the Network's
[Constitution](/constitution). The constitution also outlines the
responsibilities of each staff role, and defines the rules for our elections. 

OFTC's constitution is enforced by resolution
[2002-07-02.iwj.5](http://www.spi-inc.org/corporate/resolutions/2002/2002-07-02.iwj.5/)
of [Software in the Public Interest's](http://www.spi-inc.org/) Board of
Directors.

If you would like to join our staff or sponsor a server, please refer to our
[Application](/Application) and send it via mail.

## Staff roles

These are the people you should seek for assistance.

### Network Operations Committee Chair

{% assign chair = site.data.staff | where: "roles.chair", true | first %}
{% if chair.size == 0 %}
 * No current Chair{% else %}
{% if chair %}
 * {{ chair.name }} ({{ chair.nick }}) <chair -at- oftc.net>{% endif %}{% endif %}

### Ombudsman

{% assign ombudsman = site.data.staff | where: "roles.ombudsman", true | first %}
{% if ombudsman.size == 0 %}
 * No current Ombudsman{% else %}
{% if ombudsman %}
 * {{ ombudsman.name }} ({{ ombudsman.nick }}) <ombudsman -at- oftc.net>{% endif %}{% endif %}

### Network Operations Committee

{% assign noc = site.data.staff | where: "roles.noc", true %}
{% if noc.size == 0 %}
 * No current NOC members{% else %}
{% for person in noc %}{% if person.name %}
 * {{ person.name }} ({{ person.nick }}){% endif %}{% endfor %}{% endif %}

### Network Operators

{% assign netop = site.data.staff | where: "roles.netop", true %}
{% if netop.size == 0 %}
 * No current NetOps{% else %}
{% for person in netop %}{% if person.name %}
 * {{ person.name }} ({{ person.nick }}){% endif %}{% endfor %}{% endif %}

### Network Representatives

{% assign netrep = site.data.staff | where: "roles.netrep", true %}
{% if netrep.size == 0 %}
 * No current NetReps{% else %}
{% for person in netrep %}{% if person.name %}
 * {{ person.name }} ({{ person.nick }}){% endif %}{% endfor %}{% endif %}

### Advisors

Being an Advisor is an honorary and not an administrative position.

 * David Graham (cdlu)
 * Timothy J. Fontaine (tjfontaine)

### Server Sponsors

The most important role on OFTC! We sincerely appreciate the generosity of
each of our sponsors. Not all sponsors or servers are mentioned here.

Please note that we cannot guarantee that any specific server will be 
accessible at any specific time. Refer to [our connection FAQ](/FAQ/IRC_Related_Questions/#what-irc-servers-can-i-connect-to) for more
information on connecting to OFTC.


<div class="row row-cols-1 row-cols-md-3 g-4">
	{% assign sponsors = site.data.sponsors | sort: "company" -%}
	{%- for sponsor in sponsors -%}
		{%- assign repstring = "" -%}
		{%- for contact in sponsor.contact -%}
			{%- capture rep %}{{ contact.name }} ({{contact.nick}}){% endcapture -%}
			{%- if repstring != "" %}{% assign repstring = repstring | append: ", " %}{% endif -%}
			{%- assign repstring = repstring | append: rep -%}
		{%- endfor %}
	  <div class="col">
		<div class="card sponsorcard h-100">
		  <div class="card-header">
			{% if sponsor.logoonly %}	
				<h3 class="card-title text-center">{% if sponsor.url != "" %}<a href="{{sponsor.url}}"><img src="{{sponsor.logo}}" /></a>{% else %}<img src="{{sponsor.logo}}" />{% endif %}</h3>
			{% else %}
				<h3 class="card-title logoandname">{% if sponsor.logo != "" %}<img class="pe-2" src="{{sponsor.logo}}" />{% else %}<i class="bi bi-emoji-sunglasses-fill pe-2"></i>{% endif %}
				{% if sponsor.url != "" %}<a href="{{sponsor.url}}">{{sponsor.company}}</a>{% else %}{{sponsor.company}}{% endif %}</h3>
			{% endif %}
	  </div>
	  <div class="card-body">
		{%- if repstring != "" %}<p>{{ repstring }}</p>{% endif -%}
		<ul>
			{% for server in sponsor.servers -%}
					<li><code><strong>{{ server.host }}</strong></code> ({{ server.location }})</li>
			{%- endfor %}
		</ul>
	  </div>
	</div>
</div>
{%- endfor %}
</div>

