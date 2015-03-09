<h1>Online Voting App</h1>

<h2>Description</h2>
Why - 
Technology is changing so fast, but the way we vote does not. As millenials grow up in an ever changing, technology-focused world its imperative to speak on their level. It is generally known that turnout for young voters at polls is low. What if we could remove some of the barriers that discourages young voters from casting their voice? Registering to vote is still a paper heavy action and getting young voters to not only find their correct voting place, but also taking the time to show up only to wait in line and use less than efficient technology is discouraging. Young people are usually in need of money and are dependent on their income, therefore, taking them away from what they're most focused on to jump through hoops to cast an opinion hardly seems worth the effort. This app is meant to change this current reality.

How - 
This web app has a home page where users can choose to register themselves to vote. After a user registers to vote they are redirected to the voting page where they can look at the list of county and state level elections to select to cast their vote. When clicking on an election, the user will see summary of the election and the selection of candidates and issues. When the user makes their selection on each election, they submit one form. After submitting, the user is redirected to a page that asks if they would like to recieve status updates on the elections they voted on.

What - 
If casting your vote was an online experience, what would that look like? In this web app, the user is able to register themselves to vote and find current issues to choose from listed by their local and state governments. After casting their vote, the user can elect to subscribe to the status of the issues they voted on sent via text/email messages through the process.

- Register Page
	Collect user info: address, phone, name, SSN
- Page of Elections
	Lists
		Inside each list you mark your vote
	Submit 1 entire form of votes
- Recieve Updates Page (include choices made)
- Page - prevent from voting again

<h3>Data Models</h3>
<div>
user: {
	userId:
	address:
	phone:
	name:
	ssn:
	email
	governor:
	representative:
	proposition1:
	tax:
	mayer:
	councilman:
}
</div>
<div>
state: {
	governor:
	representative:
}
</div>
<div>
county: {
	proposition1:
	tax:
}
</div>
<div>
city: {
	mayor:
	councilman:
}
</div>

<h3>Page Sketches</h3>

<a href="https://github.com/erikadmoller/final-project/blob/master/pages_sketch.JPG">Page Sketch</a>

<h3>Trello Board</h3>

<a href="https://trello.com/b/kxJ9T8k1/final-project">https://trello.com/b/kxJ9T8k1/final-project</a>

