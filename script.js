function filterItems() {
    const pickupLocation = document.getElementById('pickup-location').value.toLowerCase();
    const pickupDateTime = document.getElementById('pickup-date-time').value;
    const dropoffDateTime = document.getElementById('dropoff-date-time').value;
    const residence = document.getElementById('residence').value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemLocation = item.getAttribute('data-location').toLowerCase();
        const itemPickupTime = item.getAttribute('data-pickup-time');
        const itemDropoffTime = item.getAttribute('data-dropoff-time');
        const itemResidence = item.textContent.toLowerCase();

        const isLocationMatch = itemLocation.includes(pickupLocation);
        const isPickupTimeMatch = !pickupDateTime || (new Date(itemPickupTime) >= new Date(pickupDateTime));
        const isDropoffTimeMatch = !dropoffDateTime || (new Date(itemDropoffTime) <= new Date(dropoffDateTime));
        const isResidenceMatch = itemResidence.includes(residence);

        if (isLocationMatch && isPickupTimeMatch && isDropoffTimeMatch && isResidenceMatch) {
            item.style.display = 'inline-block';
        } else {
            item.style.display = 'none';
        }
    });
}

function selectResidence(event) {
    const residenceInput = document.getElementById('residence');
    if (event.target.classList.contains('item')) {
        residenceInput.value = event.target.textContent;
    }
}