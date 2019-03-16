var nightMode = false;
function changeBackground() {
    if (nightMode === true) {
      //If the screen in is night mode before button is pressed
      document.body.style.background = 'rgb(255, 242, 96)';
      document.getElementById('greeting').innerHTML = 'Good Morning!';
      document.getElementById('mainButton').style.background = 'rgb(17, 37, 59)';
      document.getElementById('mainButton').innerHTML = 'Go to bed!';
      nightMode = false;
    } else {
      //If the screen is in morning mode before button is pressed
      document.body.style.background = 'rgb(17, 37, 59)';
      document.getElementById('greeting').innerHTML = 'Good Night!';
      document.getElementById('mainButton').style.background = 'pink';
      document.getElementById('mainButton').innerHTML = 'Wake up!';
      nightMode = true;
    }
}
