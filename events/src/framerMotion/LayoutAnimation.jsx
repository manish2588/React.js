import { motion } from "framer-motion";
import { useState } from "react";

export default function LayoutAnimation() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
    <motion.div   // layout props rakhepaxi transition smooth hunxa
      layout
      
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        background: "lightblue",
        borderRadius: "10px",
        width: isExpanded ? 300 : 150,
        height: isExpanded ? 200 : 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      Click to {isExpanded ? "Shrink" : "Expand"}
    </motion.div>
      <motion.p className="w-96"
        layout
      >
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
    </motion.p>
    </>
  );
}
