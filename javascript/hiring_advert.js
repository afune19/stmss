<script>
    // JavaScript to handle the popup behavior
    const popup = document.getElementById('jobPopup');
    const closeBtn = document.getElementById('closePopup');

    // Show the popup when the page loads
    window.onload = () => {
        popup.style.display = 'flex';
    };

    // Close the popup when the close button is clicked
    closeBtn.onclick = () => {
        popup.style.display = 'none';
    };
</script>