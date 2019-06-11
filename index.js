// interests chart

var mySeries = [
    {
      values: [115],
      text:'Coding'
    },
    {
      values: [95],
      text: 'Learning new languages'
    },
    {
      values: [92],
      text: 'Personal projects'
    },
    {
      values: [86],
      text:'Travel'
    },
    {
      values: [79],
      text: 'Tattooing'
    },
    {
      values: [68],
      text: 'Bartending'
    },
    {
      values: [63],
      text: 'Muay Thai'
    }
  
];  

var myConfig = {
    type: "pie",
    globals:{
      fontFamily: 'Montserrat'
    },
    legend:{
      verticalAlign: 'middle',
      toggleAction: 'remove',
      marginRight: 60,
      width: 100,
      alpha: 0.1,
      borderWidth: 0,
      highlightPlot: true,
      item:{
        fontColor: "#373a3c",
        fontSize: 12
      }
    },
    backgroundColor: "#fff",
    palette:["#00000","#181818","#303030","#484848","#606060","#707070","#888888","#A0A0A0"],
    plot:{
        refAngle: 270,
        detach: false,
        valueBox:{
          fontColor: "#fff"
        },
        highlightState:{
          borderWidth: 2,
          borderColor: "#000"
        }
    },
    tooltip:{
      placement: 'node:out',
      borderColor:"#373a3c",
      borderWidth: 2
    },
    labels:[
      {
        fontSize: 12,
        textAlign: "left",
        fontColor: "#373a3c"
        
      }
      ],
    series: mySeries

};

zingchart.render({ 
  id : 'myChart', 
  data : myConfig, 
  height: 200, 
  width: 425 
});


zingchart.node_click = function (p) {
    
    var SHIFT_ACTIVE = p.ev.shiftKey;
    var sliceData = mySeries[p.plotindex];
    isOpen = (sliceData.hasOwnProperty('offset-r')) ? (sliceData['offset-r'] !== 0) : false;
    if(isOpen){
        sliceData['offset-r'] = 0;
    }
    else{
        if(!SHIFT_ACTIVE){
            for(var i = 0 ; i< mySeries.length; i++){
                mySeries[i]['offset-r'] = 0;
            }
        }
        sliceData['offset-r'] = 20;
    }
    
    zingchart.exec('myChart', 'setdata',{
        data : myConfig
    });
}