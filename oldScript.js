// window.addEventListener("DOMContentLoaded", function () {

        //     const img = document.getElementById("img");
        //     const canvas = document.createElement("canvas");
        //     // const canvas = document.getElementById("canvas");


        //     const ctx = canvas.getContext("2d");

        //     const dpr = window.devicePixelRatio;

        //     console.log("window.devicePixelRatio: ", dpr)

        //     const dpi = 300;
        //     let height = 3.370079; //85.6mm
        //     let width = 2.1251969; //53.98mm
        //     const canvasWidth = width * dpi;
        //     const canvasHeight = height * dpi;

        //     // let width = 4;
        //     // let height = 6;
        //     // console.log(width * dpi * dpr)
        //     canvas.width = canvasWidth;
        //     canvas.height = canvasHeight;
        //     console.log("canvasWidth, canvasHeight: ", canvasWidth, canvasHeight)

        //     ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight)
        //     console.log("canvas.width, canvas.height", canvas.width, canvas.height)
        //     ctx.globalCompositeOperation = "source-over";
        //     // text
        //     ctx.font = "45px Arial";
        //     ctx.fillStyle = "#121e44";
        //     ctx.fillText(2, 100, 540);
        //     ctx.font = "35px Arial";
        //     ctx.fillText("Satish Kumar Sharma", 65, 688);
        //     ctx.fillText("Bindeshwar Pd. Sharma", 65, 773);
        //     ctx.fillText("2022-01", 65, 860);
        //     // ctx.globalCompositeOperation = "destination-over";
        //     ctx.fillStyle = 'red';
        //     ctx.beginPath();
        //     // ctx.ellipse(85, 113, 85, 113, Math.PI, 0, 2 * Math.PI);
        //     ctx.ellipse(415, 440, 165, 180, Math.PI, 0, 2 * Math.PI);
        //     // ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
        //     ctx.fill();

        //     // -----------------------------------------------------------------|
        //     // ctx.fillStyle = 'red';                                           |
        //     // ctx.beginPath();                                                 |
        //     // ctx.ellipse(60, 75, 50, 30, Math.PI * .25, 0, Math.PI * 1.5);    |
        //     // ctx.fill();                                                      |
        //     // -----------------------------------------------------------------|


        //     let stuImg = new Image();
        //     // stuImg.onload = function () {
        //     //     ctx.drawImage(stuImg, 205, 210, 450, 600);
           //     imgLoaded = true;
            //     // };
            //     // stuImg.src = './ch.jpg';
            //     // ctx.clip();

            //     const stuImgPromise = new Promise((resolve, reject) => {
            //         stuImg.onload = function () {
            //             ctx.drawImage(stuImg, 205, 210, 450, 600);
            //  imgLoaded = true;
        //             resolve(true);
        //         };
        //     });

        //     stuImg.src = './ch.jpg';
        //     ctx.clip();

        //     document.body.appendChild(canvas);

        //     const download = async () => {
        //         await stuImgPromise;
        //         const downloadUrl = canvas.toDataURL();
        //         const a = document.createElement("a");
        //         a.href = downloadUrl;
        //         a.setAttribute("download", `I-Card-${new Date().getTime()}`);
        //         a.click();

        //     }

        //     document.getElementById("downloadBtn").addEventListener("click", () => {
        //         download();
        //     })

        //     for (let index = 0; index < 10; index++) {
        //         download();
        //     }

        //     // }
        // })
