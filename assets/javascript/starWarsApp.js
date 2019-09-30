var starWars = {
  //   charList: ["Darth Vader", "Luke SkyWalker", "Hans Solo", "Yoda"],
//   enemyList: ["Darth Vader", "Luke SkyWalker", "Hans Solo", "Yoda"],

  char: {
    healthPoints: 0,
    attackPower: 0,
    ctrAttackPower: 0,
    name: "",
    charImage: ""
  },

  // * method to initilize the various chars stats
  initCharStat: function() {
    console.log("In initCharStat........");
    // ! if you add to initCharList, you need to add div as well..for each one added..and each row
    var initCharList = ["Darth Vader", "Luke SkyWalker", "Hans Solo", "Yoda"];
    // let char = {
    //   healthPoints: 0,
    //   attackPower: 0,
    //   ctrAttackPower: 0,
    //   name: "",
    //   charImage: ""
    // };
    // ? Why does this beinbg outside of the for loop muck it all up, scope wise
    var usedAttackPower = [];
    var usedHealthPoints = [];
    var usedCtrAttackPower = [];
    var charList = [];
    console.log("before for loop: " +  charList);

    for (var i = 0; i < initCharList.length; i++) {
        var char = {
            healthPoints: 0,
            attackPower: 0,
            ctrAttackPower: 0,
            name: "",
            charImage: ""
          };
      char.name = initCharList[i];
      // * generate random attackPower
      var attackPower = Math.floor(Math.random() * 100 + 200);
      // * make sure attackPower hasn't been used before
      if (usedAttackPower.includes(attackPower)) {
        attackPower = Math.floor(Math.random() * 100 + 200);
      }
      char.attackPower = attackPower;

      // * generate random healthPoints
      var healthPoints = Math.floor(Math.random() * 100 + 200);
      // * make sure healthPoints hasn't been used before
      if (usedHealthPoints.includes(healthPoints)) {
        healthPoints = Math.floor(Math.random() * 100 + 200);
      }
      char.healthPoints = healthPoints;

      // * generate random ctrAttackPower
      var ctrAttackPower = Math.floor(Math.random() * 100 + 200);
      // * make sure healthPoints hasn't been used before
      if (usedCtrAttackPower.includes(ctrAttackPower)) {
        ctrAttackPower = Math.floor(Math.random() * 100 + 200);
      }
      char.ctrAttackPower = ctrAttackPower;

      // * assign the newly created Char object to charList array
      console.log("index: " + i);
      charList[i] = char;
      console.log("name is: " + charList[i].name);

    //   console.log(
    //     "i: " +
    //       i +
    //       " " +
    //       char.name +
    //       " " +
    //       char.healthPoints +
    //       " " +
    //       char.attackPower +
    //       " " +
    //       char.ctrAttackPower +
    //       "i: " +
    //       i +
    //       " " +
    //       charList[i].name +
    //       " " +
    //       charList[i].healthPoints +
    //       " " +
    //       charList[i].attackPower +
    //       " " +
    //       charList[i].ctrAttackPower
    //   );
    }
    // TODO:  Why always Yoda!!  
    console.log("After for loop");
    // ! BLOCKER -- 
    // console.log(typeof charList);
    // console.log(charList.length);
    // console.log("Does this change? " + charList[0].name);
    // console.log("Does this change? " + charList[1].name);
    // console.log("Does this change? " + charList[2].name);
    // console.log("Does this change? " + charList[3].name);
  
    return charList;
  },

  // * remove selectedChar from charList and enemyList
  updateTeams: function(selectedChar, charList) {
    for (var i = 0; i < charList.length; i++) {
        console.log(charList[i]);


    //   if (charList[i].name === selectedChar) {
    //     console.log("before: " + charList[i]);
    //     charList.splice(i, 1);
    //     console.log("after", + charList[i]);

    //     // starWars.enemyList.splice(i, 1);
    //   }
    }
    enemyList = charList;
    console.log(selectedChar + " vs ");
    console.log(enemyList);
  },

// * Dynamically display the Chars to select from
  displayChar: function(charList) {
      console.log(charList);
      console.log(charList[0].name);
      var charDiv_0 = document.getElementById("charSelectSlot_0");
      var charDiv_1 = document.getElementById("charSelectSlot_1");
      var charDiv_2 = document.getElementById("charSelectSlot_2");
      var charDiv_3 = document.getElementById("charSelectSlot_3");
     
      charDiv_0.innerHTML = charList[0].name;
      charDiv_1.innerHTML = charList[1].name;
      charDiv_2.innerHTML = charList[2].name;
      charDiv_3.innerHTML = charList[3].name;
    },


  // * Dynamically display the Enemys to fight
  displayEnemy: function(enemyList) {
    console.log(charList);
    console.log(charList[0].name);
  
    var enemyDiv_0 = document.getElementById("EnemycharSelectSlot_0");
    var enemyDiv_1 = document.getElementById("EnemycharSelectSlot_1");
    var enemyDiv_2 = document.getElementById("EnemycharSelectSlot_2");

  
    enemyDiv_0.innerHTML = enemyList[0].name;
    enemyDiv_1.innerHTML = enemyList[1].name;
    enemyDiv_2.innerHTML = enemyList[2].name;
},

  // * Main Method used to start playing the game
  playGame: function() {
    console.log("in method:playGame");
    var selectedChar = "";
    // * Call method to init the charStats
    charList = starWars.initCharStat();
    starWars.displayChar(charList);
    

    // * Assigns clicked divs textCntent to var selectedChar
    $("body").click(function(event) {
      $("#col-4").html("clicked: " + event.target.nodeName);
      selectedChar = event.target.textContent;
      console.log(selectedChar);

      starWars.updateTeams(selectedChar, charList);
    });
  }
};

console.log("starWarsApp.playGame()");
starWars.playGame();
