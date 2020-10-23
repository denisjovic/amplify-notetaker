import React, { Component } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


class App extends Component {

  state = {
    notes : [
      {
        id: 1,
        note: "Hello world"
      }
    ]
  }
  render() {
    // Destructuring state
    const {notes} = this.state

  return (
    <div>
    <AmplifySignOut />
    
    {/* Add note */}
    <div className="flex flex-column items-center justify-center pa3 bg-washed-red">
      <h1 className="code f2-1">Amplify Notetaker</h1>
      <form action="" className="mb3">
        <input 
        type="text" 
        className="pa2 f4"
        placeholder="Write your note..."
        />
        <button 
        className="pa2 f4" 
        type="submit">Add note</button>
      </form>

      {/* Notes list */}
      <div>
        {notes.map(item => (
          <div key={item.id} className="flex items-center">
            <li className="list pa1 f3">
                {item.note}
            </li>
            <button className="bg-transparent bn f4"><span>&times;</span></button>
          </div>
        ))}
      </div>

    </div>
    </div>
  );
  }
}
// includeGreetings seems not be working anymore
export default withAuthenticator(App, { includeGreetings: true });
