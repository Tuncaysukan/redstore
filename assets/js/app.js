var menuItems=document.getElementById('menuItems');


function menutoggle(){
    if(menuItems.style.maxHeight=='0px'){
        menuItems.style.maxHeight='200px';
       
    }
    else{
        menuItems.style.maxHeight='0px';
        menuItems.style.maxHeight='0px';
        
    }
}
var product=document.getElementById('product-img');
var smallImg=document.getElementsByClassName('small-img');

smallImg[0].onclick=function(){
    product.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
    product.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    product.src=smallImg[2].src;
}
smallImg[3].onclick=function(){
    product.src=smallImg[3].src;
}

