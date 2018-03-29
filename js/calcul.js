function calcul2(){
 
  res =  eval(form.r1.value) + eval(form.r2.value);
  affichage = "operation r1 += r2, r1 a pour valeur "+res+"\n";
  res =  eval(form.r1.value) * eval(form.r2.value);
  affichage = affichage + "operation r1 *= r2, r1 a pour valeur "+ res+"\n";
  res =  eval(form.r1.value) / eval(form.r2.value);
  affichage = affichage + "operation r1 /= r2, r1 a pour valeur " + res+"\n";
  res =  eval(form.r1.value) % eval(form.r2.value);
  affichage = affichage + "operation r1 %= r2, r1 a pour valeur " + res+"\n";
  
  form.resultat.value=affichage;
}