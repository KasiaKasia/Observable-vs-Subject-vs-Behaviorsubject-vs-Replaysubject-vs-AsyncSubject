import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { AsyncSubject } from 'rxjs';

const promise = new Promise((resolve, reject) => {
  console.log('Promise zawsze się wykona');
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

promise.then((value) => {
  console.log(value);
});
console.log('Promise jest dostępny w jednym z tych stanów: ' +
'\n pending: stan inicjacji, ani wypełnione, ani odrzucone. ' +
'\n fulfilled: operacja zakończona sukcesem. ' +
'\n rejected: operacja zakończona porażką. \n' );

console.log('\n--- Observable');
const observable0 = new Observable(observer => {
  observer.next('1 Observable');
  observer.next('2 Observable');
  observer.next('3 Observable');
  setTimeout(() => {
    observer.next('4 Observable');
    observer.complete();
  }, 1000);
});
observable0.subscribe({
  next(x) { console.log('pobierz wartości ' + x); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('done'); }
});
console.log('Observables to (lazy Push ) leniwe kolekcje push wypychające jedną lub wiele wartości. Promise zawsze 1 (colback fukcji)' +
'\n Aby wywołać Observable trzeba zasubskrybować. ' +
'\n Observables mogą dostarczać wartości synchronicznie lub asynchronicznie' );

console.log('--- Subject');
const subject = new Subject();
subject.next('1 subject.next');
subject.subscribe(value => console.log('subject.subscribe value =>  ', value));
subject.next('2 subject.next');
subject.next('3 subject.next');
console.log(' Subject NIE WYŚWIETLA emitowanych wartości przed subscribe \n');
subject.complete();


console.log('--- BehaviorSubject');
const behaviorSubject = new BehaviorSubject('1 inicjalizacja BehaviorSubject');
// behaviorSubject.next('2 BehaviorSubject');
behaviorSubject.subscribe(value => console.log('behaviorSubject.subscribe value => ', value));
behaviorSubject.next('3 BehaviorSubject');
behaviorSubject.next('4 BehaviorSubject');
behaviorSubject.complete();
console.log(' Jeśli nie bedziemy emitować przed subscribe, wyświetli zainicjalizowaną wartość. ' +
'\n W przeciwnym przypadku wyświetli wyemitowaną wartość z przed subscribe. \n');


console.log('--- ReplaySubject');
const replaySubject = new ReplaySubject(2);
replaySubject.next('1 ReplaySubject');
replaySubject.next('2 ReplaySubject');
replaySubject.next('3 ReplaySubject');
replaySubject.next('4 ReplaySubject');
replaySubject.next('5 ReplaySubject');
replaySubject.subscribe(value => console.log(value));
replaySubject.next('6 ReplaySubject');
replaySubject.next('7 ReplaySubject');
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
console.log(' AsyncSubject musi zawierać metodę complete(), aby pobrać ostatnią wartości z subscribe. \n ' +
'Dodanie kolejnych subscribe powoduję wyświetlenie tyle razy ostatniej wartości ile subscrybcji \n');
