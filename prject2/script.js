// Exercise 1: Interactive Profile Card
// Write your implementation under each TODO.

const profile = { name: 'Alex Rivera', role: 'Frontend Learner', bio: 'Building things for the web.', followers: 128 };
const followButton = document.querySelector('#follow-button');
const followerCount = document.querySelector('#follower-count');
let isFollowing = false;
const biotext = document.querySelector('#bio-text')
const editbio = document.querySelector('#edit-bio-btn')
function renderProfile() {
  // TODO: render follower count, button label and aria-pressed.
  if (isFollowing){
   followerCount.textContent  =  profile.followers + 1
   followButton.textContent = "following"
   followButton.setAttribute("aria-pressed" , "true")
  }else{
    followerCount.textContent = profile.followers
    followButton.textContent = "follw"
    followButton.setAttribute("aria-pressed" , "false")
  }
}

followButton.addEventListener('click', () => {
  // TODO: toggle following state and update the UI.
  isFollowing = !isFollowing
  renderProfile();

});
editbio.addEventListener('click', function(){
  var newbio = prompt("edit your bio:" , biotext.textContent)
  if (newbio) {
  biotext.textContent = newbio;
}
})
renderProfile();
