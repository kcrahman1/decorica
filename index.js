document.addEventListener("scroll", function () {
    // Find the collapse element
    var collapseElement = document.querySelector('.navbar-collapse.collapse.show');

    if (collapseElement) {
        // Create a Bootstrap Collapse instance for the navbar
        var bootstrapCollapse = new bootstrap.Collapse(collapseElement, {
            toggle: false
        });
        // Hide the collapse menu
        bootstrapCollapse.hide();
    }
});//----------------------for scrolling-------------------------//

//--------------------start full screen image----------------------->
function openModal(imageSrc) {
    document.getElementById('photoModal').style.display = 'block';
    document.getElementById('modalImage').src = imageSrc;
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}


