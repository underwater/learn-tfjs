import '@tensorflow/tfjs-node'
import * as toxicity from '@tensorflow-models/toxicity'

// minimum positive prediction confidence
// If this isn't passed, the default is 0.85
const threshold = 0.5

toxicity.load(threshold).then((model) => {
  const sentences = ['You are an very large, and remembered idiot !']

  model.classify(sentences).then((predictions) => {
    // filter
    const filteredPrediction = predictions.filter(obj => obj.label.includes("insult"));


    // semi-pretty-print results
    console.log(JSON.stringify(filteredPrediction, null, 2))
  })
}) 
