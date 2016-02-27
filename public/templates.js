angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("config-form/configForm.html","<div class=\"row\">\r\n    <form name=\"options\" class=\"form-horizontal\">\r\n        <div class=\"col-md-6\">\r\n            <h3>General options</h3>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"interval\" class=\"col-md-6 control-label\">Crawl interval</label>\r\n                <div class=\"input-group col-md-6\">\r\n                        <input ng-model=\"$ctrl.data.general.crawlInterval\" type=\"number\" class=\"form-control\" id=\"interval\" required>\r\n                        <div class=\"input-group-addon\">minutes</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"workers\" class=\"col-md-6 control-label\">Workers</label>\r\n                <div class=\"input-group col-md-6\">\r\n                    <input ng-model=\"$ctrl.data.general.workers\" type=\"number\" class=\"form-control\" id=\"workers\" required>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n            <h3>Task options</h3>\r\n            <div class=\"form-group\">\r\n                <label for=\"default_task_delay\" class=\"col-md-6 control-label\">DEFAULT_TASK_DELAY</label>\r\n                <div class=\"input-group col-md-6\">\r\n                    <input ng-model=\"$ctrl.data.task.defaultTaskDelay\" type=\"number\" class=\"form-control\" id=\"default_task_delay\" required>\r\n                    <div class=\"input-group-addon\">ms</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"default_task_requeue\" class=\"col-md-6 control-label\">DEFAULT_TASK_REQUEUE</label>\r\n                <div class=\"input-group col-md-6\">\r\n                    <input ng-model=\"$ctrl.data.task.defaultTaskRequeue\" type=\"number\" class=\"form-control\" id=\"default_task_requeue\" required>\r\n                    <div class=\"input-group-addon\">times</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"default_task_retry\" class=\"col-md-6 control-label\">DEFAULT_TASK_RETRY</label>\r\n                <div class=\"input-group col-md-6\">\r\n                    <input ng-model=\"$ctrl.data.task.defaultTaskRetry\" type=\"number\" class=\"form-control\" id=\"default_task_retry\" required>\r\n                    <div class=\"input-group-addon\">times</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"default_task_retry_interval\" class=\"col-md-6 control-label\">DEFAULT_TASK_RETRY_INTERVAL</label>\r\n                <div class=\"input-group col-md-6\">\r\n                    <input ng-model=\"$ctrl.data.task.defaultTaskRetryInterval\" type=\"number\" class=\"form-control\" id=\"default_task_retry_interval\" required>\r\n                    <div class=\"input-group-addon\">ms</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <span class=\"col-md-6 control-label\"></span>\r\n                <div class=\"input-group col-md-6\">\r\n                    <button ng-disabled=\"options.$error.required\" style=\"float: right\" class=\"btn btn-success\" ng-click=\"$ctrl.handleSave()\" type=\"submit\">Save changes</button>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </form>\r\n</div>");}]);