/* Arrays for the four components of the horoscope */
const starSign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const retrograde = ['Moon', 'Mercury', 'Venus', 'Saturn', 'Jupiter'];
const willExperience = ['insiatiable curiousity', 'endless joy', 'childlike wonder', 'relentless fatigue', 'deep sadness'];
const onTheLookoutFor = ['jealous enemies', 'technology glitches', 'happy endings', 'quick closures', 'unforeseen challenges'];

let randNum = (num) => {
    return Math.floor(Math.random() * num);
}

const messageStarSign = () => {
    return starSign[randNum(12)];
}

const messageRetrograde = () => {
    return retrograde[randNum(retrograde.length)];
}

const messageWillExperience = () => {
    return willExperience[randNum(willExperience.length)];
}

const messageOnTheLookoutFor = () => {
    return onTheLookoutFor[randNum(onTheLookoutFor.length)];
}

const horoscopeGenerator = () => {
    const horoscope = [];
    let tempString = "";
    
    //Assign horoscope
    tempString = ":";
    horoscope.push(messageStarSign() + tempString);

    //Adding retrograde
    tempString = "This month, " + messageRetrograde() + " is in retrograde.";
    horoscope.push(tempString);

    //Adding what their experience will be
    tempString = "You will experience " + messageWillExperience() + ".";
    horoscope.push(tempString);

    //What should they be on the lookout for?
    tempString = "Be on the lookout for " + messageOnTheLookoutFor() + ".";
    horoscope.push(tempString);

    return horoscope;
}

console.log(horoscopeGenerator().join("\n"));