$('#companyLogo').owlCarousel({
	loop:true,
	margin:50,
	nav:true,
	dots:true,
	autoplay: false,
	stagePadding: 50,
	navText:["<img src='./img/scrollleft.png'>","<img src='./img/scrollright.png'>"],
	responsive:{
		0:{
			items:2
		},
		600:{
			items:4
		},
		1000:{
			items:6
		}
	}
})

$('#companyInvestor').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	dots:false,
	autoplay: false,
	navText:["<img src='./img/scrollleft.png'>","<img src='./img/scrollright.png'>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
})

$('#peopleMeet').owlCarousel({
	loop:true,
	margin:125,
	nav:true,
	dots:false,
	autoplay: false,
	navText:["<img src='./img/scrollleft.png'>","<img src='./img/scrollright.png'>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:4
		}
	}
})


$('#redesMembers').owlCarousel({
	loop:true,
	margin:40,
	nav:true,
	dots:false,
	autoplay: false,
	stagePadding:20,
	navText:["<img src='./img/scrollleft.png'>","<img src='./img/scrollright.png'>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:2
		}
	}
})
