$(document).ready(function() {
    let selectedAmenities = {};

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).attr('data-id');
        const amenityName = $(this).attr('data-name');

        if ($(this).is(':checked')) {
            // Add the amenity ID to the selectedAmenities object
            selectedAmenities[amenityId] = amenityName;
        } else {
            // Remove the amenity ID from the selectedAmenities object
            delete selectedAmenities[amenityId];
        }

        // Update the h4 tag inside the div Amenities with the list of checked amenities
        const amenityList = Object.values(selectedAmenities).join(', ');
        $('div.amenities h4').text(amenityList);
    });
});
