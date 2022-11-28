"use strict";
const createICard = (data) => {
    console.log(data)
    // const dpi = data?.dpi || 300;
    // changeable variables
    const realwidth = 2.1251969; //53.98mm
    const realheight = 3.370079; //85.6mm

    // constant varialbes
    const dpi = 300;
    const canvasWidth = realwidth * dpi;
    const canvasHeight = realheight * dpi;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // to create an image element, use document.createElement(element)
    // const iCardImg = document.createElement("img");
    const iCardImg = new Image();
    const iCardImgPromise = new Promise((resolve, reject) => {
        iCardImg.onload = function () {
            ctx.drawImage(iCardImg, 0, 0, canvasWidth, canvasHeight);
            resolve(true);
        };
    });
    // // const img = document.getElementById("img");
    // iCardImg.onload = function () {
    //     // ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    //     console.log("iCardImg.onload");
    // };
    iCardImg.src = "./icard-bg.jpg";

    console.log("canvasWidth, canvasHeight: ", canvasWidth, canvasHeight);

    async function drawIdcard() {

        // ctx.drawImage(iCardImg, 0, 0, canvasWidth, canvasHeight);
        await iCardImgPromise;

        ctx.globalCompositeOperation = "source-over";
        ctx.save();
        // text
        // for std
        ctx.font = "45px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#121e44";
        ctx.fillText(data.std, 110, 540, 85);
        console.log(ctx.measureText(data.std))
        ctx.restore();
        ctx.font = "35px Arial";
        // name
        ctx.fillText(data.name, 65, 688);
        // father's name
        ctx.fillText(data.father, 65, 773);
        // roll
        ctx.fillText(data.roll, 65, 860);
        // ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = 'red';
        ctx.beginPath();
        // ctx.ellipse(85, 113, 85, 113, Math.PI, 0, 2 * Math.PI);
        ctx.ellipse(415, 440, 165, 180, Math.PI, 0, 2 * Math.PI);
        // ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
        ctx.fill();

        const stuImg = new Image();
        const stuImgPromise = new Promise((resolve, reject) => {
            stuImg.onload = function () {
                ctx.drawImage(stuImg, 205, 210, 450, 600);
                // stuImgLoaded = true;
                resolve(true);
            };
        });

        stuImg.src = data.stuImgSrc;
        ctx.clip();

        const download = async () => {
            await stuImgPromise;
            const downloadUrl = canvas.toDataURL();
            const a = document.createElement("a");
            a.href = downloadUrl;
            a.setAttribute("download", `I-Card-${new Date().getTime()}`);
            a.click();
            console.log("downloading")
        }
        // download();
    }
    drawIdcard();

    document.body.appendChild(canvas);
}
