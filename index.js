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

//-----------------google script contact---------------------//
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbw6Uq0dCEj7w9me4XBOy0BMG8GPiRXYvWy1bCRq3MAcYikk61tzkUTgU4ppUCJc4EixfA/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            window.location.href = "#"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})