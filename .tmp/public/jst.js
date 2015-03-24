this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/city.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page">\n\t<div class="ballot">\n\t\t<header class="election-title">\n\t\t\t<h1>This is your ballot</h2>\n\t\t\t<h2>City</h3>\n\t\t</header>\n\n\t\t\t<form class="form" ng-submit="citySubmit(pick.mayor, pick.councilman)">\n\n\t\t\t\t\t<div class="race">\n\t\t\t\t\t\t<h3>Race for Mayor</h3>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class="choice-block">\n\t\t\t\t\t\t\t<div class="option-box" ng-repeat="mayor in mayors">\n\t\t\t\t\t\t\t\t<div class="img-container">\n\t\t\t\t\t\t\t\t\t<img ng-src="{{ mayor.image }}">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="candidate-wrapper">\n\t\t\t\t\t\t\t\t\t<div class="candidate">{{ mayor.candidate }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="party">{{ mayor.party }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t<!-- <input class="choice-button" ng-value="mayor.id" type="radio" ng-model="pick.mayor" name="maySelect"> -->\n\n\t\t\t\t\t\t\t\t<div class="codpen">\n\t\t\t\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t    <input ng-value="mayor.id" ng-model="pick.mayor" name="maySelect" type="radio" id="f-option{{ mayor.id }}">\n\n\t\t\t\t\t\t\t\t\t\t\t    <label for="f-option{{ mayor.id }}">Select</label>\n\t\t\t\t\t\t\t\t\t\t\t    <div class="check">\n\t\t\t\t\t\t\t\t\t\t\t    \t<div class="inside"></div>\n\t\t\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class="race">\n\t\t\t\t\t\t<h3>Race for Councilman</h3>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class="choice-block">\n\t\t\t\t\t\t\t<div class="option-box" ng-repeat="councilman in councilmen">\n\t\t\t\t\t\t\t\t<div class="img-container">\n\t\t\t\t\t\t\t\t\t<img ng-src="{{ councilman.image }}">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="candidate-wrapper">\n\t\t\t\t\t\t\t\t\t<div class="candidate">{{ councilman.candidate }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="party">{{ councilman.party }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n<!-- \n\t\t\t\t\t\t\t\t\t<input class="choice-button" ng-value="councilman.id" type="radio" ng-model="pick.councilman" name="councSelect"> -->\n\n\t\t\t\t\t\t\t\t<div class="codpen">\n\t\t\t\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t    <input ng-value="councilman.id" ng-model="pick.councilman" name="councSelect" type="radio" id="f-option{{ councilman.id }}">\n\n\t\t\t\t\t\t\t\t\t\t\t    <label for="f-option{{ councilman.id }}">Select</label>\n\t\t\t\t\t\t\t\t\t\t\t    <div class="check">\n\t\t\t\t\t\t\t\t\t\t\t    \t<div class="inside"></div>\n\t\t\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\n\t\t\t\t<br><br>\n\t\t\t\t<div class="choice-submit">\n\t\t\t\t\t<button class=\'lf--submit\' type="submit" value="submit">Vote</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t</div>\n</div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/confirmation.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="confirm-title">\n\t<h1>You have voted!</h1>\n\t<h2>Would you like to receive text message election updates?</h2>\n</div>\n\t<form class="confirm-form" ng-submit="confirmSubmit(textConfirm)">\n\t\t<div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t\t<div class="dropdown-backgd">\n\t\t\t    <select name="confirmation" size="1" class=\'input-confirm dropdown\' type=\'text\' ng-model="textConfirm">\n\t    \t\t\t<option value="">Select</option>\n\t    \t\t\t<option value="yes">Yes</option>\n\t    \t\t\t<option value="no">No</option>\n\t\t\t    </select>\n\t\t    </div>\n\t\t    <div class="button-confirm-wrapper">\n\t\t    \t<button class="button-confirm" type="submit" value="submit">Submit</button>\n\t\t    </div>\n\t\t  </div>\n\t\t\t\n\t\t</div>\n\t\t\t<h2 class="confirm-error" ng-show="confirmErrorShow" ng-bind="confirmErrorMsg"></h2>\n\t\t<div>\n\t\t\t<button ng-show="confirmLogin" class=\'login-button\' ui-sref="login">Login</button>\n\t\t</div>\n\t</form>\n\t<div class="confirm-title" ng-show="textUpdate">\n\t\t<h2>We will send you text message updates</h2>\n\t</div>\n';

}
return __p
};

