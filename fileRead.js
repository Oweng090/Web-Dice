// Add an event listener to the file input
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the first selected file

    if (file) {
        const reader = new FileReader(); // Create a filereader object

        // Define what happens when the file is successfully read
        reader.onload = function(e) {
            const contents = e.target.result; // The file content as a text string
            console.log(contents);
            // Display the content in the designated div
            document.getElementById('fileContentDisplay').innerText = contents;
        };

        // Define what happens if an error occurs
        reader.onerror = function(e) {
            console.error('Error reading file:', e.target.error);
        };

        // Read the file as text
        reader.readAsText(file);
    }
});