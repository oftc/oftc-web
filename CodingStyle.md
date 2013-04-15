---
layout: master
title: CodingStyle
---
# OFTC Coding Style #
## Editor Settings ##

 * 2 Spaces for tabs
 * Replace tabs with spaces
 * 80 Character line width

In terms of actual code, I'm not too fussy what personal style it is as long as its consistant.  I do have some reservations though, namely:

 * Define functions like this:
{% highlight cpp %}
static void
function_name(int a, char b)
{
}
{% endhighlight %}

 * Braces go on their own line, always.
### General Coding Rules: ###
 * Always prototype a function.
 * Always declare a local only function as static.
 * Don't use static variables if at all possible.
 * Make as much use of reusable code as possible, do not reinvent your own wheel.
 * Don't use C++ style comments
 * Please have **useful** commit messages or include change logs if submitting patches

### Commit Messages: ###
 * Please have **useful** commit messages or include change logs if submitting patches
 * Always do a fix in the oldest branch we care about and merge it forwards.
 * In the original fix, enter a commit message as normal.
 * In the merge commit, enter a commit message in the following format: "[MERGE] (rRevisionOfOriginalFix) Original commit message"