this["JST"]["assets/templates/county.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page">\n\t<div class="ballot">\n\t\t<header class="election-title">\n\t\t\t<h1>This is your ballot</h2>\n\t\t\t<h2>County</h3>\n\t\t</header>\n\n\t\t\t<form class="form" ng-submit="countySubmit(pick.proposition, pick.law)">\n\t\t\t\t\t<div class="race">\n\t\t\t\t\t\t<h3>Proposition 1</h3>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class="choice-block">\n\t\t\t\t\t\t\t<div class="yes-no-box" ng-repeat="proposition in propositions">\n\t\t\t\t\t\t\t\t<div class="yes-no-wrapper">\n\t\t\t\t\t\t\t\t\t<div class="candidate">{{ proposition.candidate }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t<!-- <input class="input-choice" ng-value="proposition.id" type="radio" ng-model="pick.proposition" name="propSelect"> -->\n\n\t\t\t\t\t\t\t\t<div class="sm-ballot-box">\n\t\t\t\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t    <input ng-value="proposition.id" ng-model="pick.proposition" name="propSelect" type="radio" id="f-option{{ proposition.id }}">\n\n\t\t\t\t\t\t\t\t\t\t\t    <label for="f-option{{ proposition.id }}">Select</label>\n\t\t\t\t\t\t\t\t\t\t\t    <div class="check">\n\t\t\t\t\t\t\t\t\t\t\t    \t<div class="inside"></div>\n\t\t\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="race">\n\t\t\t\t\t\t<h3>Tax Law Reform</h3>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class="choice-block">\n\t\t\t\t\t\t\t<div class="yes-no-box" ng-repeat="law in laws">\n\t\t\t\t\t\t\t\t<!-- <div class="img-container">\n\t\t\t\t\t\t\t\t\t<img ng-src="{{ law.image }}">\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class="yes-no-wrapper">\n\t\t\t\t\t\t\t\t\t<div class="candidate">{{ law.candidate }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="party">{{ law.party }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n<!-- \n\t\t\t\t\t\t\t\t\t<input class="input-choice" ng-value="law.id" type="radio" ng-model="pick.law" name="lawSelect"> -->\n\n\t\t\t\t\t\t\t\t<div class="sm-ballot-box">\n\t\t\t\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t    <input ng-value="law.id" ng-model="pick.law" name="lawSelect" type="radio" id="f-option{{ law.id }}">\n\n\t\t\t\t\t\t\t\t\t\t\t    <label for="f-option{{ law.id }}">Select</label>\n\t\t\t\t\t\t\t\t\t\t\t    <div class="check">\n\t\t\t\t\t\t\t\t\t\t\t    \t<div class="inside"></div>\n\t\t\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\n\t\t\t\t<br><br>\n\t\t\t\t<div class="choice-submit">\n\t\t\t\t\t<button class=\'lf--submit\' type="submit" value="submit">Vote</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t</div>\n</div>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/elections-list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="wrapper">\n\t<h2>Choose your elections</h2>\n</header>\n\n<nav class=\'login-form\'>\n\t  <div class="flex-row">\n\t    <button class=\'select-button\' ui-sref="state">\n\t    \t<p>State</p>\n\t    </button>\n\t  </div>\n\t  <div class="flex-row">\n\t    <button class=\'select-button\' ui-sref="county">\n\t    \t<p>County</p>\n\t    </button>\n\t  </div>\n\t  <div class="flex-row">\n\t    <button class=\'select-button\' ui-sref="city">\n\t    \t<p>City</p>\n\t    </button>\n\t  </div>\n\t  <div class="flex-row">\n\t    <button class=\'lf--submit\' ng-click="finish()">I\'m finished voting</button>\n\t  </div>\n</nav>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\n\t<div ng-controller="loginCtrl">\n\t<div class="confirm-title">\n\t\t<h1>Login</h1>\n\t</div>\n\t\t<form class="login-form" ng-submit="loginSubmit(user)">\n\t\t\t<div class="flex-row">\n\t<!-- \t\t<div>Enter your username:</div> -->\n\t\t    <label class="lf--label" for="username">\n\t\t     <!--  <svg x="0px" y="0px" width="12px" height="13px">\n\t\t        <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"/>\n\t\t      </svg> -->\n\t\t    </label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Enter your email address\' type=\'text\' ng-model="user.identifier">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t<!--   <div>Enter your username:</div> -->\n\t\t    <label class="lf--label" for="password">\n\t<!-- \t      <svg x="0px" y="0px" width="15px" height="5px">\n\t\t        <g>\n\t\t          <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"/>\n\t\t        </g>\n\t\t      </svg> -->\n\t\t    </label>\n\t\t    <input id="password" class=\'lf--input\' placeholder=\'Enter your password\' type=\'password\' ng-model="user.password">\n\t\t  </div>\n\t\t\t<button class=\'lf--submit\' type=\'submit\'>LOGIN</button>\n\t\t\t<div ng-bind="error.email" class="error"></div>\n\t\t  \t<div>\n\t\t  \t<div ng-bind="error.password" class="error"></div>\n\t\t  \t<div>\n\t\t  \t<div ng-bind="loginErrorMsg" class="error"></div>\n\t\t</form>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/registration.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<body class="normal">\n<div class="wrapper">\n\t<h1>Speak</h1>\n\t<h2>Turn out the vote</h2>\n</div>\n\n<div class="box">\t\n\t<form class=\'login-form\' ng-submit="registerSubmit(user)">\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username">\n\t\t     <!--  <svg x="0px" y="0px" width="12px" height="13px">\n\t\t        <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"/>\n\t\t      </svg> -->\n\t\t    </label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Email\' type=\'text\' ng-model="user.email">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="password">\n\t<!-- \t      <svg x="0px" y="0px" width="15px" height="5px">\n\t\t        <g>\n\t\t          <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"/>\n\t\t        </g>\n\t\t      </svg> -->\n\t\t    </label>\n\t\t    <input id="password" class=\'lf--input\' placeholder=\'Create a password\' type=\'password\' ng-model="user.password" ng-bind="error.password">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Name\' type=\'text\' ng-model="user.name">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Street Name\' type=\'text\' ng-model="user.street">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Apt. #\' type=\'text\' ng-model="user.apt">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'City\' type=\'text\' ng-model="user.city">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t\t<div class="dropdown-backgd">\n\t\t\t    <select id="username" class=\'lf--input dropdown\' placeholder=\'State\' type=\'text\' ng-model="user.state" size="1" name="state">\n\t\t\t    \t\t\t<option value="">Select</option>\n\t\t\t    \t\t\t<option value="AL">Alabama</option>\n\t\t\t\t\t\t\t<option value="AK">Alaska</option>\n\t\t\t\t\t\t\t<option value="AZ">Arizona</option>\n\t\t\t\t\t\t\t<option value="AR">Arkansas</option>\n\n\t\t\t\t\t\t\t<option value="CA">California</option>\n\t\t\t\t\t\t\t<option value="CO">Colorado</option>\n\t\t\t\t\t\t\t<option value="CT">Connecticut</option>\n\t\t\t\t\t\t\t<option value="DE">Delaware</option>\n\n\t\t\t\t\t\t\t<option value="DC">Dist of Columbia</option>\n\t\t\t\t\t\t\t<option value="FL">Florida</option>\n\t\t\t\t\t\t\t<option value="GA">Georgia</option>\n\t\t\t\t\t\t\t<option value="HI">Hawaii</option>\n\n\t\t\t\t\t\t\t<option value="ID">Idaho</option>\n\t\t\t\t\t\t\t<option value="IL">Illinois</option>\n\t\t\t\t\t\t\t<option value="IN">Indiana</option>\n\t\t\t\t\t\t\t<option value="IA">Iowa</option>\n\n\t\t\t\t\t\t\t<option value="KS">Kansas</option>\n\t\t\t\t\t\t\t<option value="KY">Kentucky</option>\n\t\t\t\t\t\t\t<option value="LA">Louisiana</option>\n\t\t\t\t\t\t\t<option value="ME">Maine</option>\n\n\t\t\t\t\t\t\t<option value="MD">Maryland</option>\n\t\t\t\t\t\t\t<option value="MA">Massachusetts</option>\n\t\t\t\t\t\t\t<option value="MI">Michigan</option>\n\t\t\t\t\t\t\t<option value="MN">Minnesota</option>\n\n\t\t\t\t\t\t\t<option value="MS">Mississippi</option>\n\t\t\t\t\t\t\t<option value="MO">Missouri</option>\n\t\t\t\t\t\t\t<option value="MT">Montana</option>\n\t\t\t\t\t\t\t<option value="NE">Nebraska</option>\n\n\t\t\t\t\t\t\t<option value="NV">Nevada</option>\n\t\t\t\t\t\t\t<option value="NH">New Hampshire</option>\n\t\t\t\t\t\t\t<option value="NJ">New Jersey</option>\n\t\t\t\t\t\t\t<option value="NM">New Mexico</option>\n\n\t\t\t\t\t\t\t<option value="NY">New York</option>\n\t\t\t\t\t\t\t<option value="NC">North Carolina</option>\n\t\t\t\t\t\t\t<option value="ND">North Dakota</option>\n\t\t\t\t\t\t\t<option value="OH">Ohio</option>\n\n\t\t\t\t\t\t\t<option value="OK">Oklahoma</option>\n\t\t\t\t\t\t\t<option value="OR">Oregon</option>\n\t\t\t\t\t\t\t<option value="PA">Pennsylvania</option>\n\t\t\t\t\t\t\t<option value="RI">Rhode Island</option>\n\n\t\t\t\t\t\t\t<option value="SC">South Carolina</option>\n\t\t\t\t\t\t\t<option value="SD">South Dakota</option>\n\t\t\t\t\t\t\t<option value="TN">Tennessee</option>\n\t\t\t\t\t\t\t<option value="TX">Texas</option>\n\n\t\t\t\t\t\t\t<option value="UT">Utah</option>\n\t\t\t\t\t\t\t<option value="VT">Vermont</option>\n\t\t\t\t\t\t\t<option value="VA">Virginia</option>\n\t\t\t\t\t\t\t<option value="WA">Washington</option>\n\n\t\t\t\t\t\t\t<option value="WV">West Virginia</option>\n\t\t\t\t\t\t\t<option value="WI">Wisconsin</option>\n\t\t\t\t\t\t\t<option value="WY">Wyoming</option>\n\t\t\t    </select>\n\t\t    </div>\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Zipcode\' type=\'text\' ng-model="user.zipcode">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Phone Number\' type=\'text\' ng-model="user.phone">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Social Security Number\' type=\'text\' ng-model="user.ssn">\n\t\t  </div>\n\n\t\t  <button class=\'lf--submit\' type=\'submit\'>REGISTER</button>\n\t\t  <div ng-bind="error.email" class="error"></div>\n\t\t  <div>\n\t\t  <div ng-bind="error.password" class="error"></div>\n\t\t  <div>\n\t\t  <button class=\'login-button\' ui-sref="login">Login</button>\n\n\t</form>\n</div>\n</body>';

}
return __p
};

this["JST"]["assets/templates/state.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page">\n\t<div class="ballot">\n\t\t<header class="election-title">\n\t\t\t<h1>This is your ballot</h2>\n\t\t\t<h2>State</h3>\n\t\t</header>\n\n\t\t\t<form class="form" ng-submit="stateSubmit(pick.governor, pick.representative)">\n\n\t\t\t\t\t<div class="race">\n\t\t\t\t\t\t<h3>Race for Governor</h3>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class="choice-block">\n\t\t\t\t\t\t\t<div class="option-box" ng-repeat="governor in governors">\n\t\t\t\t\t\t\t\t<div class="img-container">\n\t\t\t\t\t\t\t\t\t<img ng-src="{{ governor.image }}">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="candidate-wrapper">\n\t\t\t\t\t\t\t\t\t<div class="candidate">{{ governor.candidate }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="party">{{ governor.party }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t<!-- <input class="choice-button" ng-value="governor.id" type="radio" ng-model="pick.governor" name="govSelect"> -->\n\n\t\t\t\t\t\t\t\t<div class="codpen">\n\t\t\t\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t    <input ng-value="governor.id" ng-model="pick.governor" name="govSelect" type="radio" id="f-option{{ governor.id }}">\n\n\t\t\t\t\t\t\t\t\t\t\t    <label for="f-option{{ governor.id }}">Select</label>\n\t\t\t\t\t\t\t\t\t\t\t    <div class="check">\n\t\t\t\t\t\t\t\t\t\t\t    \t<div class="inside"></div>\n\t\t\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class="race">\n\t\t\t\t\t\t<h3>Race for State Representative</h3>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class="choice-block">\n\t\t\t\t\t\t\t<div class="option-box" ng-repeat="representative in representatives">\n\t\t\t\t\t\t\t\t<div class="img-container">\n\t\t\t\t\t\t\t\t\t<img ng-src="{{ representative.image }}">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="candidate-wrapper">\n\t\t\t\t\t\t\t\t\t<div class="candidate">{{ representative.candidate }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="party">{{ representative.party }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t<!-- <input class="choice-button" ng-value="representative.id" type="radio" ng-model="pick.representative" name="repSelect">\n -->\n\t\t\t\t\t\t\t\t<div class="codpen">\n\t\t\t\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t    <input ng-value="representative.id" ng-model="pick.representative" name="repSelect" type="radio" id="f-option{{ representative.id }}">\n\t\t\t\t\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t\t\t\t\t    <label for="f-option{{ representative.id }}">Select</label>\n\t\t\t\t\t\t\t\t\t\t\t    <div class="check">\n\t\t\t\t\t\t\t\t\t\t\t    \t<div class="inside"></div>\n\t\t\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\n\t\t\t\t<br><br>\n\t\t\t\t<div class="choice-submit">\n\t\t\t\t\t<button class=\'lf--submit\' type="submit" value="submit">Vote</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t</div>\n</div>\n</div>\n\n\n';

}
return __p
};

this["JST"]["assets/templates/winner.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page">\n\t<div class="ballot">\n\t\t<header class="election-title">\n\t\t\t<h1>Winners</h2>\n\t\t</header>\n\t\t<main>\n\t\t\t<section class="race">\n\t\t\t\t\t<h3>State</h3>\n\t\t\t\t\t<div class="race-sections">\n\t\t\t\t\t\t<div class="race-name candidate">Race for Governor</div>\n\n\t\t\t\t\t\t<div class="graph" ng-repeat="option in options | filter: \'governor\'">\n\t\t\t\t\t\t\t<div class="person result">\n\t\t\t\t\t\t\t\t<h4>{{ option.candidate }}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="bar-graph stat" ng-attr-style="width:{{option.sum}}%">\n\t\t\t\t\t\t\t\t<h4>{{ option.sum + "%"}}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t    </div>\n\t\t\t\t    <div class="race-sections">\n\t\t\t\t\t\t<div class="race-name candidate">Race for State Representative</div>\n\n\t\t\t\t\t\t<div class="graph" ng-repeat="option in options | filter: \'representative\'">\n\t\t\t\t\t\t\t<div class="person result">\n\t\t\t\t\t\t\t\t<h4>{{ option.candidate }}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="bar-graph stat" ng-attr-style="width:{{option.sum}}%">\n\t\t\t\t\t\t\t\t<h4>{{ option.sum + "%"}}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t    </div>\n\t\t\t</section>\n\n\t\t\t<section class="race">\n\t\t\t\t\t<h3>County</h3>\n\t\t\t\t\t<div class="race-sections">\n\t\t\t\t\t\t<div class="race-name candidate">Proposition 1</div>\n\t\t\t\t\t\t<div class="graph" ng-repeat="option in options | filter: \'proposition\'">\n\t\t\t\t\t\t\t<div class="person result">\n\t\t\t\t\t\t\t\t<h4>{{ option.candidate }}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="bar-graph stat" ng-attr-style="width:{{option.sum}}%">\n\t\t\t\t\t\t\t\t<h4>{{ option.sum + "%"}}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t    </div>\n\t\t\t\t    <div class="race-sections">\n\t\t\t\t\t\t<div class="race-name candidate">Tax Law Reform</div>\n\t\t\t\t\t\t<div class="graph" ng-repeat="option in options | filter: \'law\'">\n\t\t\t\t\t\t\t<div class="person result">\n\t\t\t\t\t\t\t\t<h4>{{ option.candidate }}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="bar-graph stat" ng-attr-style="width:{{option.sum}}%">\n\t\t\t\t\t\t\t\t<h4>{{ option.sum + "%"}}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t    </div>\n\t\t\t</section>\n\n\t\t\t<section class="race">\n\t\t\t\t\t<h3>City</h3>\n\t\t\t\t\t<div class="race-sections">\n\t\t\t\t\t\t<div class="race-name candidate">Race for Mayor</div>\n\t\t\t\t\t\t<div class="graph" ng-repeat="option in options | filter: \'mayor\'">\n\t\t\t\t\t\t\t<div class="person result">\n\t\t\t\t\t\t\t\t<h4>{{ option.candidate }}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="bar-graph stat" ng-attr-style="width:{{option.sum}}%">\n\t\t\t\t\t\t\t\t<h4>{{ option.sum + "%"}}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t    </div>\n\t\t\t\t    <div class="race-sections">\n\t\t\t\t\t\t<div class="race-name candidate">Race for Councilman</div>\n\t\t\t\t\t\t<div class="graph" ng-repeat="option in options | filter: \'councilman\'">\n\t\t\t\t\t\t\t<div class="person result">\n\t\t\t\t\t\t\t\t<h4>{{ option.candidate }}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="bar-graph stat" ng-attr-style="width:{{option.sum}}%">\n\t\t\t\t\t\t\t\t<h4>{{ option.sum + "%"}}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t    </div>\n\t\t\t</section>\n\t\t</main>\n\t</div>\n</div>';

}
return __p
};