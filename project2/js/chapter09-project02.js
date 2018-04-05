window.addEventListener('load',function()
{
    
    var node = document.querySelector("#thumbnails");
    var element = document.querySelector("#featured img");
    var fcaption = document.querySelector("#featured figcaption");
    fcaption.style.transition= "opacity 1s";
   
   
        node.addEventListener('click',function(e)
        {
            
            if(e.target.nodeName.toLowerCase() == 'img')
            {
                var newImg = e.target.src.replace("small","medium");
            }
            
            element.src = newImg;
            fcaption.textContent = e.target.title;
            
        })
            
       element.addEventListener('mouseover',function(e){
           
           fcaption.style.opacity = "0.80";
           fcaption.className = "featured figcaption";
       })  
    
       
       
       element.addEventListener('mouseout',function(e){
          
           fcaption.style.opacity = "0";
           fcaption.className = "featured figcaption";
          
       }) 
       

    
});