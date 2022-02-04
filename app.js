const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list-items");

for(let i=0;i<arrows.length;i++){
	const no_of_items=movieLists[i].querySelectorAll("img").length;
	let counter=0;
	console.log(no_of_items);
	arrows[i].addEventListener("click",()=>{
		const ratio=Math.floor(window.innerWidth/270);
		counter++;
		if(no_of_items-(4+counter)+(4-ratio)>=0){
		movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value-300
      }px)`;}
		else{
			movieLists[i].style.transform="translateX(0)";
			counter=0;
		}
		
	})
}
	
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container",".movie-list-title",".movie-list-container"
);	
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  
});



