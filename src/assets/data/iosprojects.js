const projects = [
  {
    id: 1,
    name: "Pitch Perfect",
    description: "This app records the user’s voice and then modulates the recorded audio to sound like a Chipmunk or Darth Vader. This app also lets users speed up or slow down the rate of playback.",
    points: [
      "Created in Swift 2.0 using XCode for iOS 9, used AVFoundation.",
      "Ensured proper formatting of layout in both Portrait and Landscape mode.",
      "Used AVAudioRecorder to record audio.",
      "Implemented UINavigationControllers.",
    ],
    src: "https://appetize.io/embed/fkk9z7ruhrhdhzmgd237vtgv98?device=iphone5s&scale=50&autoplay=false&orientation=portrait&deviceColor=black",
    github: "https://github.com/sanlouise/pitch-perfect",
  },
  {
    id: 2,
    name: "Flappy Bird",
    description: "This app is a clone of the popular game Flappy Bird.",
    points: [
      "Created in Swift 2.0 using XCode for iOS 9.",
      "Used SpriteKit for game development.",
    ],
    src: "https://appetize.io/embed/qbhqhp39gapbhqeur8edtbnyxg?device=iphone5s&scale=50&autoplay=false&orientation=portrait&deviceColor=black",
    github: "https://github.com/sanlouise/game",
  },
  {
    id: 3,
    name: "Meme Me",
    description: "Users can take pictures and overlay text to make memes out of friends, family, or pets. Also allows sharing with others via social media or email, and viewing past memes in a table or collection view.",
    points: [
      "Created with Swift 2.0 using XCode for iOS 9.",
      "Extensive focus on UIKit fundamentals and Delegation.",
      "Saved Memes are showed in a UITableView and a UICollectionView.",
      "Ensured proper formatting of layout in both Portrait and Landscape mode.",
    ],
    src: "https://appetize.io/embed/qbhqhp39gapbhqeur8edtbnyxg?device=iphone5s&scale=50&autoplay=false&orientation=portrait&deviceColor=black",
    github: "https://github.com/sanlouise/Meme-app",
  },

];

export default projects;
