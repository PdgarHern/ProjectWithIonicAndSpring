# ProjectWithIonicAndSpring

Welcome to my first project using Ionic and Spring

# Installation

First, you need to import to your system the data that you we'll find inside the folder "database" within the "backend".
Then, you need to install "Spring Tools 4" from the Eclipse Marketplace in order to run the backend.
Also, you'll have to execute the command "npm install" inside the "frontend" folder.
You may need to change the user and password from the "backend" application properties to match your MySQL user and password.

# About the app

Here you can see an entire CRUD. You can see, create, modify and delete entries from my anime database.
Is important to know that the table "animes" is related with another table named "studios", so you can't create an anime with a different studio from the ones that already are in the database.
Last thing to know is that every image you see in the app is stored in the "assets/img" folder of the "frontend", the ones from the crud included.
So, if you want to create a new anime with a new image you will have to first store the image manually in "assets/img" and then create the anime
writing "assets/img/nameOfTheImage" in the corresponding field.
I recomend that the image is 2560x1024 size or relative to that size (1280x512 would be perfectly valid, for example).
Last thing to say, the image you see in the home page is actually a slider. It isn't automatic though.

That's all. :)
