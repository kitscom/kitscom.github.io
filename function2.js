
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("SourceId", ev.target.id);
    //to target id
    //target of the 'drag' event is the X img.
}

function drop(ev) {   

    var target =  ev.target;
    if(target.localName=="img")
            target = target.parentNode;


    if(target.childNodes.length < 1)
    {

        var data = document.getElementById(ev.dataTransfer.getData("SourceId"));
        
        data.setAttribute("style","width:60px");
        data.parentNode.removeChild(data);
        target.appendChild(data);
     
       
    }
     ev.preventDefault();
}
