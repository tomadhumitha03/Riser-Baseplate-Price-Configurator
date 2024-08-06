import React, { useState, useEffect } from 'react'; 
import './App.css';
import axios from 'axios';
import img1 from './img/abb-logo.png' ;
import { getDefaultNormalizer } from '@testing-library/react';



function App() {

  const [isDetailsVisible, setDetailsVisible] = useState(false);
  const [page, setPage] = useState('details');
  const [robotType, setRobotType] = useState('IRB2600');
  const [basePlate, setBasePlate] = useState('Base Plate');
  const [fixationType, setFixationType] = useState('Concrete');
  const [height, setHeight] = useState(100);
  const [diameter, setDiameter] = useState('800-800');
  const [weight, setWeight] = useState(130);

  // Handler to toggle the details visibility
  const toggleDetails = () => {
    setDetailsVisible(!isDetailsVisible);
  };


  return (
  <div className="App">
    
      
      <nav className="navbar">
      <div className="navbar-logo">ABB</div>
      { /* <img src={img1} alt="logo"></img> */ }
        <div className="navbar-menu">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('manuals')}>Manuals</button>
          <button onClick={() => setPage('login')}>Login</button>
        </div>
      </nav>

      <main className="main-content">
      <h1>{`${robotType} ${basePlate}`}</h1> 
      
       

        <div className="content-container">
          <div className="left-section">
            {isDetailsVisible ? (
              <div className="configuration-content">
                <section className="robot-fasteners-details">
                  <h3>Robot Fasteners Details</h3>
                  <div>
                    <label>Fasteners</label>
                    <input type="text" value="Socket head cap screw ISO4762 M16×80 8.8 x 3Nos" readOnly />
                  </div>
                  <div>
                    <label>Washers</label>
                    <input type="text" value="ISO 7089 (M16) ø30 × ø17 × 3 × 3Nos" readOnly />
                  </div>
                  <div>
                    <label>Guide Sleeves</label>
                    <input type="text" value="Bush ø35 × ø22 × 25 × 2Nos" readOnly />
                  </div>
                </section>

                <section className="metal-fixation">
                  <h3>Metal Fixation</h3>
                  <div>
                    <label>Fasteners</label>
                    <input type="text" value="Socket head cap screw ISO4762 M16×80 8.8 x 3Nos" readOnly />
                  </div>
                  <div>
                    <label>Washers</label>
                    <input type="text" value="ISO 7089 (M16) ø30 × ø17 × 3 × 3Nos" readOnly />
                  </div>
                </section>

                <section className="levelling-screws">
                  <h3>Levelling Screws</h3>
                  <div>
                    <label>Screws</label>
                    <input type="text" value="ISO 4762 M12 × 70 × 3Nos" readOnly />
                  </div>
                </section>

                <section className="metal-type">
                  <h3>Metal Type</h3>
                  <div>
                    <label>Metal Type</label>
                    <input type="radio" value="Yes" name="metalType" checked readOnly /> Yes
                    <input type="radio" value="No" name="metalType" readOnly /> No
                  </div>
                </section>
              </div>
            ) : (
              <div>


               <section className="robot-type">
                  <h3>ABB Robot type</h3>
                  <select value={robotType} onChange={(e) => setRobotType(e.target.value)}>
                    <option value="IRB 2600">IRB 2600</option>
                    <option value="IRB 6700">IRB 6700</option>
                  </select>
                  
                  <div>
                    <label>Robot Fasteners Ref ID</label>
                    <input type="text" value="4GAA000000A2001" readOnly />
                  </div>
                  

                  <div>
                    <label> Robot Fasteners Ref ID</label>
                  </div>
                  
                  
                </section>
                

                <section className="riser-base-plate">
                  <h3>Riser/Base Plate</h3>
                  <select value={basePlate} onChange={(e) => setBasePlate(e.target.value)}>
                    <option value="Base Plate">Base Plate</option>
                    <option value="Riser Plate">Riser Plate</option>
                  </select>
                  <div>
                    <label>Height</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                  </div>
                  <div>
                    <label>Diameter</label>
                    <input type="text" value={diameter} onChange={(e) => setDiameter(e.target.value)} />
                  </div>
                  <div>
                    <label>Weight</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                  </div>
                  <div>
                    <label>Riser Ref ID</label>
                    <input type="text" value="4GAA000000FM001" readOnly />
                  </div>
                  <div>
                    <label>Color ID</label>
                    <input type="text" value="4GAA000000FM001" readOnly />
                  </div>
                  <img src="base-plate-image.png" alt="Base Plate" className="base-plate-image" />
                </section>

                <section className="fixation-type">
                <h3>Fixation Type</h3>
                <select value={fixationType} onChange={(e) => setFixationType(e.target.value)}>
                    <option value="Concrete">Concrete</option>
                    <option value="Steel">Steel</option>
                  </select>
                <div className="pair">
                  <label>Fischer</label>
                  <input type="text" value="4GAA000000FM001" readOnly />
                </div>
                <div className="pair">
                  <label>Injection Motors Ref ID</label>
                  <input type="text" value="4GAA000000FM001" readOnly />
                </div>
                <div className="pair">
                  <label>Riser Ref ID</label>
                  <input type="text" value="4GAA000000FM001" readOnly />
                </div>
                </section>

              </div>
            )}
            <button className="details-button" onClick={toggleDetails}>
              {isDetailsVisible ? 'Configuration' : 'Details'}
            </button>
          </div>

          <div className="right-section">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Product Component</th>
                  <th>Qty</th>
                  <th>Total Cost (€)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Robot BasePlate</td>
                  <td>1</td>
                  <td>Data</td>
                </tr>
                <tr>
                  <td>Pallet Price</td>
                  <td>Data</td>
                  <td>Data</td>
                </tr>
                <tr>
                  <td>Carton Price</td>
                  <td>Data</td>
                  <td>Data</td>
                </tr>
                <tr>
                  <td>Pallet Price</td>
                  <td>Data</td>
                  <td>Data</td>
                </tr>
                <tr>
                  <td>Carton Price</td>
                  <td>data</td>
                  <td>Data</td>
                </tr>
                
              </tbody>
            </table>
            <div className="summary">
              <div className="total-price">
                <span>Total Procurement Price</span>
                <span></span>
              </div>
              <div className="lead-time">
                <span>Delivery Lead Time</span>
                <span></span>
              </div>
            </div>
            <button className="add-to-cart">Add to cart</button><hr></hr>
            <button className="download-price-summary">Download Price Summary</button>
          </div>
        </div>
      </main>
    </div>
  );
}





