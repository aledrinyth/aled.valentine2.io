<script>
document.addEventListener("DOMContentLoaded", function() {
    // Select the return buttons
    var returnButtons = document.querySelectorAll('.return-btn');

    returnButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Uncheck the checkboxes
            document.getElementById('Yes').checked = false;
            document.getElementById('No').checked = false;
            
            // Directly reset the visibility and opacity of the answer sections
            var answers = document.querySelectorAll('.answer--yes, .answer--no');
            answers.forEach(function(answer) {
                answer.style.visibility = 'hidden';
                answer.style.opacity = 0;
            });
        });
    });
});
</script>