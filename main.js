$('.brand').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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










let a=[
{
	id:1,
	name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/11.webp",
	rating:3,
	
	amount:350,
	units:"for three",
	foodtype:"non veg",
	dtime:25,
	
	
},
{
	id:2,
	name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/12.webp",
	rating:3.4,
	preparation:"25 min",
	amount:350,
	units:"for three",
	foodtype:"veg",
	dtime:35,
},
{
	id:3,
	name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/13.webp",
	rating:2.5,
	preparation:"25 min",
	amount:350,
	units:"for three",
	foodtype:"veg",
	dtime:40,
},
{
	id:4,
	
	name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/14.webp",
	rating:3.5,
	preparation:"25 min",
	amount:350,
	units:"for three",
	foodtype:"veg",
	dtime:25
},
{
	id:5,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/15.webp",
	rating:"3.5",
	preparation:"25 min",
	amount:350,
	units:"for three",
	foodtype:"non veg",
	dtime:35
},
{
	id:6,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/16.webp",
	rating:2.5,
	preparation:"25 min",
	amount:350,
	units:"for three",
	foodtype:"non veg",
	dtime:35,
},
{
	id:7,
	name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/17.webp",
	rating:3.4,
	preparation:"25 min",
	amount:350,
	units:"for three",
	foodtype:"non veg",
	dtime:40,
},
{
	id:8,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/18.webp",
	rating:2.4,
	preparation:"25 min",
	amount:350,
	foodtype:"non veg",
	units:"for three",
	dtime:40,
},
{
	id:9,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/19.webp",
	rating:4.4,
	preparation:"25 min",
	amount:350,
	units:"for three",
	foodtype:"non veg",
	dtime:40,
},
{
	id:10,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/22.webp",
	rating:2.5,
	preparation:"25 min",
	amount:765,
	units:"for three",
	foodtype:"non veg",
	dtime:33,
},
{
	id:11,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/22.webp",
	rating:4.4,
	preparation:"25 min",
	amount:550,
	units:"for three",
	foodtype:"non veg",
	dtime:25,
},
{
	id:12,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/20.webp",
	rating:4.4,
	preparation:"25 min",
	amount:"566 RS",
	units:"for three",
	foodtype:"non veg",
	dtime:33,
},
{
	id:13,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/24.webp",
	rating:2,
	preparation:"25 min",
	amount:230,
	units:"for three",
	foodtype:"veg",
	dtime:40,
},
{
	id:14,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/20.webp",
	rating:2.5,
	preparation:"25 min",
	amount:350,
	units:"for three",
	foodtype:"non veg",
	dtime:33,
},
{
	id:15,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/20.webp",
	rating:4.4,
	preparation:"25 min",
	amount:800,
	units:"for three",
	foodtype:"non veg",
	dtime:25,
},
{
	id:16,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/20.webp",
	rating:4.4,
	preparation:"25 min",
	amount:340,
	units:"for three",
	foodtype:"non veg",
	dtime:40,
},
{
	id:17,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/21webp.webp",
	rating:2.5,
	preparation:"25 min",
	amount:950,
	units:"for three",
	foodtype:"veg",
	dtime:33,
},
{
	id:18,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/22.webp",
	rating:4.4,
	preparation:"25 min",
	amount:350,
	units:"for one",
	foodtype:"non veg",
	dtime:35,
},
{
	id:19,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/23.webp",
	rating:2,
	preparation:"25 min",
	amount:275,
	units:"for two",
	foodtype:"veg",
	dtime:35,
},
{
	id:20,
		name:"Kalam Hot Chiken",
	cusine:"North Indian,Chinese",
	imgurl:"img/24.webp",
	rating:2.5,
	preparation:"25 min",
	amount:230,
	units:"for two	",
	foodtype:"veg",
	dtime:25,
},



];



let cont=document.querySelector(".container");



let card=document.createElement("div");
card.classList.add("row");
cont.append(card)

ans(a)


