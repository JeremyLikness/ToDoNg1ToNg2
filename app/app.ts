import {UpgradeAdapter} from 'angular2/upgrade';
import {Todo} from './Todo';
import {TodoComponent} from './TodoComponent';

declare var angular: any;

var adapter = new UpgradeAdapter();
var app = angular.module("toDoApp", []);
app.controller("todoCtrl", Todo);
app.directive("todo", adapter.downgradeNg2Component(TodoComponent));
adapter.bootstrap(document.body, ["toDoApp"]); 
