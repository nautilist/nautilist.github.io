var html = require('choo/html')

var TITLE = 'src - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  function selectTargetAudience(){
    const audience = ["everyone", "you", "your parents", "computers", "the web", "your teacher", "your students"]
    const randomIndex = Math.floor(Math.random()* audience.length)
    
    return audience[randomIndex]

  }

  const typeWord = function() {
      document.querySelector("#targetAudience").innerHTML = ""
      let selection = selectTargetAudience();

      let i = 0;
      let selectionLength = selection.length -1;
      let test = setInterval(function(){
        if(i <= selectionLength){
          document.querySelector("#targetAudience").innerHTML += selection[i];
          i++;
        } else{
          clearInterval(test);
        }
      }, 100);
      
  }

  function makeAnimation(){
    typeWord();
    setInterval(typeWord, 3000);
  }
  
  function generatorSection(){
    return html`
    <div class="cf dt-l w-100 bt b--black-10 pv4">
      <div class="dtc-l v-mid mw6 pr3-l">
        <img class="w-100" src="/assets/generator.png" alt=""/>
      </div>
      <div class="dtc-l v-mid f6 f5-m f4-l measure-l">
        <p class="measure pv4-l center">
          <h3>Command-line tools for the advanced Nautilist</h3>
          <span class="fw9 fw4-ns">
          For the adventurous, you're welcome to try out the <span class="underline b">nautilus-generator</span>, a command-line tool to generate beautiful static websites of your lists.
        </p>
      </div>
    </div>
    `
  }

  function howToSection(){
    return html`
    <div class="cf dt-l w-100 bt b--black-10 pv4">
      <div class="dtc-l v-mid mw6 pr3-l">
        <img class="w-100" src="/assets/howto.png" alt=""/>
      </div>
      <div class="dtc-l v-mid f6 f5-m f4-l measure-l">
        <p class="measure pv4-l center">
          <h3>Practice friendly list making</h3>
          <span class="fw9 fw4-ns">
          Making lists you can share (or not) shouldn't require an app or disappear when a company goes under. Nautilist is about helping you practice list making in ways that are both readable and structured for you, your friends and also computers. <br> 
          By making lists that are both human and machine readable, you're creating opportunities to help make sense of all the noise on the web. Check out our <span class="underline b">How To</span> to get started.
        </p>
      </div>
    </div>
    `
  }

  function webEditorSection(){
    return html`
    <div class="cf dt-l w-100 bt b--black-10 pv4">
      <div class="dtc-l v-mid mw6 pr3-l">
        <img class="w-100" src="/assets/web-editor.png" alt=""/>
      </div>
      <div class="dtc-l v-mid f6 f5-m f4-l measure-l">
        <p class="measure pv4-l center">
          <h3>Make lists on the web</h3>
          <span class="fw9 fw4-ns">
           Inspired by some of the helpful data editing tools out there (e.g. geojson.io), we bring you <span class="underline b">nautilist.github.io/nautilist-io</span> a super simple, no frills web editor to help you make lists of URLs, export, and share them across the web. <br>

        </p>
      </div>
    </div>
    `
  }

  function browsePublicSection(){
    return html`
    <div class="cf dt-l w-100 bt b--black-10 pv4">
      <div class="dtc-l v-mid mw6 pr3-l">
        <img class="w-100" src="/assets/nautilist-public.png" alt=""/>
      </div>
      <div class="dtc-l v-mid f6 f5-m f4-l measure-l">
        <p class="measure pv4-l center">
          <h3>Browse and remix public Lists</h3>
          <span class="fw9 fw4-ns">
           It's one thing to make lists for you, but it's another to make lists for others. Nautilist is all about supporting curated lists of URLS on topics that interest you, organized coherently so you can easily learn new things or find inspiration. <br>
           If you're more the social type, you're welcome to share your lists on <span class="underline b">nautilist-public</span> so your lists might help others to build something new, discover something exciting, or just learn about what's out there in your world.
        </p>
      </div>
    </div>
    `
  }

  function footer(){

    return html`
    <footer class="helvetica b ph3 ph4-ns pv6  b--black-10 bg-washed-green">
      <a href="mailto:" class="link b f3 f2-ns dim black lh-solid">Say hello</a>
      <p class="f6 db b ttu lh-solid">© ${new Date().getFullYear()} Nautilist is an open educational initiative by ITP.</p>
      <div class="mt5">
        <a href="/language/" title="Language" class="f6 dib pr2 mid-gray dim">Language</a>
        <a href="/terms/"    title="Terms" class="f6 dib ph2 mid-gray dim">Terms of Use</a>
        <a href="/privacy/"  title="Privacy" class="f6 dib pl2 mid-gray dim">Privacy</a>
        <a href="/privacy/"  title="Privacy" class="f6 dib pl2 mid-gray dim">About</a>
      </div>
    </footer>
    `
  }

  // style="background:url(/assets/bg-watercolor.png) no-repeat center right;background-size: cover;" 
  return html`
    <body class="code lh-copy" onload=${makeAnimation}>
      <article class="helvetica pb5">
        <header class="vh-100 bg-washed-green dt w-100">
          <div             
            class="dtc v-mid cover ph3 ph4-m ph5-l">
            <h2 class="f3 fw5 black">Nautilist</h2>
            <h1 class="f2 f-subheadline-l measure lh-title fw9">Friendly <br> Functional <br> Shareable <br> Lists for <span id="targetAudience" class="underline">Everyone</span></h1>
          </div>
        </header>
        <div class="serif ph3 ph4-m ph5-l">
          <p class="lh-copy f5 f3-m f1-l measure center pv4">
            Nautilist is a set of tools to help you make lists that are as beautiful as they are friendly for both humans and computers.</p>
          <div class="f5 f3-m lh-copy">
            ${howToSection()}
            ${webEditorSection()}
            ${browsePublicSection()}
            ${generatorSection()}
          </div>
        </div>
      </article>
      <footer class="cf">
      ${footer()}
      </footer>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
