const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
qrImage = wrapper.querySelector(".qr-code"),
download = wrapper.querySelector(".download"),
download1 = wrapper.querySelector(".download1"),
generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", () => {
	let qrValue = qrInput.value;
	if (!qrValue){
		alert("Please enter your text first");
		return;
	};
	qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=350x250&data=' + qrValue +' ';
	//download1.href = 'https://api.qrserver.com/v1/create-qr-code/?size=350x250&data=' + qrValue +' ';
	wrapper.classList.add("active");
})

/*function download(source){
    const fileName = source.split('/').pop();
	var el = document.createElement("a");
	el.setAttribute("href", source);
	el.setAttribute("download", fileName);
	document.body.appendChild(el);
 	el.click();
	el.remove();
}*/