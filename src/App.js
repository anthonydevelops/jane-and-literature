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

  // Handles text generation for each author
  contentHandler(id) {
    // ----------------------------------
    // Create new node on intertexuality
    // ----------------------------------
    const p = document.createElement("p")
    p.setAttribute("id", "intertextuality")
    let text = document.createTextNode(content[id].intertextuality)
    p.appendChild(text)

    // let parent = document.getElementById("content")
    let parent = document.getElementById("content-text")
    if (document.getElementById("intertextuality")) {
      const current = document.getElementById("intertextuality")
      parent.replaceChild(p, current)
    } else {
      // parent.replaceChild(p, current)
      parent.appendChild(p)
    }

    // ----------------------------------
    // Create new node on episodes
    // ----------------------------------
    const h3 = document.createElement("h3")
    h3.setAttribute("id", "episodes")
    const episodes = `Aires on Season ${content[id].seasons}, Episode ${content[id].episodes}`
    text = document.createTextNode(episodes)
    h3.appendChild(text)

    parent = document.getElementById("content-episodes")
    if (document.getElementById("episodes")) {
      const current = document.getElementById("episodes")
      parent.replaceChild(h3, current)
    } else {
      parent.appendChild(h3)
    }
    // parent.replaceChild(h3, current)

    // ----------------------------------
    // Create new node on background
    // ----------------------------------
    const link = document.createElement("a")
    link.setAttribute("id", "link")
    text = document.createTextNode("Isabel Allende - Aphrodite")
    link.appendChild(text)
    link.title = "Isabel Allende - Aphrodite"
    link.href = "https://www.isabelallende.com/en/book/aphrodite"

    parent = document.getElementById("content-background-link")
    if (document.getElementById("link")) {
      const current = document.getElementById("link")
      parent.replaceChild(link, current)
    } else {
      parent.appendChild(link)
    }
    // parent.replaceChild(link, current)
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="wrapper">
            <h1 className="title">Jane the Virgin</h1>
            <div className="sidebar">
              <ul>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("gruesz", e)}>Kirsten Gruesz</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("kanellos", e)}>Nicolas Kanellos</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("allende", e)}>Isabel Allende</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("marquez", e)}>Gabriel Garcia Marquez</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("martin", e)}>Gerald Martin</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("borges", e)}>Jorge Luis Borges</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("martin-rodriguez", e)}>Manuel Martin-Rodriguez</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("lugo-lugo", e)}>Carmen Lugo-Lugo</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("castro-klaren", e)}>Sara Castro-Klaren</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("lichter-amundson", e)}>Robert Lichter & Daniel Amundson</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("nussbaum", e)}>Emily Nussbaum</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("itzkoff", e)}>Dave Itzkoff</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("johnson", e)}>Carroll Johnson</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("waugh", e)}>Patricia Waugh</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("martin-barbero", e)}>Jesus Martin-Barbero</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("rincon", e)}>Omar Rincon</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("pinon", e)}>Juan Pinon</Button></li>
                <li><Button outline color="info" block onClick={(e) => this.contentHandler("erlick", e)}>June Carolyn Erlick</Button></li>
              </ul>
            </div>
            <div id="content">
              <h3 id="content-episodes"></h3>
              <h3 id="content-background-link"></h3>
              <div id="content-text"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
