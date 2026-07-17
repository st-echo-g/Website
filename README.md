<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Echo St. Germain's Website</title>
    <style>
      body {
        --bg: #d9d9d9;
        --text: #000000;
        background: var(--bg);
        color: var(--text);
        max-width: 1100px;
        margin: 0 auto;
        padding: 40px clamp(20px, 8vw, 200px) 0;
      }
      .dots, .card, .box {
        border: 1px solid var(--text);
        border-radius: 8px;
        box-shadow: 4px 4px 0 var(--text);
      }
      .top, .row, .dots {
        display: flex;
      }
      .top, .row {
        gap: 20px;
      }
      .row {
        margin-top: 20px;
      }
      .dots {
        flex-direction: column;
        justify-content: center;
        gap: 16px;
        padding: 16px;
      }
      .dot {
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
      }
      .card, .box {
        flex: 1;
        padding: 40px;
      }
      .card p {
        line-height: 22px;
      }
      .hi {
        font-size: 2rem;
        font-weight: bold;
      }
      .box h2 {
        margin-top: 0;
      }
      .box a {
        display: block;
        color: var(--text);
      }
    </style>
  </head>
  <body>
    <div class="top">
      <div class="dots">
        <button class="dot" style="background:#ffffff" onclick="setTheme('#ffffff','#000000')"></button>
        <button class="dot" style="background:#d9d9d9" onclick="setTheme('#d9d9d9','#000000')"></button>
        <button class="dot" style="background:#4d4d4d" onclick="setTheme('#4d4d4d','#ffffff')"></button>
        <button class="dot" style="background:#000000" onclick="setTheme('#000000','#ffffff')"></button>
      </div>

      <div class="card">
        <p>
          <span class="hi">Hi</span>, welcome to my website. I'm Echo St. Germain, a PhD candidate at
          Northeastern University studying iron particle ignition and combustion,
          exploring iron as a zero-carbon, recyclable fuel. My research looks at
          how oxide layers form on iron particles during storage, how furnace
          heating rates affect ignitability, and what conditions lead to complete
          combustion. Outside the lab, I work as a Communication Lab Fellow at
          Northeastern, supporting graduate students with research posters and
          figures, and take part in STEM outreach across the Boston area.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="box">
        <h2>Professional</h2>
        <a href="cv.html">CV</a>
        <a href="https://scholar.google.com/">Google Scholar</a>
      </div>

      <div class="box">
        <h2>Personal</h2>
        <a href="photography.html">Photography</a>
      </div>
    </div>

    <script>
      function setTheme(bg, text) {
        document.body.style.setProperty('--bg', bg);
        document.body.style.setProperty('--text', text);
        localStorage.setItem('bg', bg);
        localStorage.setItem('text', text);
      }

      const savedBg = localStorage.getItem('bg');
      const savedText = localStorage.getItem('text');
      if (savedBg && savedText) {
        setTheme(savedBg, savedText);
      }
    </script>
  </body>
</html>
