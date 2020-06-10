$('.review').fadeIn();
$('#flashMessage').slideDown(1000).delay(2000).slideUp(1000);
$('#submitBtn').click(function () {
    const userName = $('#userNameInput').val();
    const gameReview = $('#gameReviewInput').val();
    const h3Heading = $("<h3></h3>").text(userName);
    const paragraphReview = $("<p></p>").text(gameReview);
    $('#newReviews').append(h3Heading);
    $('#newReviews').append(paragraphReview);
    $('#userNameInput').val("");
    $('#gameReviewInput').val("");
    $('#userNameInput').focus();
});

