var starWars = {
  charDiv_0: document.getElementById("charSelectSlot_0"),
  charDiv_1: document.getElementById("charSelectSlot_1"),
  charDiv_2: document.getElementById("charSelectSlot_2"),
  charDiv_3: document.getElementById("charSelectSlot_3"),

  enemyDiv_0: document.getElementById("enemyChar_0"),
  enemyDiv_1: document.getElementById("enemyChar_1"),
  enemyDiv_2: document.getElementById("enemyChar_2"),

  char: {
    healthPoints: 0,
    attackPower: 0,
    ctrAttackPower: 0,
    name: "",
    charImage: "",
    chosenChar: false,
    enemyChar: false,
    defenderChar: false
  },

  // * method to initilize the various chars stats
  initCharStat: function() {
    console.log("In initCharStat");
    // ! if you add to initCharList, you need to add charDiv_ as well..for each one added..and each row
    var initCharList = ["Darth Vader", "Luke SkyWalker", "Hans Solo", "Yoda"];
    // var char = {
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
      charList[i] = char;

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
    console.log("Out initCharStat");
    return charList;
  },

  // * remove selectedChar from charList and enemyList
  updateTeams: function(selectedChar, charList) {
    for (var i = 0; i < charList.length; i++) {
      console.log(charList[i]);
      if (charList[i].name === selectedChar) {
        charList[i].chosenChar = true;
        charList[i].enemyChar = false;
        charList[i].defenderChar = false;
      } else {
        charList[i].chosenChar = false;
        charList[i].enemyChar = true;
        charList[i].defenderChar = true;
      }
    }

    enemyList = charList;
    console.log(selectedChar + " vs ");
    console.log(enemyList);
  },

  // * Dynamically display the Chars to select from
  displayChar: function(charList) {
    // ? How can I make this dynamic vs having to manually pass array info per index
    this.charDiv_0.innerHTML = charList[0].name;
    this.charDiv_1.innerHTML = charList[1].name;
    this.charDiv_2.innerHTML = charList[2].name;
    this.charDiv_3.innerHTML = charList[3].name;
  },

  // * method for dynamically displaying Char, Enemies
  displayUpdate: function(charList) {
    console.log("in disPlayUpdate");
    var enemyList = [];
    var defenderFound = false;
    // * Create enemy list
    for (i = 0; i < charList.length; i++) {
      if (charList[i].enemyChar) {
        enemyList.push(charList[i]);
      }
    }
    // // * checks for defender, if found, removes
    // for (i = 0; i < enemyList.length; i++) {
    //   if (enemyList[i].defenderChar) {
    //     enemyList.splice(i, 1);
    //     defenderFound = true;
    //   }
    // }

    for (i = 0; i < charList.length; i++) {
      console.log(charList[i].chosenChar);
      if (charList[i].chosenChar) {
        console.log("got a match " + charList[i].name);
        this.charDiv_0.innerHTML = charList[i].name;
      } else {
        this.charDiv_1.innerHTML = "";
        this.charDiv_2.innerHTML = "";
        this.charDiv_3.innerHTML = "";
      }
    }

    this.enemyDiv_0.innerHTML = enemyList[0].name;
    this.enemyDiv_1.innerHTML = enemyList[1].name;
    this.enemyDiv_2.innerHTML = enemyList[2].name;

    // if (defenderFound) {
    //   this.enemyDiv_0.innerHTML = enemyList[0].name;
    //   this.enemyDiv_1.innerHTML = enemyList[1].name;
    // } else {
    //   this.enemyDiv_0.innerHTML = enemyList[0].name;
    //   this.enemyDiv_1.innerHTML = enemyList[1].name;
    //   this.enemyDiv_2.innerHTML = enemyList[2].name;
    // }

   
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

  // * Main Method used to start playing the game ***************************** playGame()
  playGame: function() {
    var enemyChar = "";
    console.log("in method:playGame");
    var selectedChar = "";
    // * Call method to init the charStats
    charList = starWars.initCharStat();
    // * Call method to display chars
    starWars.displayChar(charList);

    // * Assigns clicked char textCntent to var selectedChar
    $(".char").click(function(event) {
      //   $("#col-4").html("clicked: " + event.target.nodeName);
      selectedChar = event.target.textContent;
      console.log(selectedChar);

      // * Program is on hold until a div is clicked (Char chosen)
      // * now we update the various char array holders and then make the display calls
      starWars.updateTeams(selectedChar, charList);
      starWars.displayUpdate(charList);
      // ? Can I break out of the click event
      
    });

    $(".enemy").click(function(event) {
      //   $("#col-4").html("clicked: " + event.target.nodeName);
      enemyChar = event.target.textContent;
      console.log(enemyChar);
      for (i = 0; i < charList.length; i++) {
        if (charList[i].name === enemyChar) {
          charList[i].enemyChar = false;
          charList[i].defenderChar = true;
        }
      }
      console.log(enemyChar);
    //   starWars.displayUpdate(charList);
    });
  }
};

console.log("starWarsApp.playGame()");
starWars.playGame();
