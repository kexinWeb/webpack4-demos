import MyImage from './my-image.png'

var app = document.getElementById('app')
app.innerHTML = 'Hello webpack'

var image = new Image()
image.src = MyImage
console.log(MyImage)
app.appendChild(image)
