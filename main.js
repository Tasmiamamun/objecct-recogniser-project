Webcam.set({
    width:350,heihjt:350,image_format:"png",png_quality:90
})

camera=document.getElementById("camera")

Webcam.attach("#camera")
function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='selfie_img'>"
    })
}
console.log("ml5_version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mPgUAMYZA/model.json",model_loaded)
function model_loaded(){
    console.log("model is loaded")
}

function check(){
    img=document.getElementById("selfie_img")
    classifier.classify(img,got_result)
}

function got_result(error,results){
if (error) {
console.log(error)    
} else {console.log(results)
document.getElementById("object").innerHTML=results[0].label
document.getElementById("accurcy").innerHTML=results[0].confidence.toFixed(3)    
}
}