let Car = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = Math.floor(Math.random() * 10);
}

Car.prototype.drawCar = function() {

this.carElement = document.createElement('img');
this.carElement.src = "./img/car.png";

document.body.append(this.carElement);


this.carElement.style.cssText =
	`position: absolute;
	width: 150px;
	height: 200px;
	left: ${this.x}px;
	top: ${this.y}px`;

}



Car.prototype.moveTop = function() {
	this.y -= this.speed;

	this.carElement.style.cssText =
	`position: absolute;
	width: 150px;
	height: 200px;
	left: ${this.x}px;
	top: ${this.y}px`;
}

Car.prototype.moveLeft = function() {
	this.x += 1;
	

	this.carElement.style.cssText =
	`position: absolute;
	width: 150px;
	height: 200px;
	left: ${this.x}px;
	top: ${this.y}px`;
}


let bmw = new Car(50, 400, this.speed);
let nisan = new Car(400, 400, this.speed);

nisan.drawCar();
bmw.drawCar();


setInterval(function() 	{nisan.moveTop();
}, 100)

setInterval(function() {
	bmw.moveTop();
}, 100)
