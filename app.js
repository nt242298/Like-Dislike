var likeCount = localStorage.getItem('likeCount') || 0;
var dislikeCount = localStorage.getItem('dislikeCount') || 0;

document.getElementById('likeCount').value = likeCount;
document.getElementById('dislikeCount').value = dislikeCount;

function like() {
    likeCount++;
    document.getElementById('likeCount').value = likeCount;
    localStorage.setItem('likeCount', likeCount);
}

function dislike() {
    dislikeCount++;
    document.getElementById('dislikeCount').value = dislikeCount;
    localStorage.setItem('dislikeCount', dislikeCount);
}