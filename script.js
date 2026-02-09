

      const heading = document.createElement("h1");
      const para =document.createElement("p");
      const headingText = document.createTextNode("Big Head!");
      const paraText = document.createTextNode("Para Text!");
      heading.appendChild(headingText);
      para.appendChild(paraText);
      document.body.appendChild(heading);
      document.body.appendChild(para)
