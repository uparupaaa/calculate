'use strict';

{
  function numberProduce() {
    if (smn !== 3) {
      for(let j = 0; j < dif + 2; j++) {
        number.push(10 ** (digit - 1) + Math.floor(Math.random() * 9 * 10 ** (digit - 1)));
      }
    } else {
      number1 = 10 ** (digit - 1) + Math.floor(Math.random() * 9 * 10 ** (digit - 1));
      number2 = 10 ** (digit - 1) + Math.floor(Math.random() * 9 * 10 ** (digit - 1));
    }
  }

  function digitChange() {
    const sdn = selectedDigit.selectedIndex;
    digit = Number(selectedDigit.options[sdn].value);
  }

  function methodChange() {
    smn = calMethod.selectedIndex;
  }

  function amountChange() {
    san = amount.selectedIndex;
  }

  function difficultyChange() {
    dif = difficulty.selectedIndex;
  }

  function calculation() {
    if(i > san) {
      clearTimeout(timeoutId);
      // reset.disabled = false;
      document.body.classList.add('finish');
      return;
    }
    numberProduce();
    i++;
    qnumber.textContent = `${i}問目`;
    question.innerHTML = number.join('<br>');
    // if (smn !== 3) {
    // } else {
    //   question.textContent = number;
    // }
    k = number.length;
    switch(smn) {
      case 0:
        addition();
        break;
      case 1:
        subtraction();
        break;
      case 2:
        multiplication();
        break;
      case 3:
        division();
        break;
    }
    console.log(`${answer}`);
  }

  function multiplication() {
    answer++;
    for(let l = 0; l < k; l++) {
      answer *= number[l];
    }
    // question.textContent = `${number1} * ${number2}`;
  }

  function addition() {
    for(let l = 0; l < k; l++) {
      answer += number[l];
    }
    // question.textContent = `${number1} + ${number2}`;
  }

  function subtraction() {
    for(let l = 0; l < k; l++) {
      answer -= number[l];
    }
    // if(number1 > number2) {
    //   question.textContent = `${number1} - ${number2}`;
    //   answer = number1 - number2;
    // } else {
    //   answer = number2 - number1;
    //   question.textContent = `${number2} - ${number1}`;
    // }
    // question.textContent = `${number1} - ${number2}`;
  }

  function division() {
    number2 = 10 ** (digit - 1) + Math.floor(Math.random() * 9 * 10 ** (digit - 1));
    answer = 10 ** (digit - 1) + Math.floor(Math.random() * 9 * 10 ** (digit - 1));
    number1 = number2 * answer;
    question.textContent = `${number1} / ${number2}`;
  }
  
  function marking() {
    if (textarea.value == answer) {
      number = [];
      answer = 0;
      calculation();
    }
    textarea.value = null;
  }

  function timerStart() {
    const d = new Date(Date.now() - startTime);
    const s = String(d.getSeconds()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    timeoutId = setTimeout(timerStart, 1000);
    timer.textContent = `${m}:${s}`;
  }
  
  let startTime = Date.now();
  const qnumber = document.getElementById('qnumber');
  const question = document.getElementById('question');
  const textarea = document.getElementById('textarea');
  const timer = document.getElementById('timer');
  const reset = document.getElementById('reset');
  const selectedDigit = document.getElementById('selectedDigit');
  const calMethod = document.getElementById('calMethod');
  const amount = document.getElementById('amount');
  const difficulty = document.getElementById('difficulty');
  let answer = 0;
  let i =  0;
  let digit = 2;
  let smn = 0;
  let san = 4;
  let dif;
  let timeoutId;
  let number1;
  let number2;
  let number = [];
  let k;
  
  textarea.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
      marking();
    }
  });

  reset.addEventListener('click', () => {
    i = 0;
    number = [];
    answer = 0;
    digitChange();
    methodChange();
    amountChange();
    textarea.focus();
    document.body.classList.remove('finish');
    startTime = Date.now();
    clearTimeout(timeoutId);
    timerStart();
    difficultyChange();
    calculation();
  });

  methodChange();
  amountChange();
  digitChange();
  difficultyChange();
  calculation();
  textarea.focus();
  timerStart();
  // reset.disabled = true;
}