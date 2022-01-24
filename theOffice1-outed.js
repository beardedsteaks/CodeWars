/* This problem is titled The Office I - Outed and is from the 7 kyu level of CodeWars.
This kata was written by: ???? */

function outed(meet, boss) {

    let bossFeeling = meet[boss];
    let happinessSum = 0;
    const OBJECTKEYS = Object.keys(meet);
    
    OBJECTKEYS.forEach((OBJECTKEY, index) => {
        happinessSum += meet[OBJECTKEY];
    });

    let totalHappiness = (happinessSum + bossFeeling)/10;
    
    let result;
    
    if (totalHappiness <= 5.5) {
        result = Math.floor(totalHappiness);
    } else {
        result = Math.ceil(totalHappiness);
    }

    if (result <= 5) {
        return "Get Out Now!";
    } else {
        return "Nice Work Champ!";
    }
    
}

/*Test from the Kata
describe("Example tests",() =>{
    Test.assertEquals(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
    Test.assertEquals(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!');
    Test.assertEquals(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), 'Get Out Now!');
    }) */

outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura');
outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie');
outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john');
