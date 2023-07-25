 function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    //Pede permição para o uso dos áudios
 classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GYnCcx3W-/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
if (error){
console.error(error);
}else{
    R=Math.floor(Math.random()*255)+1;
    G=Math.floor(Math.random()*255)+1;
    B=Math.floor(Math.random()*255)+1;
    console.log(results);
    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ results[0].confidence*100+"%";
    document.getElementById("result_label").style.color = "rgb("+R+","+G+","+B+")";
    document.getElementById("result_confidence").style.color = "rgb("+R+","+G+","+B+")";
    img1=document.getElementById("alien1");
    img2=document.getElementById("alien2");
    img3=document.getElementById("alien3");
    img4=document.getElementById("alien4");
    if(results[0].label=="Cachorro"){
        img1.src="aliens-01.gif";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";
    }
    else if(results[0].label=="Gato"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.gif";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";
    }
    else if(results[0].label=="Vaca"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.gif";
        img4.src="aliens-04.png";
    }
    else {
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.gif";
    }
    
}
}