function boredom(staff){

    const OBJKEYS = Object.keys(staff);
    let boredomScore = 0;
    let departmentScore = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25,
    };


    //loop through Object to obtain the score;
    OBJKEYS.forEach((key) => {
        let department = staff[key];
        console.log(department);
        //add it the department value to the "boredomScore"
        boredomScore += departmentScore[department];
        console.log(boredomScore);
    });

    //After looping through the object, determine, and set return phrase (<= 80: 'kill me now', < 100 & >80: 'i can handle this', 100 or over: 'party time!!')
    //return result phrase
    if (boredomScore <= 80) {
      console.log(`kill me now`);
      return 'kill me now';
    } else if (boredomScore < 100 && boredomScore > 80) {
      console.log(`i can handle this`);
      return 'i can handle this';
    } else {
      console.log(`party time!!`)
      return 'party time!!';
    }

}




/*describe("Example tests",() =>{
    Test.assertEquals(boredom({tim: 'change', jim: 'accounts',
      randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
      laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
      mr: 'finance' }), 'kill me now');
    Test.assertEquals(boredom({ tim: 'IS', jim: 'finance',
      randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
      katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
      alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
    Test.assertEquals(boredom({ tim: 'accounts', jim: 'accounts',
      randy: 'pissing about', sandy: 'finance', andy: 'change',
      katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
      john: 'retail', mr: 'pissing about' }), 'party time!!');
    })*/

    boredom({tim: 'change', jim: 'accounts',
      randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
      laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
      mr: 'finance' });

    boredom({ tim: 'IS', jim: 'finance',
      randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
      katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
      alex: 'regulation', john: 'accounts', mr: 'canteen' });

    boredom({ tim: 'accounts', jim: 'accounts',
      randy: 'pissing about', sandy: 'finance', andy: 'change',
      katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
      john: 'retail', mr: 'pissing about' });

  