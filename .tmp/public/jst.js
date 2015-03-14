this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/city.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Your city elections</h2>\n\n<div>\n\t<div>\n\t\t<h3>For the race of</h3>\n\t\t<h3>MAYOR</h3>\n\t</div>\n\t<form class="form" ng-submit="citySubmit(checkbox1, checkbox2)">\n\t\t<div>\n\t\t\t<span class="item item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t<input type="checkbox">\n\t\t\t\t</label>\n\t\t\t\tJeana Moore\n\t\t\t</span>\n\t\t\t<span class="item item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t<input type="checkbox">\n\t\t\t\t</label>\n\t\t\t\tSheila Lui\n\t\t\t</span>\n\t\t\t<span class="item item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t<input type="checkbox">\n\t\t\t\t</label>\n\t\t\t\tKelly Perkins\n\t\t\t</span>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<h3>For the race of</h3>\n\t\t\t<h3>COUNCILMAN</h3>\n\t\t</div>\n\t\t<div>\n\t\t\t<span class="item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t<input type="checkbox">\n\t\t\t\t</label>\n\t\t\t\tJack Dearborn\n\t\t\t</span>\n\t\t\t<span class="item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t<input type="checkbox">\n\t\t\t\t</label>\n\t\t\t\tRyan Pike\n\t\t\t</span>\n\t\t\t<span class="item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t<input type="checkbox">\n\t\t\t\t</label>\n\t\t\t\tSally Camp\n\t\t\t</span>\n\t\t</div>\n\t\t\t<br><br>\n\t\t<div>\n\t\t<input type="button" value="submit">\n\t\t</div>\n\t</form>\n</div>\n\n';

}
return __p
};

