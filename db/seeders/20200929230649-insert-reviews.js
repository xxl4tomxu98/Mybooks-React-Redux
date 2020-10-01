'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        bookId: 11,
        description: "Very difficult to absorb, mainly because he creates his own language and uses several terms to mean unique specific things. It can be frustrating to get through but if you can make it to about 400 pages it all magically fits together and the remaining few hundred pages are much more manageable. Recommend reading it with some other people (we had an entire upper level philosophy class devoted to just this book) to stay on track if you plan to read it.",
        userId: 3,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 11,
        description: "It can be a rather dense read yes but the best way to approach this book is the William James method; read 5 to 10 pages at a time and mull over for at least three days",
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 11,
        description: "Thesis. Turgid, dogmatic, overrated and well past its sell-by. Proof. As Einstein exasperatedly said: if Kant had only been able to stop pontificating about the nature of time and space, he might actually have discovered something interesting about them. Einstein, with considerable justification, felt that he had refuted Kant, and was surprised to find that philosophers were reluctant to accept his claim. To me, it seems clear-cut. Kant repeatedly tells us that time and space are not things; but Einstein's insight is that this is wrong. Space-time is, indeed, a thing that we can roughly conceptualize as a kind of invisible fluid in which we have our physical being. Matter acts on space-time to change its shape, and space-time acts on matter to cause it to move. This interplay between space-time and matter is what we experience as gravity. Einstein has done far more than correct a detail. The most obvious consequence is that the greater part of the Antinomy of Pure Reason - a good hundred pages of Kant's book - is rendered invalid. Kant argues, roughly, that it is not meaningful to inquire about whether the universe is finite or infinite in space and time. The fact that time and space are things radically changes the situation. Contrary to Kant's claims, the whole of space-time is now also a thing. The question of whether it is finite or infinite turns out to be related to its curvature, which is something we can measure. Thus the finiteness of the universe is part of the world of phenomena, and astronomers during the last few decades have done a great deal of practical work investigating these questions. In the field of literature, Proust was as annoyed as Einstein. The following passage from La prisonniÃ¨re (presented here with the Scott Moncrief translation) eloquently sums up his feelings: â€“ Jâ€™y vais, Madame, jâ€™y vais Â», finit par dire Brichot comme le gÃ©nÃ©ral Deltour sâ€™Ã©loignait. Mais dâ€™abord lâ€™universitaire me prit un instant Ã  part : Â« Le devoir moral, me dit-il, est moins clairement impÃ©ratif que ne lâ€™enseignent nos Ã‰thiques. Que les cafÃ©s thÃ©osophiques et les brasseries kantiennes en prennent leur parti, nous ignorons dÃ©plorablement la nature du Bien. Moi-mÃªme qui, sans nulle vantardise, ai commentÃ© pour mes Ã©lÃ¨ves, en toute innocence, la philosophie du prÃ©nommÃ© Emmanuel Kant, je ne vois aucune indication prÃ©cise, pour le cas de casuistique mondaine devant lequel je suis placÃ©, dans cette critique de la Raison pratique oÃ¹ le grand dÃ©froquÃ© du protestantisme platonisa, Ã  la mode de Germanie, pour une Allemagne prÃ©historiquement sentimentale et aulique, Ã  toutes fins utiles dâ€™un mysticisme pomÃ©ranien. Câ€™est encore le Â« Banquet Â», mais donnÃ© cette fois Ã  KÅ“nigsberg, Ã  la faÃ§on de lÃ -bas, indigeste et assaisonnÃ© avec choucroute, et sans gigolos. \"I am going, Madame, I am going,\" said Brichot, as General Deltour moved away. But first of all the Professor took me aside for a moment: \"Moral Duty,\" he said, <br /> \"is less clearly imperative than our Ethics teach us. Whatever the Theosophical cafÃ©s and the Kantian beer-houses may say, we are deplorably ignorant of the nature of Good. I myself who, without wishing to boast, have lectured to my pupils, in all innocence, upon the philosophy of the said Immanuel Kant, I can see no precise ruling for the case of social casuistry with which I am now confronted in that Critique of Practical Reason in which the great renegade of Protestantism platonised in the German manner for a Germany prehistorically sentimental and aulic, ringing all the changes of a Pomeranian mysticism. It is still the Symposium, but held this time at KÃ´nigsberg, in the local style, indigestible and reeking of sauerkraut, and without any good-looking boys. Antithesis A brilliant and incalculably important book which more or less created modern thought. Proof The difficulty of reconciling the world of sensations with the world of concepts is perhaps the central problem of philosophy. No one, before or since, has done it better than Kant did in the Critique of Pure Reason. I do not think it a coincidence that relativity and quantum mechanics, the great breakthroughs in twentieth century physics, were discovered by German-speaking scientists who were thoroughly acquainted with his work. Einstein's special theory of relativity crucially depends on the insight that different observers experience time and space differently. Lorentz had all the pieces of the jigsaw in front of him, but was unable to put them together into the realization that the \"Lorentz contraction\" cannot be conceptualized as an objective fact, but is rather observer-dependent. If he had been able to grasp this point, he would have gone down in history as the discoverer. Quantum mechanics is an even clearer case, where the Schrodinger equation is almost a direct translation of Kant's ideas into mathematical form. The unknowable wave-function represents the noumenal world; the world of phenomena is represented by the system of operators which act on it, where the operators themselves are the senses and their eigenvalues are the sense data. Though one point is oddly reversed with respect to Kant. There is the same duality between determinism and free will, but it is the world of noumena that turns out to be deterministic, while the world of phenomena is not! The mark Kant made on literature is only slightly less telling. As I recently discovered in Gautier-Vignal's Proust connu et inconnu , Proust was fascinated by Kant, and the whole of the Recherche greatly influenced by his ideas. I must reread Le temps retrouvÃ© from this new perspective; I suspect that many things which puzzled me first time round will become clearer",
        userId: 1,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 11,
        description: "Immanuel Kant is the kind of guy who not only sucks all of the joy out of life; he takes great pleasure in opening the spigot of your happiness-tank and watching it all spill out onto the burn-out lawn and sink into the earth -- seeping toward the planet's molten, pitiless core and, thereupon, toward its irrevocable dissipation.",
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 11,
        description: "...Reason should take on anew the most difficult of all its tasks, namely, that of self-knowledge, and to institute a court of justice, by which reason may secure its rightful claims while dismissing all its groundless pretensions, and this not by mere decrees but according to its own eternal and unchangeable laws; and this court is none other than the critique of pure reason itself.",
        userId: 3,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 11,
        description: "When I was about seven, my favorite movie was Chitty Chitty Bang Bang and Mom was dating this philosophy professor who was writing a book on Kant's Critique of Pure Reason. One day, I asked him what it was about, and he told me it was just like Chitty. It was a kind of magic car that - I can still remember his words - 'was able to drive on the roads of sensation, float on the water of concepts, and even fly above the sea of transcendental illusion'. And then he told me the whole story of Chitty Chitty Bang Bang, with Kant replacing Caractacus Potts and the Critique replacing Chitty. Truly Scrumptious was Modern Science, and Baron Bomburst was some philosopher I'd never heard of who didn't like metaphysics. We all sang the \"The Order of Things: An Archaeology of the Human Sciences\" song together with Mom's boyfriend's words, it started like this:",
        userId: 1,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 11,
        description: "It is done. I have finally scaled the sheer surface of this work. It involved continual toil, sweat, and sufferingâ€”falling down and picking myself up again. But, when you reach the end, when your eyes finally hit the bottom of that final paragraph, the feeling is momentous. You can stand and look down at the steep drop you managed to climb, and reflect with satisfaction that this mountain is one of the tallest. This is an Everest of a book.",
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 11,
        description: "Seriously though... why does so much Western philosophy remind me of arguing about how many angels can dance on the head of a pin? I swear, these gentlemen had their panties wrapped so tightly I don't know how they ever took a proper dump.",
        userId: 1,
        createdAt: new Date(),

        updatedAt: new Date()
      },

      {
        bookId: 17,
        description: "I hadn't expected this book to be nearly as interesting as it turned out to be. Unfortunately, I've only just finished it and I suspect I'm going to need to think about it for a while yet before I really understand some of the arguments here - but this is a stunningly interesting book. I've a feeling that if you looked up 'erudite' in the dictionary ...",
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 17,
        description: "I have now devoted nearly three months to doing close readings of nearly every book by Michel Foucault. I can die happy :) Except, I'm more confused! I know less now than I did before. And that's precisely the point. We are still living with Philosophical ideas from the Classical Period (i.e. humanism, Neo-Classical Liberalism, Capitalism, etc.). Yet Foucault shows, time and time again, that the institutions established during the Classical Period have taken on a life of their own, often times violently. Yet we are all still trapped within the inertia of History. A professor of mine explained everything I ever needed to know about Post-Modern Subjectivity. He said, \"Have you ever watched Terminator 3: Rise of the Machines?\" \"No,\" I said. He replied disgruntled, \"Where's your education? Ok, so contemporary society is like the end of that movie. John Conner goes to the Central Command center to avoid the Judgment Day, where the machines overthrow the humans. And he finds out that there is no central command. The machines are ruling themselves, there is no center, and nothing the hero can do will stop the inevitable destruction on Judgment Day. No human actor can stop the inevitable downfall of the human race. The machines represent the subjectivity of the coming revolution, the people are humanists, and Judgment Day means we are all basically fucked.\"",
        userId: 3,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 17,
        description: "\"Between language and the theory of nature there exists therefore a relation that is of a critical type; to know nature is, in fact, to build upon the basis of language a true language, one that will reveal the conditions in which all language is possible and the limits within which it can have a domain of validity.\" (p. 161)",
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 17,
        description: "It is quite possible that there was a lot more to this book than I got out of it, and that Foucault's thinking might have been extremely exciting if only I could have decoded it. I am not annoyed at the use of so many long and unfamiliar words, because sometimes long words do say something that shorter words can't. I am not irritated that I had to look up lots of words nor that I had to struggle with the definitions to try to get my head around unfamiliar ways of thinking...I would expect all that from a post-structuralist. I did not expect that he would use his words in such an absolute way, not defining what he means by words even when he is using them in a slightly off-centre way (I am not sure whether my criticisms apply more to FOUCAULT MICHEL himself or his translator).",
        userId: 1,
        createdAt: new Date(),

        updatedAt: new Date()
      },

      {
        bookId: 18,
        description: "Some very interesting ideas here imprisoned in a lot of opaque, tortuous sentences. Postmodern academese remains the only major European language that I am completely incapable of understanding. I am also sick to death of seeing intelligent friends, both here and in real life, make apologetic comments about how they weren't quite up to the task of fully engaging with texts like this as if it were their fault!",
        userId: 1,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 18,
        description: "You know, the problem with troubling gender is that gender isnâ€™t the only thing that is going to be troubled. When I was doing my first degree my lecturer in the editing subject said that you should pay attention to the things people generally skip over in books â€“ the titles of chapters for one, but much more importantly, epigraphs. The example he gave was Watership Down, which he claimed that if you read all of at the start of each of the chapters and said rabbits a couple of times you could plausibly get away with reading nothing else in the book and still know what the book was about. Iâ€™ve never bothered even doing this â€“ but it would be an amusing exercise. What I can tell you is that this book can be pretty well summarised by the five quotes used as epigraphs immediately after the title page:",
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 18,
        description: "Thrilling new vocabulary with which to alienate friends and offend family",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookId: 18,
        description: "Badly written and destructive in its impact on academic discourse. Butler is a darling of the theory crowd, one of the required citations. I found nothing in it that went beyond the standard cliches concerning the inadequacy of essentialist definitions. That wouldn't earn it the one star; what does is Butler's centrality to the infinite regression school of literary/cultural theory. By the time Butler's acolytes--apparently oblivious to the fact that every third sentence is borderline ungrammatical--are finished, what we're left with is an approach that elevates critique of critique of critique to near-holy status. The Butlerians believe themselves to be progressive in some oddly hermetic sense; far as I can tell the discourse is profoundly nihilistic.",
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },

      {
        bookId: 19,
        description: "Before I read Judith Butler, I would have identified myself as a woman. But she says I'm wrong. At the most basic level I'm not necessarily a woman.  Butler sees gender as performance. Butler says anatomy has cultural framing. It is Performance, not an essence. Gender is performed without ones being conscious of it. \"Terms that make up ones own gender are outside oneself, beyond oneself in a sociality that has no author.\" Anatomy and sex have cultural framing. They are not natural, not essential, not pre-cultural. You could have fooled me! She says all this in incomprehensible jargon. I guess that's why she's a philosophy professor.",
        userId: 1,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 19,
        description: "Anyone who has read Judy Butler has had to contend with philosophical mind-benders of astonishing brilliance and tortured diction, such as: \"What happens to the subject and to the stability of gender categories when the epistemic regime of presumptive heterosexuality is unmasked as that which produces and reifies these ostensible categories of ontology?\" Which makes it all the more surprising to run into the same brilliance, the same incisiveness, but this time with a kind of heartrending poetry that absolutely cuts to the quick. Like from the first chapter:",
        userId: 1,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 19,
        description: "Her discussion of what it means to be \"human\" and socially intelligible made me cry. Specifically: \"To be called a copy, to be called unreal, is thus one way in which one can be oppressed. But consider that it is more fundamental than that. For to be oppressed means that you already exist as a subject of some kind... But to be unreal is something else again. For to be oppressed one must first become intelligible. To find that one is fundamentally unintelligible is to find that one has not yet achieved access to the human\" (218).",
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 19,
        description: "This one-star rating is probably unfair. Butler certainly made statements I agreed with, and is a widely respected feminist scholar who seems to be very important intellectually. But this book was a flaming heap as far as I'm concerned. In no essay did I ever figure out what she was actually trying to say, because she just rambles all over the place saying random things (using the biggest words possible) and never seems to have a point at all. The assertions I did understand seem actively unhelpful, like an effort to get everyone to disassociate themselves from their attributes.",
        userId: 3,
        createdAt: new Date(),

        updatedAt: new Date()
      },

      {
        bookId: 20,

        description: 'I feel like it\'s socially irresponsible to conduct a conversation about such an important topic using language that makes that conversation inaccessible to so much of the population. We get it. You\'re a smarty pants. But you fail to move the pegs when you\'re only talking to other academics.',
        userId: 3,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 20,

        description: 'In Bodies that Matter Judith Butler replies to the criticism of her earlier book Gender Trouble. She argues with the feminist thinkers who see the body as matter--a material body with a sexual specification. According to her the body does not exist beyond a cultural construction. It serves as a site for the feminist theory independently of such a pre-discursive definition. In her introduction she explains: For surely bodies live and die; eat and sleep; feel pain, pleasure; endure illness and violence; and these â€œfacts,â€ one might skeptically proclaim, cannot be dismissed as mere construction. \[â€¦\] But their irrefutability in no way implies what it might mean to affirm them and through what discursive means. Moreover, why is it that what is constructed is understood as an artificial and dispensable character? \(xi\).',
        userId: 1,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 20,

        description: 'Whilst I can\'t speak highly enough of the fantastic ideas in this book, it does share a problem with many post-modern critical writings. It insists on hiding simple yet powerful ideas behind overly esoteric language, potentially rendering them inaccessible to people who could make great use of them. A book intended to have consequences for society as a whole shouldn\'t be written in language that is only understandable to those privileged few who posses degrees in related subjects. Given the subject matter, it is clearly impossible that jargon be avoided altogether. Still, there were many moments where things could have be said simply but were not.',
        userId: 3,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 20,

        description: 'This certainly cleared up a few ideas that seemed vague in Gender Trouble. Butler asserts here that the performativity of gender does not imply an agency that allows one to put it on and take it off as one pleases, which is in dialogue with Spivak\'s elaboration of deconstruction where she dismisses the idea of free play. Performativity in this sense is a repetitive reiteration that imagines and images a coherent identity at the cost of its own complexity. It is not a matter of antagonizing the one who performs or the performance itself, but to make the distinction, which then results in the shattering of the heterosexual matrix.',
        userId: 3,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 20,
        description: 'It\'s worth reading but I consider Butler much stronger on immigration and citizenship concerns than on those of sexuality. I recognize her lexicon makes a fair bit of her writing generally inaccessible but having taken on her works half a dozen times, I don\'t notice that anymore.',
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },

      {
        bookId: 20,
        description: 'i find it astonishing that so many people i otherwise respect & admire got so into this book. i would love to try an experiment where this book is re-released under some nobody\'s name, rather than bell hooks, & we can see how people respond to it when they aren\'t actually responding to the whole bell hooks association. i have LOVED a lot of hooks\'s books. this was a big pile of crap, & not just that, it ushered in a whole generation of terrible crappy books written by bell hooks. there has been a serious upswing in the importance of love & jesus in hooks\'s books in the last several years, & a serious downswing in interesting political thought. maybe i am biased because i am not a christian? & because i am not interested in lovey-dovey mega-positivity? it works for some people, but it\'s not my thing. i just HATED this book. not only was it boring & unsatisfying, it didn\'t even make any sense. you could start reading it from the back, & read every sentence backwards, or you could cut all the words out & scramble them together & piece them together into a whole different book, & it would say the same thing: yay for love! love is a revolutionary force! it\'s so important to work on being loving! this is now what i am looking for when i pick up a bell hooks book \(full disclosure: it\'snot what I am looking for when i pick up ANY book). blech. i just didn\'t get this book. major disappointment.',
        userId: 1,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 20,
        description: 'Here are my notes from this extraordinary book\: <br \>-it is much easier in our world to discuss the loss of love than the presence or, particularly, the search for love. <br \> - love is comprised of, but not equal to\: commitment, affection, recognition, respect, trust, communication. <br \> -cathexis\: the process of investment in a person wherein the other becomes important to us. often confused for love; as in "I can\'t leave her. We\'ve been through too much together."',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookId: 20,
        description: 'Well, so, OK. Here\'s the thing. This book changed/is changing my life. It came to me at just the right second \(by which I mean, I took it from the house where I was house-sitting at just the right second), and I have taken it straight to heart. hooks is in the business of life-changing, really, whether she\'s teaching us how to love in the face of a planet of lovelessness, or teaching us to find, confront, and exorcise the racism and sexism by which we invariably live. What got to me in "All About Love" was honesty. Telling the truth in order to pave the way for unadorned, loving interaction. WOO CHILD there was a lesson I haven\'t been ready to hear until right now, but shoot am I hearing it now. <br \> To give two brief criticisms, because it wasn\'t actually perfect, and that\'s important\: it\'s pretty god-heavy. If that\'s not your thing, take note. bell loves god. Also, it\'s pretty gender-essentialist. I agree, for example, that men are shamed out of revealing their needs and wants for love more than women are, but there is nary a mention of genderqueer identities. What happens if you are neither from Mars NOR Venus\?',
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },
      {
        bookId: 20,
        description: 'The best and worst thing about this book was hooks\' commitment throughout the work to making powerful, decisive statements that wanted to leave little room open for argument.<br \> When she was on, this authoritative voice felt like a revelation -- such as when she declares that abuse and love cannot coexist. It\'s a beautiful, affirming, heartbreaking statement, that seems to have a large weight of truth behind it, at once the most and least obvious thing. The definition of love that she borrows and endorses is also very powerful and transformative. Not to mention, incredibly useful. <br \>But when she isn\'t on -- the voice feels moralizing and sermon-like, hard to swallow. I mean, she really used the phrase "hedonistic pleasure" seriously. & her thoughts on work, her feeling that work can be bearable if done with love, feels downright degrading, especially alongside the way she talks about things like having TWO HOMES, one in the city, one outside of the city -- a pretty extreme display of class privilege. I feel that hooks sees too much room for possibility in a world so totally dominated by capitalism. <br /> Basically there are some real gems of thought in here, practical gems, but I felt like I was digging for them through a lot of writing that I disagreed with, didn\'t care about, felt annoyed by, or felt like wasn\'t written with "people like me" -- queer/gay folks -- in mind in the slightest.',
        userId: 2,
        createdAt: new Date(),

        updatedAt: new Date()
      },
    ], { returning: true }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
