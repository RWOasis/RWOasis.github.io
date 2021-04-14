DeviceMotionEvent.requestPermission()
.then(response => {
  if (response == 'granted') {
    window.addEventListener('devicemotion', (e) => {
      // do something with e
    })
  }
}).catch(console.error)
