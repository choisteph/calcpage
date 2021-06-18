function calculateCaseRiskLevel(){
  console.log("calculate case");
  event.preventDefault();


  valCDCcase = document.querySelector("#cdcCaseResult");
  valMSMcase = document.querySelector("#inputfieldMSMcase").value;

  console.log("msmcase", valMSMcase)

  if (valMSMcase === "Low - A" ){
    valCDCcase.innerHTML = '<b>< 10</b> new cases per 100,000 over last 7 days'
  } else if (valMSMcase === "B - C"){
    valCDCcase.innerHTML = '<b>10 - 49</b> new cases per 100,000 over last 7 days'
  } else if (valMSMcase === "D"){
    valCDCcase.innerHTML = '<b>50 - 99</b> new cases per 100,000 over last 7 days'
  } else {
    valCDCcase.innerHTML = '<b>&#8805; 100</b> new cases per 100,000 over last 7 days'
  }
  
}

function calculatePosRiskLevel(){
  console.log("calculate pos");
  event.preventDefault();


  valCDCpos = document.querySelector("#cdcPosResult");
  valMSMpos = document.querySelector("#inputfieldMSMpos").value;

  console.log("msmpos", valMSMpos)
  if (valMSMpos === "Low" ){
    valCDCpos.innerHTML = '<b>< 5%</b> positive of last 7 days of tests'
  } else if (valMSMpos === "A"){
    valCDCpos.innerHTML = '<b>5 - < 7.99%</b> positive of last 7 days of tests'
  } else if (valMSMpos === "B"){
    valCDCpos.innerHTML = '<b>8 - 9.99%</b> positive of last 7 days of tests'
  } else {
    valCDCpos.innerHTML = '<b>&#8805; 10%</b> positive of last 7 days of tests'
  }
  

  
}
