var staffJSON = {};
var staff = {
  'staff': [],
};
var noclimit = 8;
var removelimit = 1;
$(document).ready(function() {
  var templateFields = {
    'nick': '%-12s',
    'name': '%-24s',
    'noc': '%-11s',
    'remove': '%-8s',
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
    data['noc'] = formatField('noc', item['noc'] ? '[X]' : '[ ]');
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
      $.each(staffJSON, function(i, item)
      {
        staff.staff.push(formatStaff(item));
      });

      $.each(staff['staff'], function(i, item)
      {
        var newRow = $('<tr class="item">').appendTo('#members');

        AddCol(newRow, { value: item['name'].trim() });
        AddCol(newRow, { class: 'nick', value: item['nick'].trim() });
        AddCol(newRow, { class: 'noc', type: 'checkbox', name: 'noc', onclick: 'window.validateBallot()' });
        AddCol(newRow, { class: 'remove', type: 'checkbox', name: 'remove', onclick: 'window.validateBallot()' });
      });
    });
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

  $('#rawballot').click(function()
  {
    $.get('/ballot', function(tmpl)
    {
      staff['count'] = Object.keys(staff['staff']).length;
      $.each(staff['staff'], function(i, item)
      {
        item['noc'] = formatField('noc', '[ ]');
        item['remove'] = formatField('remove', '[ ]');
      });
      var ballot = Hogan.compile(tmpl);
      $('#overlay-content').html(ballot.render(staff));
      $('#overlay').modal({ keyboard: true });
    });
  });

  $('#submit').click(function()
  {

    // Selections
    $('#members tr.item').each(function(i, row)
    {
      var key = $('span.nick', row).text();
      var noc = $('input.noc', row)[0].checked;
      var remove = $('input.remove', row)[0].checked;

      staffJSON[i].noc = noc;
      staffJSON[i].remove = remove;
    });

    staff.staff = [];

    $.each(staffJSON, function(i, item)
    {
      staff.staff.push(formatStaff(item));
    });

    $.get('/ballot', function (tmpl)
    {
      var ballot = Hogan.compile(tmpl);
      $('#overlay-content').html(ballot.render(staff));
      $('#overlay').modal({ keyboard: true });
    });
  });
});
function validateBallot() {
  var className = "."+event.target.className;
	var checkboxes = document.querySelectorAll(className);
  console.log(event.target.className);
	checkboxes.forEach(checkbox => {
	  checkbox.addEventListener('change', function() {
      var checkedCount = document.querySelectorAll(className+':checked').length;
      switch(className) {
        case ".noc":
          var limit = noclimit;
          if (checkedCount > limit) {
            this.checked = false;
            alert("Please choose only "+limit+" members to be NOC.");
          } else if(checkedCount == limit) {
             document.getElementById("submit").disabled = false;
             document.getElementById("submit").innerHTML = "Process";
          } else {
             document.getElementById("submit").disabled = true;
             document.getElementById("submit").innerHTML = "Choose "+(limit-checkedCount)+" NOC";

          }
          break;
        case ".remove":
          var limit = removelimit;
          if (checkedCount > limit) {
            this.checked = false;
            alert("Please choose up to "+limit+" members to be removed.");
          }
          break;
        default:
      }
	  });
	});
}
