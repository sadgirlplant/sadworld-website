<script>
    function copyAddress() {
        var copyText = document.getElementById("solanaAddress");
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand("copy");

        // Show confirmation alert
        alert("Copied: " + copyText.value);
    }
</script>