this["JST"]["assets/templates/confirmation.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Thanks for Voting!</h1>\n<br><br>\n<div>\n\t<div>\n\t\t<h3>Would you like to receive text messages updates?</h3>\n\t</div>\n\t<form class="form" ng-submit="confirmSubmit(textConfirm)">\n\t\t<div>\n\t\t\t<select>\n\t\t\t\t<option ng-model="textConfirm" value="yes">Yes</option>\n\t\t\t\t<option ng-model="textConfirm" value="no">No</option>\n\t\t\t</select>\n\t\t\t<input ng-model="county.tax" type="submit" value="submit">\n\t\t</div>\n\t</form>\n\t<div ng-show="textUpdate">We will send you text message updates</div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/county.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Your county elections</h2>\n\n<div>\n\t<div>\n\t\t<h3>Proposition 1</h3>\n\t\t<h4>Vote yes or no</h4>\n\t</div>\n\t<form class="form" ng-submit="countySubmit(propostition1Select, taxSelect)">\n\t\t<div>\n\t\t\t<select ng-model="proposition1Select">\n\t\t\t\t<option value="yes">Yes</option>\n\t\t\t\t<option value="no">No</option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<h3>Tax Law</h3>\n\t\t\t<h4>Vote yes or no</h4>\n\t\t</div>\n\t\t<div>\n\t\t\t<select ng-model="taxSelect">\n\t\t\t\t<option value="yes">Yes</option>\n\t\t\t\t<option value="no">No</option>\n\t\t\t</select>\n\t\t<br><br>\n\t\t<div>\n\t\t\t<input type="submit" value="submit">Submit>\n\t\t</div>\n\t</form>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/elections-list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Pick your elections</h2>\n\n<div>\n\t<button ng-click="logout()" type="button">Logout</button>\n</div>\n<div>\n\t<button type="button">\n\t<a ui-sref="state">State</a>\n\t</button>\n\t</div>\n\t<div>\n\t<button type="button">\n\t<a ui-sref="county">County</a>\n\t</button>\n\t</div>\n\t<div>\n\t<button type="button">\n\t<a ui-sref="city">City</a>\n\t</button>\n</div>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\n\t<div ng-controller="loginCtrl">\n\t\t<h3>Login</h3>\n\t\t<form ng-submit="loginSubmit(user)">\n\t\t\t<div>\n\t\t\t\t<span>Password:</span>\n\t\t\t\t<input type="text" ng-model="user.password" placeholder="Password">\n\t\t\t</div>\n\t\t\t<span>Enter your email:</span>\n\t\t\t\t<input type="text" ng-model="user.email" placeholder="Email">\n\t\t\t<br><br>\n\t\t\t<button type="submit">Submit</button>\n\t\t</form>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/registration.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\n\t<div ng-controller="registerCtrl">\n\t\t<form ng-submit="registerSubmit(user)">\n\t\t\t<h3>Choose a Password</h3>\n\t\t\t<div>\n\t\t\t\t<span>Password:</span>\n\t\t\t\t<input type="text" ng-model="user.password" placeholder="Password">\n\t\t\t</div>\n\t\t\t<h3>Register to Vote</h3>\n\t\t\t<div>\n\t\t\t\t<span>Name:</span>\n\t\t\t\t<input type="text" ng-model="user.name" placeholder="Name">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>Street Name:</span>\n\t\t\t\t<input type="text" ng-model="user.street" placeholder="Street Name">\n\t\t\t\t<input type="text" ng-model="user.apt" placeholder="Apt. #">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>City:</span>\n\t\t\t\t<input type="text" ng-model="user.city" placeholder="City">\n\t\t\t\t<span>State:</span>\n\t\t\t\t<select name="state" size="1" ng-model="user.state">\n\n\t\t\t\t\t<option value="AL">Alabama</option>\n\t\t\t\t\t<option value="AK">Alaska</option>\n\t\t\t\t\t<option value="AZ">Arizona</option>\n\t\t\t\t\t<option value="AR">Arkansas</option>\n\n\t\t\t\t\t<option value="CA">California</option>\n\t\t\t\t\t<option value="CO">Colorado</option>\n\t\t\t\t\t<option value="CT">Connecticut</option>\n\t\t\t\t\t<option value="DE">Delaware</option>\n\n\t\t\t\t\t<option value="DC">Dist of Columbia</option>\n\t\t\t\t\t<option value="FL">Florida</option>\n\t\t\t\t\t<option value="GA">Georgia</option>\n\t\t\t\t\t<option value="HI">Hawaii</option>\n\n\t\t\t\t\t<option value="ID">Idaho</option>\n\t\t\t\t\t<option value="IL">Illinois</option>\n\t\t\t\t\t<option value="IN">Indiana</option>\n\t\t\t\t\t<option value="IA">Iowa</option>\n\n\t\t\t\t\t<option value="KS">Kansas</option>\n\t\t\t\t\t<option value="KY">Kentucky</option>\n\t\t\t\t\t<option value="LA">Louisiana</option>\n\t\t\t\t\t<option value="ME">Maine</option>\n\n\t\t\t\t\t<option value="MD">Maryland</option>\n\t\t\t\t\t<option value="MA">Massachusetts</option>\n\t\t\t\t\t<option value="MI">Michigan</option>\n\t\t\t\t\t<option value="MN">Minnesota</option>\n\n\t\t\t\t\t<option value="MS">Mississippi</option>\n\t\t\t\t\t<option value="MO">Missouri</option>\n\t\t\t\t\t<option value="MT">Montana</option>\n\t\t\t\t\t<option value="NE">Nebraska</option>\n\n\t\t\t\t\t<option value="NV">Nevada</option>\n\t\t\t\t\t<option value="NH">New Hampshire</option>\n\t\t\t\t\t<option value="NJ">New Jersey</option>\n\t\t\t\t\t<option value="NM">New Mexico</option>\n\n\t\t\t\t\t<option value="NY">New York</option>\n\t\t\t\t\t<option value="NC">North Carolina</option>\n\t\t\t\t\t<option value="ND">North Dakota</option>\n\t\t\t\t\t<option value="OH">Ohio</option>\n\n\t\t\t\t\t<option value="OK">Oklahoma</option>\n\t\t\t\t\t<option value="OR">Oregon</option>\n\t\t\t\t\t<option value="PA">Pennsylvania</option>\n\t\t\t\t\t<option value="RI">Rhode Island</option>\n\n\t\t\t\t\t<option value="SC">South Carolina</option>\n\t\t\t\t\t<option value="SD">South Dakota</option>\n\t\t\t\t\t<option value="TN">Tennessee</option>\n\t\t\t\t\t<option value="TX">Texas</option>\n\n\t\t\t\t\t<option value="UT">Utah</option>\n\t\t\t\t\t<option value="VT">Vermont</option>\n\t\t\t\t\t<option value="VA">Virginia</option>\n\t\t\t\t\t<option value="WA">Washington</option>\n\n\t\t\t\t\t<option value="WV">West Virginia</option>\n\t\t\t\t\t<option value="WI">Wisconsin</option>\n\t\t\t\t\t<option value="WY">Wyoming</option>\n\n\t\t\t\t</select>\n\n\t\t\t\t<span>Zipcode:</span>\n\t\t\t\t<input type="text" ng-model="user.zipcode" placeholder="Zipcode">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<span>Phone Number:</span>\n\t\t\t\t<input type="text" ng-model="user.phone" placeholder="Phone Number">\n\t\t\t\t<span>Email:</span>\n\t\t\t\t<input type="text" ng-model="user.email" placeholder="Email">\n\t\t\t\t<span>Social Security Number:</span>\n\t\t\t\t<input type="text" ng-model="user.ssn" placeholder="SSN">\n\t\t\t</div>\n\t\t\t<br><br>\n\t\t\t<button type="submit">Submit</button>\n\n\t\t\t<div>\n\t\t\t\t<span ng-show="alert">\n\t\t\t\t\t<h3>You are already registered to vote</h3>\n\t\t\t\t\t<button type="button">\n\t\t\t\t\t<a ui-sref="elections">My Elections</a>\n\t\t\t\t\t</button>\n\t\t\t\t\t<!-- Redirects to Elections list page -->\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/state.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Your state elections</h2>\n\n<div>\n\t<div>\n\t\t<h3>For the race of</h3>\n\t\t<h3>GOVERNOR</h3>\n\t</div>\n\t<form class="form" ng-submit="stateSubmit(pick.governor, pick.representative)">\n\t\t<div>\n\t\t\t<div ng-repeat="governor in governors">\n\t\t\t\t<span class="item item-checkbox">\n\t\t\t\t\t<label class="checkbox">\n\t\t\t\t\t\t<input ng-value="governor.id" type="radio" ng-model="pick.governor" name="select">\n\t\t\t\t\t</label>\n\t\t\t\t\t<span>{{ governor.candidate }}</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<h3>For the race of</h3>\n\t\t\t<h3>STATE REPRESENTATIVE</h3>\n\t\t</div>\n\t\t<div>\n\t\t\t<div ng-repeat="representative in representatives">\n\t\t\t\t<span class="item item-checkbox">\n\t\t\t\t\t<label class="checkbox">\n\t\t\t\t\t\t<input ng-value="representative.id" type="radio" ng-model="pick.representative" name="select">\n\t\t\t\t\t</label>\n\t\t\t\t\t<span>{{ representative.candidate }}</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<br><br>\n\t\t<div>\n\t\t<button type="submit" value="submit">Submit</button>\n\t\t</div>\n\t</form>\n</div>\n\n';

}
return __p
};