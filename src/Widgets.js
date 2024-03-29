import React from 'react'
import "./Widgets.css"
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading,subtitle) => (
    <div className="widgets__article">
        <div className="widgets__articleleft">
            <FiberManualRecordIcon/>
        </div>

        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon/>
      </div>
        {newsArticle("Placement Opportunity" , 'Top 10 Placements')}
        {newsArticle("Placement Opportunity at google" , 'Google is hiring')}
    </div>

  );
}

export default Widgets
