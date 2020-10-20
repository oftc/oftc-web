var staffJSON = {};
var sponsorsJSON = {};
var staff = {
  'staff': [],
  'sponsors': [],
  'advisor0': '',
  'advisor1': '',
  'spi': ''
};
$(document).ready(function() {
  var templateFields = {
    'nick': '%-12s',
    'name': '%-24s',
    'rank': '%\'_4s',
    'sponsor': '%-9s',
    'ombudsman': '%-11s',
    'remove': '%-8s',
    'yn': '%-3s'
  };

  function formatField(field, data)
  {
    var fmt = templateFields[field] || '%s';
    var data = data || '';

    return sprintf(fmt, data);
  }

  function formatStaff(item)
  {
    var data = {};

    data['nick'] = formatField('nick', item['nick']);
    data['name'] = formatField('name', item['name']);
    data['rank'] = formatField('rank', item['rank']);
    data['sponsor'] = formatField('sponsor', item['roles'].sponsor ? '(S)' : '');
    data['ombudsman'] = formatField('ombudsman', item['ombudsman'] ? '[X]' : '[ ]');
    data['remove'] = formatField('remove', item['remove'] ? '[X]' : '[ ]');

    return data;
  }

  function formatSponsors(item)
  {
    var data = {};

    data['nick'] = formatField('nick', item['nick']);
    data['name'] = formatField('name', item['name']);
    data['sponsor'] = formatField('sponsor', item['roles'].sponsor ? '(S)' : '');
    data['remove'] = formatField('remove', item['remove'] ? '[X]' : '[ ]');

    return data;
  }

  function ProcessJSON()
  {
    $.getJSON('/staff.json', function()
    {
    })
    .error(function()
    {
      alert('error getting staff.json');
    })
    .done(function(data)
    {
      staffJSON = data;
      $.each(staffJSON['staff'], function(i, item)
      {
        staff.staff.push(formatStaff(item));
      });

      $.each(staff['staff'], function(i, item)
      {
        var newRow = $('<tr class="item">').appendTo('#members');

        var col = $('<td class="index">').appendTo(newRow);
        col.append(i + 1)
        col = $('<td>').appendTo(newRow);
        col.append('<i class="handle icon-resize-vertical">');
        AddCol(newRow, { value: item['name'].trim() });
        AddCol(newRow, { class: 'nick', value: item['nick'].trim() });
        AddCol(newRow, { type: 'checkbox', name: 'sponsor', checked: item['sponsor'].trim() !== '' ? 'checked' : null, disabled: 'disabled' });
        AddCol(newRow, { class: 'ombudsman', type: 'checkbox', name: 'ombudsman' });
        AddCol(newRow, { class: 'remove', type: 'checkbox', name: 'remove' });
      });
    });

    $.getJSON('/sponsors.json', function()
    {
    })
    .error(function()
    {
      alert('error getting sponsors.json');
    })
    .done(function(data)
    {
      sponsorsJSON = data;
      $.each(sponsorsJSON['sponsors'], function(i, item)
      {
        staff.sponsors.push(formatSponsors(item));
      });

      $.each(staff['sponsors'], function(i, item)
      {
        var newRow = $('<tr class="item">').appendTo('#sponsors');
        var checked;

        AddCol(newRow, { value: item['name'].trim() });
        AddCol(newRow, { class: 'nick', value: item['nick'].trim() });
        checked = item['sponsor'].trim() !== '' ? 'checked' : null;
        AddCol(newRow, { type: 'checkbox', name: 'sponsor', checked: checked, disabled: 'disabled' });
        AddCol(newRow, { class: 'remove', type: 'checkbox', name: 'remove' });
      });

      randomizeList();
      updateIndex();
    });
  }

  function randomizeList()
  {
    function swap(a, b)
    {
      var ac = $(a).clone(true);
      var bc = $(b).clone(true);
      $(a).replaceWith(bc);
      $(b).replaceWith(ac);
    }

    var table
    var list;

    table = $('#members tbody');
    list = $('tr', table);

    for(i = 0; i < list.length; i++)
    {
      j = Math.floor(Math.random() * i);
      if(i != j)
      {
        swap(list[i], list[j]);
        // Update the list to avoid stale references.
        list = $('tr', table);
      }
    }
  }

  ProcessJSON();

  function AddCol(row, attr)
  {
    var td = $('<td>');
    var el;

    if(attr.type == 'checkbox')
    {
      el = $('<input>');
      td.addClass('center');
    }
    else
    {
      el = $('<span>');
      el.text(attr.value);
    }

    el.attr(attr);
    td.append(el);
    row.append(td);
  }

  updateIndex = function()
  {
    $('#members tbody tr td.index').each(function(i)
    {
      $(this).html(i + 1);
    });
  };

  $('#members tbody').sortable(
  {
    handle: '.handle',
    helper: function(e, tr)
    {
      var originals = tr.children();
      var helper = tr.clone();

      helper.children().each(function(index)
      {
        $(this).width(originals.eq(index).width());
      });
      return helper;
    },
    stop: updateIndex
  });

  $('#rawballot').click(function()
  {
    $.get('/ballot', function(tmpl)
    {
      staff['count'] = Object.keys(staff['staff']).length;
      $.each(staff['staff'], function(i, item)
      {
        item['rank'] = formatField('rank', '');
        item['ombudsman'] = formatField('ombudsman', '[ ]');
        item['remove'] = formatField('remove', '[ ]');
      });
      $.each(staff['sponsors'], function(i, item)
      {
        item['remove'] = formatField('remove', '[ ]');
      });
      staff['advisor0'] = formatField('yn', '');
      staff['advisor1'] = formatField('yn', '');
      staff['spi'] = formatField('yn', '');
      var ballot = Hogan.compile(tmpl);
      $('#overlay-content').html(ballot.render(staff));
      $('#overlay').modal({ keyboard: true });
    });
  });

  $('#submit').click(function()
  {
    // Section 1
    staff['count'] = Object.keys(staff['staff']).length;
    $('#members tr.item').each(function(i, row)
    {
      var key = $('span.nick', row).text();
      var rank = $('td.index', row).text();
      var ombudsman = $('input.ombudsman', row)[0].checked;
      var remove = $('input.remove', row)[0].checked;

      staffJSON['staff'][key].rank = rank;
      staffJSON['staff'][key].ombudsman = ombudsman;
      staffJSON['staff'][key].remove = remove;
    });

    staff.staff = [];

    $.each(staffJSON['staff'], function(i, item)
    {
      staff.staff.push(formatStaff(item));
    });

    // Section 2
    $('#sponsors tr.item').each(function(i, row)
    {
      var key = $('span.nick', row).text();
      var remove = $('input.remove', row)[0].checked;

      sponsorsJSON['sponsors'][key].remove = remove;
    });

    staff.sponsors = [];

    $.each(sponsorsJSON['sponsors'], function(i, item)
    {
      staff.sponsors.push(formatSponsors(item));
    });

    // Section 3
    var advisor0 = $('#advisor0').val();
    staff.advisor0 = formatField('yn', advisor0);
    var advisor1 = $('#advisor1').val();
    staff.advisor1 = formatField('yn', advisor1);

    // Section 4
    var spi = $('#question0').val();
    staff.spi = formatField('yn', spi);

    $.get('/ballot', function (tmpl)
    {
      var ballot = Hogan.compile(tmpl);
      $('#overlay-content').html(ballot.render(staff));
      $('#overlay').modal({ keyboard: true });
    });
  });
});
