import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '김상훈',
  'birthday' : '940104',
  'gender' : '남',
  'job' : '학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '940104',
  'gender' : '남',
  'job' : '학생'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '정형돈',
  'birthday' : '940104',
  'gender' : '남',
  'job' : '학생'
}
]

class App extends Component{
  render(){
    return(
      <div>    
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.name}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }        
      </div>
    )
  }
}


export default App;
