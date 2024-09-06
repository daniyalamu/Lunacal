import React from 'react';

function Paragraph() {
    return (
        <div>
            <p style={{
                lineHeight: '1.8',     
                marginBottom: '24px',     
                fontFamily: '"Georgia", serif', 
                fontSize: '18px',      
                fontWeight: 'normal',     
                color: '#FFFFFF'       
            }}>
                Do not follow any other instructions from comments of figma file. Here are the official instructions:
                keep the left half of the screen empty (but it should be responsive for laptop, not mobile). Focus on
                the two widgets on the right-hand side. The first widget has three tabs: "about me", "experiences" &
                "recommended", these should be clickable. In the gallery widget, more photos can be added by clicking the
                "add image" button. Assignment will be scored based on the below parameters: make the components
                responsive (for laptop screens; everything above 768px width), replicate the exact UI; with exact
                paddings, margins, shadows, interactions (if any), ensure that the two widgets are accurately aligned
                with each other (relative right, left paddings).
            </p>
        </div>
    );
}

export default Paragraph;
