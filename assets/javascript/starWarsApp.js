var starWars = {
  charDiv_0: document.getElementById("charSelectSlot_0"),
  charDiv_1: document.getElementById("charSelectSlot_1"),
  charDiv_2: document.getElementById("charSelectSlot_2"),
  charDiv_3: document.getElementById("charSelectSlot_3"),

  enemyDiv_0: document.getElementById("enemyChar_0"),
  enemyDiv_1: document.getElementById("enemyChar_1"),
  enemyDiv_2: document.getElementById("enemyChar_2"),

  defenderDiv: document.getElementById("defenderChar"),

  attackResultsDiv: document.getElementById("attacker"),
  ctrAttackResultsDiv: document.getElementById("defender"),


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
  // TODO need to update char display to include name and HP
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
    // ? Why does this being outside of the for loop muck it all up, scope wise  Two days to solve!!!!
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
      //   var attackPower = Math.floor(Math.random() * 20 + 200);
      var attackPower = Math.floor(Math.random() * 20) + 10;
      // * make sure attackPower hasn't been used before
      if (usedAttackPower.includes(attackPower)) {
        attackPower = Math.floor(Math.random() * 20) + 10;
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
      var ctrAttackPower = Math.floor(Math.random() * 20) + 10;
      // * make sure healthPoints hasn't been used before
      if (usedCtrAttackPower.includes(ctrAttackPower)) {
        ctrAttackPower = Math.floor(Math.random() * 20) + 10;
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
        charList[i].defenderChar = false;
      }
    }

    // enemyList = charList;
    // console.log(selectedChar + " vs ");
    // console.log(enemyList);
  },

  // * Dynamically display the Chars to select from
  displayChar: function(charList) {
    // ? How can I make this dynamic vs having to manually pass array info per index
    // ? can the left side here be concatanated together
    this.charDiv_0.innerHTML = charList[0].name;
    this.charDiv_1.innerHTML = charList[1].name;
    this.charDiv_2.innerHTML = charList[2].name;
    this.charDiv_3.innerHTML = charList[3].name;
  },

  // * method for dynamically displaying Char, Enemies
  displayUpdate: function(charList) {
    // console.log("in disPlayUpdate");
    var enemyList = [];
    var defenderFound = false;
    // * Create enemy list
    for (i = 0; i < charList.length; i++) {
      if (charList[i].enemyChar) {
        enemyList.push(charList[i]);
        console.log(charList[i].enemyChar);
      }
    }

    for (i = 0; i < charList.length; i++) {
      //   console.log(charList[i].chosenChar);
      if (charList[i].chosenChar) {
        // console.log("chosenChar " + charList[i].name);
        this.charDiv_0.innerHTML = charList[i].name;
      } else {
        this.charDiv_1.hidden = true;
        this.charDiv_2.hidden = true;
        this.charDiv_3.hidden = true;
      }
    }

    if (enemyList.length === 3) {
      this.enemyDiv_0.innerHTML = enemyList[0].name;
      this.enemyDiv_1.innerHTML = enemyList[1].name;
      this.enemyDiv_2.innerHTML = enemyList[2].name;
    } else if (enemyList.length === 2) {
      this.enemyDiv_0.innerHTML = enemyList[0].name;
      this.enemyDiv_1.innerHTML = enemyList[1].name;
      this.enemyDiv_2.hidden = true;
    } else if (enemyList.length === 1) {
      this.enemyDiv_0.innerHTML = enemyList[0].name;
      this.enemyDiv_1.hidden = true;
      this.enemyDiv_2.hidden = true;
    } else {
      this.enemyDiv_0.hidden = true;
      this.enemyDiv_1.hidden = true;
      this.enemyDiv_2.hidden = true;
    }

    if (enemyList.length <= 2) {
      console.log("enemyList <= 2");
      for (i = 0; i < charList.length; i++) {
        if (charList[i].defenderChar) {
          this.defenderDiv.innerHTML = charList[i].name;
          console.log(charList[i]);
        }
      }
    }
  },

  attackMode: function(attacker, defender) {
    var atkPwr = attacker.attackPower;
    var winner = false;
    while (attacker.healthPoints > 0 && defender.healthPoints > 0) {
        setTimeout(2000);
      console.log(
        "attacker hp: " +
          attacker.healthPoints +
          " | defender hp: " +
          defender.healthPoints
      );

      this.attackResultsDiv.textContent = attacker.name + " attacks for " + attacker.attackPower + " dmg.";
      console.log(
        attacker.name + " attacks for " + attacker.attackPower + " dmg."
      );


      defender.healthPoints -= atkPwr;
      atkPwr += attacker.attackPower;

      this.ctrAttackResultsDiv.textContent = defender.name + " counter attacks for " + defender.ctrAttackPower + " dmg."
      console.log(
        defender.name +
          "counter attacks for " +
          defender.ctrAttackPower +
          " dmg."
      );
      attacker.healthPoints = attacker.healthPoints - defender.ctrAttackPower;
    }
    if (attacker.healthPoints <= 0) {
      console.log(
        attacker.name +
          " losses the battle with " +
          attacker.healthPoints +
          " health remaining!!"
      );
    } else {
      console.log(
        attacker.name +
          " wins the battle with " +
          attacker.healthPoints +
          " health remaining!!"
      );
      winner = true;
    }
    return winner;
  },

  // * Main Method used to start playing the game ***************************** playGame()
  playGame: function() {
    var enemyChar = "";
    var attackerChar = {};
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
    console.log(selectedChar);
    // * Select a defender from the enemyList and redisplay
    $(".enemy").click(function(event) {
      defenderChar = event.target.textContent;
      console.log("defenderChar: " + defenderChar);
      for (i = 0; i < charList.length; i++) {
        if (charList[i].name === defenderChar) {
          console.log(charList[i]);
          charList[i].enemyChar = false;
          charList[i].defenderChar = true;
          console.log(charList[i]);
          defenderChar = charList[i];
          console.log("defenderChar: " + defenderChar);
        }
      }

      starWars.displayUpdate(charList);
    });
    // TODO - (high) Need to redo attack logic to be turn based
    // * add event listener for Attack btn being clicked
    $("#attack").click(function(event) {
      // TODO (low) fix scoping issue so I don't have to reloop to find attackerChar
      for (i = 0; i < charList.length; i++) {
        if (charList[i].chosenChar) {
          attackerChar = charList[i];
        }
      }
      starWars.attackMode(attackerChar, defenderChar);
    });
  }
};

starWars.playGame();
