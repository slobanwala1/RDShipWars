var rbaPosAvg = 0;
var rbaNegAvg = 0;
var rbaNeuAvg = 0;
var textBlobPosAvg = 0;
var textBlobNegAvg = 0;
var textBlobNeuAvg = 0;
var vaderPosAvg = 0.00;
var vaderNegAvg = 0.00;
var vaderNeuAvg = 0.00;
var totalCount = 0;

function fetchData(fileLocation, analysisType) {
  d3.csv(fileLocation).then(function(data) {
    data.filter(function(d, i) {
      if(isNaN(d.pos) == false) {
        // posVal = posVal.toFixed(2);
        if (analysisType == 'rba') {
          rbaPosAvg = rbaPosAvg + parseFloat(d.pos);
          rbaNegAvg = rbaNegAvg + parseFloat(d.neg);
          rbaNeuAvg = rbaNeuAvg + parseFloat(d.neu);
        } else if (analysisType == 'textBlob') {

        } else if (analysisType == 'vader') {

        } else {
          // do nothing
        }

      }


      totalCount = totalCount+1;
    });
  }).then(function(data) {
    console.log('totalCount is: '+totalCount);
    console.log('PosAvg is: '+rbaPosAvg/totalCount);
    console.log('negAvg is: '+rbaNegAvg/totalCount);
    console.log('neuAvg is: '+rbaNeuAvg/totalCount);
  });
}

function init(ship) {
  rbaFile = "../rba files/"+ship+"_rba.csv";
  fetchData(rbaFile, "rba");
  //rbaPosAvg = rbaPosAvg / totalCount;
  //rbaNegAvg = rbaNegAvg / totalCount;
  //rbaNeuAvg = rbaNeuAvg / totalCount;
  //console.log('totalCount is: '+totalCount);
  //console.log('rbaAvg: '+rbaPosAvg+' rbaNegAvg: '+rbaNegAvg+' rbaNeuAvg: '+rbaNeuAvg);
  textBlobFile = "";
  //fetchData(textBlobFile, "textBlob");
  vaderFile = "";
  //fetchData(vaderFile, "vader");
}