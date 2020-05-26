//const nano = require('nano')('http://admin:90024@localhost:5984');
const nano = require('nano')('http://admin:90024@172.26.131.147:5984');

//=================================== get views of Income========================================
function Income_getData(){
  dbIncome.view('DesignDoc', 'getData', {
    'include_docs': true,
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc);
    });
  });
}

//------------------------function for City reduce views---------------------------
function Income_viewsumByCity(){
  dbIncome.view('DesignDoc', 'sumByCity', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true',
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Income_viewnumOfCity(){
  dbIncome.view('DesignDoc', 'numOfCity', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

//------------------------function for State reduce views---------------------------
function Income_viewsumByState(){
  dbIncome.view('DesignDoc', 'sumByState', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true',
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Income_viewnumOfState(){
  dbIncome.view('DesignDoc', 'numOfState', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

//============================================= get views of Age========================================
//------------------------function for city reduce views---------------------------
function Age_viewnumOfCity(){
  dbAge.view('DesignCity', 'numOfCity', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    console.log(body);
    return body;

    // body.rows.forEach((doc) => {
    //   console.log(doc.key,doc.value);
    // });
  });
}

function Age_viewsumByCity_0_4(){
  dbAge.view('DesignCity', 'sumByCity_0_4', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByCity_5_9(){
  dbAge.view('DesignCity', 'sumByCity_5_9', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByCity_10_14(){
  dbAge.view('DesignCity', 'sumByCity_10_14', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByCity_15_19(){
  dbAge.view('DesignCity', 'sumByCity_0_4', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByCity_20_24(){
  dbAge.view('DesignCity', 'sumByCity_20_24', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByCity_25_29(){
  dbAge.view('DesignCity', 'sumByCity_25_29', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByCity_30_34(){
  dbAge.view('DesignCity', 'sumByCity_30_34', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByCity_35_39(){
  dbAge.view('DesignCity', 'sumByCity_35_39', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByCity_40_44(){
  dbAge.view('DesignCity', 'sumByCity_40_44', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByCity_45_49(){
  dbAge.view('DesignCity', 'sumByCity_45_49', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByCity_50_54(){
  dbAge.view('DesignCity', 'sumByCity_50_54', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

//-----------------------------function for state reduce views-------------------------------
function Age_viewnumOfState(){
  dbAge.view('DesignState', 'numOfState', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_0_4(){
  dbAge.view('DesignState', 'sumByState_0_4', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_5_9(){
  dbAge.view('DesignState', 'sumByState_5_9', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_10_14(){
  dbAge.view('DesignState', 'sumByState_10_14', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_15_19(){
  dbAge.view('DesignState', 'sumByState_0_4', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_20_24(){
  dbAge.view('DesignState', 'sumByState_20_24', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_25_29(){
  dbAge.view('DesignState', 'sumByState_25_29', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_30_34(){
  dbAge.view('DesignState', 'sumByState_30_34', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_35_39(){
  dbAge.view('DesignState', 'sumByState_35_39', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_40_44(){
  dbAge.view('DesignState', 'sumByState_40_44', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_45_49(){
  dbAge.view('DesignState', 'sumByState_45_49', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Age_viewsumByState_50_54(){
  dbAge.view('DesignState', 'sumByState_50_54', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'

  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}
//---------------------------------------get all the doc values-----------------------------------
function Age_getData(){
  dbAge.view('DesignData', 'getdata', {
    'include_docs': true,
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc);
    });
  });
}

//============================================= get views of Education========================================
//------------------------function for getting all doc values---------------------------
function Edu_getData(){
  dbEdu.view('DesignDoc', 'getdata', {
    'include_docs': true,
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc);
    });
  });
}

//------------------------function for city reduce views---------------------------
function Edu_viewnumOfCity(){
  dbEdu.view('DesignDoc', 'numOfCity', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByCity_infants_primary(){
  dbEdu.view('DesignDoc', 'sumByCity_infants_primary', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByCity_other_type_educ_instit(){
  dbEdu.view('DesignDoc', 'sumByCity_other_type_educ_instit', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByCity_secondary(){
  dbEdu.view('DesignDoc', 'sumByCity_secondary', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByCity_tec_furt_educ_inst(){
  dbEdu.view('DesignDoc', 'sumByCity_tec_furt_educ_inst', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByCity_tot_p(){
  dbEdu.view('DesignDoc', 'sumByCity_tot_p', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByCity_uni_other_tert_instit(){
  dbEdu.view('DesignDoc', 'sumByCity_uni_other_tert_instit', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

//------------------------function for state reduce views---------------------------
function Edu_viewnumOfStatae(){
  dbEdu.view('DesignDoc', 'numOfState', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByState_infants_primary(){
  dbEdu.view('DesignDoc', 'sumByState_infants_primary', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByState_other_type_educ_instit_tot_p(){
  dbEdu.view('DesignDoc', 'sumByState_other_type_educ_instit_tot_p', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByState_secondary(){
  dbEdu.view('DesignDoc', 'sumByState_secondary', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByState_tec_furt_educ_inst(){
  dbEdu.view('DesignDoc', 'sumByState_tec_furt_educ_inst', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByState_tot_p(){
  dbEdu.view('DesignDoc', 'sumByState_tot_p', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

function Edu_viewsumByState_uni_other_tert_instit(){
  dbEdu.view('DesignDoc', 'sumByState_uni_other_tert_instit', {
    //'keys':['Melbourne','Brisbane'],
    'group':'true'
  }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc.key,doc.value);
    });
  });
}

//============================================= get views of Tweets========================================
function Tweets_countByState(){
  dbTest.view('DesignDoc', 'countByState', {
  'keys':[[1,'NSW'],[1,'VIC'],[1,'QLD'],[1,'SA'],[1,'WA'],[1,'TAS'],[1,'NT'],[1,'ACT']],
  //'keys':[[0,'NSW'],[0,'VIC'],[0,'QLD'],[0,'SA'],[0,'WA'],[0,'TAS'],[0,'NT'],[0,'ACT']],
  'group':'true',
  //'stale':'update_after'
  'stale':'ok'
}).then((body) => {
  body.rows.forEach((doc) => {
    console.log(doc.key,doc.value);
  });
});
}

function Tweets_countByCity(){
  dbTest.view('DesignDoc', 'countByCity', {
  'keys':[[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],[1,15]], //related tweets
  //'keys':[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],[0,15]],  //not related tweets
  'group':'true',
  'stale':'update_after'
}).then((body) => {
  body.rows.forEach((doc) => {
    console.log(doc.key,doc.value);
  });
});
}

//=================================================use view functions===========================================
//-----------------------------------------connnect databases--------------------------------
const dbAge = nano.use('aurin_age')
const dbIncome = nano.use('aurin_income')
const dbEdu = nano.use('aurin_edu')
const dbTest = nano.use('streaming-tweets-aggregate')
//------------------------------------------aurin_income-------------------------------
//Income_viewnumOfCity()
//Income_viewsumByCity()

//Income_viewsumByState()
//Income_viewnumOfState()
//Income_getData()


//---------------------------------------aurin_age------------------------------------------
//Age_getData()
//Age_viewnumOfCity()
//Age_viewsumByCity_0_4()
//Age_viewsumByCity_5_9()
//Age_viewsumByCity_10_14()
//Age_viewsumByCity_15_19()
//Age_viewsumByCity_20_24()
//Age_viewsumByCity_25_29()
//Age_viewsumByCity_30_34()
//Age_viewsumByCity_35_39()
//Age_viewsumByCity_40_44()
//Age_viewsumByCity_45_49()
//Age_viewsumByCity_50_54()

//Age_viewnumOfState()
//Age_viewsumByState_0_4()
//Age_viewsumByState_5_9()
//Age_viewsumByState_10_14()
//Age_viewsumByState_15_19()
//Age_viewsumByState_20_24()
//Age_viewsumByState_25_29()
//Age_viewsumByState_30_34()
//Age_viewsumByState_35_39()
//Age_viewsumByState_40_44()
//Age_viewsumByState_45_49()
//Age_viewsumByState_50_54()


//--------------------------------------aurin_education--------------------------------
//Edu_getData()
//Edu_viewnumOfCity()
//Edu_viewsumByCity_infants_primary()
//Edu_viewsumByCity_other_type_educ_instit()
//Edu_viewsumByCity_secondary()
//Edu_viewsumByCity_tec_furt_educ_inst()
//Edu_viewsumByCity_tot_p()
//Edu_viewsumByCity_uni_other_tert_instit()

//Edu_viewnumOfStatae()
//Edu_viewsumByState_infants_primary()
//Edu_viewsumByState_other_type_educ_instit_tot_p()
//Edu_viewsumByState_secondary()
//Edu_viewsumByState_tec_furt_educ_inst()
//Edu_viewsumByState_tot_p()
//Edu_viewsumByState_uni_other_tert_instit()

//--------------------------------------streaming-tweets-aggregate--------------------------------
//Tweets_countByState()
//Tweets_countByCity()