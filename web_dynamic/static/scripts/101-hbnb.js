$(document).ready(function() {
    $('.toggle-reviews').click(function() {
        var toggleValue = $(this).data('toggle');

        if (toggleValue === 'show') {
            // Fetch, parse, and display reviews
            fetchReviews(); // Implement this function to fetch reviews

            // Change the text to "hide"
            $(this).text('hide').data('toggle', 'hide');
        } else if (toggleValue === 'hide') {
            // Remove all Review elements from the DOM
            $('.reviews').empty();

            // Change the text to "show"
            $(this).text('show').data('toggle', 'show');
        }
    });
});
