
window.addEventListener("load", function() 
{

  document.getElementById("preloader").style.display = "none";

});


function toggleSidebar() 
{

    const sidebar = document.getElementById("sidebar");

    if (sidebar.style.width === "400px") 
    {
        sidebar.style.width = "0";   
    } 
    else 
    {
        sidebar.style.width = "400px"; 
    }
}


function closeSidebar() 
{

  document.getElementById("sidebar").style.width = "0";

}