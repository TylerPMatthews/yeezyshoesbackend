exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("yeezys")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("yeezys").insert([
        {
          yeezy_id: 1,
          yeezy_title: "YEEZY BOOST 350 V2 BRED",
          yeezy_gender: "m",
          yeezy_img: [
            "https://cdn.flightclub.com/1000/TEMPLATE/800389/1.jpg",
            "https://cdn.flightclub.com/1000/TEMPLATE/800389/2.jpg",
            "https://cdn.flightclub.com/1000/TEMPLATE/800389/3.jpg",
            "https://cdn.flightclub.com/1000/TEMPLATE/800389/4.jpg",
          ],
          yeezy_description:
            "The Yeezy Boost 350 V2 'Bred' brings a classic colorway to its minimalist construction. The shoe's upper is built with Primeknit, finished in black and highlighted by the SPLY-350 branding on the side wall. More red marks the heel pull-loop, while rope laces secure the fit. Underfoot, a full-length Boost midsole wrapped in a black rubber cage provides cushioning. A rubber outsole with cutouts provides traction",
          yeezy_size: ["5", "6", "7", "8", "9", "10", "11", "12", "13"],
          yeezy_price: 395,
          count: 50,
          inCart: false,
        },
        {
          yeezy_id: 2,
          yeezy_title: "YEEZY BOOST 350 V2 ZEBRA",
          yeezy_gender: "m",
          yeezy_img: [
            "https://cdn.flightclub.com/1000/TEMPLATE/800502/1.jpg",
            "https://cdn.flightclub.com/1000/TEMPLATE/800502/2.jpg",
            "https://cdn.flightclub.com/1000/TEMPLATE/800502/3.jpg",
            "https://cdn.flightclub.com/1000/TEMPLATE/800502/4.jpg",
          ],
          yeezy_description:
            "The Yeezy Boost 350 V2 ' Zebra ' released on February 25, 2017, combining an upper white / core black Primeknit with a red SPLY 350 branding and a full-length translucent midsole boost. On November 16, 2018, another restock of the ' Zebra ' arrived, with more pairs hitting the marketplace and building on Kanye's commitment to make Yeezy more available to anyone who wished to acquire them.",
          yeezy_size: ["5", "6", "7", "8", "9", "10", "11", "12", "13"],
          yeezy_price: 350,
          count: 37,
          inCart: false,
        },
        {
          yeezy_id: 3,
          yeezy_title: "YEEZY BOOST 350 V2 CREAM WHITE / TRIPLE WHITE",
          yeezy_gender: "m",
          yeezy_img: [
            "https://cdn.flightclub.com/1500/TEMPLATE/800801/1.jpg",
            "https://cdn.flightclub.com/1500/TEMPLATE/800801/2.jpg",
            "https://cdn.flightclub.com/1500/TEMPLATE/800801/3.jpg",
            "https://cdn.flightclub.com/1500/TEMPLATE/800801/4.jpg",
          ],
          yeezy_description:
            "The Yeezy 350 V2 ‘Cream White’ combines a crisp Primeknit upper with tonal cream SPLY 350 branding and a translucent white midsole housing full-length Boost. First released in 2017, another 2018 drop helped fulfill Kanye West's oft-repeated 'Yeezys for everyone' mantra, as adidas organized the biggest drop in Yeezy history by promising pre-sale to anyone who signed up on the website.",
          yeezy_size: ["5", "6", "7", "8", "9", "10", "11", "12", "13"],
          yeezy_price: 217,
          count: 40,
          inCart: false,
        },
      ]);
    });
};
