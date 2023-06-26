function removecolor(){
    let color = document.getElementById('colorSelect');
    console.log("color = ", color);
    color.remove(color.selectedIndex);
}