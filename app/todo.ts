var Todo = (function () {
    
    function empty() {
        return {
            title: "",
            done: false
        };
    }
    
    function Todo() {
        this.list = [];
        this.selected = empty();
        this.editing = false;
    }
    
    Todo.prototype.select = function (todo) {
        this.selected = todo;
    }
    
    Todo.prototype.add = function () {
        if (!this.editing) {
            this.list.push(this.selected);
            this.selected = empty();
        }
    }
    
    Todo.prototype.cancel = function () {
        this.selected = empty();
        this.editing = false;
    }
    
    Todo.prototype.delete = function (todo) {
        var newList = [], idx;
        for (idx = 0; idx < this.list.length; idx+=1) {
            if (this.list[idx] !== todo) {
                newList.push(this.list[idx]);
            }
        }
        this.list = newList;
        this.editing = false;
        this.selected = empty();
    }
    
    return Todo;

})();

export {Todo}