const mockData = {
  "data": {
    "horses": [
      {
        "id": 123213,
        "photo": "https://s3-alpha-sig.figma.com/img/520c/c080/e8417a897a0fa40f213545cee4f768aa?Expires=1645401600&Signature=ZNR~~tu2Gnkr-ZaPaodrjGZkGvWxMBkUUDC4gw4BidDBsEoJqzWqXF2e6915FxhjoubMHDLNf52RcIQUUHCCl3W1mdHTGywRD50oDm7WvxXQF8opEkEvDo~9mv4rLA9Mr6TbLADzrtl9xR1SY0FobqpvZdRZ7P3yokwvMRxIVG-9x1cf6WjtcOwpTkBKU42-9sgIsnQ7MuaTC~H9dvJFZLX1R2dGEsfKhOVaN1zLDND8Q1fZk728PjOzxTElehrCiOtyb1ukx7q-2RP2kZCxmg~RJsg7ynhPrAuNM2JJEOu8crdNuIawuea6eCfdojZmZhleXEyg56S3i0wb2y~q7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "name": "Bloopy",
        "stall_number": 12,
        "age": 15,
        "sex": "gelding",
        "breed": "Appaloosa",
        "color": "chestnut",
        "markings": "blaze, left hind sock",
        "notes": "Bloopy is cute",
        "am_feed": "2 flakes grass, half scoop Strategy",
        "pm_feed": "3 flakes grass, half scoop Strategy",
        "supplements": "Prepared bags, PM only.",
        "turnout": "Pasture 3",
        "blanketing_temp": 30,
        "barn_id": 111112,
        "owner_id": 22221,
        "vet_id": 333331,
        "farrier_id": 444441
      },
      {
        "id": 123214,
        "photo": "https://s3-alpha-sig.figma.com/img/69d3/2ffb/f643fd6b43cb82caee782e7ebf68bf80?Expires=1645401600&Signature=Bn663cbh1ixIbCwmaRmJqd~p4lw8z~zDQWVi8kra1lOsBXpyVCB64QFmRZu~m4u5FUWFWYoK1Y7BxKMlZwlkQrzGh3d8C20GlYWWNV-XRrJ7Fk9KR2x3liGEioRf0ADgD52Q0YQmXg9VgfuOU0SAiUGJ~k4O7QpxRp3JjkkyDrYlOriQ-j4JYf65mO3yt~JFJ1Ngf47SlnZUSUFY6keGXOmscrEw29a1BXxvCMZ1pRoqZJHwLDlezqG15IrgKzfop88pSGNZQcyZtlhISukFD67tQXJ6G-ACtQlG2hOu2MOXIUrsGCz912fkZqjzRi1m4Gdlh~WL~XOIqX1Cr8BuDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "name": "Blippy",
        "stall_number": 14,
        "age": 25,
        "sex": "mare",
        "breed": "Clydesdale",
        "color": "bay",
        "markings": "blaze",
        "notes": "Blippy is BIG",
        "am_feed": "3 flakes grass",
        "pm_feed": "4 flakes grass",
        "supplements": "none",
        "turnout": "pasture 2",
        "blanketing_temp": 20,
        "barn_id": 111112,
        "owner_id": 22223,
        "vet_id": 333333,
        "farrier_id": 444442
      },
      {
        "id": 123215,
        "photo": "https://s3-alpha-sig.figma.com/img/3440/0d7a/0b3641ab306977c1cfd0b5efb3d22414?Expires=1645401600&Signature=PNj2QJW5~D9SLJ3UcQoNnimvaPhU9BdNUI7m3-Y4rDfL8I~f8PtjoLcojztB53VL7deUNg6YmQLPShZeC7aEE4BwRom75r-lrLdJmQiEXYKr41uyNy4P8cHqUJbyybk7I5wuIE1sr0e1ibEtUpwZpCzGYi4fNBBJUlx1HAYcIlb1sFSRIb8gErmKgBBLJQuNTe7nZ~zeopswfsmt3YPGgr6yj2vpMXOVrKnQ-kJSfOiIfzJaioQKdlrRW9pqYhMUjluWXrA5HhVMoJKyEdZqlefaeD4mNgdGVMrEaKna8A8pDEnleH6yjELgnDr59342SqpIt1MjiDGHdHaw~DgotA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "name": "Bleppy",
        "stall_number": 2,
        "age": 5,
        "sex": "gelding",
        "breed": "Thoroughbred",
        "color": "grey",
        "markings": "none",
        "notes": "Bleppy is a pain in the ass",
        "am_feed": "2 flakes grass, 1 flake alfalfa, full scoop Strategy",
        "pm_feed": "3 flakes grass, 2 flakes alfalfa, full scoop Strategy",
        "supplements": "Prepared bags, PM only.",
        "turnout": "Pasture 3",
        "blanketing_temp": 30,
        "barn_id": 111112,
        "owner_id": 22221,
        "vet_id": 333331,
        "farrier_id": 444441
      },
      {
        "id": 7015393,
        "photo": "https://s3-alpha-sig.figma.com/img/4f54/c24c/ea3a6c8779f28769496b70f57ba2374c?Expires=1645401600&Signature=FnbLfl4yA03IzNGTJkT1HHA1BZLS3KXE9AKJX02w~VJjbG7awUPThf1D3tJNPDouboKvZgoFNdQ-WSVBurQbW0ziheCyt4~KuNXqMjSO3HcCwSwVoXfYYjpY~z2aiDh5mqZJWAX3xJGbpkyCsB-iX3roziwEVGM9amjRJSGagMxAwUIQe9ByEsopmGaozXjCfGzP7wiOM0ASuJGjM3cS4CSx7X~8Bz4fZYAjw6oke61ldm2H4C9WIVyyTG4gzt0dj3mzArku8HRxiuERQBfj1lCqY6mF8OuLpWBrM4~nSxKM1DkKG59wcW7Y3EJLAXAlKqONLZJ6eN0znSWo3AMaEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "name": "Bluppy",
        "stall_number": 9,
        "age": 24,
        "sex": "mare",
        "breed": "Appendix",
        "color": "bay",
        "markings": "star",
        "notes": "Bleppy likes peppermints",
        "am_feed": "2 flakes grass, 1 flake alfalfa, full scoop Strategy",
        "pm_feed": "3 flakes grass, 2 flakes alfalfa, full scoop Strategy",
        "supplements": "Prepared bags, PM only.",
        "turnout": "Pasture 2",
        "blanketing_temp": 30,
        "barn_id": 111112,
        "owner_id": 22221,
        "vet_id": 333331,
        "farrier_id": 444441
      },
        {
        "id": 7015124,
        "photo": "https://s3-alpha-sig.figma.com/img/60ea/7332/cb6f01a7de950c8f953a81df9e21a478?Expires=1645401600&Signature=eDIvTyAmh-47YT2wv5khhIgr1xp2zJQoxWvIgSx4SjEmcauC4t8xQu8y3NPgJbGXy2Ybgj5O3CxKqnVty75Tjr~eekUngg5wspH8A1XSiFqAnNOlxc8mpAakC0wMg5qyfeNreakkhseH4G~J0crdUCWpg-Fh12mdWbuO3u1CAQMrhEWq104ix-cDlMeVxI2d833iW4-bZVsZnIG54gPOLRpogzJWfE93TBTWwvYlmIENcQp6b8oej9VAkSYoNuiWrKXeVqAvf0fpdKKuwaVaOAOxDcNA6WiS2AYykW2x3GBeItFhqAnJ~~FLXh7mQuxsfnRDe5eSahaO2DacrPTTdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "name": "Blocky",
        "stall_number": 14,
        "age": 10,
        "sex": "gelding",
        "breed": "Hanovarian",
        "color": "Dark bay",
        "markings": "Small star",
        "notes": "Blocky is very pretty and fancy",
        "am_feed": "2 flakes grass, 1 flake alfalfa, full scoop Strategy",
        "pm_feed": "3 flakes grass, 2 flakes alfalfa, full scoop Strategy",
        "supplements": "Prepared bags, PM only.",
        "turnout": "Pasture 1, stays in when raining",
        "blanketing_temp": 30,
        "barn_id": 111112,
        "owner_id": 22221,
        "vet_id": 333331,
        "farrier_id": 444441
      },
      {
        "id": 6315124,
        "photo": "https://s3-alpha-sig.figma.com/img/186c/8e90/c3fd65bdbb891e14db73bc0fdbacbcc3?Expires=1645401600&Signature=ADXl0OfCkrm5ZkVd2rFyE2YEN042uWpJJVMkt0NCQVTkdUrrb3IAvCIoHeXe1L83JRzuJBE6kO053sHNOGxxvJCenz5LkUo7276Z3hhwBmXsmrPIaxO6LezcbDC6YBkuXipxLaTEjwMec03umXnUrrKc0gMAUTrgxot~8OSOjtnkb43fUfvRbyoAKIW~D3A5A1Ir-iH-pS-Hq3xVJY1u6AaoDxIYrAuZOqugwGusVqFaMLuH~CBEQ6OvGRbGGFbAGv4AQ0ObZN2mC3mVXagqbflh8ZmQ0YdgtJOJ1DQ3B2sC1CzC8OklRud-ZBGHIb4E1U3JGyRnc0TF995x4sRDWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "name": "Blappy",
        "stall_number": 5,
        "age": 13,
        "sex": "gelding",
        "breed": "Quarter Horse",
        "color": "Sorrel",
        "markings": "Blaze",
        "notes": "Blappy is dumb, and everyone picks on him.",
        "am_feed": "2 flakes grass, 1 flake alfalfa, full scoop Strategy",
        "pm_feed": "3 flakes grass, 2 flakes alfalfa, full scoop Strategy",
        "supplements": "Prepared bags, PM only.",
        "turnout": "Pasture 5",
        "blanketing_temp": 30,
        "barn_id": 111112,
        "owner_id": 22221,
        "vet_id": 333331,
        "farrier_id": 444441
      },
      {
        "id": 6374124,
        "photo": "https://s3-alpha-sig.figma.com/img/21ad/48db/bc688dea5cd2b0b31bdf67a674f3d901?Expires=1645401600&Signature=UaHOgq3kXOg7xnlrlcZh3YwuLTBdmtAmR~SRRmnQC-4utl7f8Wl8~hukXk1PXt6KCoHNkT4mIwcP~52Y~N92eX-jTEvcTguMAx4VFFnM0m2So6bboOGr6ffDbAzxFlIZGR8jgcrsE0SQtdnUjwWyHPLUIlQ-M7zgGM8EPunnlvdHlHDZ8vl6uuo851c-stKqGC0TWmwMhS2RMIeNvtgcpLabLnb8LmTCCgzEPwFxaEZl03gqCaFj-YYf3Gq04Np~SLiO3XYHux6AidkPNbYUebSxjsqEw1yzPRc1QVfT94yaH6uZD7RttPiTmBQuqhvQRkHpBZP9KYiUp2ufnLpyhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "name": "Blurpy",
        "stall_number": 20,
        "age": 11,
        "sex": "gelding",
        "breed": "Mustang",
        "color": "Bay",
        "markings": "None",
        "notes": "Blurpy yawns a lot.",
        "am_feed": "2 flakes grass, 1 flake alfalfa, full scoop Strategy",
        "pm_feed": "3 flakes grass, 2 flakes alfalfa, full scoop Strategy",
        "supplements": "Prepared bags, PM only.",
        "turnout": "Pasture 5",
        "blanketing_temp": 30,
        "barn_id": 111112,
        "owner_id": 22221,
        "vet_id": 333331,
        "farrier_id": 444441
      }
      ],
    "owners": [
      {
        "id": 22221,
        "name": "Jo Smith",
        "phone_number": 15557898
      },
      {
        "id": 22223,
        "name": "Terry",
        "phone_number": 15558794
      }
      ],
    "vets": [
      {
        "id": 333331,
        "name": "Horse Whisperer",
        "phone_number": 15557777
      },
      {
        "id": 333333,
        "name": "Horse Healer",
        "phone_number": 15558888
      }
    ],
    "farriers": [
      {
        "id": 444441,
        "name": "Horse Cobbler",
        "phone_number": 15559999
      },
      {
        "id": 444442,
        "name": "Horse Shoer",
        "phone_number": 15556666
      }
    ],
    "barn": [
      {
        "id": 777,
        "name": "Happy Hills Farm :)"
      },
      {
        "id": 888,
        "name": "Sad Hills Farm :("
      }
    ],
    "employees": [
    {
      "id": 1111,
      "name": "Jerry",
      "phone_number": 15551234,
      "barn_id": 777
    },
    {
      "id": 2222,
      "name": "Terry",
      "phone_number": 15554321,
      "barn_id": 777
    }
    ]
  }
}

export default mockData;