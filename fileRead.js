// Add an event listener to the file input
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the first selected file
    const reader = new FileReader(); // Create a filereader object

    if (file) {
        

        // Define what happens when the file is successfully read
        reader.onload = function(e) {
            const contents = e.target.result; // The file content as a text string
            console.log(contents);
            // ------- BACKGROUND THEME LOGIC
            if(contents.includes("Background - Black")) { // background format do the other elements the same way.
                document.body.style.backgroundColor = "black";
            }
            else if(contents.includes("Background - Red")) {
                document.body.style.backgroundColor = "red";
            }

            // DICE COLOR LOGIC
            if(contents.includes("Dice - Black")) { // Dice format (Background of dice)
                document.querySelector('.dice-1').style.backgroundColor = "black";
                document.querySelector('.dice-2').style.backgroundColor = "black";
            }

            // Dot COLOR LOGIC
            if(contents.includes("Dots - Black")) { // Dots color format
                
            }
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