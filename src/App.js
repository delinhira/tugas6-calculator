import React, { Component } from 'react';

import Button from './Button';

class App extends Component {
  render() { 
    return (
      <>
        <div className="container mt-5 pt-4" style={{
          width: "25%",
          backgroundColor: "powderBlue",
          borderRadius: "8px",
          color: "slateblue",
          fontFamily: "monospace"
          }}>
          {/* display */}
          <h3 className="pr-4 pt-3 text-right">CALCULATOR</h3>
          <div className="row ">
            <div className="col mb-1 d-flex justify-content-center">
              <input className="form-control" style={{width:"90%", height:"70px", fontSize:"30px"}} id="display" disabled></input>
            </div>
          </div>
          {/* keys */}
          {/* row-1 */}
          <div className="row justify-content-center">
            <div className="col d-flex justify-content-center">
              <Button value="7"/>
              <Button value="8"/>
              <Button value="9"/>
              <Button value="+"/>
            </div>
          </div>
          {/* row-2 */}
          <div className="row justify-content-center">
            <div className="col d-flex justify-content-center">
              <Button value="4"/>
              <Button value="5"/>
              <Button value="6"/>
              <Button value="-"/>
            </div>
          </div>
          {/* row-3 */}
          <div className="row justify-content-center">
            <div className="col d-flex justify-content-center">
              <Button value="1"/>
              <Button value="2"/>
              <Button value="3"/>
              <Button value="*"/>
            </div>
          </div>
          {/* row-4 */}
          <div className="row justify-content-center">
            <div className="col d-flex justify-content-center">
              <Button value="C"/>
              <Button value="0"/>
              <Button value="/"/>
              <Button value="="/>
            </div>
          </div>
          <h5 className="text-center pt-2 pb-3">Delinda & Syifa</h5>
        </div>
      </>
    );
  }
}
 
export default App;
