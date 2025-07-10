const btnEle = document.getElementById("generate-btn");
const imgEle = document.getElementById("qr-img");
const boxEle = document.getElementById("img-box");
const inputEle = document.getElementById("qr-text");
const downloadBtn = document.getElementById("download-btn");
const toast = document.getElementById("toast");

btnEle.addEventListener("click", () => {
    const qrData = inputEle.value.trim();

    if (qrData.length === 0) {
        alert("Please enter some text or a URL!");
        return;
    }

    imgEle.src = "";
    boxEle.classList.remove("show-img");
    downloadBtn.classList.add("hidden");

    imgEle.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;

    imgEle.onload = () => {
        boxEle.classList.add("show-img");
        downloadBtn.href = imgEle.src;
        downloadBtn.classList.remove("hidden");
        showToast("QR Code Generated!");
    };
});

function showToast(message) {
    toast.textContent = message;
    toast.style.visibility = "visible";
    setTimeout(() => {
        toast.style.visibility = "hidden";
    }, 3000);
}
