# IBMessenger
An integrated messenging enviroment for both business and social interactions.

#What does it use?
Node.js backend hostedon IBM Bluemix for the anayltics/insight analysis. For the communications/SMSing aspects we used Twillio's API's.

#How can you run it?
Our watson backend is already up [here](http://watsonmessenger.mybluemix.net/). We call a <code>HTTP GET</code> at our endpoint <code>http://watsonmessenger.mybluemix.net/profile</code>. The only URL query you will need (if you wish to see our backend in action) is <code>text</code>.  

To run Twillio, simply fork the project, cd into <code>server</code>, and run <code>node app.js</code>. The server runs locally at <code>localhost:3008</code> as of right now.

