'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var parseCVB = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(taskSuccessHandler, config, onDone) {
        var handleTaskFail, handleTaskSuccess, adsParser, worker, FrontInfoFetchingQueue, pages, tasks;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        handleTaskFail = (0, _core.handleTaskFailureFactory)('CVB');
                        handleTaskSuccess = (0, _core.handleTaskSuccessFactory)('CVB', taskSuccessHandler);
                        adsParser = (0, _core.parseFrontPageArticlesFactory)(FRONT_PAGE_URI, _parser.extractFrontInfo);
                        worker = (0, _queueWorkerFactory.queueWorkerFactory)(adsParser, handleTaskFail.handler, handleTaskSuccess);
                        FrontInfoFetchingQueue = _async2.default.queue(worker, config.general.workers || DEFAULT_WORKERS_NUMBER);

                        if (onDone !== undefined) FrontInfoFetchingQueue.drain = onDone;

                        handleTaskFail.setQueue(FrontInfoFetchingQueue); // so task can be requeued on fail

                        _context.next = 9;
                        return (0, _core.getNumberOfFrontPages)(FRONT_PAGE_URI.replace('${page}', '1'), _parser.extractTotalPageCount);

                    case 9:
                        pages = _context.sent;

                        _logger2.default.info('Page count: ' + pages);

                        tasks = (0, _core.generateFrontInfoTasks)(pages, 1, config.task);


                        FrontInfoFetchingQueue.push(tasks);

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function parseCVB(_x, _x2, _x3) {
        return ref.apply(this, arguments);
    };
}();

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _parser = require('./parser');

var _queueWorkerFactory = require('../common/queueWorkerFactory');

var _core = require('../common/core');

var _logger = require('../../../logging/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var FRONT_PAGE_URI = 'http://www.cvbankas.lt/?page=${page}';
var DEFAULT_WORKERS_NUMBER = 1;

exports.default = parseCVB;
//# sourceMappingURL=main.js.map
