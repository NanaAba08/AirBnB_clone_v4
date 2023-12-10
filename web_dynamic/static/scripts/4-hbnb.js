$(document).ready(function() {
    $('#filterBtn').click(function() {
        var selectedAmenities = []; // Array to store selected amenities IDs

        // Get the IDs of selected amenities (checkboxes)
        $('input[type="checkbox"]:checked').each(function() {
            selectedAmenities.push($(this).data('id'));
        });

        // Make a POST request to places_search with the list of checked amenities
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: selectedAmenities }),
            success: function(response) {
                // Handle the response as needed
                console.log('Filtered places:', response);
            },
            error: function(xhr, status, error) {
                console.error('Error:', status, error);
            }
        });
    });
});
