this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/city.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Your city elections</h2>\n\n<div>\n\t<div>\n\t\t<h3>For the race of</h3>\n\t\t<h3>MAYOR</h3>\n\t</div>\n\t<form class="form" ng-submit="citySubmit(pick.mayor, pick.councilman)">\n\t\t<div>\n\t\t\t<div ng-repeat="mayor in mayors">\n\t\t\t\t<span class="item item-checkbox">\n\t\t\t\t\t<label class="checkbox">\n\t\t\t\t\t\t<input ng-value="mayor.id" type="radio" ng-model="pick.mayor" name="maySelect">\n\t\t\t\t\t</label>\n\t\t\t\t\t<span>{{ mayor.candidate }}</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<h3>For the race of</h3>\n\t\t\t<h3>COUNCILMAN</h3>\n\t\t</div>\n\t\t<div>\n\t\t\t<div ng-repeat="councilman in councilmen">\n\t\t\t\t<span class="item item-checkbox">\n\t\t\t\t\t<label class="checkbox">\n\t\t\t\t\t\t<input ng-value="councilman.id" type="radio" ng-model="pick.councilman" name="counSelect">\n\t\t\t\t\t</label>\n\t\t\t\t\t<span>{{ councilman.candidate }}</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<br><br>\n\t\t<div>\n\t\t\t<button type="submit" value="submit">Submit</button>\n\t\t</div>\n\t</form>\n</div>\n\n';

}
return __p
};

