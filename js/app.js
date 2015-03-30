// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var screenwidth = document.documentElement.clientWidth;
var screenheight = document.documentElement.clientHeight;
var viewBox = 'viewBox';

$('#map').attr(viewBox, '0, 0, ' + screenwidth + ', ' + screenheight);

// Homepage interactions

$('.getstarted').click(function() {
	$('.homepage_container').hide('fade', function(){
		$('.app_container').delay(300).show('fade');
		$('.cancel').hide();
	});
	
});

$('.addcity').click(function() {
	if($(this).hasClass('active')) {
		$('.add_waypoint_container').hide();
		$('.added_waypoint_container').show();
		$('#beyond').hide('fade');
		$('.centralcity').hide('fade');
		$('.addcity').removeClass('active');
		$('#CentralCity .highlight_centralcity').attr('class','active');
		$('.avoidcity').show();
		$('.cancel').hide();
	} else {
		$('.add_waypoint_container').show();
		$('.addcity').addClass('active');
		$('.avoidcity').hide();
		$('.cancel').show();
	}
});

$('.avoidcity').click(function() {
	if($(this).hasClass('active')) {
		$('.avoid_city_container').hide();
		$('.added_avoid_container').show();
		$('#beyond').hide('fade');
		$('#megacity').hide('fade');
		$('.megacity').hide('fade');
		$('.avoidcity').removeClass('active');
		$('#MegaCityOne .highlight_megacityone').attr('class','active');
		$('.addcity').show();
		$('.cancel').hide();
	} else {
		$('.avoid_city_container').show();
		$('.avoidcity').addClass('active');
		$('.addcity').hide();
		$('.cancel').show();
	}
});

$('.cancel').click(function() {
	$('.avoid_city_container').hide();
	$('.addcity').removeClass('active');
	$('.add_waypoint_container').hide();
	$('.avoidcity').removeClass('active');
	$('.addcity').show();
	$('.avoidcity').show();
	$('.cancel').hide();	
});


// Type Ahead

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });
 
    cb(matches);
  };
};
 
var cities = [
	'Blüdhaven',
'Society',
'Blue Valley',
'Stargirl',
'Brick City',
'Calvin City',
'Central City',
'Charlton’s Point',
'Civic City',
'Coast City',
'Codsville',
'Cosmos',
'Dakota City',
'Delta City',
'Dos Rios',
'Empire City',
'Fairfield',
'Fawcett City',
'Feithera',
'Gateway City',
'Gorilla City',
'Gotham City',
'Granville',
'Happy Harbor',
'The Hidden City',
'Hub City',
'Ivy Town',
'Keystone City',
'Leesburg',
'Liberty Hill',
'Manchester',
'Mapleville',
'Metropolis',
'Middleton',
'Midway City',
'Mega City One',
'Midwest City',
'Midvale',
'Monument Point',
'Nanda Parbat',
'New Carthage',
'New Venice',
'Opal City',
'Park City',
'Platinum Flats',
'Portsmouth',
'Radiance',
'Santa Marta',
'Science City',
'Smallville',
'Solar City',
'St. Roch',
'Star City',
'Sub Diego',
'Superbia',
'Vanity',
'Viceroy',
'Violet Valley',
'Zenith City'
];
 
$('.city.typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'cities',
  displayKey: 'value',
  source: substringMatcher(cities)
});