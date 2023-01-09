import React from "react";

class ExCompProperties extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    
    const {info: { 
      image, 
      cardTitle: title, 
      cardDescription: description, 
      button:{url, label}
    }} = this.props;

    return (
      <div>
        <div
          style={{
            width: "18rem",
            border: "1px solid rgba(0,0,0,0.125)",
            margin: "1rem",
            padding: "1rem",
          }}
        >
          <img
            
            style={{ width: "100%", display: "block" }}
            src={image}
          />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={url}>{label}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ExCompProperties;
