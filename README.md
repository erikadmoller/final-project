<h1>Online Voting App</h1>

<h2>Description</h2>

Technology is changing so fast, but the way we vote does not. As millenials grow up in an ever changing, technology-focused world its imperative to speak on their level. It is generally known that turnout for young voters at polls is low. What if we could remove some of the barriers that discourages young voters from casting their voice? Registering to vote is still a paper heavy action and getting young voters to not only find their correct voting place, but also taking the time to show up only to wait in line and use less than efficient technology is discouraging. Young people are usually in need of money and are dependent on their income, therefore, taking them away from what they're most focused on to jump through hoops to cast an opinion hardly seems worth the effort. This app is a proof of concept and is meant to give users the experience of what it could be like to vote online.

This web app has a home page where users register themselves to vote. Then they are redirected to the voting page where they can look at the list of elections on state, county and city levels.  When the user makes their selection on each election, they submit one form per page. The user has the option to recieve a link in a text message to 
 
If casting your vote was an online experience, what would that look like? In this web app, the user is able to register themselves to vote and find current issues to choose from listed by their local and state governments. After casting their vote, the user can elect to receive a text message with a link to a web page of status polls on each election.


<h3>Data Models</h3>
| <h4>User</h4> |  |  |  |  |  |
| --------- | -------- | -------- | -------- |
| username: | string | unique: | true |
| email: | email | required: | true | unqiue: | true |
| passports: | collection: | Passport | via: | user |
| street: | string | required: | true |
| apt: | string | required: | no |
| city: | string | required: | true |
| state: | string |
| zipcode: | string | required: | true |
| phone: | string | required: | true |
| name: | string | required: | true | unique: | true |
| ssn: | string | required: | true | unqiue: | true |

| <h4>Votes</h4> |  |  |  |
| id: | number |
| choice: | model: | Options |
| userId: | integer | unqiue | false |

| <h4>Profile</h4> |  |  |  |  |
| --------- | -------- | -------- | -------- |
| userId: | integer | unique: | true |
| email: | email | required: | true | unqiue: | true |
| street: | string | required: | true |
| apt: | string | required: | no |
| city: | string | required: | true |
| state: | string | required: | true |
| zipcode: | integer | required: | true |
| phone: | integer | required: | true |
| name: | string | required: | true |
| ssn: | integer | required: | true | unqiue: | true |
| textConfirm: | type: | string | required: | false |

<h4>Options</h4>
| -------- | ------- |
| race: | string | required: | true |
| candidate: | string | required: | true |
| year: | integer | required: | true |
| image: | string | required: | false |
| party: | string | required: | false |

<h3>Page Sketches</h3>

<a href="https://erikadmoller.mybalsamiq.com/projects/finalproject">Page Sketch</a>

<h3>Trello Board</h3>

<a href="https://trello.com/b/kxJ9T8k1/final-project">https://trello.com/b/kxJ9T8k1/final-project</a>

<h2>Libraries, Frameworks, APIs</h2>
<ul>
	<li>AngularJS</li>
	<li>Sails</li>
	<li>Underscore</li>
	<li>Twilio</li>
</ul>

