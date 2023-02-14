import * as tf from "@tensorflow/tfjs";
// Tidy to clean up after we're done!
tf.tidy(() => {
  const users = ["Gant", "Todd", "Jed", "Justin"];
  const bands = [
    "Nirvana",
    "Nine Inch Nails",
    "Backstreet Boys",
    "N Sync",
    "Night Club",
    "Apashe",
    "STP",
  ];
  const features = [
    "Grunge",
    "Rock",
    "Industrial",
    "Boy Band",
    "Dance",
    "Techno",
  ];

  // User votes <4>
  const user_votes = tf.tensor([
    [10, 9, 1, 1, 8, 7, 8],
    [6, 8, 2, 2, 0, 10, 0],
    [0, 2, 10, 9, 3, 7, 0],
    [7, 4, 2, 3, 6, 5, 5],
  ]);

let m = 5;  // js primitive
let m_scalar = tf.scalar(5) // tensorflow structure

let a = tf.tensor([1, 1]);
let b = tf.tensor([1, -1]);

// project vector a to b
let res_dot = tf.dot(a,b)
res_dot.print()

// add the vectors (as forces)
let res_dot_multiply = tf.add(a,b)
res_dot_multiply.print()

// add the vectors (as forces)
let res_scalar_multiply = tf.mul(a,m_scalar);
res_scalar_multiply.print()



  // // Music Styles <5>
  // const band_feats = tf.tensor([
  //   [1, 1, 0, 0, 0, 0],
  //   [1, 0, 1, 0, 0, 0],
  //   [0, 0, 0, 1, 1, 0],
  //   [0, 0, 0, 1, 0, 0],
  //   [0, 0, 1, 0, 0, 1],
  //   [0, 0, 1, 0, 0, 1],
  //   [1, 1, 0, 0, 0, 0],
  // ]);
 

  // // User's favorite styles
  // const user_feats = tf.matMul(user_votes, band_feats);
  // // Print the answers
  // user_feats.print();

  // // Let's make them pretty
  // const top_user_features = tf.topk(user_feats, features.length);
  // // Back to JavaScript
  // const top_genres = top_user_features.indices.arraySync();
  // // print the results
  // users.map((u, i) => {
  //   const rankedCategories = top_genres[i].map(
  //     (v: string | number): string => features[v]
  //   );
  //   console.log(u, rankedCategories);
  // });
});
