const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list-items");

for(let i=0;i<arrows.length;i++){
	arrows[i].addEventListener("click",()=>{
		movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value-300
      }px)`;
		
	})
}
	


