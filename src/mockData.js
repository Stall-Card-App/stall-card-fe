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
        "photo": "https://s3-alpha-sig.figma.com/img/21ad/48db/bc688dea5cd2b0b31bdf67a674f3d901?Expires=1645401600&Signature=UaHOgq3kXOg7xnlrlcZh3YwuLTBdmtAmR~SRRmnQC-4utl7f8Wl8~hukXk1PXt6KCoHNkT4mIwcP~52Y~N92eX-jTEvcTguMAx4VFFnM0m2So6bboOGr6ffDbAzxFlIZGR8jgcrsE0SQtdnUjwWyHPLUIlQ-M7zgGM8EPunnlvdHlHDZ8vl6uuo851c-stKqGC0TWmwMhS2RMIeNvtgcpLabLnb8LmTCCgzEPwFxaEZl03gqCaFj-YYf3Gq04Np~SLiO3XYHux6AidkPNbYUebSxjsqEw1yzPRc1QVfT94yaH6uZD7RttPiTmBQuqhvQRkHpBZP9KYiUp2ufnLpyhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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