import { motion } from "framer-motion"

function HorizontalSlider() {
  return (
   <>
  <motion.div
  layout
  >

<p className="w-96">
        In grammar, an article is any member of a class of dedicated words that
        are used with noun phrases to mark the identifiability of the referents
        of the noun phrases. The category of articles constitutes a part of
        speech. In English, both  and  are articles, which combine
        with nouns to form noun phrases. Articles typically specify the
        grammatical definiteness of the noun phrase, but in many languages, they
        carry additional grammatical information such as gender, number, and
        case. Articles are part of a broader category called determiners, which
        also include demonstratives, possessive determiners, and quantifiers. In
        linguistic interlinear glossing, articles are abbreviated as ART.
      </p>
      <p className="w-96">
        In grammar, an article is any member of a class of dedicated words that
        are used with noun phrases to mark the identifiability of the referents
        of the noun phrases. The category of articles constitutes a part of
        speech. In English, both  and  are articles, which combine
        with nouns to form noun phrases. Articles typically specify the
        grammatical definiteness of the noun phrase, but in many languages, they
        carry additional grammatical information such as gender, number, and
        case. Articles are part of a broader category called determiners, which
        also include demonstratives, possessive determiners, and quantifiers. In
        linguistic interlinear glossing, articles are abbreviated as ART.
      </p>
      <p className="w-96">
        In grammar, an article is any member of a class of dedicated words that
        are used with noun phrases to mark the identifiability of the referents
        of the noun phrases. The category of articles constitutes a part of
        speech. In English, both  and  are articles, which combine
        with nouns to form noun phrases. Articles typically specify the
        grammatical definiteness of the noun phrase, but in many languages, they
        carry additional grammatical information such as gender, number, and
        case. Articles are part of a broader category called determiners, which
        also include demonstratives, possessive determiners, and quantifiers. In
        linguistic interlinear glossing, articles are abbreviated as ART.
      </p>
      <p className="w-96">
        In grammar, an article is any member of a class of dedicated words that
        are used with noun phrases to mark the identifiability of the referents
        of the noun phrases. The category of articles constitutes a part of
        speech. In English, both  and  are articles, which combine
        with nouns to form noun phrases. Articles typically specify the
        grammatical definiteness of the noun phrase, but in many languages, they
        carry additional grammatical information such as gender, number, and
        case. Articles are part of a broader category called determiners, which
        also include demonstratives, possessive determiners, and quantifiers. In
        linguistic interlinear glossing, articles are abbreviated as ART.
      </p>
   <div className="mx-auto w-96 grid place-content-center h-32 relative ">
    <motion.h1 className="relative z-0"
    initial={{scale:0}}
    whileInView={{scale:[0,0.25,0.5,1],
      transition:{delay:0.2}
    }}
    viewport={{
      amount: 0.9, // Trigger animation when 50% of the element is visible
       
    }}
    > Scroll to show me</motion.h1>
    <motion.div
  className="absolute z-10 bg-green-500 top-0 w-full h-full border rounded-br-full "
  initial={{
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
  }}
  whileInView={{
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
  }}
  transition={{
    duration: 1,
  }}
  viewport={{
    amount: 0.9, // Trigger animation when 50% of the element is visible
     // Run animation only once
  }}
  style={{
    transformOrigin: "bottom right", // Start shrinking from bottom-right corner but in this case scale is decreasing so reverse it
  }}
/>

   </div>
   <p className="w-96">
        In grammar, an article is any member of a class of dedicated words that
        are used with noun phrases to mark the identifiability of the referents
        of the noun phrases. The category of articles constitutes a part of
        speech. In English, both  and  are articles, which combine
        with nouns to form noun phrases. Articles typically specify the
        grammatical definiteness of the noun phrase, but in many languages, they
        carry additional grammatical information such as gender, number, and
        case. Articles are part of a broader category called determiners, which
        also include demonstratives, possessive determiners, and quantifiers. In
        linguistic interlinear glossing, articles are abbreviated as ART.
      </p>
      <p className="w-96">
        In grammar, an article is any member of a class of dedicated words that
        are used with noun phrases to mark the identifiability of the referents
        of the noun phrases. The category of articles constitutes a part of
        speech. In English, both  and  are articles, which combine
        with nouns to form noun phrases. Articles typically specify the
        grammatical definiteness of the noun phrase, but in many languages, they
        carry additional grammatical information such as gender, number, and
        case. Articles are part of a broader category called determiners, which
        also include demonstratives, possessive determiners, and quantifiers. In
        linguistic interlinear glossing, articles are abbreviated as ART.
      </p>
      <p className="w-96">
        In grammar, an article is any member of a class of dedicated words that
        are used with noun phrases to mark the identifiability of the referents
        of the noun phrases. The category of articles constitutes a part of
        speech. In English, both  and  are articles, which combine
        with nouns to form noun phrases. Articles typically specify the
        grammatical definiteness of the noun phrase, but in many languages, they
        carry additional grammatical information such as gender, number, and
        case. Articles are part of a broader category called determiners, which
        also include demonstratives, possessive determiners, and quantifiers. In
        linguistic interlinear glossing, articles are abbreviated as ART.
      </p>
      <p className="w-96">
        In grammar, an article is any member of a class of dedicated words that
        are used with noun phrases to mark the identifiability of the referents
        of the noun phrases. The category of articles constitutes a part of
        speech. In English, both  and  are articles, which combine
        with nouns to form noun phrases. Articles typically specify the
        grammatical definiteness of the noun phrase, but in many languages, they
        carry additional grammatical information such as gender, number, and
        case. Articles are part of a broader category called determiners, which
        also include demonstratives, possessive determiners, and quantifiers. In
        linguistic interlinear glossing, articles are abbreviated as ART.
      </p>
  </motion.div>
   </>
  )
}

export default HorizontalSlider;