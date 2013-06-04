var staffJSON = {};
var staff = { "staff": [] };
$(document).ready(function() {
  function ProcessJSON()
  {
      $.getJSON("/staff.json", function() {
      })
      .error(function() 
      { 
          alert("error"); 
      })
      .done(function(data) 
      { 
          staffJSON = data;
          $.each(staffJSON["staff"], function(i, item)
          {
              staff.staff.push(
              { 
                  nick: sprintf("%-13s", item["nick"]), 
                  name: sprintf("%-25s", item["name"]), 
                  rank: sprintf("%'_7s", ""),
                  sponsor: item["roles"].sponsor ? sprintf("%-10s", "(S)") : sprintf("%10s", ""),
                  ombudsman: item.ombudsman ? sprintf("%-12s", "[X]") : sprintf("%-12s", "[ ]"),
                  remove: item.remove ? sprintf("%-10s", "[X]") : sprintf("%-10s", "[ ]")
              });
          }); 

          $.each(staff["staff"], function(i, item)
          {
              var newRow = $("<tr class='item'>").appendTo("#members");
          
              var col = $("<td class='index'>").appendTo(newRow);
              col.append(i + 1)
              col = $("<td>").appendTo(newRow);
              col.append("<i class='handle icon-cog'>");
              AddCol(newRow, { type: "text", id: "name" + i, name: "Name", value: item["name"].trim(), readonly: true });
              AddCol(newRow, { class: "nick", type: "text", id: "nick" + i, name: "nick", value: item["nick"].trim(), readonly: true });
              AddCol(newRow, { type: "checkbox", id: "sponsor" + i, name: "sponsor", checked: item["sponsor"].trim() !== '' ? "checked" : null, disabled: "disabled" });
              AddCol(newRow, { class: "ombudsman", type: "checkbox", id: "ombudsman" + i, name: "ombudsman" });
              AddCol(newRow, { class: "remove", type: "checkbox", id: "remove" + i, name: "remove" });
          });
      });
  }

  ProcessJSON();

  function AddCol(row, attr)
  {
      row.append($("<td>").append($("<input>").attr(attr)));
  }

  updateIndex = function(e, ui) 
  {
      $('td.index', ui.item.parent()).each(function (i) 
      {
          $(this).html(i + 1);
      });
  };

  $("#members tbody").sortable(
  {
      handle: '.handle',
      stop: updateIndex
  });

  $("#rawballot").click(function()
  {
      $.get('/ballot', function (tmpl) 
      { 
          $.each(staff["staff"], function(i, item)
          {
              item.rank = sprintf("%'_7s", ""),
              item.ombudsman = sprintf("%-12s", "[ ]"),
              item.remove = sprintf("%-10s", "[ ]")
          });
          var ballot = Hogan.compile(tmpl);
          $('#overlay-content').html(ballot.render(staff));
          $('#overlay').modal({keyboard: true});
      });
  });

  $("#submit").click(function()
  {
      $("tr.item").each(function(i, row)
      {
          var key = $("input.nick", row).val();
          var rank = $("td.index", row).text();
          var ombudsman = $("input.ombudsman", row)[0].checked
          var remove = $("input.remove", row)[0].checked

          staffJSON["staff"][key].rank = rank;
          staffJSON["staff"][key].ombudsman = ombudsman;
          staffJSON["staff"][key].remove = remove;
      });

      staff = { "staff": [] };

      $.each(staffJSON["staff"], function(i, item)
      {
          staff.staff.push(
          { 
              nick: sprintf("%-13s", item["nick"]), 
              name: sprintf("%-25s", item["name"]), 
              rank: sprintf("%'_7s", item["rank"]),
              sponsor: item["roles"].sponsor ? sprintf("%-10s", "(S)") : sprintf("%10s", ""),
              ombudsman: item.ombudsman ? sprintf("%-12s", "[X]") : sprintf("%-12s", "[ ]"),
              remove: item.remove ? sprintf("%-10s", "[X]") : sprintf("%-10s", "[ ]")
          });
      });

      $.get('/ballot', function (tmpl) 
      { 
          var ballot = Hogan.compile(tmpl);
          $('#overlay-content').html(ballot.render(staff));
          $('#overlay').modal({keyboard: true});
      });
  });
});