function ans(a){
	a.forEach(function(e){
	
	console.log(a,e)
let div=document.createElement("div");
div.classList.add("col");
card.appendChild(div);


let div2=document.createElement("div");
div2.classList.add("col-card");
div.appendChild(div2);


 let img=document.createElement("img");
 img.src=e.imgurl
 div2.appendChild(img)

let head=document.createElement("h2");
head.classList.add("card-h2");
 head.innerHTML=e.name;
div2.appendChild(head);

 
let para=document.createElement("p");
para.classList.add("card-p");
para.innerHTML=e.cusine;
div2.appendChild(para);


let innerDiv=document.createElement("div");
innerDiv.classList.add("inner-row");
div2.appendChild(innerDiv)

let iconDiv=document.createElement("div");
iconDiv.classList.add("icon-div");

innerDiv.appendChild(iconDiv);



let icon=document.createElement("i");
icon.classList.add("bi");
icon.classList.add("bi-star-fill");
iconDiv.appendChild(icon);

let rtag=document.createElement("p");
rtag.innerHTML=e.rating;
iconDiv.appendChild(rtag)





let timediv=document.createElement("div");

innerDiv.appendChild(timediv)


let dtime=document.createElement("p");
dtime.classList.add("dtime");
dtime.innerHTML=  e.dtime +"Min"
timediv.appendChild(dtime);


let amount=document.createElement("div");
innerDiv.appendChild(amount)


let units=document.createElement("p");
units.classList.add("units");
units.innerHTML= "Rs" + e.amount + e.units
amount.appendChild(units);

let ftypediv=document.createElement("div");
ftypediv.classList.add("foodtype")
div2.appendChild(ftypediv)



let foodtype=document.createElement("p");

foodtype.innerHTML=e.foodtype;
ftypediv.appendChild(foodtype)


// rating bg color changing function

rating()

function rating(){
	
	if(e.rating>=4.0){
		iconDiv.classList.add("icon-div-green")
	}
	else if(e.rating>=3.0){
		iconDiv.classList.add("icon-div-orange")
	}
	else if(e.rating<3&&e.rating>=1){
		iconDiv.classList.add("icon-div-red")
	}
}

// foodtype color change function


function ftypecolr(){
	if(e.foodtype=="veg"){
		ftypediv.classList.add("ftypediv-pink")
	}
	else if(e.foodtype=="non veg"){
		ftypediv.classList.add("ftypediv-red")
	}
	
	
}
ftypecolr()
 



	})
}

function defultsort(){
	let removecol=document.querySelectorAll(".col");
	removecol.forEach(function(e){
		e.remove()
	})
	ans(a)
	
	
}




function ratingsort(){
	let sortobj=a.slice().sort(function(a,b){
		return b.rating-a.rating
	})
	let removecol=document.querySelectorAll(".col");
	removecol.forEach(function(e){
		e.remove()
	})
	ans(sortobj)
}



function pureveg(){
	
	let veg=a.slice().filter(function(e){
		
		
	 return e.foodtype=="veg"
		
	})
	let removecol=document.querySelectorAll(".col");
	removecol.forEach(function(e){
		e.remove()
	})
     ans(veg)
}



function shortamount(){
	let shortamount=a.slice().filter(function(e){
		return e.amount<=300
	})
	let removecol=document.querySelectorAll(".col");
	removecol.forEach(function(e){
		e.remove()
	})
	ans(shortamount)
	
	
	
}



function amount(){
	let amount=a.slice().filter(function(e){
		return e.amount>=300&&e.amount<=600
	})
	let removecol=document.querySelectorAll(".col");
	removecol.forEach(function(e){
		e.remove()
	})
	ans(amount)
	
	
	
}

function lowtohigh(){
	let lowtohigh=a.slice().sort(function(a,b){
		return a.amount-b.amount
	})
	let removecol=document.querySelectorAll(".col");
	removecol.forEach(function(e){
		e.remove()
	})
	ans(lowtohigh)
	
	
	
}


function hightolow(){
	let hightolow=a.slice().sort(function(a,b){
		return b.amount-a.amount
	})
	let removecol=document.querySelectorAll(".col");
	removecol.forEach(function(e){
		e.remove()
	})
	ans(hightolow)
	
	
	
}


function dtime(){
	let dtime=a.slice().sort(function(a,b){
		return a.dtime-b.dtime
	})
	let removecol=document.querySelectorAll(".col");
	removecol.forEach(function(e){
		e.remove()
	})
	ans(dtime)
	
	
	
}