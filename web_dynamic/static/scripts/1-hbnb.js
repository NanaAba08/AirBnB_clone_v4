$(document).ready(function() {
    var selectedAmenities = {}; // Variable to store selected amenities

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var amenityID = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityID] = amenityName; // Store Amenity ID in the variable
        } else {
            delete selectedAmenities[amenityID]; // Remove Amenity ID from the variable
        }

        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        var amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.Amenities h4').text('Amenities: ' + amenitiesList);
    });
});
