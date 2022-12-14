const menu = [
  {
    Name: "Bubble Tea",
    Type: "Drink",
    Price: 6.25,
    IMG: "https://th.bing.com/th/id/R.da5ea128965b98686f950bf9ebccf724?rik=07SY34VxiDEH5Q&riu=http%3a%2f%2fassets.epicurious.com%2fphotos%2f5953ca064919e41593325d97%2fmaster%2fpass%2fbubble_tea_recipe_062817.jpg&ehk=QACesV3GIsd3UewyRG2C7XreYc%2bikwPGUvaa2r3opKk%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    Name: "Latte",
    Type: "Drink",
    Price: 5.25,
    IMG: "https://baranbakery.com/wp-content/uploads/2020/11/chai-latte-9.jpg",
  },
  {
    Name: "Lemonade",
    Type: "Drink",
    Price: 4.0,
    IMG: "https://ketopots.com/wp-content/uploads/2021/02/homemade-keto-lemonade-6.jpg",
  },
  {
    Name: "Takoyaki",
    Nationality: "Japanese",
    Type: "Food",
    Price: 4.25,
    IMG: "https://images.says.com/uploads/story/cover_image/27249/c37a.jpg",
  },
  {
    Name: "Tempura Shrimp",
    Nationality: "Japanese",
    Type: "Food",
    Price: 5.75,
    IMG: "https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/1200x800/crispy-shrimp-tempura_27171.jpg",
  },
  {
    Name: "Ramen",
    Nationality: "Japanese",
    Type: "Food",
    Price: 12.75,
    IMG: "https://th.bing.com/th/id/R.fd95719aa643338db5731aaaeaefe180?rik=LEusOBrBgQnwqw&riu=http%3a%2f%2flooknoodles.com%2fstaging%2f1303%2fwp-content%2fuploads%2f2017%2f05%2fKimchi-Ramen-Japanese.jpg&ehk=kln3%2b47WoApFiG4uF2LyCuvuGxjK6eVxNc8HCxcM7MI%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    Name: "Yakisoba",
    Nationality: "Japanese",
    Type: "Food",
    Price: 10.25,
    IMG: "https://webapi.814356.com/image/athleterecipe/data/athleterecipe-v1/recipe/1164.jpg",
  },
  {
    Name: "Curry",
    Nationality: "Japanese",
    Type: "Food",
    Price: 11.5,
    IMG: "https://i0.wp.com/www.mrspskitchen.net/wp-content/uploads/TDP1661.jpg",
  },
  {
    Name: "Tteokbokki",
    Nationality: "Korean",
    Type: "Food",
    Price: 7.5,
    IMG: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/tteokbokki.jpg",
  },
  {
    Name: "Kimchi",
    Nationality: "Korean",
    Type: "Food",
    Price: 3.0,
    IMG: "https://i.pinimg.com/originals/03/9f/67/039f679d099800cd6fa629d7e7430df9.jpg",
  },
  {
    Name: "Dango",
    Nationality: "Japanese",
    Type: "Dessert",
    Price: 4.5,
    IMG: "https://simplyhomecooked.com/wp-content/uploads/2021/02/dango-recipe-2.jpg",
  },
  {
    Name: "Okonomiyaki",
    Nationality: "Japanese",
    Type: "Food",
    Price: 4.0,
    IMG: "https://th.bing.com/th/id/R.ba0ff40b1347525b826d1d1ca7760c21?rik=nNlVzOPbAa8pnA&pid=ImgRaw&r=0",
  },
  {
    Name: "Dakgangjeong",
    Nationality: "Korean",
    Type: "Food",
    Price: 5.25,
    IMG: "https://www.maangchi.com/wp-content/uploads/2015/07/dakgangjeong.jpg",
  },
  {
    Name: "Hweori Gamja",
    Nationality: "Korean",
    Type: "Food",
    Price: 3.0,
    IMG: "https://www.chefspencil.com/wp-content/uploads/Hweori-Gamja.jpg.webp",
  },
  {
    Name: "Dak-kkochi",
    Nationality: "Korean",
    Type: "Food",
    Price: "7.50",
    IMG: "https://www.chefspencil.com/wp-content/uploads/Ddakkochi-960x611.jpg.webp",
  },
  {
    Name: "Mandu",
    Nationality: "Korean",
    Type: "Food",
    Price: 5.25,
    IMG: "https://asianinspirations.com.au/wp-content/uploads/2018/07/R00817_Kimchi-Mandu.jpg",
  },
  {
    Name: "Sushi",
    Nationality: "Japanese",
    Type: "Food",
    Price: 8.0,
    IMG: "https://seachef.com/wp-content/uploads/2018/02/Optimized-shutterstock_1252098172.jpg",
  },
  {
    Name: "Gamja Hot Dog",
    Nationality: "Korean",
    Type: "Food",
    Price: 2.0,
    IMG: "https://mynordicrecipes.com/wp-content/uploads/2021/10/korean-corn-dog-500x500.jpg",
  },
  {
    Name: "Sundubu-jjigae",
    Nationality: "Korean",
    Type: "Food",
    Price: 5.5,
    IMG: "https://sajiankuliner.com/wp-content/uploads/2020/03/Resep-Sundubu-Jjigae.jpg",
  },
  {
    Name: "Yakitori",
    Nationality: "Japanese",
    Type: "Food",
    Price: 7.5,
    IMG: "https://th.bing.com/th/id/R.2d25b4a846350d9f7ea7efe9c74f0d77?rik=dBpvzw9VBIJLCQ&riu=http%3a%2f%2fcookeryshow.com%2fwp-content%2fuploads%2f2018%2f05%2fyakitori-recipe-japanese-cooking.jpg&ehk=n1p9pUw95WTsYQyUTAtrRSmn%2bzMogsC9Z1pe%2bf0qUNI%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    Name: "Onigiri",
    Nationality: "Japanese",
    Type: "Food",
    Price: 1.25,
    IMG: "https://www.zojirushi.com/user/images/recipe/309.1.jpg",
  },
  {
    Name: "Crepe",
    Nationality: "Japanese",
    Type: "Dessert",
    Price: 2.75,
    IMG: "https://th.bing.com/th/id/R.8d5a890a89957ff8a4cc20f47694596c?rik=MMiim%2bdJ32ucSw&riu=http%3a%2f%2fwww.geishablog.com%2fwp-content%2fuploads%2f2013%2f10%2fjapanese-crepes.jpg&ehk=aCeqx6v9wmv3sLmgUHDO8DIRtEFZs5BvVqmlpdGGvz4%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    Name: "Bibimbap",
    Nationality: "Korean",
    Type: "Food",
    Price: 10.75,
    IMG: "https://i.pinimg.com/736x/67/c6/b2/67c6b2d1c64cb9f97b2285c18db36194.jpg",
  },
  {
    Name: "Kakikori",
    Nationality: "Japanese",
    Type: "Dessert",
    Price: 2.25,
    IMG: "https://live.staticflickr.com/6081/6042608758_153fa82b0c_b.jpg",
  },
  {
    Name: "Tapioca Pudding",
    Type: "Dessert",
    Price: 2.25,
    IMG: "https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2020/07/DSC_0010-1.jpg?resize=1024%2C1536&ssl=1",
  },
  {
    Name: "Patbingsu",
    Nationality: "Korean",
    Type: "Dessert",
    Price: 5.0,
    IMG: "https://th.bing.com/th/id/R.03cd6e4289650befec3515b5ef92da53?rik=qoQSjgeCOfiwdg&riu=http%3a%2f%2fcdn1.koreanbapsang.com%2fwp-content%2fuploads%2f2014%2f07%2fPatbingsu-recipe-3.jpg&ehk=DGm%2fhO%2bdauzIZd%2faUVsWv5HIdUpyCQs0MVkcZ1VAR%2bA%3d&risl=&pid=ImgRaw&r=0",
  },
];

export { menu };
