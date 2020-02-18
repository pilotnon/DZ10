var runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            console.log('We are here');
            _this.$$tasks.forEach(function (task) {
                task();
            });
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
};

function showWord() {
    console.log('Hello');
}
function showWord2() {
    console.log('World');
}

runner.add(showWord);
runner.add(showWord2);
runner.setSpeed(2000);