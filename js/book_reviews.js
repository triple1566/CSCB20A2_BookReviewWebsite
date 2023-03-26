// This is for indiv. book reviews. (On Book Pages)
const bookReviewSubmitButton = document.querySelector("#review-submit");
if (bookReviewSubmitButton) {
  bookReviewSubmitButton.addEventListener("click", addReview);
}
function addReview(){
  const bookReviewInput = document.querySelector("#review-input");
  const bookReviewList = document.querySelector("#review-list");

  const bookReviewText = bookReviewInput.value;
  if (bookReviewText === "") {
    alert("You have not entered any review.");
    return;
  }

  const newBookReview = document.createElement("li"); // <li> </li>
  newBookReview.innerText = bookReviewText;

  bookReviewList.append(newBookReview);
  bookReviewInput.value = "";
}

