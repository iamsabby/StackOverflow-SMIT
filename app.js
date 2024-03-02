document.addEventListener("DOMContentLoaded", function() {
    const additionalContentList = document.querySelectorAll(".additionalContent");
    const readMoreLinkList = document.querySelectorAll(".readMoreLink");

    readMoreLinkList.forEach((readMoreLink, index) => {
        readMoreLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Toggle the display of the additional content for the corresponding index
            if (additionalContentList[index].style.display === "none") {
                additionalContentList[index].style.display = "inline"; // Display the additional content inline
                readMoreLink.textContent = "Read less";
            } else {
                additionalContentList[index].style.display = "none";
                readMoreLink.textContent = "Read more";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cancelButton = document.getElementById("cancelButton");

    cancelButton.addEventListener("click", function() {
      const confirmation = confirm("Are you sure you want to cancel?");

      if (confirmation) {
        location.reload();
      }
    });
  });

  function redirectToNewPage() {
    window.location.href = "rjvsjs.html";
}

document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.getElementById('saveButton');

    // Add event listener to the save button
    saveButton.addEventListener('click', function () {
        // Fetch input values
        const title = document.getElementById('titleInput').value.trim();
        const category = document.getElementById('categorySelect').value;
        const type = document.querySelector('input[name="type"]:checked').value;
        const status = document.querySelector('input[name="status"]:checked').value;
        const description = document.getElementById('descriptionTextarea').value.trim();

        // Check if any field is empty
        if (title === '' || category === 'Select category' || !type || !status || description === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Construct the URL with query parameters
        const url = `landing page2.html?title=${encodeURIComponent(title)}&category=${encodeURIComponent(category)}&type=${encodeURIComponent(type)}&status=${encodeURIComponent(status)}&description=${encodeURIComponent(description)}`;

        // Redirect to the landing page with the entered data
        window.location.href = url;
    });
});
