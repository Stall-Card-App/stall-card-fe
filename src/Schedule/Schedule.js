import './Schedule.scss'

function Schedule() {
  const date = new Date(Date.now());
  const today = date.toDateString();
  return ( 
    <section className='schedule'>
          <h3>{`Schedule: ${today}`}</h3>
          <table>
            <tbody>
              <tr>
                <td>AM Feed / Turnout</td>
                <td>Natalie M.</td>
              </tr>
               <tr>
                <td>Stall Cleaner</td>
                <td>Julie P.</td>
              </tr>
              <tr>
                <td>9:00am</td>
                <td>Grace H. Lesson</td>
              </tr>
              <tr>
                <td>10:00am</td>
                <td>Sam D. Lesson</td>
              </tr>
              <tr>
                <td>11:00am</td>
                <td>SweetPea Farrier</td>
              </tr>
              <tr>
                <td>11:30am</td>
                <td>Cisco Farrier</td>
              </tr>
                <tr>
                <td>12:00pm</td>
                <td>Clark Farrier</td>
              </tr>
                <tr>
                <td>3:00pm</td>
                <td>Hay Delivery</td>
              </tr>
                <tr>
                <td>3:45pm</td>
                <td>Madison F. Lesson</td>
              </tr>
                <tr>
                <td>4:30pm</td>
                <td>Rachel G. Lesson</td>
              </tr>
              <tr>
                <td>PM Feed / Turnout</td>
                <td>Em J.</td>
              </tr>
            </tbody>
          </table>
        </section>
   );
}

export default Schedule;