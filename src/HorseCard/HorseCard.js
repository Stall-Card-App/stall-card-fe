import { React, useState }from "react";
import { Link } from "react-router-dom";
import "./HorseCard.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function HorseCard({photo, name, stallNumber, amFeed, pmFeed, turnout, id, updateCurrentPage }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return ( 
    <div className="horse-card">
      {/* <p>{stallNumber}</p> */}
      <Link to={`/horses/${id}`} key={id} onClick={() => updateCurrentPage('Horse Details')}>
        <img src={photo} alt={`Photo of ${name}`} />
      </Link>
      
      <div className="card-header">
        <h3>{name}</h3>
        <div className="circle">
          <p>{stallNumber}</p>
        </div>
      </div>
      <p><b>Turnout:</b> {turnout}</p>
      {/* <table>
        <tbody className="horse-info">
          <tr>
            <th>AM Feed:</th>
            <td>{amFeed}</td>
          </tr>
          <tr>
            <th>PM Feed:</th>
            <td>{pmFeed}</td>
          </tr>
          <tr>
            <th>Turnout:</th>
            <td>{turnout}</td>
          </tr>
          <tr>
            
          </tr>
        </tbody>
      </table> */}
      <Accordion className="feed-details">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ fontSize: '75%', height: '3em' }}
        >
          <Typography>Feed Details</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ fontSize: '75%'}}>
          <Typography >
            <b>AM Feed:</b> {amFeed} <br/>
            <b>PM Feed:</b> {pmFeed}
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
   );
}

export default HorseCard;