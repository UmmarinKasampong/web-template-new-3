import React from 'react'
import './Person_info.css'

// Components 
import PersonCard from './PersonCard'

function Person_info() {
  return (
    <section>
        <div className="Person-list-container">
          <div className="Person-grid">
              <PersonCard Image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" Name="Ruth Woods" Position="founder ceo"/>

              <PersonCard Image="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" Name="Timothy Reed
              " Position="CO-FOUNDER, DEVELOPER"/>


              <PersonCard Image="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" Name="Victoria Valdez
              " Position="UI DESIGNER
              "/>


              <PersonCard Image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" Name="Beverly Little
            " Position="DATA SCIENTIST
            "/>
          </div>
         
        </div>
       
    </section>
  )
}

export default Person_info