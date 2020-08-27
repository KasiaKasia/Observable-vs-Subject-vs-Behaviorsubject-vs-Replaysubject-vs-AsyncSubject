import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { AsyncSubject } from 'rxjs';

console.log('--- Observable');
const observable = new Observable(observer => {
  observer.next('1 Observable');
  observer.next('2 Observable');
  observer.next('3 Observable');
});
observable.subscribe(value => console.log(value));
console.log(' ');


console.log('--- Subject');
const subject = new Subject();
subject.next('1 subject.next');
subject.subscribe(value => console.log('subject.subscribe value =>  ', value));
subject.next('2 subject.next');
subject.next('3 subject.next');
console.log(' Subject nie wyświetla emitowanych wartości przed subscribe \n');
subject.complete();


console.log('--- BehaviorSubject');
const behaviorSubject = new BehaviorSubject('1 inicjalizacja BehaviorSubject');
// behaviorSubject.next('2 BehaviorSubject');
behaviorSubject.subscribe(value => console.log('behaviorSubject.subscribe value => ', value));
behaviorSubject.next('3 BehaviorSubject');
behaviorSubject.next('4 BehaviorSubject');
behaviorSubject.complete();
console.log('Jeśli nie bedziemy emitować przed subscribe, wyświetli zainicjalizowaną wartość. ' +
'\n W przeciwnym przypadku wyświetli wyemitowaną wartość z przed subscribe. \n');


console.log('--- ReplaySubject');
const replaySubject = new ReplaySubject();
replaySubject.next('1 ReplaySubject!');
replaySubject.next('2 ReplaySubject!');
replaySubject.next('3 ReplaySubject!');
replaySubject.next('4 ReplaySubject!');
replaySubject.next('5 ReplaySubject!');
replaySubject.subscribe(value => console.log(value));
replaySubject.next('6 ReplaySubject!');
replaySubject.next('7 ReplaySubject!');
behaviorSubject.complete();
console.log(' Dodając parametr w ReplaySubject(2); zwróci 2 ostatnie wartości przed subscribe. ' +
  '\n Bez parametru zwraca wszystkie emitowane wartości. \n');


console.log('--- AsyncSubject');
const asyncSubject = new AsyncSubject();
asyncSubject.next('1 AsyncSubject');
// asyncSubject.subscribe(value => console.log(value));
asyncSubject.next('2 AsyncSubject');
asyncSubject.subscribe(value => console.log(value));
asyncSubject.next('3 AsyncSubject');
asyncSubject.next('4 AsyncSubject');
asyncSubject.next('5 AsyncSubject');
asyncSubject.complete();
console.log('AsyncSubject musi zawierać metodę complete(), aby pobrać ostatnią wartości z subscribe. \n ' +
'Dodanie kolejnych subscribe powoduję wyświetlenie tyle razy ostatniej wartości ile subscrybcji ');