this["JST"]["assets/templates/confirmation.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Thanks for Voting!</h1>\n<br><br>\n<div>\n\t<div>\n\t\t<h3>Would you like to receive text message updates?</h3>\n\t</div>\n\t<form class="form" ng-submit="confirmSubmit(textConfirm)">\n\t\t<div>\n\t\t\t<select name="confirmation" size="1" ng-model="textConfirm">\n\t\t\t\t<option value="yes">Yes</option>\n\t\t\t\t<option value="no">No</option>\n\t\t\t</select>\n\t\t\t<button type="submit" value="submit">Submit</button>\n\t\t</div>\n\t</form>\n\t<div ng-show="textUpdate">We will send you text message updates</div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/county.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Your county elections</h2>\n\n<div>\n\t<div>\n\t\t<h3>Proposition 1</h3>\n\t\t<h4>Vote yes or no</h4>\n\t</div>\n\t<form class="form" ng-submit="countySubmit(pick.proposition, pick.law)">\n\t\t<div>\n\t\t\t<div ng-repeat="proposition in propositions">\n\t\t\t\t<span class="item item-checkbox">\n\t\t\t\t\t<label class="checkbox">\n\t\t\t\t\t\t<input ng-value="proposition.id" type="radio" ng-model="pick.proposition" name="propSelect">\n\t\t\t\t\t</label>\n\t\t\t\t\t<span>{{ proposition.candidate }}</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<h3>Tax Law</h3>\n\t\t\t<h4>Vote yes or no</h4>\n\t\t</div>\n\t\t<div>\n\t\t\t<div ng-repeat="law in laws">\n\t\t\t\t<span class="item item-checkbox">\n\t\t\t\t\t<label class="checkbox">\n\t\t\t\t\t\t<input ng-value="law.id" type="radio" ng-model="pick.law" name="lawSelect">\n\t\t\t\t\t</label>\n\t\t\t\t\t<span>{{ law.candidate }}</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<br><br>\n\t\t<div>\n\t\t<button type="submit" value="submit">Submit</button>\n\t\t</div>\n\t</form>\n\t<!-- <form class="form" ng-submit="countySubmit(propostition1Select, taxSelect)">\n\t\t<div>\n\t\t\t<select ng-model="proposition1Select">\n\t\t\t\t<option value="yes">Yes</option>\n\t\t\t\t<option value="no">No</option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<h3>Tax Law</h3>\n\t\t\t<h4>Vote yes or no</h4>\n\t\t</div>\n\t\t<div>\n\t\t\t<select ng-model="taxSelect">\n\t\t\t\t<option value="yes">Yes</option>\n\t\t\t\t<option value="no">No</option>\n\t\t\t</select>\n\t\t<br><br>\n\t\t<div>\n\t\t<button type="submit" value="submit">Submit</button>\n\t\t</div>\n\t</form> -->\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/elections-list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="wrapper">\n\t<h2>Choose your elections</h2>\n</header>\n\n<!-- <div>\n\t<button ng-click="logout()" type="button">Logout</button>\n</div> -->\n\n\n<nav class=\'login-form\'>\n\t  <div class="flex-row">\n\t    <button class=\'lf--input\' ui-sref="state">\n\t    \t<p>State</p>\n\t    </button>\n\t  </div>\n\t  <div class="flex-row">\n\t    <button class=\'lf--input\' ui-sref="county">\n\t    \t<p>County</p>\n\t    </button>\n\t  </div>\n\t  <div class="flex-row">\n\t    <button class=\'lf--input\' ui-sref="city">\n\t    \t<p>City</p>\n\t    </button>\n\t  </div>\n\t  <div class="flex-row">\n\t    <button class=\'lf--submit\' ng-click="finish()">I\'m finished voting</button>\n\t  </div>\n</nav>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\n\t<div ng-controller="loginCtrl">\n\t\t<h3>Login</h3>\n\t\t<form ng-submit="loginSubmit(user)">\n\t\t\t<div>\n\t\t\t\t<span>Enter your username:</span>\n\t\t\t\t<input type="text" ng-model="user.identifier" placeholder="Email">\n\t\t\t</div>\n\t\t\t\t<span>Password:</span>\n\t\t\t\t<input type="text" ng-model="user.password" placeholder="Password">\n\n\t\t\t<br><br>\n\t\t\t<button type="submit">Submit</button>\n\t\t</form>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/registration.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="wrapper">\n\t<h1>Speak</h1>\n\t<h2>Vote or shut the hell up.</h2>\n</div>\n\n<div class="box">\t\n\t<form class=\'login-form\' ng-submit="registerSubmit(user)">\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username">\n\t\t     <!--  <svg x="0px" y="0px" width="12px" height="13px">\n\t\t        <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"/>\n\t\t      </svg> -->\n\t\t    </label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Email\' type=\'text\' ng-model="user.email">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="password">\n\t<!-- \t      <svg x="0px" y="0px" width="15px" height="5px">\n\t\t        <g>\n\t\t          <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"/>\n\t\t        </g>\n\t\t      </svg> -->\n\t\t    </label>\n\t\t    <input id="password" class=\'lf--input\' placeholder=\'Create a password\' type=\'password\' ng-model="user.password">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Name\' type=\'text\' ng-model="user.name">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Street Name\' type=\'text\' ng-model="user.street">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Apt. #\' type=\'text\' ng-model="user.apt">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'City\' type=\'text\' ng-model="user.city">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t\t<div class="dropdown-backgd">\n\t\t\t    <select id="username" class=\'lf--input dropdown\' placeholder=\'State\' type=\'text\' ng-model="user.state" size="1" name="state">\n\t\t\t    \t\t\t<option value="">Select</option>\n\t\t\t    \t\t\t<option value="AL">Alabama</option>\n\t\t\t\t\t\t\t<option value="AK">Alaska</option>\n\t\t\t\t\t\t\t<option value="AZ">Arizona</option>\n\t\t\t\t\t\t\t<option value="AR">Arkansas</option>\n\n\t\t\t\t\t\t\t<option value="CA">California</option>\n\t\t\t\t\t\t\t<option value="CO">Colorado</option>\n\t\t\t\t\t\t\t<option value="CT">Connecticut</option>\n\t\t\t\t\t\t\t<option value="DE">Delaware</option>\n\n\t\t\t\t\t\t\t<option value="DC">Dist of Columbia</option>\n\t\t\t\t\t\t\t<option value="FL">Florida</option>\n\t\t\t\t\t\t\t<option value="GA">Georgia</option>\n\t\t\t\t\t\t\t<option value="HI">Hawaii</option>\n\n\t\t\t\t\t\t\t<option value="ID">Idaho</option>\n\t\t\t\t\t\t\t<option value="IL">Illinois</option>\n\t\t\t\t\t\t\t<option value="IN">Indiana</option>\n\t\t\t\t\t\t\t<option value="IA">Iowa</option>\n\n\t\t\t\t\t\t\t<option value="KS">Kansas</option>\n\t\t\t\t\t\t\t<option value="KY">Kentucky</option>\n\t\t\t\t\t\t\t<option value="LA">Louisiana</option>\n\t\t\t\t\t\t\t<option value="ME">Maine</option>\n\n\t\t\t\t\t\t\t<option value="MD">Maryland</option>\n\t\t\t\t\t\t\t<option value="MA">Massachusetts</option>\n\t\t\t\t\t\t\t<option value="MI">Michigan</option>\n\t\t\t\t\t\t\t<option value="MN">Minnesota</option>\n\n\t\t\t\t\t\t\t<option value="MS">Mississippi</option>\n\t\t\t\t\t\t\t<option value="MO">Missouri</option>\n\t\t\t\t\t\t\t<option value="MT">Montana</option>\n\t\t\t\t\t\t\t<option value="NE">Nebraska</option>\n\n\t\t\t\t\t\t\t<option value="NV">Nevada</option>\n\t\t\t\t\t\t\t<option value="NH">New Hampshire</option>\n\t\t\t\t\t\t\t<option value="NJ">New Jersey</option>\n\t\t\t\t\t\t\t<option value="NM">New Mexico</option>\n\n\t\t\t\t\t\t\t<option value="NY">New York</option>\n\t\t\t\t\t\t\t<option value="NC">North Carolina</option>\n\t\t\t\t\t\t\t<option value="ND">North Dakota</option>\n\t\t\t\t\t\t\t<option value="OH">Ohio</option>\n\n\t\t\t\t\t\t\t<option value="OK">Oklahoma</option>\n\t\t\t\t\t\t\t<option value="OR">Oregon</option>\n\t\t\t\t\t\t\t<option value="PA">Pennsylvania</option>\n\t\t\t\t\t\t\t<option value="RI">Rhode Island</option>\n\n\t\t\t\t\t\t\t<option value="SC">South Carolina</option>\n\t\t\t\t\t\t\t<option value="SD">South Dakota</option>\n\t\t\t\t\t\t\t<option value="TN">Tennessee</option>\n\t\t\t\t\t\t\t<option value="TX">Texas</option>\n\n\t\t\t\t\t\t\t<option value="UT">Utah</option>\n\t\t\t\t\t\t\t<option value="VT">Vermont</option>\n\t\t\t\t\t\t\t<option value="VA">Virginia</option>\n\t\t\t\t\t\t\t<option value="WA">Washington</option>\n\n\t\t\t\t\t\t\t<option value="WV">West Virginia</option>\n\t\t\t\t\t\t\t<option value="WI">Wisconsin</option>\n\t\t\t\t\t\t\t<option value="WY">Wyoming</option>\n\t\t\t    </select>\n\t\t    </div>\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Zipcode\' type=\'text\' ng-model="user.zipcode">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Phone Number\' type=\'text\' ng-model="user.phone">\n\t\t  </div>\n\t\t  <div class="flex-row">\n\t\t    <label class="lf--label" for="username"></label>\n\t\t    <input id="username" class=\'lf--input\' placeholder=\'Social Security Number\' type=\'text\' ng-model="user.ssn">\n\t\t  </div>\n\n\t\t  <button class=\'lf--submit\' type=\'submit\'>REGISTER</button>\n\t</form>\n</div>\n\t\t<div>\n\t\t\t<span ng-show="alert">\n\t\t\t\t<h3>You are already registered to vote</h3>\n\t\t\t\t<button type="button">\n\t\t\t\t<a ui-sref="elections">My Elections</a>\n\t\t\t\t</button>\n\t\t\t\t<!-- Redirects to Elections list page -->\n\t\t\t</span>\n\t\t</div>\n';

}
return __p
};

