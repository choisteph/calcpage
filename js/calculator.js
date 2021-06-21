function calculateCaseRiskLevel(){
  console.log("calculate case");
  event.preventDefault();


  valCDCcaseResult = document.querySelector("#cdcCaseResult");
  valMSMcaseResult = document.querySelector("#msmCaseResult");

  // weekly cases = CDC numbers
  let weeklyCases = document.querySelector("#inputfieldWeeklyCase").value;

  // daily cases = MI Start Map numbers
  let dailyCases = document.querySelector("#inputfieldDailyCase").value;

  let calcedW = 0
  let calcedD = 0
  let roundedD = 0
  let roundedW = 0

  // in the case we have CDC:
  if (weeklyCases){
    console.log("weekly cases:", weeklyCases)
    calcedD = weeklyCases * 10 / 7
    roundedD = Math.round(calcedD)
    console.log("rounded Daily given weekly", roundedD)
  }
  // if we have MI Start Map instead:
  if (dailyCases){
    console.log("daily cases:", dailyCases)
    calcedW = dailyCases * 7 / 10
    roundedW = Math.round(calcedW)
    console.log("rounded Weeklyy given daily", roundedW)
  }

  // populating results bar based on what numbers we were given:
  if (weeklyCases){
    if (weeklyCases < 10){
      valCDCcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square lowCDC"></i> Low</h5> <p>< 10 new cases per 100,000 over last 7 days</p>'
    } else if (weeklyCases >= 10 && weeklyCases < 50){
      valCDCcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square modCDC"></i> Moderate</h5><p>10 - 49 new cases per 100,000 over last 7 days</p>'
    } else if (weeklyCases >= 50 && weeklyCases < 100){
      valCDCcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square subCDC"></i> Substantial</h5><p>50 - 99 new cases per 100,000 over last 7 days</p>'
    } else if (weeklyCases >= 100){
      valCDCcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square highCDC"></i> High</h5><p>&#8805; 100 new cases per 100,000 over last 7 days</p>'
    }
    
    if (roundedD < 7){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square lowMSM"></i> Low</h5> <p>< 7 average daily cases per million'
    } else if (roundedD >= 7 && roundedD < 20){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square aMSM"></i> A</h5> <p>7 - 20 average daily cases per million'
    } else if (roundedD >= 20 && roundedD < 40){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square bMSM"></i> B</h5> <p>20 - 40 average daily cases per million'
    } else if (roundedD >= 40 && roundedD < 70){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square cMSM"></i> C</h5> <p>40 - 70 average daily cases per million'
    } else if (roundedD >= 70 && roundedD < 150){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square dMSM"></i> D</h5> <p>70 - 150 average daily cases per million'
    } else if (roundedD >= 150){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"> <i class="fas fa-square eMSM"></i>E</h5> <p>&#8805; 150 average daily cases per million'
    }

  }

  if (dailyCases){
    if (dailyCases < 7){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square lowMSM"></i> Low</h5> <p>< 7 average daily cases per million'
    } else if (dailyCases >= 7 && dailyCases < 20){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square aMSM"></i> A</h5> <p>7 - 20 average daily cases per million'
    } else if (dailyCases >= 20 && dailyCases < 40){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square bMSM"></i> B</h5> <p>20 - 40 average daily cases per million'
    } else if (dailyCases >= 40 && dailyCases < 70){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square cMSM"></i> C</h5> <p>40 - 70 average daily cases per million'
    } else if (dailyCases >= 70 && dailyCases < 150){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square dMSM"></i> D</h5> <p>70 - 150 average daily cases per million'
    } else if (dailyCases >= 150){
      valMSMcaseResult.innerHTML = '<h5 class="riskLevelH"> <i class="fas fa-square eMSM"></i>E</h5> <p>&#8805; 150 average daily cases per million'
    }

    if (roundedW < 10){
      valCDCcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square lowCDC"></i> Low</h5> <p>< 10 new cases per 100,000 over last 7 days</p>'
    } else if (roundedW >= 10 && roundedW < 50){
      valCDCcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square modCDC"></i> Moderate</h5><p>10 - 49 new cases per 100,000 over last 7 days</p>'
    } else if (roundedW >= 50 && roundedW < 100){
      valCDCcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square subCDC"></i> Substantial</h5><p>50 - 99 new cases per 100,000 over last 7 days</p>'
    } else if (roundedW >= 100){
      valCDCcaseResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square highCDC"></i> High</h5><p>&#8805; 100 new cases per 100,000 over last 7 days</p>'
    }
  }

  // document.querySelector('#caseForm').reset()
  
}

function calculatePosRiskLevel(){
  console.log("calculate pos");
  event.preventDefault();


  valCDCposResult = document.querySelector("#cdcPosResult");
  valMSMposResult = document.querySelector("#msmPosResult");


  let posTests = document.querySelector("#inputfieldPercentPos").value
  console.log(posTests)
  if (posTests < 5){
    valCDCposResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square lowCDC"></i> Low</h5> <p>< 5% positive of last 7 days of tests</p>'
  } else if (posTests >= 5 && posTests < 8){
    valCDCposResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square modCDC"></i> Moderate</h5><p>5 - < 8% positive of last 7 days of tests</p>'
  } else if (posTests >= 8 && posTests < 10){
    valCDCposResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square subCDC"></i> Substantial</h5><p>8 - 10% positive of last 7 days of tests</p>'
  } else if (posTests >= 10){
    valCDCposResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square highCDC"></i> High</h5><p>&#8805; 10% positive of last 7 days of tests</p>'
  }

  if (posTests < 3){
    valMSMposResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square lowMSM"></i> Low</h5> <p>< 3% positive of last 7 days of tests</p>'
  } else if (posTests >=3 && posTests < 7){
    valMSMposResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square aMSM"></i> A</h5> <p>3 - 7% positive of last 7 days of tests</p>'
  } else if (posTests >= 7 && posTests < 10){
    valMSMposResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square bMSM"></i> B</h5> <p>7 - 10% positive of last 7 days of tests</p>'
  } else if (posTests >= 10 && posTests < 15){
    valMSMposResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square cMSM"></i> C</h5> <p>10 - 15% positive of last 7 days of tests</p>'
  } else if (posTests >= 15 && posTests < 20){
    valMSMposResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square dMSM"></i> D</h5> <p>15 - 20% positive of last 7 days of tests</p>'
  } else  if (posTests >= 20){
    valMSMposResult.innerHTML = '<h5 class="riskLevelH"><i class="fas fa-square eMSM"></i> E</h5> <p>&#8805; 20% positive of last 7 days of tests</p>'
  }  

  // document.querySelector('#posForm').reset()
}
