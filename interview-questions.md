# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 

This was a tough one because for some reason I cant seem to recall. Here is my wild guess. Well I know what a foreign key is. A foreign key is the relationship between data tables in your database, foreign keys are related by the data you give it and thats what makes them foreign keys. However if you screw up your application and forget to add your foreign key I believe you can fix that by simply using the update Crud action in order to update your foreign key. I believe the foreign Key would be called the Cohort model because you are referring to the whole cohort. The student model will only refer to all the students in the cohort overall.

Researched answer:

 Research shows that my answer may be partially right. Its may be as simple as add_foreign... them use the add_column to add the new foeign key. If its early in the process I found out that you can simply so a db: rollback and that will take you one step back in your application.Once ypu roll back you should be in the migration section.After you are enter back in to your migtations you should be able to create new columns with data.

2. Which RESTful routes must always be passed params? Why?

Your answer:

 Destroy(Delete), Update, Edit, and show. Of the top of my brain I think these 4 restful routes must be passes through  params because they all of these restful routes indicate a specific Id. for example Lets work with Update, when your updating a blog post, your not updation all the blog at once. The user can pick and choose what blog post to update. That is why it is passed with params

Researched answer:

* DESTROY: Deletes a specifi content
* Update: Updates a specific content
* Edit: Returns a html element for editing a specific content
* Show: displays a specific conrent unlike Index



3. Name three rails generator commands. What is created by each?

Your answer: 

If I can dig deep into my recollection the three rails generators commands I can think of are called a 
rails db :migrate, rails db:new and rails db: generate.

We use the rails generate command to create new folders amd files to our applications, It can also be used to unify your work flow. We use the migrate command to change data in you database schema. Migration is a special tool we use to coordinate with our actual code. We use the rails new command to create a new rails application.

Researched answer:
 
 I decided since time is given that I would take the opportunity to look uo some more interesting rails generating commands. Rials server is also known as rails s an it is a command that lets developers work on there application through the command line instead of the GUI, which is a great way to dowmload dependecies like npm and yarn. Another rails generator command that is used often is rails console which is also known as rails c. We use this command to open our developer browser. Which is http://localhost:3000. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
<!-- Lets use Index. I chose to use Index  -->

action: "POST" location: /students
<!-- Lets use Create. I chose to use Create  -->

action: "GET" location: /students/new
<!-- Lets use New. I chose to use New -->

action: "GET" location: /students/2
<!-- Lets use Show. I chose to Use Show -->

action: "GET" location: /students/2/edit
<!-- Lets use Edit. I chose to use Edit -->

action: "PATCH" location: /students/2
<!-- Lets use Update. I chose to use Update -->

action: "DELETE" location: /students/2
<!-- Lets use Destroy. I chose to use desrtoy -->

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


<!-- “As a [persona], I [want to], [so that].” -->

<!-- Pesona -->
<!-- "As a [persona]": Who are we building this for? We’re not just after a job title, we’re after the persona of the person. Understand how that person works, how they think and what they feel. We have empathy for the use. -->

<!-- Wants to -->
<!-- “Wants to”: Here we’re describing their intent — not the features they use. What is it they’re actually trying to achieve? This statement should be implementation free — if you’re describing any part of the UI and not what the user goal is you're missing the point. -->

<!-- So that -->
<!-- “So that”: how does their immediate desire to do something this fit into their bigger picture? What’s the overall benefit they’re trying to achieve? What is the big problem that needs solving? -->

<!-- * User Story 1 -->
* 
<!-- As Dayquana, I would love to get up earlier, so I can schedule more clients at my hair salon -->
<!-- *User Story 2 -->

*
<!-- As Frances, I am a teacher and somethimes I am booked with grading student papers. I really never have much time for self anymore, I wish there was an app that I can jot down times so I dont have to think about grading papers all day, It will remind me to do other things -->

<!-- User Story 3 -->
*
<!-- As Rochelle, I work as a nurse for the hospital, I work eveyday. Sometimes its hard for me to remember the days of the week better yet what to do when that day comes arouns, so anything to help me keep tack of my life right now would be nice  -->

<!-- User Story 4 -->
*
<!-- As Theresa, I am a professional dater if thats a word (swag). I am looking for the the right girlfriend, But going on all these dates, sometimes I am getting the woman mixed up and what days I am supposed to see who. I need something I can carry with me, that way I can pull out my phone and see what my schedule is looking like and who I am meeting up with today -->

<!-- User Story 5 -->
*
<!-- As Tonya, My husband leaves everything to me, I am tired of telling him what to do verbally, We both bearly home beacuse he works alot. I would like for him to complete some of the task I ask hime to do. I just wish there was a way to have wifey duties ping to his phone and remember to do these things for your wife. Cause it seems like I cant get through but instagram can-->

<!-- User Story 6 -->
*
<!-- As Missy, I work for the mayor of Nyc, I go to school and I have a daughter that loves dancing, singinf, cheerleading and much more. S he is in so many activiteis it it hard to me to keep up. exspecially with everything going on in my own personal life. Its important for me to get organized because I keep missing her shows at school.

<!-- User Story 7 -->
*
<!-- As James, I grew up with all sister in my family, so trying to get advice about life situations was like asking for my death sentence, Most of the time I stay in trouble because I had no direction. I feel in order to become more successful I need to take my time in life and do what I am supposed to. I need something to help me stay on track -->

<!-- User Story 9 -->
*
<!-- As Shareese, If I dont have things planned out I lose my mind. Consider me the walling dead. I usually write plans out, my to do list, my life plan i even have an old school vison board where I had cut out the pictures in a magazine. I wish they had somwthing that can keep me more organzied on the go. I can update my vision board right then and there when the thought arises instead of having to go home cut out more pictures i can just add a pic from a vision board in my phone.-->

<!-- User Story 10 -->
<!-- As the Matriot, I want to start doing things for mw since all of my kids are adults now, But I dont know where to start. Beacuase I constantly have to make sure my girls did there chores. So most of the tome my fun ends short becasue there is no way they can mark the task done and I can get ot to my phone. I can know exactly when they completed there task and they can upload a pic before they go outside and play with there firends.-->
* -->