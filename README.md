 # **Pattern Dating Tool**  ![V4M2](./utils/v4m2.jpg)


## Demo
![Giphy Demo](./utils/Demo.gif)

https://pattern-dating-tool.herokuapp.com/

## Development
Pattern Dating Tool is a React Application made with Node and Express Web Servers while backed with MongoDB.  The purpose is to allow any user to search the Pattern Catalog database by company and pattern number and as a result, an image is rendered to the page.  

![Image of Catalog Page](./utils/readme-pic.jpg)

Addionally, there is a file uploader that can only be accesed by logging into the admin page.  The uploader uses a node.js middleware called Multer to upload PDF files of catalog pages to the MongoDB server.  The upload requires admin to input specific fields so that each document added refences all collections in the database.

Then Tesseract, an OCR engine, extracts the 4 digit pattern number from the uploaded file which becomes referenced by the user when searching for patterns. 

Finally, all PDF files are converted into images with an URL through the use of AWS and S3 Bucket.

## Credits

* Amazon Web Services
* Axios
* Express
* Firebase
* Material-UI
* MongoDB
* Mongoose
* Tesseract
* Multer
* React

## Collaborators

Corey Yates

![Corey](./utils/corey-pic.jpeg)

https://github.com/cqyates 

Whitney Crawford

![Whitney](./utils/whitney-pic.jpeg)

https://github.com/whitney227











