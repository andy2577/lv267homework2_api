var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose 
seeder.connect('mongodb://lv267:lv267node@ds149954.mlab.com:49954/lv267', function() {

   // Load Mongoose models 
   seeder.loadModels([
       'models/book.js',
   ]);

   // Clear specified collections 
   seeder.clearModels(['Eneida'], function() {

       // Callback to populate DB once collections have been cleared 
       seeder.populateModels(data, function() {
           //seeder.disconnect(); 
       });

   });
});

// Data array containing seed data - documents organized by Model 
var data = [
   {
       'model': 'Eneida',
       'documents': [{"student":"Михайло Крутенко",
"quote" : "Еней був парубок моторний І хлопець хоть куди козак,"},
{"student":"Надія Сідельник",
"quote" : "Удавсь на всеє зле проворний, Завзятіший од всіх бурлак."},
{"student":"Ірина Єлізарова",
"quote" : "Но греки, як спаливши Трою, Зробили з неї скирту гною,"},
{"student":"Наталя Вірт",
"quote" : "Він, взявши торбу, тягу дав; Забравши деяких троянців,"},
{"student":"Богдан Ліщинський",
"quote" : "Осмалених, як гиря, ланців, П'ятами з Трої накивав."},
{"student":"Ярослав Петрик",
"quote" : "Він, швидко поробивши човни, На синє море поспускав,"},
{"student":"Наталя Панів",
"quote" : "Троянців насажавши повні, І куди очі почухрав."},
{"student":"Андрій Петрущак",
"quote" : "Но зла Юнона, суча дочка, Розкудкудакалась, як квочка, —"},
{"student":"Юрій Кондрашов",
"quote" : "Енея не любила — страх; Давно уже вона хотіла,"},
{"student":"Макс Фурманський",
"quote" : "Його щоб душка полетіла К чортам і щоб і дух не пах."}]
   }
];