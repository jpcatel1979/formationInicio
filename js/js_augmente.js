Number.prototype.even = function(){
    return this.valueOf() % 2 === 0;
  }

  String.prototype.toCapitalize = function(){
      var phrase = this.valueOf().split(' ');
      for (const mots in phrase) {
        phrase[mots] = phrase[mots].replace(phrase[mots].charAt(0),phrase[mots].charAt(0).toUpperCase());
     }
     return phrase.join(' ');
   }  
