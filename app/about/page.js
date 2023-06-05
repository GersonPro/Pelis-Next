  import React from 'react';
  import List from "../components/List.server";

  export default function AboutPage() {
    return (
      <List>
        
      {(data) => (
        
        <div>
          {Array.isArray(data) && data.map((pelis) => (
            <h1 key={pelis.id}>{pelis.title}hola</h1>
            
          ))}
        </div>
      )}
    </List>
    );
  }
