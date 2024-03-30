let takeInput=document.getElementById("take_input");
let search=document.getElementById("search");
let imageContainer=document.getElementById("image_container");
let showMore=document.getElementById("show_more");

const apiKey="lLll158r7D9WGikZL4Z6SwcnImvCCmG99fRHyUoInnE";
console.log(takeInput);
search.addEventListener("click",function(e){
e.preventDefault();
imageBox();
});


async function imageBox(){
  const input=takeInput.value.trim();
  console.log(input);
  let apiUrl=`https://api.unsplash.com/search/photos?query=${input}&client_id=${apiKey}`;

   try {
    let response = await fetch(apiUrl);
     if (!response.ok) {
         throw new Error('Network response was not ok');
     }
    let data =await response.json();
    console.log(data.results);
     
    displayImages(data.results);
 } catch (error) {
     console.error('Error fetching images:', error);
 }
}



function displayImages(data){
    imageContainer.innerHTML="";
    imageContainer.style.display="block";
     data.forEach(image => {
        let imgField=document.createElement("img");
        imgField.style.height="400px";
        imgField.style.width="420px";
        imgField.style.margin="10px";
        imgField.style.border="2px solid black";
        imgField.style.borderRadius="5px";
        imgField.src=image.urls.small;
         console.log(image.urls.small);
         imageContainer.append(imgField);
    });
}
