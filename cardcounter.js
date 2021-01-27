var running_count = 0;
var true_count = 0;
var deck_size = 8;
var total_cards = 8 * 52;
var total_cards_dealt = 0;
var total_cards_pending = 8 * 52;
var bet_req = 250;
var deck_count = 0;

var card_points = {
	'two': 1,
	'three': 1,
	'four': 1,
	'five': 1,
	'six': 1,
	'seven': 0,
	'eight': 0,
	'nine': 0,
	'ten': -1,
	'jack': -1,
	'queen': -1,
	'king': -1,
	'ace': -1,
}

function reply_click(clicked_id) {
	// alert(card_points[clicked_id]);
	running_count = running_count + card_points[clicked_id];
	total_cards_dealt = total_cards_dealt + 1;
	total_cards_pending = total_cards_pending - 1;
	deck_count = deck_count + 1;
	if (deck_count == 26) {
		deck_size = deck_size - 0.50;
	} else if (deck_count == 52) {
		deck_count = 0;
		deck_size = deck_size - 1.00;
	}

	true_count = Math.round(running_count / deck_size);

	if (true_count <= 0) {
		bet_req = 250;
	} else if (true_count == 1) {
		bet_req = 250;
	} else if (true_count == 2) {
		bet_req = 250 * 2;
	} else if (true_count == 3) {
		bet_req = 250 * 4;
	} else if (true_count == 4) {
		bet_req = 250 * 8;
	} else {
		bet_req = 250 * 12;
	}

	$('#cccount').html(running_count);
	$('#tcardsd').html(total_cards_dealt);
	$('#tcardsp').html(total_cards_pending);
	$('#tcount').html(true_count);
	$('#betreq').html(bet_req);

}
