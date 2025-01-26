import { motion, useScroll, useTransform } from "framer-motion"
function Basics() {
    const {scrollYProgress}=useScroll();
    console.log(scrollYProgress);
    const background=useTransform(
        scrollYProgress,
        [0,0.25,0.5,1],
        ["green","blue","yellow","green"]
    )
  return (
    <motion.div className="bg-green-300  flex flex-col items-center justify-center">
      <motion.div className=" fixed top-0 left-0 w-full h-2 origin-left"
        style={{ scaleX: scrollYProgress,
            background
         }}>

      </motion.div>
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
  );
}

export default Basics;
