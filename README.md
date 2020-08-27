# Observable-vs-Subject-vs-Behaviorsubject-vs-Replaysubject-vs-AsyncSubject

If you want to using the code from the GitHub repository, execute the following commands in the directory where you’d like to create the project directory:

## 1. Get repository

git clone https://github.com/kasiaOla/Observable-vs-Subject-vs-Behaviorsubject-vs-Replaysubject-vs-AsyncSubject.git


## 2. Installation

- cd Observable-vs-Subject-vs-Behaviorsubject-vs-Replaysubject-vs-AsyncSubject
- npm install or npm i

## Compilation

- cd sciagawka
- ts-node Observable-vs-Subject-vs-Behaviorsubject-vs-Replaysubject-vs-AsyncSubject.ts

## Output
# Observable-vs-Subject-vs-Behaviorsubject-vs-Replaysubject-vs-AsyncSubject

If you want to using the code from the GitHub repository, execute the following commands in the directory where you’d like to create the project directory:

## 1. Get repository

git clone https://github.com/kasiaOla/Observable-vs-Subject-vs-Behaviorsubject-vs-Replaysubject-vs-AsyncSubject.git


## 2. Installation

- cd Observable-vs-Subject-vs-Behaviorsubject-vs-Replaysubject-vs-AsyncSubject
- npm install or npm i

## Compilation

- cd sciagawka
- ts-node Observable-vs-Subject-vs-Behaviorsubject-vs-Replaysubject-vs-AsyncSubject.ts

## Output

--- Observable
1 Observable
2 Observable
3 Observable

--- Subject
subject.subscribe value =>   2 subject.next
subject.subscribe value =>   3 subject.next
 Subject nie wyświetla emitowanych wartości przed subscribe

--- BehaviorSubject
behaviorSubject.subscribe value =>  1 inicjalizacja BehaviorSubject
behaviorSubject.subscribe value =>  3 BehaviorSubject
behaviorSubject.subscribe value =>  4 BehaviorSubject
Jeśli nie bedziemy emitować przed subscribe, wyświetli zainicjalizowaną wartość.
 W przeciwnym przypadku wyświetli wyemitowaną wartość z przed subscribe.

--- ReplaySubject
1 ReplaySubject!
2 ReplaySubject!
3 ReplaySubject!
4 ReplaySubject!
5 ReplaySubject!
6 ReplaySubject!
7 ReplaySubject!
 Dodając parametr w ReplaySubject(2); zwróci 2 ostatnie wartości przed subscribe.
 Bez parametru zwraca wszystkie emitowane wartości.

--- AsyncSubject
5 AsyncSubject
5 AsyncSubject


D:\Projekty_Angular5\Observable-vs-Subject-vs-Behaviorsubject-vs-Replaysubject-vs-AsyncSubject\sciagawka>ts-node Observable-vs-Subject-vs-Behaviorsubject-vs-Replaysubject-vs-AsyncSubject.ts
--- Observable
1 Observable
2 Observable
3 Observable

--- Subject
subject.subscribe value =>   2 subject.next
subject.subscribe value =>   3 subject.next
 Subject nie wyświetla emitowanych wartości przed subscribe

--- BehaviorSubject
behaviorSubject.subscribe value =>  1 inicjalizacja BehaviorSubject
behaviorSubject.subscribe value =>  3 BehaviorSubject
behaviorSubject.subscribe value =>  4 BehaviorSubject
 Jeśli nie bedziemy emitować przed subscribe, wyświetli zainicjalizowaną wartość.
 W przeciwnym przypadku wyświetli wyemitowaną wartość z przed subscribe.

--- ReplaySubject
1 ReplaySubject!
2 ReplaySubject!
3 ReplaySubject!
4 ReplaySubject!
5 ReplaySubject!
6 ReplaySubject!
7 ReplaySubject!
 Dodając parametr w ReplaySubject(2); zwróci 2 ostatnie wartości przed subscribe.
 Bez parametru zwraca wszystkie emitowane wartości.

--- AsyncSubject
5 AsyncSubject
 AsyncSubject musi zawierać metodę complete(), aby pobrać ostatnią wartości z subscribe.
 Dodanie kolejnych subscribe powoduję wyświetlenie tyle razy ostatniej wartości ile subscrybcji
