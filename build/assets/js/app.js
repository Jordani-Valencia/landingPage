function showNav(){
    let x=document.getElementById("responsive-nav");
    if(x.className==="responsive-nav main-nav"){
        x.className+=" unfold";
    }else{
        x.className="responsive-nav main-nav";
    }
}