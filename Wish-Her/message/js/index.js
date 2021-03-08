this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Every milestone is a small victory on the road to fulfilling your life’s purpose. May you achieve everything you dreamt about. Wishing you good luck and a bright future on this special day. You have been the shoulder on which I could cry, the arms in which I could feel safe and the ears that could listen to my deepest secrets. Thank you, my friend, for everything.\n\n Hope your special day brings you all that your heart desires! Here’s wishing you a day full of pleasant surprises!  Once Again Happy birthday Rakul...!” ";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 1
	},0.15);
}
