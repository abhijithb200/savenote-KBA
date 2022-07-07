# savenote
A simple pasting web application to paste/store the notes and user can share the link to others to view the note.<br>Build using:
- Node.js
- Express.js
- mongodb database
- Express Handlebars
- Bootstrap.css

###  How to run?

1.  Download the mongodb community server from https://www.mongodb.com/try/download/community?tck=docs_server
2.  In the cloned directory, run
```cmd
node app.js
```
3. Access the webpage at **localhost:3000**

### Execution flow

1.  The user can supply the below parameters and send the details to the backend at http://localhost:3000/note as the post request
- Title : Title of the note
- Author : Name of the creator of the note
- Image url : Image needed to display with the note if any
- Note : The note that needed to be viewed

2.  Save the details to the mongodb database
3.  After everything is stored, the user is redirected to the http://localhost:3000/viewnote/<doc_id><br/>
&ensp;&ensp;In the backend, the document is retrieved using the **document id** which is unique to each document 
