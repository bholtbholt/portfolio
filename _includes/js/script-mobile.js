// Script written by Brian Holt, www.brianholt.ca, with thanks to Jordan Raine for troubleshooting.
$(document).ready(function() {
	var content = '.content';
	var portfolio = '#portfolio > a';
		
	//dynamically adds the div content
	$(portfolio).click(function(){
		event.preventDefault();
		var contentURL = ($(this).attr("href"));  //gets the content URL of the selected div
		var getPosition = $(portfolio).children(':visible').index( $(this).children() );  //find the position of the div with respect to the filter (visibility)

		//function for adding content div in the row below
		var contentRow = function(){
			$('<div/>', {class: 'content'})
				.hide()
				.insertAfter($(portfolio).eq(getPosition))   //insert the div in the next row $(portfolio).eq(insert)
				.load("PHP/" + contentURL)
				.slideDown(300, function() {
					$(content).show();
					$.scrollTo(content, 1200, {offset:-206, 'axis':'y'});  //scrolls to new content after slideDown is complete
				});
			lastLoad = contentURL;  //sets the variable to unload the content
		};

		//checks for active content div, refreshes or creates one
		if($(content).length) {	//if a content div exists
			if(contentURL == lastLoad) {  //if the open div is the same as the selected one
				$(content).slideUp(300, function(){ $(this).remove(); }); //remove the content div
			} else {
				$(content).slideUp(300, function(){
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