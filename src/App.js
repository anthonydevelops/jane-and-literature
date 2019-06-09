import React from 'react';
import './App.css';
import { Button } from 'reactstrap'
import { content } from './Content'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: null
    };

  }

  // --------------------------------------------
  // Handles the text generation for each author
  // --------------------------------------------
  contentHandler(id) {
    // Episodes Node
    let p = document.createElement("p")
    p.setAttribute("id", "episodes")
    const episodes = `Aires on Season ${content[id].seasons}, Episode ${content[id].episodes}`
    let text = document.createTextNode(episodes)
    p.appendChild(text)

    let parent = document.getElementById("content-episodes")
    if (document.getElementById("episodes")) {
      const current = document.getElementById("episodes")
      parent.replaceChild(p, current)
    } else {
      parent.appendChild(p)
    }

    // Background Node
    const link = document.createElement("a")
    link.setAttribute("id", "link")
    text = document.createTextNode(`${content[id].backgroundTitle}`)
    link.appendChild(text)
    link.title = `${content[id].backgroundTitle}`
    link.href = `${content[id].background}`

    parent = document.getElementById("content-background-link")
    if (document.getElementById("link")) {
      const current = document.getElementById("link")
      parent.replaceChild(link, current)
    } else {
      parent.appendChild(link)
    }

    // Intertextuality Node
    p = document.createElement("p")
    p.setAttribute("id", "intertextuality")
    text = document.createTextNode(content[id].intertextuality)
    p.appendChild(text)

    parent = document.getElementById("content-text")
    if (document.getElementById("intertextuality")) {
      const current = document.getElementById("intertextuality")
      parent.replaceChild(p, current)
    } else {
      parent.appendChild(p)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="title"><span role="img" aria-label="man-dancing">&#128378;&#127996;</span>Jane the Virgin<span role="img" aria-label="woman-dancing">&#128131;&#127996;</span></h1>
          <div className="sidebar">
            <ul>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("gruesz", e)}>
                  Kirsten Gruesz
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("kanellos", e)}>
                  Nicolas Kanellos
                    </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("allende", e)}>
                  Isabel Allende
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("marquez", e)}>
                  Gabriel Garcia Marquez
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("martin", e)}>
                  Gerald Martin
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("borges", e)}>
                  Jorge Luis Borges
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("martin-rodriguez", e)}>
                  Manuel Martin-Rodriguez
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("lugo-lugo", e)}>
                  Carmen Lugo-Lugo
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("castro-klaren", e)}>
                  Sara Castro-Klaren
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("lichter-amundson", e)}>
                  Robert Lichter & Daniel Amundson
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("nussbaum", e)}>
                  Emily Nussbaum
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("itzkoff", e)}>
                  Dave Itzkoff
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("johnson", e)}>
                  Carroll Johnson
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("waugh", e)}>
                  Patricia Waugh
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("martin-barbero", e)}>
                  Jesus Martin-Barbero
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("rincon", e)}>
                  Omar Rincon
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("pinon", e)}>
                  Juan Pinon
                  </Button>
              </li>
              <li>
                <Button outline style={{ color: "white" }} block onClick={(e) => this.contentHandler("erlick", e)}>
                  June Carolyn Erlick
                  </Button>
              </li>
            </ul>
          </div>
          <div id="content">
            <div>
              <div>
                <h4 className="content-header"><span role="img" aria-label="tv">&#128250;</span> Episodes:</h4>
              </div>
              <div id="content-episodes"></div>
            </div>
            <div>
              <div>
                <h4 className="content-header"><span role="img" aria-label="notepad">&#128221;</span> Background:</h4>
              </div>
              <div id="content-background-link"></div>
            </div>
            <div>
              <div>
                <h4 className="content-header"><span role="img" aria-label="fire">&#128293;</span> Intertextuality:</h4>
              </div>
              <div id="content-text"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
