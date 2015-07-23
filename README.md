### A little about NW.js

First:

	$> cd nw-address-book
	$> npm install

You can now run your webkit app with **nw** in the same directory where our package.json lives (assuming you have node-webkit installed). Node webkit is based off chromium and node.js. You can call all of node's modules directly within your app via **require**. You can also build an app with the typical server -> client architecture seen in web development (think express.js). This, however, is looked down upon with nw.js. We're writing all client side code here boys.
