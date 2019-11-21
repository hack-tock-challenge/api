# OUI Challenge API

Routes : 

GET /question

  => return all questions in the database.

GET /question/for/:user_id/next_travel

  => return a challenge for the user (user_id) next travel
  => this is here that we are mocking SNCF voageur API
  
  => API create a new "challenge" object for this user in order to store his score (so this is actually not totally staless)

GET /question/:question_id/hint

  => Get questions hints 

POST /question/:question_id/validate

  body payload : 

  {
    type: type detected by bot (number, text, date)
    answer: extracted answer (if the answer should be number, this attribute should be a number. Same for date :) )
    rawAnswer: raw response from user
    (multipliers): in case of a number, send extracted multipliers entities
  }
  
  response : 
  
  {
    isCorrect: boolean
    goodAnswer: number/date/text
    (error): whatever error occured during validation
    score: current total of point for the challenge
  }
  
  
GET /user/:messenger_id
  => retrieve a user by its messenger id
  
GET /user/:email
  => retireve a user by its email
  
GET /user/:user_id/score