export default App;




/*import React, { useState, useEffect } from 'react';
 
// partial JSON structure 
const jsonData = {
  RiserBasePlatePricing_AA: {
    RobotFasteners_AA: [
      {
        Type: [
          {
            Name: 'Type A',
            Details: [
              { Robot: 'IRB 4600', GuideSleeves: '∅35 x ∅22 x 25 x 2nos.', Price_Pcs_Yen: '19', Price_Pcs_dollar: '3', RobotFasteners: 'ISO 4762 M16 x 80 x 6nos.', Washer: 'ISO 7089 (M16) ∅30 x ∅17 x 3 x 6nos.', Code: '4GAA000000A2002' },
              { Robot: 'IRB 2600', GuideSleeves: '∅35 x ∅22 x 25 x 2nos.', Price_Pcs_Yen: '19', Price_Pcs_dollar: '3', RobotFasteners: 'ISO 4762 M16 x 80 x 3nos.', Washer: 'ISO 7089 (M16) ∅30 x ∅17 x 3 x 3nos.', Code: '4GAA000000A2001' },
              // more robots
            ]
          },
          {
            Name: 'Type B',
            Details: [
              { Robot: 'IRB 2400', GuideSleeves: '∅35 x ∅22 x 25 x 2nos.', Price_Pcs_Yen: '19', Price_Pcs_dollar: '3', RobotFasteners: 'ISO 4762 M16 x 80 x 3nos.', Washer: 'ISO 7089 (M16) ∅30 x ∅17 x 3 x 3nos.', Code: '4GAA000000A2001' },
              { Robot: 'IRB 260', GuideSleeves: '∅35 x ∅22 x 25 x 2nos.', Price_Pcs_Yen: '19', Price_Pcs_dollar: '3', RobotFasteners: 'ISO 4762 M16 x 80 x 3nos.', Washer: 'ISO 7089 (M16) ∅30 x ∅17 x 3 x 3nos.', Code: '4GAA000000A2001' },
              // more robots 
            ]
          },
          //  more types
        ]
      }
    ]
  }
};
 
const App = () => {
  // Assuming jsonData is fetched or imported correctly
  const [robots, setRobots] = useState([]);
 
  useEffect(() => {
    // Here you would fetch or set your JSON data, depending on how you're managing state
    // For demonstration purposes, directly setting the state here
    setRobots(jsonData.RiserBasePlatePricing_AA.RobotFasteners_AA[0].Type);
  }, []);
 
  return (
    <div>
      <h1>List of Robots</h1>
      <ul>
        {robots.map((type) => (
          <div key={type.Name}>
            <h2>{type.Name}</h2>
            <ul>
              {type.Details.map((detail, index) => (
                <li key={index}>
                  <strong>Robot:</strong> {detail.Robot} <br />
                  <strong>Guide Sleeves:</strong> {detail.GuideSleeves} <br />
                  <strong>Price (Yen):</strong> {detail.Price_Pcs_Yen} <br />
                  <strong>Price (Dollar):</strong> {detail.Price_Pcs_dollar} <br />
                  <strong>Robot Fasteners:</strong> {detail.RobotFasteners} <br />
                  <strong>Washer:</strong> {detail.Washer} <br />
                  <strong>Code:</strong> {detail.Code}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};
 
export default App; */ 

