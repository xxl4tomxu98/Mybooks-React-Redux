'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        author: 'Tara Westover',
        title: 'Educated',
        description: 'Educated follows Tara Westover as she leaves her survivalist family in Idaho and sets off on a journey that leads her to earn a Ph.D. from Cambridge University. The reception to the book, and what it says about the gulf between educated and uneducated people in the United States, earned Westover a spot on Times list of the Most Influential People of 2019.',
        publicationYear: '1984',
        genre: 'Memoirs',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Michelle Obama',
        title: 'Becoming',
        description: "Even if you think you know all there is to know about Michelle Obama from watching her during her eight-year tenure as First Lady of the United States, her memoir will show you that there's still lots to learn about her. From her upbringing on Chicago's South Side to her triumphs and disappointments in the White House, Becoming offers a deeply personal look at Obama's life.",
        publicationYear: '1984',
        genre: 'Memoirs',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Paul Kalanithi',
        title: 'When Breath Becomes Air',
        description: "Paul Kalanithi didn't set out to become a writer â€” in fact, he was an M.D. with more than a decade of training as a neurosurgeon, until he was diagnosed with Stage IV lung cancer. After switching from doctor to patient, he set out to write this memoir to examine what makes life worth living. ",
        publicationYear: '1984',
        genre: 'Memoirs',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Malala Yousafzai',
        title: 'I Am Malala',
        description: "When she was 15, Malala Yousafzai was shot in the head at point-blank range while riding the bus home from school because she spoke out about Taliban rule. Not only did she survive, she went on to publish her memoir and become one of the most leading voices for change, and a symbol of how one person can change the world. ",
        publicationYear: '1984',
        genre: 'Memoirs',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Amy Poehler',
        title: 'Yes Please',
        description: "Amy Poehler's collection of essays is as funny as you'd expect from the former star of The Upright Citizens Brigade, Saturday Night Live and Parks and Recreation â€” but it also contains lots of useful real-world wisdom, such as advice about when to be funny and when to get serious. ",
        publicationYear: '1984',
        genre: 'Memoirs',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Cheryl Strayed',
        title: 'Wild',
        description: "Before it became a movie starring Reese Witherspoon, Cheryl Strayed's Wild was hitting the top of best-seller lists for its portrayal of a woman who had lost herself to grief, but then found redemption by hiking on the Pacific Crest Trail from California through Washington State. ",
        publicationYear: '1984',
        genre: 'Memoirs',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Mindy Kaling',
        title: 'Is Everyone Hanging Out Without Me?',
        description: "Mindy Kaling deserves credit for always living life on her own terms, and her book offers some of her keen observations about life that helped her get to where she is. In it, she details her thoughts about what makes a great best friend, romance, show business and an examination of what it was like to grow up with immigrant parents.",
        publicationYear: '1984',
        genre: 'Memoirs',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Elizabeth Gilbert',
        title: 'Eat, Pray, Love',
        description: "With her account of finding herself by traveling through Italy, India, and Indonesia, Elizabeth Gilbert was preaching about paying attention to your needs back before self-care was something that anyone ever talked about.",
        publicationYear: '1984',
        genre: 'Memoirs',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Jeannette Walls',
        title: 'The Glass Castle',
        description: 'Jeannette Walls describes her unconventional and nomadic upbringing, being raised by nonconformist parents â€” including an alcoholic father â€” who taught them how to "embrace life fearlessly." The story pops off the page so strongly, it was adapted into a feature film starring Brie Larson.',
        publicationYear: '1984',
        genre: 'Memoirs',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Augusten Burroughs',
        title: 'Running with Scissors',
        description: "Augusten Burroughs writes another tale about an unorthodox childhood shaped by damaged parents; his mother abandoned him to be raised by a therapist. Yet somehow, the story isn't maudlin, and Burroughs manages to walk that fine line of being brutally honest about his upbringing, without losing sight of the humor in his situation. ",
        publicationYear: '1984',
        genre: 'Memoirs',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Immanuel Kant',
        title: 'Critique of Pure Reason',
        description: "Kant's Critique of Pure Reason (1781) is the central text of modern philosophy. It presents a profound and challenging investigation into the nature of human reason, its knowledge and its illusions. Reason, Kant argues, is the seat of certain concepts that precede experience and make it possible, but we are not therefore entitled to draw conclusions about the natural world from these concepts. The Critique brings together the two opposing schools of philosophy: rationalism, which grounds all our knowledge in reason, and empiricism, which traces all our knowledge to experience. Kant's transcendental idealism indicates a third way that goes far beyond these alternatives.",
        publicationYear: '1984',
        genre: 'Philosophy',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Immanuel Kant',
        title: 'Groundwork of the Metaphysics of Morals',
        description: "Immanuel Kant's Groundwork of the Metaphysics of Morals ranks alongside Plato's Republic and Aristotle's Nicomachean Ethics as one of an influential work in moral philosophy. Its aim is to search for and establish the supreme principle of morality, the categorical imperative. He argues that every human being is an end in himself or herself, never to be used as a means by others, and that moral obligation is an expression of the human capacity for autonomy or self-government. The introduction examines and explains Kant's argument.",
        publicationYear: '1984',
        genre: 'Philosophy',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Immanuel Kant',
        title: 'Critique of Practical Reason',
        description: "This seminal text in the history of moral philosophy elaborates the basic themes of Kant's moral theory, gives the most complete statement of his highly original theory of freedom of the will, and develops his practical metaphysics. This new edition, prepared by an acclaimed translator and scholar of Kant's practical philosophy, presents the first new translation of the work to appear for many years, together with a substantial and lucid introduction.",
        publicationYear: '1984',
        genre: 'Philosophy',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Michel Foucault',
        title: 'Discipline and Punish: The Birth of the Prison',
        description: "In this brilliant work, the most influential philosopher since Sartre suggests that such vaunted reforms as the abolition of torture and the emergence of the modern penitentiary have merely shifted the focus of punishment from the prisoner's body to his soul.",
        publicationYear: '1984',
        genre: 'Philosophy',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Michel Foucault',
        title: 'The History of Sexuality, Volume 1: An Introduction',
        description: "Michel Foucault offers an iconoclastic exploration of why we feel compelled to continually analyze and discuss sex, and of the social and mental mechanisms of power that cause us to direct the questions of what we are to what our sexuality is.",
        publicationYear: '1984',
        genre: 'Philosophy',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Michel Foucault',
        title: 'Madness and Civilization: A History of Insanity in the Age of Reason',
        description: "Michel Foucault examines the archeology of madness in the West from 1500 to 1800 from the late Middle Ages, when insanity was still considered part of everyday life and fools and lunatics walked the streets freely, to the time when such people began to be considered a threat, asylums were first built, and walls were erected between the â€œinsaneâ€ and the rest of humanity.",
        publicationYear: '1984',
        genre: 'Philosophy',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Michel Foucault',
        title: 'The Order of Things: An Archaeology of the Human Sciences',
        description: "With vast erudition, Foucault cuts across disciplines and reaches back into seventeenth century to show how classical systems of knowledge, which linked all of nature within a great chain of being and analogies between the stars in the heavens and the features in a human face, gave way to the modern sciences of biology, philology, and political economy. The result is nothing less than an archaeology of the sciences that unearths old patterns of meaning and reveals the shocking arbitrariness of our received truths. In the work that established him as the most important French thinker since Sartre, Michel Foucault offers startling evidence that â€œmanâ€â€”man as a subject of scientific knowledgeâ€”is at best a recent invention, the result of a fundamental mutation in our culture.",
        publicationYear: '1984',
        genre: 'Philosophy',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Judith Butler',
        title: 'Gender Trouble: Feminism and the Subversion of Identity',
        description: "Since its publication in 1990, Gender Trouble has become one of the key works of contemporary feminist theory, and an essential work for anyone interested in the study of gender, queer theory, or the politics of sexuality in culture. This is the text where Judith Butler began to advance the ideas that would go on to take life as \"performativity theory,\" as well as some of the first articulations of the possibility for subversive gender practices, and she writes in her preface to the 10th anniversary edition released in 1999 that one point of Gender Trouble was \"not to prescribe a new gendered way of life [...] but to open up the field of possibility for gender \[...\] \" Widely taught, and widely debated, Gender Trouble continues to offer a powerful critique of heteronormativity and of the function of gender in the modern world.",
        publicationYear: '1984',
        genre: 'Philosophy',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Judith Butler',
        title: 'Undoing Gender',
        description: "Undoing Gender constitutes Judith Butler's recent reflections on gender and sexuality, focusing on new kinship, psychoanalysis and the incest taboo, transgender, intersex, diagnostic categories, social violence, and the tasks of social transformation. In terms that draw from feminist and queer theory, Butler considers the norms that govern and fail to govern gender and sexuality as they relate to the constraints on recognizable personhood. The book constitutes a reconsideration of her earlier view on gender performativity from Gender Trouble. In this work, the critique of gender norms is clearly situated within the framework of human persistence and survival. And to \"do\" one's gender in certain ways sometimes implies \"undoing\" dominant notions of personhood. She writes about the \"New Gender Politics\" that has emerged in recent years, a combination of movements concerned with transgender, transsexuality, intersex, and their complex relations to feminist and queer theory.",
        publicationYear: '1984',
        genre: 'Philosophy',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Bell Hooks',
        title: 'All About Love: New Visions',
        description: "All About Love offers radical new ways to think about love by showing its interconnectedness in our private and public lives. In eleven concise chapters, hooks explains how our everyday notions of what it means to give and receive love often fail us, and how these ideals are established in early childhood. She offers a rethinking of self-love (without narcissism) that will bring peace and compassion to our personal and professional lives, and asserts the place of love to end struggles between individuals, in communities, and among societies. Moving from the cultural to the intimate, hooks notes the ties between love and loss and challenges the prevailing notion that romantic love is the most important love of all. <br \> Visionary and original, hooks shows how love heals the wounds we bear as individuals and as a nation, for it is the cornerstone of compassion and forgiveness and holds the power to overcome shame. <br \> For readers who have found ongoing delight and wisdom in bell hooks's life and work, and for those who are just now discovering her, All About Love is essential reading and a brilliant book that will change how we think about love, our culture-and one another.",
        publicationYear: '1984',
        genre: 'Philosophy',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Dan Simmons',
        title: 'Hyperion',
        description: 'example description',
        publicationYear: '1984',
        genre: 'Sci-Fi',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'William Gibson',
        title: 'Neuromancer',
        description: 'example description',
        publicationYear: '1984',
        genre: 'Sci-Fi',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Anna Kavan',
        title: 'Ice',
        description: 'example description',
        publicationYear: '1984',
        genre: 'Sci-Fi',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Ursula K. Le Guin',
        title: 'The Left Hand of Darkness',
        description: 'example description',
        publicationYear: '1984',
        genre: 'Sci-Fi',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Andy Weir',
        title: 'The Martian',
        description: 'example description',
        publicationYear: '1984',
        genre: 'Sci-Fi',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Kurt Vonnegut',
        title: 'Slaughterhouse - Five',
        description: 'example description',
        publicationYear: '1984',
        genre: 'Sci-Fi',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Orson Scott Card',
        title: 'Ender\'s Game',
        description: 'example description',
        publicationYear: '1984',
        genre: 'Sci-Fi',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Douglas Adams',
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        description: 'example description',
        publicationYear: '1984',
        genre: 'Sci-Fi',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Mary Shelley',
        title: 'Frankenstein',
        description: 'example description',
        publicationYear: '1984',
        genre: 'Sci-Fi',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Jules Verne',
        title: 'Journey to the Center of the Earth',
        description: 'example description',
        publicationYear: '1984',
        genre: 'Sci-Fi',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], { returning: true });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Books', null, {});

  }
};
