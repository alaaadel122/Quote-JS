var qoutesArray = [
     {
          writterImg: '/img/oscar.jpg',
          quote: '“Be yourself; everyone else is already taken.”',
          writter: '― Oscar Wilde'
     },
     {
          writterImg: '/img/maeWest.jpg',
          quote: '“You only live once, but if you do it right, once is enough.”',
          writter: '― Mae West'
     },
     {
          writterImg: '/img/drSeuss.jpg',
          quote: '“You know you are in love when you cant fall asleep because reality is finally better than your dreams.”',
          writter: '― Dr. Seuss'
     },
     {
          writterImg: '/img/frank.jpg',
          quote: '“So many books, so little time.”',
          writter: '― Frank Zappa'
     },
     {
          writterImg: '/img/albert.jpg',
          quote: '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
          writter: '― Albert Einstein'
     },
     {
          writterImg: '/img/marcos.jpg',
          quote: '“A room without books is like a body without a soul.”',
          writter: '― Marcus Tullius Cicero'
     },
     {
          writterImg: '/img/william.jpg',
          quote: "“You've gotta dance like there's nobody watching ,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
          writter: '― William W. Purkey'
     },
     {
          writterImg: '/img/ralph.jpg',
          quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
          writter: '― Ralph Waldo Emerson'
     },
     {
          writterImg: '/img/gandhi.jpg',
          quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
          writter: '― Mahatma Gandhi'
     },
     {
          writterImg: '/img/albert.jpg',
          quote: "“A friend is someone who knows all about you and still loves you.”",
          writter: '― Elbert Hubbard'
     },
     {
          writterImg: '/img/mark.jpg',
          quote: "“If you tell the truth, you don't have to remember anything.”",
          writter: '― Mark Twain'
     },
     {
          writterImg: '/img/rebort.jpg',
          quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
          writter: '― Robert Frost'
     },
]
var elem = document.getElementById('qoute-conatiner');
var box = '';
var lastIndex = -1;
(function () {
     box = ` <div>
                    <img src="${qoutesArray[0].writterImg}" class="writter-img" alt="writter-img">
               </div>
               <p id="qoute-text" class="qoute-text mx-auto ">${qoutesArray[0].quote}</p>
               <p id="qoute-writter" class="qoute-writter fs-5">${qoutesArray[0].writter}</p>`
     elem.innerHTML = box;
})();
function generateQoute() {
     var randomNum = Math.floor(Math.random() * qoutesArray.length);
     if (lastIndex == randomNum) {
          randomNum = Math.floor(Math.random() * qoutesArray.length)
     }
     lastIndex = randomNum;
     for (var i = 0; i < qoutesArray.length; i++) {
          if (i == randomNum) {
               box = `
                    <div>
                         <img src="${qoutesArray[i].writterImg}" class="writter-img" alt="writter-img">
                    </div>
                    <p id="qoute-text" class="qoute-text mx-auto ">${qoutesArray[i].quote}</p>
                    <p id="qoute-writter" class="qoute-writter fs-5">${qoutesArray[i].writter}</p>`
          }
     }
     elem.innerHTML = box;
}