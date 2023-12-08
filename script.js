//your JS code here. If required.

    <script>
        // Get the counter and button elements
        const counterElement = document.getElementById('counter');
        const incrementBtn = document.getElementById('incrementBtn');

        // Initialize the counter value
        let counterValue = 0;

        // Function to handle button click
        function handleIncrement() {
            // Show the current counter value in an alert
            alert(`Un-incremented value: ${counterValue}`);

            // Increment the counter value
            counterValue++;

            // Update the counter display
            counterElement.textContent = counterValue;
        }

        // Attach the handleIncrement function to the button click event
        incrementBtn.addEventListener('click', handleIncrement);
    </script>
