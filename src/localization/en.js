const char = {
  title: "Character Creation",
  description1: "You're kind of stuck as Alucard, but you can still choose your style and personality.",
  headings: ["Appearance", "Personality Traits", "D&D-style Flavor Text (Optional)"],
  content: {
    appearances: {
      annie: "Annie",
      bishamon: "Bishamon",
      edea: "Edea",
      ino: "Ino",
      lisa: "Lisa",
      maria: "Maria",
      moon: "Moon",
      riza: "Riza",
      saber: "Saber",
      serenity: "Serenity",
      shalltear: "Shalltear",
      violet: "Violet"
    },
    personality: {
      openness: ["Openness",
        "Openness influences how accepting you are of new ideas and experiences."],
      conscientiousness: ["Conscientiousness",
        "Conscientiousness affects how organized and methodic you are."],
      extraversion: ["Extraversion",
        "Extraverts enjoy interacting with others, and are good at it, while \
        introverts prefer a more intimate setting, maybe even solitude."],
      agreeableness: ["Agreeableness",
        "Agreeableness affects your compassion, cooperation and affection shown \
        towards others."],
      neuroticism: ["Neuroticism",
        "Neuroticism represents how emotionally unstable you are, or how often \
        you experience negative emotions."]
    },
    flavor: {
      quirks: "Quirks",
      ideals: "Ideals",
      bonds: "Bonds",
      flaws: "Flaws"
    }
  }
};

const intro = {
  title: "Alucard Game",
  body: ["This version of Castlevania's world is more scientific (as far as that \
    goes, considering there's still magic). The magic that does exist appeared \
    when one mortal found that under certain circumstances spacetime bent to \
    reach to new dimensions. These circumstances were recorded as \"rituals\" \
    and would point towards specific spaces, which had unique energies coming \
    out of them. Eventually these energies were even used to power unique \
    alterations on the biology of humans, the most successful of these being \
    the vampire: a being who could live forever as long as they replenished \
    their DNA by consuming the DNA of other humans.",
      "There are some differences between these vampires and the pop culture \
    vampires from your reality. They're civilized beings, and while they aren't \
    exactly welcomed and are even feared by humans, they aren't killed on the \
    spot. They have \"siring\" periods every twenty or so years, where their \
    DNA has begun to age and destabilize, and this is when they must find a \
    human subject's DNA, treat it in a lab (many of their \"bodily\" processes \
    happen in the lab) and inject it in their womb. And yes, that means that \
    all vampires are female, because their womb has been reconstructed to build \
    stem cells for replenishing their own body. Vampires cannot reproduce.",
      "Alucard in this universe is female, and she can't remember how or \
    when she came to be. She awoke at the physical age of 18, but seems to be \
    the mental age of 10, perhaps more intelligent and mature in her behavior, \
    but lacking in the wisdom experience brings. In short, she's a blank slate. \
    She was summoned back to this realm from a stasis ritual by a human \
    rummaging through the ruins she was left in. The explorer went by the name \
    of Trevor Belmont. He taught her the basics of living in a new and strange \
    world, and Alucard gratefully considered Trevor a friend. She quickly \
    proved her skills in combat, which she had a natural ability for. She and \
    Trevor went on many excursions to hunt monsters invading from other \
    dimensions: that was the Belmont's business.",
      "In their hunts Alucard came upon a trail of clues pointing her \
    towards her origins. They led towards Dracula, a notorious monster with \
    superior intelligence. His research had created nearly half the monsters \
    the Belmonts had to hunt, and so the Belmonts had sworn to exterminate him. \
    She found out that her creator was the very same Dracula, who had done his \
    own experiments on vampire biology. Her own prowess in combat was the \
    reason behind her creation, Dracula had tried to create a super soldier. \
    She was abandoned when he realised she was too intelligent to make her \
    infallibly loyal.",
      "In a great battle, Alucard worked with Trevor and others to storm \
    Dracula's castle and finally vanquish him after the sacrifice of the lives \
    of comrades. In his final moments, Dracula seemed to show remorse and a \
    love towards you, his creation, in his own sick way. He then fell silent \
    forever, leaving the castle dormant. Trevor has left in the following days, \
    favoring a life on the road, and so has left the castle to you, as an \
    inheritance, so to speak. And so we have reached the present."],
  expand: "Read more...",
  tldr: "tl;dr - You're female Alucard, who has just defeated Dracula and \
    inherited the castle. Manage it how you like. Choose your difficulty to start.",
};

const toolbar = {
  easy: "Easy",
  hard: "Hard",
  next: "Next",
  inv: "Inventory"
};

export { char, intro, toolbar };
