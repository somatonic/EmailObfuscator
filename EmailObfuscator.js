$(function() {
	// restore mailto: links
	$("a[href^='GOSPAM:']").each(function(){
		var email = $(this).attr("href").substr(7);
		// replace email with its reversed version
		email = email.split("").reverse().join("");
		// replace "GOSPAM:" with "mailto:"
		$(this).attr("href","mailto:" + email);			
	}); 
	
	$(".email-obfuscator-unreverse").each(function() {
		$(this).replaceWith($(this).text().split("").reverse().join(""));
	});
});