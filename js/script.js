// Script written by Brian Holt, www.brianholt.ca, with thanks to Jordan Raine for troubleshooting.
$(document).ready(function() {
	var content = '.content';
	var portfolio = '#portfolio > a';
	var totalColumns;
			
	//filters divs according to what link is selected
	$('#filter a').click(function(){
		$('#filter a').css('color','');  //reset the navigation menu color, keeps hover intact
		$(this).css('color', '#d1edff');  //change the selected item to a new color 
		var getClass = $(this).attr('name'); //get the filter via class
		
		if($(content).length) { $(content).slideUp(400, function(){ $(this).remove(); }); } //hides any active windows
		
		if(getClass){
			$('.tags').not("." + getClass).slideUp(400, function() {  	 //hide all tags except selected tag
				$("." + getClass).slideDown(400);   //show selected tag if already hidden
				$holder = $('.tags').not("." + getClass).parent().detach();    //detaches all the other tags
				$holder.insertAfter($(portfolio + ':last'))    //appends them
			});
		} else {
			$('.tags').slideDown(400); //show all
		}
		
		$('body').animate({scrollTop: $('nav').position().top},1200); //scrolls to Navigation bar
		
	});
	
	if ($(window).width() > 954 ) {
		totalColumns = 3; // how many columns
	} else if ($(window).width() > 636 ) {
		totalColumns = 2;
	} else {
		totalColumns = 1;
	}
	
	//dynamically adds the div content
	$(portfolio).click(function(event){
		event.preventDefault(event);
		var contentURL = ($(this).attr("href"));  //gets the content URL of the selected div
		var elements = $(portfolio).children(':visible').length; //finds how many visible elements are in the portfolio
		var getPosition = $(portfolio).children(':visible').index( $(this).children() );  //find the position of the div with respect to the filter (visibility)
		var insert = getPosition + (totalColumns - (getPosition % totalColumns) - 1);
		
		//function for adding content div in the row below
		var contentRow = function(event){
			if(elements <= insert) {    //if there are less elements than a row
				$('<div/>', {class: 'content'})
					.hide()
					.insertAfter($(portfolio + ':last'))  //insert the div with loaded content at the end
					.load("PHP/" + contentURL)
					.slideDown(300, "easeOutSine", function(event) {
						$(content).show();
						$('body').animate({scrollTop: $(content).position().top-206},1200); //scrolls to new content after slideDown is complete
					});
			} else {
				$('<div/>', {class: 'content'})
					.hide()
					.insertAfter($(portfolio).eq(insert))   //insert the div in the next row
					.load("PHP/" + contentURL)
					.slideDown(300, "easeOutSine", function(event) {
						$(content).show();
						$('body').animate({scrollTop: $(content).position().top-206},1200); //scrolls to new content after slideDown is complete
					});
			}
			lastLoad = contentURL;  //sets the variable to unload the content
		};

		//checks for active content div, refreshes or creates one
		if($(content).length) {	//if a content div exists
			if(contentURL == lastLoad) {  //if the open div is the same as the selected one
				$(content).slideUp(300, function(event){ $(this).remove(); }); //remove the content div
			} else {
				$(content).slideUp(300, function(event){
					$(this).remove();  //remove old content div
					contentRow(); });  //add new content div
			}
		} else {
			contentRow();   //create a content div
		}
	});
	
	
	
	//Show or hide the Connect page
	$('.connectButton').click(function(){
		$('#connect').slideToggle(400, "easeOutSine");
	});
		
		
				
	//Form submission
   	$("#submit").click(function(){
	    var name = $("#name").val();
    	var email = $("#email").val();
    	var message = $("#message").val();
    	var postData = 'name='+ name + '&email=' + email + '&message=' + message;
		
		$.ajax({  
			type: "POST",  
			url: "PHP/form.php",  
			data: postData,  
			success: function() {  
				$('#contact').html("<h3>Message Sent!</h3>")  
				.append("<p>Thanks for the note. Talk soon.</p>");  
			}  
		});  
		return false;
	}); 
	
	
	//load Fancybox. Written by Jānis Skarnelis.
	$(".fancybox").fancybox();
	
});