const enableWebcamButton = document.getElementById('webcamButton')

// Check if webcam access is supported.
function getUserMediaSupported () {
  return !!(navigator.mediaDevices &&
  navigator.mediaDevices.getUserMedia)
}

// If webcam supported, add event listener to button for when user
// wants to activate it to call enableCam function
if (getUserMediaSupported()) {
  enableWebcamButton.addEventListener('click', enableCam)
} else {
  console.warn('getUserMedia() is not supported by your browser')
}

// Placeholder function
function enableCam (event) {
}
