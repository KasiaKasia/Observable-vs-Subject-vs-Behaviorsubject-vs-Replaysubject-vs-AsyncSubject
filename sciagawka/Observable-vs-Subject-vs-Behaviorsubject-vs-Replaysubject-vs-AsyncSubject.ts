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
// observable.subscribe(value => console.log(value));
console.log(' ');


console.log('--- Subject');
const subject = new Subject();
subject.next('1 Subject!');
// subject.subscribe(value => console.log('Subject subscribe value' , value));
subject.next('2 Subject!');
subject.next('3 Subject!');
console.log(' ');


console.log('--- BehaviorSubject');
const behaviorSubject = new BehaviorSubject('1 inicjalizacja BehaviorSubject');
//behaviorSubject.next('2  BehaviorSubject');
// behaviorSubject.subscribe(value => console.log(value));
behaviorSubject.next('3 BehaviorSubject');
behaviorSubject.next('4 BehaviorSubject');
console.log(' ');


console.log('--- ReplaySubject');
const replaySubject = new ReplaySubject();
replaySubject.next('1 ReplaySubject!');
replaySubject.next('2 ReplaySubject!');
replaySubject.subscribe(value => console.log(value));
replaySubject.next('3 ReplaySubject!');
replaySubject.next('4 ReplaySubject!');
console.log(' ');


console.log('--- AsyncSubject');
const asyncSubject = new AsyncSubject();
asyncSubject.next('1 AsyncSubject');
asyncSubject.subscribe(value => console.log(value));
asyncSubject.next('2 AsyncSubject');
asyncSubject.subscribe(value => console.log(value));
asyncSubject.next('3 AsyncSubject');
asyncSubject.complete();