this["JST"]["assets/templates/state.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="election-title">\n\t<h2 class="title">State</h2>\n</header>\n\n\t<form class="form" ng-submit="stateSubmit(pick.governor, pick.representative)">\n\n\t\t\t<div class="race">\n\t\t\t\t<h3>Race for Governor</h3>\n\t\t\t</div>\n\t\t\t\t<div class="choice-block">\n\t\t\t\t\t<div class="option-box" ng-repeat="governor in governors">\n\t\t\t\t\t\t<div class="options-wrapper">\n\t\t\t\t\t\t\t<span class="candidate"></span>\n\t\t\t\t\t\t\t<input ng-value="governor.id" type="radio" ng-model="pick.governor" name="govSelect">\n\t\t\t\t\t\t\t<span>{{ governor.candidate }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t<div class="race">\n\t\t\t\t<h3>Race for State Representative</h3>\n\t\t\t</div>\n\t\t\t<div class="option-box" ng-repeat="representative in representatives">\n\t\t\t\t<div class="options-wrapper">\n\t\t\t\t\t<span class="candidate"></span>\n\t\t\t\t\t<input ng-value="representative.id" type="radio" ng-model="pick.representative" name="repSelect">\n\t\t\t\t\t<span>{{ representative.candidate }}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t<br><br>\n\t\t<div class="choice-submit">\n\t\t\t<button class=\'lf--submit\' type="submit" value="submit">Submit</button>\n\t\t</div>\n\t</form>\n\n\n';

}
return __p
};

this["JST"]["assets/templates/winner.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="election-title">\n\t<h2 class="title">Winner</h2>\n</header>\n<main>\n\t<section class="container">\n\t\t<div class="banner">\n\t\t\t<h3>State</h3>\n\t\t</div>\n\t\t<div ng-repeat="race in races">\n\t\t\t<div class="options-wrapper">\n\t\t\t\t<span class="candidate">\n\t\t\t\t\t<span>{{ race.candidate }}</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class="container">\n\t\t<div class="banner">\n\t\t\t<h3>County</h3>\n\t\t</div>\n\t</section>\n\n\t<section class="container">\n\t\t<div class="banner">\n\t\t\t<h3>City</h3>\n\t\t</div>\n\t</section>\n</main>';

}
return __p
};