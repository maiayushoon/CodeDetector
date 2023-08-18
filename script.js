function detectCharacter(){
    const characterInput = document.getElementById("characterInput");
    const result = document.getElementById("result");
    const character = characterInput.value;

    if (isASCII(character)) {

        result.innerText = '"The Entered Character is ASCII Character"';

    }else{
        result.innerText = '"The Entered Character is Unicode Character"';


    }


}

function isASCII(character){ //character parameter is bcoz when we return the value of character it will give error bcoz the charcter is const not var {var can be used in other blocks of body but const can't be used in other body}

    return character.charCodeAt(0)<=127;
}