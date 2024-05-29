const dummyData = [
    {
      friendName: "Alice",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150"],
          message: "Hello world!",
          likes: 10,
          comments: [
            { id: 1, text: "Nice post!", user: "Bob" },
            { id: 2, text: "Keep it up!", user: "Charlie" }
          ],
          postedAt: new Date("2023-05-01T08:00:00Z")
        },
        {
          id: 2,
          photos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
          message: "Enjoying my day off!",
          likes: 5,
          comments: [
            { id: 1, text: "Looks fun!", user: "Eve" }
          ],
          postedAt: new Date("2023-05-02T10:30:00Z")
        }
      ]
    },
    {
      friendName: "Bob",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150"],
          message: "Coding all night!",
          likes: 15,
          comments: [
            { id: 1, text: "Impressive!", user: "Alice" },
            { id: 2, text: "Keep it going!", user: "Charlie" }
          ],
          postedAt: new Date("2023-05-03T12:45:00Z")
        }
      ]
    },
    {
      friendName: "Charlie",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
          message: "Weekend getaway!",
          likes: 20,
          comments: [
            { id: 1, text: "Beautiful place!", user: "Alice" },
            { id: 2, text: "Enjoy your time!", user: "Bob" }
          ],
          postedAt: new Date("2023-05-04T15:20:00Z")
        }
      ]
    },
    {
      friendName: "David",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150"],
          message: "New recipe experiment!",
          likes: 8,
          comments: [
            { id: 1, text: "Looks delicious!", user: "Eve" },
            { id: 2, text: "Share the recipe!", user: "Frank" }
          ],
          postedAt: new Date("2023-05-05T17:10:00Z")
        },
        {
          id: 2,
          photos: ["https://via.placeholder.com/150"],
          message: "Hiking adventure!",
          likes: 12,
          comments: [
            { id: 1, text: "Great view!", user: "Alice" }
          ],
          postedAt: new Date("2023-05-06T09:00:00Z")
        }
      ]
    },
    {
      friendName: "Eve",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150"],
          message: "Movie night with friends!",
          likes: 18,
          comments: [
            { id: 1, text: "Which movie did you watch?", user: "Alice" },
            { id: 2, text: "Sounds fun!", user: "David" }
          ],
          postedAt: new Date("2023-05-07T20:30:00Z")
        }
      ]
    },
    {
      friendName: "Frank",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
          message: "Exploring new places!",
          likes: 25,
          comments: [
            { id: 1, text: "Amazing photos!", user: "Alice" },
            { id: 2, text: "I love traveling!", user: "David" }
          ],
          postedAt: new Date("2023-05-08T11:45:00Z")
        }
      ]
    },
    {
      friendName: "Grace",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150"],
          message: "Celebrating graduation!",
          likes: 30,
          comments: [
            { id: 1, text: "Congratulations!", user: "David" },
            { id: 2, text: "Well done!", user: "Alice" }
          ],
          postedAt: new Date("2023-05-09T14:00:00Z")
        }
      ]
    },
    {
      friendName: "Harry",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
          message: "Family time!",
          likes: 22,
          comments: [
            { id: 1, text: "Beautiful family!", user: "Alice" },
            { id: 2, text: "Cherish these moments!", user: "Grace" }
          ],
          postedAt: new Date("2023-05-10T16:20:00Z")
        }
      ]
    },
    {
      friendName: "Ivy",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150"],
          message: "Art exhibition!",
          likes: 14,
          comments: [
            { id: 1, text: "Wow, impressive!", user: "David" }
          ],
          postedAt: new Date("2023-05-11T18:30:00Z")
        }
      ]
    },
    {
      friendName: "Jack",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150"],
          message: "Sunday brunch!",
          likes: 9,
          comments: [
            { id: 1, text: "Enjoy your meal!", user: "Alice" }
          ],
          postedAt: new Date("2023-05-12T12:00:00Z")
        }
      ]
    },
    {
      friendName: "Karen",
      posts: [
        {
          id: 1,
          photos: ["https://via.placeholder.com/150"],
          message: "Fitness journey!",
          likes: 17,
          comments: [
            { id: 1, text: "You're inspiring!", user: "David" },
            { id: 2, text: "Keep it up!", user: "Alice" }
          ],
          postedAt: new Date("2023-05-13T09:15:00Z")
        }
      ]
    }
  ];
  
  export default dummyData;
  