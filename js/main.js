$(document).ready(function(){
	// Apply board game filter and remove all other filters
	$('.board-game-filter').on('click', function(){
		console.log('board game filter clicked');
		$('.board-game-row').removeClass('hidden');
		$('.card-game-row').addClass('hidden');
		$('.sport-row').addClass('hidden');
		$('.pagination').addClass('hidden');
	});
	
	// Apply card game filter and remove all other filters
	$('.card-game-filter').on('click', function(){
		console.log('card game filter clicked');
		$('.board-game-row').addClass('hidden');
		$('.card-game-row').removeClass('hidden');
		$('.sport-row').addClass('hidden');
		$('.pagination').addClass('hidden');
	});

	// Apply sport filter and remove all other filters
	$('.sport-filter').on('click', function(){
		console.log('sport filter clicked');
		$('.board-game-row').addClass('hidden');
		$('.card-game-row').addClass('hidden');
		$('.sport-row').removeClass('hidden');
		$('.pagination').addClass('hidden');
	});

	// Remove all filters
	$('.remove-filter').on('click', function(){
		console.log('filter remove clicked');
		$('.board-game-row').removeClass('hidden');
		$('.card-game-row').removeClass('hidden');
		$('.sport-row').removeClass('hidden');
		$('.pagination').removeClass('hidden');
	});
  

	// Go to the game details page
	$('#game1').on('click', function(){
		window.location.href = "game-details1.html";
	});


});