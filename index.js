const express = require('express') // depenedencies
// express 모듈을 가져와서 함수를 반환
// 이 함수는 웹 애플리케이션을 초기화하고, 라우팅과 미들웨어 등을 설정하는 데 필요한 여러 기능을 제공

const app = express()
// express함수를 호출해 새로운 Express 애플리케이션을 생성
// app 객체는 HTTP 서버를 구성하고, 미들웨어를 사용하고, 라우팅을 설정할 수 있는 다양한 메서드를 가지고 있다.

const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://leejunwon:dlwnsdnjs1@boilerplate.do2t9.mongodb.net/?retryWrites=true&w=majority&appName=Boilerplate',
    {useNewUrlParser: true, useUnifiedTopology: true} // 에러 방지
).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', 
    (req, res) => res.send("Hello World"))
// app 객체를 사용해, 루트 경로(/)에 대해 GET 요청이 발생했을 때 "Hello World" 문자열을 응답으로 보내는 라우트를 정의

app.listen(port, 
    () => console.log(`Example app listening on port ${port}`))
// 서버가 지정된 포트에서 요청을 청취하도록 설정