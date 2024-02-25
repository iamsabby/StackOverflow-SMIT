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