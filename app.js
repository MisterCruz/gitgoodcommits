App.run(function() {
	var hello, commitList;

	Font('Quicksand', '700,400,300');

	App.page = new Page({
	  backgroundColor: Color.random()
	});

	commitList = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];

	hello = new Text({
	  text: quoteList[Math.floor(Math.random() * 14)],
	  width: auto,
	  fontSize: 30,
	  fontWeight: 700,
	  color: white,
	  spacing: 4
	});

	hello.center();

	hello.color = Color.random();

});
