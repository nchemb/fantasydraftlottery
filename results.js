$(document).ready(function() {

      	var teamNames = JSON.parse(localStorage.getItem('arrayResults'));
      	var leagueName = JSON.parse(localStorage.getItem('leagueName'));

      	$('#leagueName').text(leagueName);

      	var numOfTeams = teamNames.length;
        for(var i=1;i<=numOfTeams; i++)
          $('#teamNames').append("<span class=\"  col-md-6 col-sm-12 team-input team-results\"><button class=\"btn-sm btn-dark draftPick\" target=\""+i+"\">Pick "+i+":</button><label class=\"teamResults\" id=\"results"+i+"\" style=\"display: none;\">"+teamNames[i-1]+"</label></span>");

      	$('.draftPick').click(function() {
      		$('#results' + $(this).attr('target')).toggle();
      	});

        $('.showAll').click(function() {
          $('.teamResults').show(1000);
        });


      });