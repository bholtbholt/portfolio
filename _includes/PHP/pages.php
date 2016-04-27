<?PHP
//	Pages Array = link, tags, image, title
	
	$pages = array(
		//Experience Tectoria
		array("experience-tectoria.php", "design development", "experience-tectoria-header.jpg", "Experience Tectoria"),

		//Whistler Wedding Pastor
		array("whistler-wedding-pastor.php", "design development", "whistler-wedding-pastor-header.jpg", "Whistler Wedding Pastor"),

		//Landia
		array("landia.php", "development", "landia-header.jpg", "Thinklandia, Artlandia, <br>& Makelandia"),

		//Youneeq
		//array("youneeq.php", "design development", "youneeq-header.jpg", "Youneeq"),

		//hereNow
		array("here-now.php", "advertising design development", "hereNow-header.jpg", "hereNow"),

		//All My Friends
		array("all-my-friends.php", "advertising design development", "AMF-header.jpg", "All My Friends"),

		//Madill
		array("madill.php", "development", "madill-header.jpg", "Madill Equipment"),

		//CBE
		array("cbe.php", "design development", "CBE-header.jpg", "Cohen Buchan Edwards"),

		//Hasty Pasty
		array("hasty-pasty-pie-co.php", "advertising design", "hastyPasty-header.jpg", "Hasty Pasty Pie Co."),

		//Jason McCoy
		array("jason-mccoys-the-perfect-gift.php", "advertising", "JasonMcCoy-header.jpg", "Jason McCoy's<br/>The Perfect Gift"),

		//Wanstalls
		array("wanstalls-hunting-and-sporting-supplies.php", "advertising", "Wanstalls-header.jpg", "Wanstall's Hunting<br/>& Sporting Supplies"),

		//Fitma
		array("fitma.php", "design development", "fitma-header.jpg", "Fitma"),
		
		//Sights of Summer
		array("sights-of-summer-photo-contest.php", "advertising design", "SightsOfSummer-header.jpg", "Sights of Summer<br/>Photo Contest"),
		
		//Caribbean Festival
		array("caribbean-festival.php", "advertising design", "Caribbean-header.jpg", "Caribbean Festival"),
		
		//Town & Country
		array("town-and-country-floor-design.php", "advertising", "TC-Header.jpg", "Town & Country<br/>Floor Design"),
		
		//Who Is Brian Holt?
		array("who-is-brian-holt.php", "advertising design", "WhoIsBrianHolt-header.jpg", "Who is Brian Holt?"),	
		
		//Sweet Sweet Honey Bucket
		array("sweet-sweet-honey-bucket.php", "advertising design", "SSHB-header.jpg", "Sweet Sweet<br/>Honey Bucket"),
		
		//Concert Posters
		array("concert-posters.php", "advertising", "Posters-header.jpg", "Concert Posters"),
		
		//A Few Weeks Somewhere Else
		array("a-few-weeks-somewhere-else.php", "photography", "aFewWeeksSomewhereElse-header.jpg", "A Few Weeks<br/>Somewhere Else"),
		
		//Caddy Shack
		array("the-new-caddy-shack.php", "advertising", "CaddyShack-header.jpg", "The New Caddy Shack"),
	
		//ClinicAid
		array("clinic-aid.php", "advertising", "clinicAid-header.jpg", "ClinicAid"),

		//8-Bit Band
		array("8-bit-band-illustration.php", "art", "8bitBand-header.png", "8-Bit band Illustration"),
		
		//My Community
		array("my-community.php", "design", "MyCommunity-header.jpg", "My Community"),
	
		//Holiday Greetings
		array("holiday-greetings.php", "advertising", "HolidayGreetings-header.jpg", "Holiday Greetings"),
		
		//Cookies & Carols
		array("cookies-and-carols.php", "design", "Cookies&Carols-header.jpg", "Cookies & Carols"),

		//Boyhood
		array("boyhood.php", "art", "Boyhood-Header.jpg", "Boyhood"),
		
		//Topics
		array("topics.php", "design", "Topics-header.jpg", "Topics"),

		//Gentle Reminders
		array("gentle-reminders.php", "art", "GentleReminders-header.jpg", "Gentle Reminders"),
		
		//Big Joke
		array("the-big-joke.php", "art", "ABigJoke-header.jpg", "The Big Joke"),
		
		//Back to School
		array("back-to-school-photo-contest.php", "advertising design", "BacktoSchool-header.jpg", "Back to School<br/>Photo Contest"),
		
		//Becker
		array("becker-and-company-lawyers.php", "advertising", "Becker-header.jpg", "Becker & Company Lawyers"),
		
		//StrangewaysMedia
		array("strangewaysMedia.php", "design", "strangewaysMedia-header.png", "StrangewaysMedia"),
		
		//Still
		array("still.php", "music", "still-header.jpg", "Still"),
		
		//Carolyn & Jesse
		array("carolyn-and-jesses-wedding-invitation.php", "design", "carolynJesse-header.png", "Carolyn & Jesse's<br/>Wedding Invitation"),
		
		//Misc. Photos
		array("photos-i-like.php", "photography", "photos-header.jpg", "Photos I Like"),
		
		//The Ice Climbers
		array("the-ice-climbers.php", "art", "IceClimbers-header.jpg", "The Ice Climbers"),
		
		//53 Squares
		array("53-squares.php", "art", "53Squares-header.jpg", "53 Squares"),
		
		//Real Estate Resource Guide
		array("real-estate-resource-guide.php", "design", "REGuide-header.jpg", "Real Estate<br/>Resource Guide"),
		
		//But I Really Really Like You
		array("but-i-really-really-like-you.php", "art", "ButIReallyReallyLikeYou-header.jpg", "But I Really,<br/>Really Like You"),
		
		//Cost of Success
		array("the-cost-of-success.php", "art", "CostOfSuccess-header.jpg", "The Cost of Success")
	);
	
	//loop out all the pages as divs with tags and links
	foreach($pages as $id){
		list($link, $tags, $image, $title) = $id;
		echo "<a href=\"". $link . "\"><div class=\"tags {$tags}\" style=\"background:url(images/" . $image . ")\"><div class=\"text\"><p>" . $title . "</p><p>" . $tags . "</p></div></div></a>";
	}
	
?>
    
    
