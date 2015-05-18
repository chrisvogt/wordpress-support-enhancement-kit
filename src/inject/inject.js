chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		tinymce.init({
		    selector: "textarea#post_content",
				theme: "modern",
				plugins: [
					"code",
				],
				toolbar: "bold italic | styleselect | blockquote code link unlink | bullist numlist outdent indent | l"
		 });

	}
	}, 10);
});
