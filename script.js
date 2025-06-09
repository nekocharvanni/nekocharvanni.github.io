// Global state
let currentStory = null;
let currentChapter = 1;
let maxFreeChapters = 3;
let isReading = false;
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let selectedPricing = 'all';

// Story data
const stories = {
  'chocolate-matcha': {
    title: 'Chocolate & Matcha',
    chapters: 5,
    content: {
      1: {
        title: 'Chapter 1: Osaka Tea Garden',
        text: `Chapter One
Osaka, Japan

In the garden following the path of arranged onyx marble stepping-stones, past the water basin and near cherry blossom trees in tranquil bloom, Kazuhiko Wakahisa sat on the stone bench sipping green tea he prepared. His eyes wandered past the shrubberies arranged simplistically around the garden to the jade fountain. Two intricately sculptured jade dragons twisted around a miniature jade Mount Fuji. Crystal clear water serenely flowed through their fangs, cascading down Mount Fuji until the water trickled into the base. Kazuhiko continued observing the flowing water wishing he could wash away the events of the past year. Taking a deep breath, he inhaled the peaceful air and sipped more of his tea, gazing upon the dragons in awe, silencing his thoughts. The fountain was his favorite escape from a busy day as a chadōka, master of a tea ceremony. His job as a chadōka wasn’t demanding. However, the mastery and sophistication within his family name brought stress from the innumerable guests wanting to taste the tea of the last remaining male chadōka in the Wakahisa family. 
As a Wakahisa, his family name meant superb and well-prepared tea. As a tea host, his skills passed on from a long line of Wakahisas led tea drinkers to say, Wakahisa ryu no aji ga hoshii (“give me that Wakahisa flavor”). His family talents and history gave him high esteem amongst the aristocrats of Japan and around the world. His high grade of tea sold worldwide as an international delicacy giving him global fame. Kazuhiko was the only Wakahisa left that could continue his great-grandfather's legacy over nine generations ago, Tenoshi Wakahisa, the first Wakahisa to become a master at preparing green tea. Being a chadōka was a heavy burden, but Kazuhiko took pride in his honorable profession. If only he had shared the same standards concerning his love life, he might have been happy. 
Allowing the sound of the fountains streaming water to dissipate, Kazuhiko looked at his simple black-colored ceramic teacup and admired the handiwork. He studied the kintsugi, repaired with gold, cup. It was a priceless family heirloom passed down from his great-grandfather Tenoshi, crafted by an artist who had become his great-grandfather’s dearest friend. Tenoshi had conserved dozens of dishes, sculptures, and paintings from the wandering artist and philosopher Yazushi. Tenoshi had provided lodging to Yazushi, who had wandered around Japan for ten years during the Meiji period.  Kazuhiko had heard Yazushi and his grandfather had been retired samurai, but he hadn’t found any concrete proof to validate the story. His great-grandfather’s past was still a bit of a mystery.  
Rubbing the kintsugi cup, Kazuhiko gazed at the cloudy blue sky. Despite its rarity, the kintsugi cup was his favorite. It embodied true love. The only love Kazuhiko was willing to submit himself to anything else was for his carnal pleasure. The modest rustic black kintsugi cup was unique. Unlike its sibling tarnished yellow replicas, the cup was strong, well designed, and full of history. The kintsugi cup burned at an extraordinary temperature for stability, splendidly varnished to enhance the beauty of its deep black pigment, proclaimed the genius of Yazushi’s craft. Kazuhiko’s heart swelled with longing and sadness. He could only imagine his great-grandfather Tenoshi’s suffering from having found and lost the love of his life. 
Unlike his parent’s brutal façade of love, Kazuhiko could easily envision true love from journals left by his great-grandfather recounting the love he had for his wife. His great-grandfather had loved his wife with the full force of his spirit, mind, and body that after witnessing his wife’s death after giving birth to their only son, the cup had slipped from Tenoshi’s hands, cracking its side and spilling tea intended for his wife. 
In the journal, Kazuhiko had read how Yazushi overwhelmed with empathy for the tragedy that had occurred, mended the broken cup with gold in hopes of restoring Tenoshi’s broken heart. Kazuhiko’s widowed great-grandfather never remarried and never got over the loss of his soul mate. Centuries later, the kintsugi cup felt weightless and perfect in Kazuhiko’s hands as a reminder of true love’s heavy burden. 
Kazuhiko sipped his green tea savoring the pleasure of its bitter taste within the accompanied kintsugi cup. A smooth breeze disturbed the densely lined cherry blossom trees scattering soft pink petals around the garden. Kazuhiko, for a moment, forgot the hardship that he had created. 
“Kazu, peace seems to have returned to you. I’m glad….” 
Upon hearing his nickname, Kazuhiko turned to the voice of his best friend, Kenshin Hayashi. Kenshin, dressed in an ordinary but well-crafted black business suit, had just returned from working at his family’s law firm, Hayashi Lawyers. 
His meticulous friend appeared weary as he yawned, stretching his hands above his head. 
“Seems you had a hard day?” Kazuhiko replied. 
“Nothing a few drinks can’t solve.” Kenshin paused to yawn. “A nice cold beer would be nice right about now.” 
“I have no alcohol. How about a nice cup of tea.” Kazuhiko turned on the stove built into the grey stone table and waited for the kettle to steam. 
Kazuhiko was proud of Kenshin’s continued success.  Kenshin’s reputation as a winning lawyer brought fame to his family law firm. His friend was a cunning debater, fluent in four languages, and possessed a vast understanding of law and medicine. It was no surprise that he had never lost a court case. Kenshin saved him from a grave embarrassment that could have ruined the Wakahisa family name and tea's legacy.   
“Of course. Your mother is out of the country in the states. What kind of trouble shall we plan?” Kenshin continued as he walked the short distance to sit next to him. 
“Ken, I love my mother…when she is far away. These last few months have been worse than the chaos Hanako brought to my life. If I have to meet another of mother’s female acquaintances, I’m going to lose it.” Kazuhiko said. He drank the remainder of his tea and grimaced at his friend’s smiling expression. 
Scooping a few teaspoons of powdery matcha into each of their cups on the stone table, Kazuhiko picked up the kettle pour hot water over the matcha, and whisked the water and matcha until it was perfectly blended. 
“Not like you’re underserving of this treatment. You’re lucky not to be in an arranged marriage now. After all the effort we all had to endure to clear your name, it could have been worse. She could have forced you to marry Hanako, but I think your mother saw through that woman. Hanako would have done more harm to your family had you two married.” Kenshin paused. “Now that things have settled down, what misfortune will you conjure while the witch is away?” Kenshin smirked, his eyes gleamed with an identical mischief Kazuhiko knew reflected within his own. 
“I know not the misfortune you speak of, after all, I’m a chaste man,” he jokingly replied, clasping his chest.
“I call bullshit.” Kenshin laughed.  
Kazuhiko joined in on the heartfelt laugh. His best friend knew him better than his mother.
“Drink, old friend, it has been a hectic year for us, but thanks to you, it is done now,” Kazuhiko said, handing Kenshin a beige teacup. 
 Taking the cup, Kenshin thanked him, “Here’s to hoping never again, old friend. On a good note, you’re free to come out and play at Lotus. As long as you don’t make a scene, we should be fine.” Kenshin said, wagging his eyebrows mischievously. 
Kazuhiko smiled at the idea of going to Lotus. Lotus was one of his frequented nightclubs in Osaka. It had been almost two years since he had partied at the club. The last time he had met a woman who had created one of the biggest and longest headaches he had ever experienced. He cringed at the thought of the incident.
“I’m one lucky bastard. That psycho almost cost me everything.” Kazuhiko said, running a hand through his hair in annoyance and loosening his bound tail.    
“If I hadn’t been such a great defender, you would have been screwed. Next time choose someone who’s not psychotic and devious with millions of adoring fans. I might not be able to bail you out again.” Kenshin paused in his words of warning to sip his tea. “But Hanako was a great actress. She has the public’s confidence, a formidable opponent and a truly crafty one.” 
“I don’t believe Hanako will ever receive just desert. Still, no reason for me to remain chained to the doghouse. I need my freedom to explore the clubs of Osaka again.” Kazuhiko exclaimed. 
“That’s what got you into trouble in the first place.” Kenshin laughed. “But you better enjoy these last few days before your mother marries you off.” 
“A few more nights can’t hurt. How about it, you and me, the special Ks,” Kazuhiko said, referring to their nicknames.
“Kazu, have you learned anything?” Kenshin smirked at him. 
“Keep a legal contract with all my clandestine affairs.” Kazuhiko smiled back at his friend, who began laughing.  
Sobering himself, Kenshin placed his teacup on the table. “And the Prince has returned. So what’s the first course of action?”
Kazuhiko laughed at the mention of his infamous nickname. At many of the nightclubs in Osaka and Tokyo, he had earned a reputation as a playboy, crowned “Prince” for his charismatic charm and the many lavish affairs he enjoyed. He was proud of his stature, but it was his secret never meant to reach the populace. One woman had changed everything and almost cost him his family’s legacy. 
 Deemed the Prince, Kazuhiko crowned anyone who caught his fancy and consented to the arrangement, his princess. The rules of engagement were simple one lucky Princess could expect his lavished attention, and he took part in her treasures in return. None of his relationships ever lasted over a month, and Kazuhiko was upfront about the deadline. His rules were frank and straightforward, to date, dismiss and quickly forget, yet there were still women lining up to fill the position. Women pleaded to become his Princess, across every class, age, and racial spectrum, and most sought him not for his money but for his charm and appeal. Who would have believed that Japan’s most well-known chadōka was also one of its biggest flirts? It was a perfect system until one particular woman didn’t fancy his rules and had decided their relationship wasn’t quite over.  
Hanako Love was one of the most prominent pop singers known for her mesmerizing voice, fashionable clothing line, and equally fascinating character. After serving tea to Hanako and her manager, she had approached him for a date. Knowing his rules and the month-long expiration date, they had begun their affair. At first, Kazuhiko thought it was fun to date a pop artist, but slowly Hanako’s façade began slipping. 
She wasn’t the sweet, cutesy, sassy artist but an obsessively clingy, overly dramatic, and selfish woman who nagged and schemed until things went her way. Kazuhiko had become instantly disenchanted by the childish woman but kept his honor and waited for the relationship's expiration. 
Hanako had been one of the most arduous lovers he had ever had. She had insisted that they wear promise rings even though the relationship was only a month arrangement. He bought her a diamond jewelry piece not out of a promise but because he had often purchased jewelry for his Princess. He thought nothing of marriage when he instructed his assistant to acquire the gift, but Hanako had used the necklace, earrings, bracelet, and ring to announce that they would marry. Kazuhiko shared no matrimony sentiments. He had told her numerous times he had no intentions to marry. 
Kazuhiko cringed as he recalled Hanako’s teasing response, “Oh silly, I know we won’t, but as my Prince for a month, you must agree to my fantasies, so let’s pretend we’re married, right Kazu-chan?” 
Kazuhiko could almost beat himself dead he should never have given Hanako his agreement to fulfill any fantasy she had. But having given his word, he honored his promise and allowed Hanako to have a dream pretend marriage. If only he had realized she was setting him up. It looked like they were engaged to outsiders. In truth, Kazuhiko hated the whole ordeal, but he went along with it.  Hanako typically sent him over a hundred texts a day, and he barely responded. How many times could a person say “I Love you” before it lost all meaning?  
On top of that, Hanako had interrupted a few of his tea ceremonies barging in on his guests. Luckily for him, the guests were so overcome by seeing Hanako Love, the pop artist they had allowed her to join in on the ceremony. It had become quickly awkward for Kazuhiko. Hanako would insistently tell the guest that they were engaged. Not wanting to embarrass Hanako, he never corrected her comment nor agreed. 
Kazuhiko’s nightmare began when a celebrity journalist had snapped a photo of them hugging while they had been out on a date. 
The tabloid opened the public to his private life, and the people believed what they read.
Kazuhiko had managed to convince Hanako to have an interview denying a relationship between them. He should have known then that the parasite was up to something. Hanako had promptly told the journalist that she was fond of tea ceremonies, preferred Wakahisa Tea, and had openly hugged him to show her appreciation. 
The public believed their beloved Hanako, and things had returned to semi-normalcy between them. Afterward, Kazuhiko had ensured their dates in secluded areas. He took no chances at having any more attention brought to his personal life. He was happy that the publicity stunt had gained sales, as young people took an interest in drinking sophisticated tea after hearing that their favorite artist was an avid drinker of Wakahisa Tea.   
With only two days to spare in their affair, Hanako had become his worst Princess from hell. Kazuhiko wished he had never met her. Hanako’s texting had increased. She insisted that they go out into public places and kept openly fantasizing and planning a wedding that would never happen. She had even bought a wedding gown and arranged for him to be fit for a suit. But, Hanako didn’t stop there as she had confessed her love and tried to bribe him into extending their affair. 
Though her advances were beguiling, he declined them, and she never showed a hint of disappointment.
Kazuhiko recalled the day he had finally arranged for the conclusion of their association. He settled the affair as he usually did with his lovers. 
         He invited Hanako on one last date at a location of her choosing. Hanako preferred an elegant restaurant where the dress code was formal attire, and she had looked stunning in her crème colored gown, but Kazuhiko was no longer interested.  It was the tradition that he always ended the affair with his Princess at midnight, his way of keeping to the midnight deadline in fairytales.  
After their last dance on the balcony of the restaurant, Kazuhiko bowed, formally ending their affair. Hanako still hadn’t given any indication that she was upset she had warmly smiled in his face. A smile he had often seen her give fans whenever they had been out in public. He remembered Hanako had even curtsied. 
“It was fun, Kazuhiko. Are you sure?” Hanko’s pitchy voiced asked with a ring of cheer. 
“It was, but you should find someone eager for marriage. I told you I couldn’t give you that nor love.” Kazuhiko replied. 
Still, Hanako presented no signs of distress or any emotions other than her usual merry self. 
Tilting her head to the side, she smiled again and said, “I thought I could tame the unattainable Prince. I guess I was wrong.” She cheerfully laughed. 
There had been no animosity. With that, Kazuhiko gave his farewell and sent the pop singer off. The morning brought his nightmare. Because he hadn’t lived up to her delusional dream of marriage, Hanako called every news company in Tokyo and held a conference. 
A weeping Hanako declared on national news that she was pregnant and that he was the father. Her revelation triggered the paparazzi to interrupt his life by following him wherever he went. There was a non-stop photographic and video coverage of their short affair. There were even pictures circulating of their last date right up to the moment he had ended the relationship. Kazuhiko wanted to go before the media to defend his side of the story, but Kenshin had stopped him. 
“The press will eat you alive if you go out on your own. Keep quiet, and let’s legally handle this situation.” Kenshin said, towering over him as he had sat on the couch at Lotus in a stupor drinking his fifth tequila shot. 
“If she is pregnant, then I’ll marry her to protect my heir, but I won’t love her.” Kazuhiko had dejectedly announced.  
“Until we know for sure, continue with your daily life as a chadōka, leave the women alone, and don’t say a word to anyone. You’re a chaste man until we can clear this mess.” Kenshin said, pacing. 
Kazuhiko smiled, remembering his friend had been more concerned for his welfare. Kenshin had his back as things became increasingly difficult for him to carry on with his daily routine. The paparazzi had exposed information about his private life. They brought interest to women he had previously dated and others who just wanted free advertising—the public exposure to his playboy reputation could cripple his family legacy.
 Kazuhiko became primetime entertainment on every newspaper, television network, and social media platform. The headlines labeled him a lecher and mongrel, causing the public to question him and almost morally ruin his family name. 
With Kenshin’s help, he paid off the women to claim that the journalist was presenting fraudulent news or that they had lied about having an affair for personal gain. Kenshin’s plan worked in clearing his name momentarily. The only issue left was to deal with a supposedly pregnant Hanako. Kenshin insisted that he never speak with her unless he was around. Kazuhiko had managed just that until one night, she had cornered him. Hanako trapped him in an elevator at a hotel he stayed at during a Tokyo business trip.  Her cheery smile was now a nightmarish requiem.   
“Marry me, and I’ll make all of this go away. Then we can start a family for real.” She giggled. “If you don’t, I’ll tear down everything your family has created. Everyone will quickly forget about your tea after publically breaking the heart of their beloved singer.” 
Kazuhiko declined her blackmail. As a result, Hanako confirmed to reporters that she was also a part of one of his several clandestine relationships. In the process, she had gotten pregnant and had fallen in love with a heartless womanizer. She had renewed debauched publicity to severe his reputation of being a humble and respected chadōka. Hanako had almost ruined him. Kazuhiko had been at the end of his networking capabilities and was losing the battle against Hanako. 
Finally, after a court-ordered pregnancy test, the test returned negative, forcing Hanako to admit that she had lied about the pregnancy. She told the public she had done so because she had truly loved him and that he, in the end, had broken her heart. The publicity stunt was marketable in her favor. Her record and concert sales hit an all-time high. 
Wakahisa Tea had slumped in sales in Japan but had a remarkable sales increase in America. But, as Hanako said, no one wanted to buy his tea after he had broken the heart of their beloved pop singer, at least in Japan. 
Since the incident, his mother had been on a rampage to marry him off in hopes of reviving their company reputation in Japan and curing what she believed to be “a curse of being a male Wakahisa.” Kazuhiko didn’t share his mother’s beliefs. Love wasn’t a necessity. His parents had proven that concept; he only needed an heir to continue the Wakahisa’s tea legacy. Until he could arrange an open marriage, Kazuhiko would bask in his affairs. Women were like flowers to him, some fragile, some strong, but all of them were enchanting and in need of his sunlight.  
Kenshin cleared his throat, bringing him back to the present. “So, what’s the plan? You have to be more cautious now.”
“I’m thinking of all of those beautiful women who miss seeing my face. They must be freezing and distraught from their loneliness,” Kazuhiko said, smiling in reminiscence of his old relationships. 
“And I thought you changed. I guess bad publicity made you stronger. Let’s not get caught again, dear friend. I might not be able to bail you out.” Kenshin chuckled, patting Kazuhiko on his back.
 Kenshin had been a great friend and an even better lawyer throughout the incident and facilitated reconstructing his image. Because of Kenshin, the public was beginning to portray him as a virtuous man dedicated to his role as a chadōka practicing chanyu, the way of tea, and a respectable son in search of a wife. However, Hanako’s latest album, “Shock”, reinforced how he had broken her heart, further simmering his character in the public’s opinion. His company was still recovering, but Hanako’s career flourished. 
“I guess I might have to turn down the charm. Don’t you think so, Ken?” Kazuhiko slyly replied. 
“Baka, idiot, don’t get caught,” Kenshin said, punching him in the shoulder.
“Bakajanai, I’m not an idiot; it won’t happen again,” Kazuhiko responded. 
Kenshin turned to Kazuhiko, giving him a knowing look, and they laughed together. Each understood the impossibility for him to remain out of trouble. The drama was always one step behind Kazuhiko Wakahisa.
“Are you prepared for the upcoming ceremony with the Kochiyama family? From what my mother has told me, your mother believes it’ll be a great opportunity for you to get closer to their eldest daughter and heir, Natsumi,” Kenshin said, jabbing at Kazuhiko’s side.
 Kazuhiko clenched his eyes shut and ran his hands through his hair in frustration. 
“Your mother has already begun planning your wedding, and you two haven’t even met yet,” Kenshin said, chuckling.
Natsumi was the heir and daughter of founder Toji Kochiyama of Kochiyama Bank, one of Japan’s banking corporations to reach global triumph. The Kochiyama’s were a wealthy and famous family. The reason why Natsumi was his mother’s primary choice for a suitable wife and the main key to terminating his nightlife, committing him to a dreadful life as a husband. 
“Ken, if I play hooky at the ceremony, you think I could prolong this arrangement?” He looked solemnly at his best friend. 
“If you do, other than another publicity crisis, the result would end with your mother forcing you to organize another tea ceremony with them. She might even be present to guarantee your attendance,” Kenshin said, patting his head. Kenshin was precise as always, but it didn’t help him shut down his mother’s interference with his marital decision and, ultimately, his life. 
Kazuhiko shuddered. He could smell the sweet aroma of flowers dying as his mother dried out the many women he could have sampled but left to shrivel as his playboy life withered. 
“Kazu, I think it’s in your best interest to serve the three Kochiyama women tea while your mother is out of the picture. It’ll give you more time to think of a way out of matrimony,” Kenshin said, stretching his arms outs and relaxing against the stone bench.
“I know it would require you to go along with being a pawn in your mother’s hand, but I’ve got a dreadful feeling that something major is going to happen if you refuse,” Kenshin continued and then paused to sip some of his tea.  
“No matter how much you struggle, your mother is only going to push harder for your marriage. Why not do the ceremony and see what you’re up against? Maybe you’ll fall in love,” Kenshin sarcastically but half-serious concluded. 
Kazuhiko gave his best friend a threatening look, his dark eyes becoming stern and cross at his friend’s aggravating jousting. 
Kenshin laughed and gave him one of his amiable smiles that often seemed to calm people. Kazuhiko felt his annoyance boiling.  
“Hey buddy, don’t be outraged at me. I am the voice of reason, and you know that I am,” Kenshin said, placing his hand on Kazuhiko’s shoulder in an attempt to ease the tension. 
Kazuhiko took a deep breath and watched as water trickled down the mountain into the fountain’s basin. Then, feeling less motivated, he exhaled. He knew his best friend was right. Hosting the Kochiyama women would give him time to scheme a way out of his mother’s plan. For now, he would be a pawn and serve the Kochiyama women, but until then, his mind would be on more pleasant thoughts. His mother was two thousand miles away, and he had a few women he needed to meet. 
“Ken, no more. Let’s party at Lotus. I don’t want to keep those beautiful women in waiting,” Kazuhiko said with celebration returning to his voice. He stood up to head inside the teahouse. 
“Cool, but before we do that. Hang up the kimono you’re looking so out of style.”   
Kazuhiko looked down at the extravagantly made light brown kimono and white jittoku, a short kimono coat. He could find no flaws in his clothing—elegance and beauty simplicity woven into the kimono. 
 Kazuhiko laughed as he tucked his hands in the long sleeves. “You’ll be surprised at how many women love this so-called outdated style.” Kazuhiko chuckled. He enjoyed wearing his kimono; it made him feel at ease as he clashed old tradition with its present eradication. Confidently he knew he could snag a woman with his traditional attire, but he wouldn’t dare wear it to Lotus. He had too much respect for his profession as a chadōka to mar the garment. 
“Shall we rendezvous at 2200 in our private lounge at Lotus?” Kazuhiko asked. 
“2200 it is. I’ll orchestrate some stunning women to attend,” Kenshin winked, “Just don’t be a baka, baka.” 
“I’ll be more careful, I promise.” 
“You better, you got too much talent to be ruined before you could leave your legacy.” Kenshin stood and straightened his suit. “Later.” 
Kazuhiko watched his friend leave. He knew that tonight would be a good night for one of his many clandestine affairs. 
***
At 11:21PM, Kazuhiko pulled up to the valet parking in his custom black imported Ferrari F12 Berlinetta. He stepped out of the Ferrari, straightened his fitted Fioravanti suit and handed the valet 500 dollars in yen. “Take care of her,” he said tossing the valet his keys. 
Kazuhiko loved the feeling of his radiating confidence, he commanded his way to the entrance, catching the attention of everyone behind the velvet rope waiting for approved passage into Lotus. 
“Is that Wakahisa, he’s so handsome.” One of the ladies whispered. 
“No wonder Hanako fell.” Another giggled. 
The bouncer, dressed in a polished grey suit with his lengthy hair tied into a ponytail, paused to give him a bow. He was checking the ID of an attractive petite woman wearing a simmering gold halter-top dress that revealed a pair of long legs. The woman smiled flinging a strand of hair back from her freshly free-falling permed curls.   
Kazuhiko became intrigued in the woman she was holding the hands of her date, a handsome young man but obviously not an individual of high-class, as his suit was loose fitting and a tad wrinkled. The woman looked at Kazuhiko and winked. He took it as a sign of interest. 
Not even a full minute and I’ve already managed to snag a date without even looking…perfect. He thought to himself, as he stopped at the entrance of the velvet rope. The bouncer moved to the side giving him access to his game. 
He approached her with left hand in his pocket. 
“Hello madam, I am Kazuhiko Wakahisa, and you seem to be in need of a date,” he said giving her guy a once over look and proceeding to reach out his hand for hers.  
He knew she was going to accept his offer; women couldn’t resist his charm.
 She swiftly released her date’s hand and grasped his. 
“Yes, I am.” She shyly said. 
Flawless Victory!  Kazuhiko raised her hand to his lips and kissed the back of it. A cherry red blush crept up her slim face. 
“Shall we continue inside?” Kazuhiko asked to his accomplished game.  “I’ll be taking this one for the night,” he said to the bouncer who bowed again. 
Kazuhiko proceeded to lead her through the velvet rope when her former date grabbed her free hand and yanked at her. The bouncer moved to take action. Kazuhiko held up his hand to stop him. 
“Aki, let’s go in together,” her date said, his skin turning a bright red.  
“No. I want to go with him, Ryuku,” Aki said. Ryuku tugged harder at her hand. 
Kazuhiko didn’t like that this man wouldn’t give up easily. He decided to step in. 
	“A real man accepts when a woman has moved on…?” Kazuhiko coolly said looking down at the man’s grip on his woman’s wrist. 
Losing the battle of dominance Ryuku submitted and released Aki’s hand.  In embarrassment the man sheepishly stepped back behind the rope.
 Kazuhiko loved the game, especially when he knew it was always fairly easy to win. 
 “Gorgeous lady Aki, you have such a beautiful name, care to join me inside, with some friends of mine?”
“Of course,” Aki girlishly giggled.  
Kazuhiko gave a sly smile to Aki’s former date before leading her into the metal entrance shaped like a white and pink tipped lotus flower. He laughed at the irony as he heard Hanako Love’s voice blasting from the club’s speakers as she sung her latest single, Remember fused with a fast paced upbeat fitting for a nightclub. Bright blaring techno lights rotated around the club highlighting the profiles of people dancing in its center. In the middle of the dance floor was a bar with light panels that changed colors every few songs. Its current color was blue. 
Glancing at the bar, Kazuhiko noticed some of his ex-female acquaintances drinking and lounging around. He paused as he noted a beautiful woman sitting at the bar with flawlessly mahogany complexion. The woman had thick thighs and a bottom that fitted nicely into her red cocktail dress. Her curled hair hung down her back slightly masking her soft brown eyes. One stiletto heel tapped a slow, deliberate rhythm against the brass footrail. She crossed her legs, letting a ripple of laughter lift the hem of her skirt. Light amusement reflected within her brown eyes as she talked to the Japanese woman beside her. They touched each other’s shoulders lightly in the midst of their conversation indicating that the two obviously knew each other well. A stray curly lock veiled one soft brown eye. Long French-tip nails traced the rim of her half-empty crystal glass, an idle gesture that set Kazuhiko’s pulse racing. 
He leaned forward. Intrigued
Just as her tongue brushed those plump ruby lips, a waitress in a short black dress stepped between them.
Damn, it was like watching a masterpiece hidden behind a curtain.
“Wakahisa-san, Mr. Wakahisa, I am Chio please follow me to your private party.” 
Catching the scowl that slightly formed across his face he replaced it with a half-smile. 
“Okay, after you,” he responded quickly signaling for her to lead so he could see the woman at the bar.  He followed Chio, knowing exactly where she was leading him he kept an eye on the enchanting woman sitting at the bar. She was amazing and her calm aura provoked emotions he had never felt before, swallowing he tried to fight his desires.
Aki noticing him eyeing the woman cleared her throat in jealousy, “Is there something the matter?” her high pitch voice echoed in his ears. 
Giving her the most pleasant smile he could muster, he kissed her hand and stroked her warm cheek. “Nothing could possibly bother me when I’m in the presence of a beautiful lady.” As they descended the stairs to the VIP area he gave one last long look at the woman at the bar. 
For a brief moment, her brown eyes met his causing his heart to stop. Just when he thought he would be swallowed in her chocolate gaze she returned to the conversation with her friend, restarting his heart but leaving him with a dull ache.
He had never desired a woman before and thought just maybe…he the legendary Prince, might have found his queen.  Giving one last quick glance he cleared the woman from his mind she was a gaijin, a foreigner, nothing would happened between them. 
As they near the VIP section the waitress bowed opening the door to allow them entrance. Kenshin and Kazuhiko had invested in the private room for the perks of having a sky view of the entire dance floor. It was the perfect area for scouting women from within an exclusive space. Surrounded by tall tinted glass windows, the room was spacious with every luxury imaginable. Their private lounge had personal speakers that connected to a computer that allowed them to either listen to the music the DJ pumped out in the club or choose from a music database. It had controllable dance lights, a private bar and bartender, a karaoke system and a Jacuzzi. 
As expected, Kenshin had already begun the party without him. There were six women and plenty of drinks and food scattered around the room. Two women sat at each of Kenshin’s sides on the black leather couch. Nearby on the table there was a half-empty bottle of Sake, glasses filled with various mixed alcoholic drinks, a half eaten tray of sushi, snacks and pizza.  Across from them, the other four women were singing and dancing to a Japanese R&B song from Yuya Matsushita, which blasted from the karaoke system connected to the large 70in flat screen TV.  
“You’re late Kazu. Where the hell were you?” His best friend drunkenly yelled. 
“It can’t be helped that I am always stylishly late,” Kazuhiko winked.
“Kanji warui, Asshole, always making me wait,” Kenshin accused in laughter. “Hey Chio-chan, bring a party size order of calamari and more sushi.” Kenshin said picking up a piece of sushi from the tray. 
 “Hai, Yes, Hayashi-san,” the waitress said in a high-pitch voice before departing. 
“Bartender, give me an order of gin and tonic, and another bottle of your best sake.” Kenshin ordered 
Kazuhiko looked at Aki, “Make that two top shelf gin and tonics,” he said. 
Kazuhiko led Aki to a seat on the couch and sat next to her. He felt himself completely relaxed as he turned his attention to the lovely woman beside him. He placed a warm kiss upon her lips. Aki reacted instantly, accepting his kiss and eventually his tongue. It had been a long time since he had the feel of a woman in his arms. Tonight was definitely a good night. 

*** 
	“Where’s Aki, Ryuku?” Charlene asked her best friend as he somberly approached her and Natsumi at the bar, inside of Lotus, his defeated look caused concern. Ryuku shoved his hands in his pockets and flopped down in the stool next to her.
His head hung low Ryuku sighed. “She left me for some ostentatious jerk name Kazuhiko,” he quietly said, slight tears forming in his eyes.  Charlene rose from the bar stool and approached her sensitive best friend, draping her arm around his neck she gave him a comforting hug. Even if this wasn’t the first time Ryuku had his heart broken, Charlene still couldn’t help but feel sorry for her friend. Honestly she expected as much from Aki, she was more shocked that there relationship had lasted this long. 
“Called it. You own me ichiman yen, 100 dollars, Charlene.” Natsumi excitedly cheered raising her glass. “Not even a full month I told you so.” She continued. 
A sad Ryuku’s head dropped lower slightly hitting the table as he silently cried. “You guys were betting against my relationship with Aki? How could you?” 
“Really not much of bet, I think Charlie just gave you a sympathy bet that your relationship would last longer than a month. I betted less of course.” Natsumi beamed.  
Ryuku cried harder, “She could have been my wife. I was sure this time. If it wasn’t for that arrogant showy jerk, we could have been the ideal couple.” 
“No offense, but if all it took was a stranger who seemed to have more money than you, than its not much of relationship or a lost. Consider this a win-win. You discovered for yourself that Aki’s truly a gold digger, even though we both told you so, and now she’s someone else’s problem. If you ask me this situation couldn’t have ended better.” Natsumi cheerfully patted a morbid Ryuku’s back. 
Charlene choked on her laugh as she tried to keep her composure. Natsumi once again in her famous glory crushed Ryuku’s heart in her straightforward manner. All out of love, of course. 
“Aki wasn’t worth two measly yen. So don’t get all melancholy over her,” Charlene consoled. “You’ll find someone whose just right for you and is not just after your bank account to fund her extravagant lifestyle. 
“Thank god, this night is going to turn out to be great, I really didn’t like that no good gold digging whore anyway. A salary man’s wage wouldn’t have kept her. You should have just been honest. Then again it worked out for your best interest, you just lost a 110-pound headache. To the lost and good riddance of a gold digging wench, kampai, cheers.” Natsumi sternly said sliding him a ginger flavored Chu-hi, a Japanese flavored beer.
 Charlene nodded her head in agreement. “Natsu’s right, you should be yourself. However, I’m not saying judging people’s appearance is approvable, but Ryu, Aki reeked gold-digger.”  Charlene said as she took her seat between Ryuku and her sister, Natsumi. 
“I hate it when you guys are right. It’s annoying and leaves me womanless, alone and feeling less like a man.” He said shoving off his wrinkled suit jacket.
Charlene rolled her eyes. “No, that’s just your idiotic plan blowing up in your face.” She nudged her sister in the arm. They both momentarily glanced at each other, knowing where the conversation was going. 
“I just can’t do it. I could dress like that showy jerk, drive a Ferrari like him and get an entourage of beautiful women to cling to me, but it would always leave me wondering if the woman is with me because I’m me or because of my money,” he said chugging his Chu-hi. 
“If they’re groupies then of course its for the money.” Natsumi muttered. 
“You have to be more keen about the women you date. Just because she offers you a pretty smile and dresses well doesn’t mean she’ll have your best interest. In other words, your nightmare will come packing with all of them gems you want, but underneath the glam there could be a demon.” Charlene said clicking her glass against Ryuku’s. 
“We tell you this all the time Ryu, be yourself, a wealthy board member at Kochiyama, who’s simplistic, romantic and awkward around women,” Charlene continued. She was tired of having this conversation with Ryu, but she knew her friend was going through such extreme measures to find a decent wife. She liked that her friend was romantic at heart, but the combination with his sensitive nature left him brokenhearted and totally troublesome. She hoped that he would have learned after so many failed attempts at love, but, obviously, he had a hard head.  She just wish he’d be careful with his heart and used his wits instead of his dreamer’s heart. 
“Here we go,” Natsumi said waving for the bartender, a short plump man with trimmed black hair. “Can I get a strong, and I mean strong, cosmopolitan, pleeease?” 
Charlene laughed at her sister’s exaggeration. 
A hopefully determine Ryuku stood from his chair and raised his fist and proclaimed, “That’s why next time I will no longer be the simpleton who falls for the beautiful ladies, I’m going to-” Ryuku started before being interrupted. 
“Change my style and be Ryuku Shimizu,” Charlene and Natsumi grimly said finishing his sentence. 
The bartender placed Natsumi’s cosmopolitan in front of her, and she took a sip. “That makes the 25th proclamation from Ryu, shall we shoot for 35?” 
“Hey, that’s not fair. You two always team up on me, where’s Jermaine?” Ryuku defeated asked.
 “That’s because you’re predictable as always, Ryu,” Natsumi said. 
“Yup, predictable, Ryuku. As for Jermaine, he probably won’t come tonight he’s still handling affairs with the grand opening of his club. I’m so excited for him.” Charlene chimed in. 
“We all are. Jermaine was born to be a club owner. He’s always been stylish, with a respectable ear for music and quality discernment for food and drink. Plus the man is a great entrepreneur, I noticed his expertise while assisting in budgeting for the design of club Sankofa, the guy really knew how to stretch his yen and still produce an excellent project.”  Ryuku said. 
“Yeah, Jermaine has always been a music critic, he really loves your musical flair Charlie-chan. I guess that’s why you were the first artist he chose to open for Sankofa. You were stressing on what to play, have you decided? I think it’s really cool, Jermaine is going for such an authentic idea, a black music nightclub in tribute to music from many African cultures rooted around the world here in Osaka. Jermaine is really innovative he’s going to be successful.” Natsumi said. 
Charlene smiled it was an honor that her friend had offered her to be the opening artist for Sankofa. After all the times Jermaine had teased her to pursue a career as a musician, Charlene had accepted his offer to be a feature artist at his club. This wouldn’t be her first time performing solo at a opening event; she was a musical protégé and had played in front of thousands during her studies for a masters of music. She had practiced to do her best for Jermaine, but she still couldn’t determine what song to play from Charlie Red Bones. The jazz conductor had been her favorite musician since she first heard his song Charlie Be Good, something about that piece made her heart hum as her fingers serenaded down the piano. She had practiced various songs from Charlie Red Bones and other jazz musicians such as Miles Davis, John Coltrane and James Peterson, but she still could not choose the right song for Jermaine’s nightclub premiere. 
“It’s going to be something from Charlie Red Bones, but for the life of me I can’t pick a song.”  
“That’s easy, Charlie Be Good! It’s your favorite song and you’ve perfected it on the piano like nobodies business. It would be ideal.” Ryuku suggested. 
“Charlie-chan you play that song from your soul, I’ve watched you put your whole body into performing that piece. You have to play Charlie Be Good, it screams all you. By the way, how many pieces are you allotted?” Natsumi asked. 
“Three. One fast, one slow and the other from my choosing.” 
“Well, Charlie Be Good. Will be your slow one. Maybe something more modern for the other two.” Natsumi suggested. 
“You should classically vamp a song from Tupac.” Ryuku exclaimed. 
“Predictable as always.” Natsumi said. 
“Can’t help that I’m about that Hip-Hop lifestyle.” Ryuku grinned. 
“You wouldn’t be as conscious about Hip-Hop if it happened been for Charlie-chan, schooling you. If only you would be as dedicated to her teachings on women, you might be married now.”  
“Hey he’s just our predictable Ryu, he’ll eventually find his way.” Charlene tried to defend.  
“I’m not that predictable, am I?” Ryuku asked in concern, his facial expression turning puzzled. 
“Well, it’s only been, twelve-years of a friendship. So I’m sure we each know a thing or two about one another’s habits. And of course this is only the millionth time we’ve lectured you about women and your schemes to hitch a good one,” Charlene said.  
Charlene felt the tension dissolve as Ryuku and Natsumi burst into laughter. She had met Ryuku in middle school after being adopted by Natsumi’s parents when she was only eight. Ryuku had aided in her adjustment into the Japanese society and school system. He had even protected her from bullies who had picked on her because she was a black foreigner. She looked at Ryuku’s smiling face and knew that she would always be thankful to him for having protected her from boys who had taunted and tried to rape her during high school. 
Charlene shivered at the memory of almost being gang raped by a group of boys at her school. She was well-endowed, more than any of the Japanese girls in her class because she had an ideal figure a lot of the female classmates hated her and had instigated a few boys to rape her.  She had gotten use to defending herself against the girls and had managed to slap a few boys who bullied and groped her, but she would never forget the night they had trapped her in the gym and attempted to have their way with her. Ryuku had come charging through the doors with a bat to save her, taking a serious beating that landed him in the hospital for a few days. Natsumi afterwards, trapped the girls who had planned the ordeal in the bathroom and shaved their heads. Ryuku would always be her hero and Natsumi, her adopted sister, would always be her blessing. 
Even with some of the bad events, if it hadn’t been for Natsumi and their friendship that had always felt more like a sisterhood, she would never have had the feeling of belonging to a family. Natsumi and her parents filled the void of never having known her real family. Together her adopted family had presented her with opportunities that she certainly didn’t think believable when she was younger and struggling to grow up in the orphanage in Harlem, New York. To Natsumi she would always be indebted. 
Charlene stood up and threw her arms around both Natsumi and Ryuku, hugging them tightly.  
“What’s up Charlie?” Ryuku asked calling her by her nickname. He patted her on the hand.  
“Nothing, just realizing that I love you too crazy heads and couldn’t imagine a moment without you both in my life,” Charlene honestly said. 
“Oh god, you’ve gone sentimental on us. What’s wrong nee, big sister?” Natsumi asked turning towards her. 
“Seriously nothing, I just wanted to show you guys some appreciation,” Charlene said kissing her sister on the forehead. 
“No problem, you can show me your appreciation by finding me a nice adorable woman, who’s kind and generous, a good cook and capable of having long conversations with me and not just after my money,” Ryuku sarcastically said. 
“Wait one moment, let me just reach into my pocket and get her for you.” Charlene laughed at Ryuku’s puppy dog eyes as he watched her in expectation. 
Charlene sighed as her tone became serious. “Ryu, you can’t expect to find a wife in Lotus. Everyone knows this is where the prosperous and famous come out to play and the exploiters come to reap,” Charlene said. 
“Maybe, we should go to different clubs, maybe somewhere more modest,” Ryuku said. 
“Nope, you’re on your own. I like these luxurious places; the lifestyle is sublime and fascinating.” Natsumi said.   
“I smell a lie! You like being here because of the eye candy.” Charlene retorted at her sister. 
“And what eye candy am I here for?” Natsumi innocently took a long sip of her drink. 
“ Are you serious going to fringe ignorance?” She asked her sister, who looked sheepishly away. 
“You’re insane Charlie-chan, I’ve no idea of whom you’re referring to.” Natsumi bluntly said.
 Charlene laughed at her sister’s straight face. “Kenshin Hayashi,” Charlene smirked at Natsumi who choked on her drink.
“Who? Wait why does that name sound so familiar,” Ryuku said rubbing his chin.  
“No one of particular importance. I don’t know what Charlie is talking about,” Natsumi said looking away and taking a long sip from her drink.
Charlene laughed, “He’s only the sexiest man alive that Natsumi has ever set eyes on, or rather what were your colorful words, “Sexy with a very scrumptious ass.””
Natsumi again choked on her drink, spitting up some of the liquor and coughing. 
“Yup, checkmate,” Charlene said laughing at her sister who gave her a death threatening glare, as she balled her fist and vigorously shook it at her. 
“You weren’t suppose to hear that, Charlie,” Natsumi said. 
Charlene laughed as she remembered watching her sister’s lustful eyes on Kenshin Hayashi as he entered Lotus, catching Natsumi off-guard in her confession. Natsumi demanded they start attending Lotus over two years ago, after she had noticed Kenshin favored the club, but after the scandal with Hanako love, neither Kenshin Hayashi nor Kazuhiko Wakahisa hardly attended the club anymore, this was the first time Charlene had seen the two at Lotus. Charlene almost felt sympathy for Kazuhiko; she had heard from their social ranks that Hanako was a little irrational to deal with, but she also knew of Kazuhiko’s reputation as Prince from some of the women she had associated with at Lotus. All the women bragged about their affairs with Kazuhiko, she had heard first hand accounts of how Kazuhiko had showered them with presents, spent thousands for out of the country vacations and was an insatiable lover, they claimed he really was a real life fairytale prince. Charlene didn’t think so, she believed he was simply sowing his seed and from rumors she heard that he was loveless.  
Personally, Charlene wanted nothing to do with Kazuhiko or Kenshin, but she could understand why her sister liked Kenshin. The man was handsome, a triumphant lawyer and charismatic, but he also had a reputation with women, just not as extreme as Kazuhiko’s. They were known as the Special Ks or the duo K, Charlene couldn’t understand the hype. Why were these grown men being glorified for being man whores and how could one sleep with so many and not get attached. It wasn’t a lifestyle she could comprehend. Charlene followed her spirit and believed in true love.   
“Hayashi? Hayashi? Name sounds familiar, but who?” Ryuku asked smiling at a guilty looking Natsumi. “I feel like I heard the name recently in the news in regards to something or another,” he mumbled.
“He’s the owner of the Hayashi law firm. You know of him. He was involved in Kazuhiko Wakahisa’s scandal with that pop singer last year,” Charlene answered, rubbing her sister’s back.  Natsumi swatted Charlene’s hand away as she finished hacking. 
“Chotto matte, wait, that’s the same bastard who Aki is with,” Ryuku proclaimed standing to his feet. “I must save her.” As he started to leave, Natsumi grabbed his arm. 
“Don’t be Dr. Saveahoe, she’s not worth the effort, and I’m sure Aki is well aware of Kazuhiko’s reputation and of his money, i.e. why she is with him and not you.” Natsumi said. 
 “The only reason she’d considered being with him or anyone else for that matter.  No offense you couldn’t compete and she’s not worth fighting for, Ryu.” Charlene added. 
“But she’s my girlfriend.” Ryuku whimpered. 
“Reality check, girlfriend downgraded to shallow womanizer, perfect match in my book. You should be thankful she showed you her true intentions, before it got messy.” Charlene said. 
“I don’t understand why do women go for guys like that? Aki said she wanted a good man, well I’m a good man, I take care of my woman and I’m financially established. Why did she go for him?” Ryu exhaled. “Maybe I’m not as handsome.” 
“No way, Ryu your just as equally handsome to Kazuhiko and Kenshin. Aki’s was just putting on an act, she didn’t want a good man her goal was always money. She thought you were a struggling salary man. Kazuhiko relieved you of a potential headache.” Charlene comforted. 
“Very true, Charlie-chan. Ryu, you’ll find a good woman to marry. You won’t be a knight in waiting very long.” Natsumi swirled her drink around. “Kuso, shit getting kind of low.” 
“What’s got you all bummed out, Natsu?” Charlene asked. Her sister never drank this much unless she was seriously bothered by something. 
“I don’t want to attend the tea ceremony on Saturday. I had an appointment with an Marco representative, guess I’m going to have to reschedule.”
“Marco finally called you back, that’s great. Told you your modeling audition would go well, but will it be okay to reschedule with them?” Charlene asked. 
“Yeah, it’ll be fine, they want me to model with Hanako to promote their new summer apparel line. I just don’t understand why they invited Hanako, she already has her own clothing line and she doesn’t need any extra publicity. But either way, I’m happy for the debut, I only hope it doesn’t interfere with my gig with haha, mother. It shouldn’t, I hope, do you know why chichi, father is so set on this ceremony?”
“It’s about honor, Natsu. Father respected the friendship he had with Kazuhiko’s father. I think chichi is doing this to help reform Wakahisa’s public image. Wakahisa Tea truly took a nose dive after that scandal. I believe dad feels responsible for not being able to help Kazuhiko more.” Charlene said and finished her drink. She couldn’t help but feel pity for Kazuhiko, even though he had brought this trouble on himself, it didn’t need to result in the failure of his family’s business. With a little time and maturity, she knew Wakahisa Tea would be back to its profitable self.  
“I know its just…if it wasn’t for father keeping track of their affairs we might not have ever known about their company crisis. Since Nozushi died, Kazuhiko and his mother have been distant, it doesn’t surprise me that he hadn’t recognized me when he came in here, but he seemed really interested in you, Charlie.”
“So you guys encountered him earlier?” Ryuku asked.
“No, he kept a steady eye on Charlie, it was pretty weird.” Natsumi flagged the bartender. 
“He was staring because I’m a gaijin, foreigner, plain and simple.” Charlene said listening to Natsumi as she ordered another round of drinks.
“No he was staring because of those long legs of yours, he was obviously interested. I think even Aki was jealous.”
“You guys saw him with Aki? Why does it hurt more?” Ryuku asked rubbing his head.
Charlene hugged Ryuku. “You’re going to find someone better.” 
“Yeah you are Ryu,” Natsumi added. 
Charlene laughed, “I don’t know why, but neither Kazuhiko or Kenshin’s previous relationships has lasted long, you’d think she’d go for someone rich with intentions to marry. ”
“True, but you know what I wouldn’t mind being Kenshin’s girl for a month,” Natsumi dreamily respond. 
“No way, that’s too much excitement for me, not even their looks and wealth could make that kind of trouble appealing,” Charlene said. 
“Riches matter not since we’re all marvelously wealthy here; but you’re telling me, Charlie, that you wouldn’t even consider dating Kazuhiko, even if he was slightly interested in being serious with you?” Natsumi asked. 
Charlene rolled her eyes at her sister and Ryu as their eyes gave her a shrewd glare. 
“I can’t imagine Kazuhiko being serious with anyone after all that has happened, his private life became primetime entertainment for everyone. So no, I wouldn’t dare date Kazuhiko Wakahisa,” Charlene declared. 
Charlene turned around to a vehement voice behind her. 
***
“And you would never register as a momentary fantasy, let alone be desired for a one night stand,” Kazuhiko articulated calmly to the woman sitting in front of him at the bar. He shielded his anger and shock at overhearing the woman’s dismissal. He knew himself to be irresistible to women and couldn’t conceive ever hearing a rejection. Kazuhiko grabbed Aki’s waist pulling her closer in hopes of arising jealousy in the woman. 
“How dare you…”Kazuhiko turned his attention to the man sitting next to the gaijin, foreigner, woman, he recognized him as Aki's ex-date.
“Poor fellow, I see you’ve managed to catch the courtesy of women more in your rank, with your cheap attire, greasy hair and cheap cologne these cheap women are suitable for you. Aki, however is becoming a fond one of mine,” Kazuhiko said spinning a willing Aki around. “Maybe, she’ll be a keeper.” Kazuhiko winked as Aki kissed his cheek. 
“How did I ever think to date such a binbounin, poor person,” Aki laughed at her ex-date. 
“Aki…”the man said looking at her. 
Kazuhiko saw Aki smile, as the man’s hurtful eyes looked away from her. Perhaps, he would keep her around maybe even use her as a decoy girlfriend against his mother. As he looked at Aki’s smiling face he thought better of it, she was an opportunist and would probably force him into a marriage he didn’t want, just as the last one had tried. The girl had an agenda.
“Kazu, that’s enough let’s go,” Kenshin said as he came towards him with the group of women that had joined them in their private lounge. He gave a brief look at the women and realized he could hardly recall their names. Kazuhiko looked at the woman clinging to Kenshin’s wrist. She was beautiful with her slim figure and blond streaked bob-cut hairstyle outlining her slim face, but he bet his friend didn’t know her name or any of the women’s names surrounding him. 
Kazuhiko glanced back at the gaijin who sat calmly drinking her liquor. She never once acknowledged his comment, which irked him that the woman hadn’t reacted to him. He would admit that she was attractive but he wasn’t going to allow her to disrespect his pride. He looked away from her and surveyed her sullen friend, the man looked directly at Aki with tears in his eyes. No wonder he couldn’t hold Aki’s respect he was too sensitive.
 “You heard, Ken. I’ll leave you with the rest of your pride and let you enjoy your leftovers,” Kazuhiko turned away from the woman and her meager defender. “A shame you weren’t much of a challenge, sayonara.” 
“Excuse me, I don’t know who you think you are but…” the Japanese woman started to yell.
“Yes, you are excused I don’t know who allowed such a dreadful couple of women and their pitiful friend into this reputable club.” 
A few of the girls laughed at his insult.  Feeling accomplished in humiliating the gaijin and her friends, he turned to leave. 
“Sumimasen, Excuse me, you’re forgetting your pride,” he turned to the gaijin as she spoke. 
“The only forgotten pride is your….” Kazuhiko shut his eyes and jumped back as the chill of cold liquor and ice was thrown at his face. Dumbfounded by the woman’s offence, he cast his fuming eyes at her.  
“Kusotare, Bastard, remember this next time you’re feeling arrogant enough to insult my family and me.”  Kazuhiko felt the venom within the woman’s calm voice as she sat the empty glass on the bar. 
“Alright Charlie-chan, we’ll show that ass whose boss sis,” said the woman standing beside her. 
Kazuhiko’s eyebrow shot up as the Japanese woman acknowledged the woman as her sister. Maybe it was a playful nickname? He didn’t think much of it as he brushed away the ice from his drenched suit. 
“Chill Natsu, I can handle this.” Charlie gently placed her hand on Natsu. 
“Yes, you are going to handle this,” Kazuhiko interjected pointing at his soiled suit. “This is Fioravanti, you’ll take care to purchase me a new one.”  He said holding his hand up to prevent a couple of the women from approaching Charlie. 
“Kono ama, you bitch,” one of the women yelled out. 
 Charlie gathered her hair to one side. “I’ll pay for your suit, but in the meantime, I’m going to take you through a course in sophistication and finesse,” Charlie stepped closer to his face.
 Kazuhiko could see a bright fire within Charlie’s brown eyes as she continued, “I know you think you’re a god to women but respect is in order, Kazuhiko-san,”
The club around them came to a hush in anticipation of his retort, little did they know, he was speechless.  No woman had ever hated him openly nor reprimanded him. He was Kazuhiko the Prince. He was astounded that his aura hadn’t affected the woman. 
“I’m sorry for my friend’s outburst; he’s had one too many gin and tonics. Allow me to handle the situation,” Kenshin said. 
 Kazuhiko was thankful that Kenshin took the heat off him, but he hadn’t like how his friend made him seem as if he started the commotion. Wasn’t he standing here drenched in liquor? 
 He listened as his friend continued. “I’m Kenshin Hayashi, and I’m willing to repay you and your friends in any way that I can.” Kazuhiko released a heated breath as Ken extended his meeshi, business card.  
“It’s a good thing that between the two of you, one of you has enough sense and respect to protect the other from his own discourtesy.” Charlie folded her arms below her breast slightly pushing them up and her right hip out. 
Was this woman serious? Kazuhiko really didn’t like this woman’s attitude. It wasn’t his fault. As juvenile as he sounded, he thought the woman was the disrespectful one. He frowned at Kenshin.
If it wasn’t for the ample amount of club patrons watching them, he would give the woman a piece of his thoughts but he didn’t need any further attention from the media. 
“Ken, ikimasho let’s go, don’t speak with this woman or her binbounin, poor friends.” Kazuhiko said. 
“Babe, let’s go somewhere private.” Aki used her shawl to cover him. 
Sick of Aki’s insistently false gestures of kindness, he threw the shawl back at her. The woman was an opportunist, and he had had enough of her advances. The fun between them ran out the moment he had easily stolen her from her date. 
“Wakahisa, nani, what” Aki cried holding her fingers to her trembling lips. 
“Kono yaro, you asshole, don’t take your anger out on my girl.” Ryuku yelled. 
 Kazuhiko tisked him. Why was he protecting her after she publically abandoned him? 
 “I don’t need your pity.” He yelled at Aki, who stepped back in fear. Kazuhiko shook his head as the girl faked a cringe. He thought the girl could be a better actress than Masami Nagasawa with her fresh stream of tears that added depth to her role of victimhood. 
Kazuhiko looked around the club at the many patrons watching him and the situation he had created. “I don’t need any of this bullshit,” he yelled. 
“Kazu, Urusai, shut up, let me handle this,” Kenshin said taking hold of his shoulder and looking him in his eyes. In Ken’s dark oval eyes, Kazuhiko could see his reflected wild ones. He whispered, “We don’t need another Hanako, let it go.”  
The sight of his own crazed eyes and the mention of his incident with Hanako started to ground him. He had lost his composure in front of a crowd. He wasn’t presenting himself as the smooth, stylish and polite Prince he was acclaimed.  He had reduced himself lower than the scruffy looking gaijin’s friend.   
“Ikimasho, let’s go.” Kazuhiko turned away he paused and pulled out a cigarette, hearing Kenshin’s voice he glanced back. 
“I apologize to you all for our behavior. Please accept this as a token of our apologies.” Kazuhiko turned to see his best friend pull out his wallet to hand Charlie money, he lite his cigarette in annoyance. 
“I’ll accept your apology, but keep your money and use it to buy your friend a new suit,” Charlie said as her “sis” wrapped her arms around her. 
“If your friend acts this way when drunk, maybe he shouldn’t drink in public,” Natsu said. 
“My apologies again,” Kazuhiko stormed towards the door as Kenshin apologized humbly bowing before the group. 
	Kazuhiko silently cursed himself for allowing his friend to apologize on his behalf; he was angry with everyone and pissed off at himself, he only hoped this incident wouldn’t reach the media.  
`,
        video: 'chocolate-matcha'
      },
      2: {
        title: 'Chapter 2: The Encounter',
        text: `"Haha, mother," he yelled at Charlene and humiliated Ryuku. "Not to mention his affair with Hanako Love." Charlene briefly listened to the conversation Natsumi was having with their mother. Natsumi was still attempting to sway their mother's decision to renounce their attendance at the ceremony.`,
        video: 'chocolate-matcha'
      },
      3: {
        title: 'Chapter 3: Rising Tensions',
        text: `The ceremony was set to begin, and Kazuhiko found himself more nervous than he had been in years. The weight of tradition and expectation pressed down on him as he prepared the sacred tea. Little did he know that this ceremony would change everything.`,
        video: 'chocolate-matcha'
      },
      4: {
        title: 'Chapter 4: Forbidden Desires',
        text: `As the tea ceremony progressed, Kazuhiko couldn't shake the memory of the mysterious woman who had thrown her drink at him. Her fierce eyes haunted his thoughts, stirring feelings he had never experienced before.`,
        video: 'chocolate-matcha'
      },
      5: {
        title: 'Chapter 5: Hearts Unveiled',
        text: `The final confrontation between Kazuhiko and Charlene would determine whether their pride would keep them apart, or if love could bridge the gap between their different worlds.`,
        video: 'chocolate-matcha'
      }
    }
  },
  'tiger-eyes': {
    title: 'Her Tiger Eyes',
    chapters: 6,
    content: {
      1: {
        title: 'Chapter 1: The Ancient Library',
        text: `The old library stood like a sentinel against time, its weathered stones holding secrets that predated the modern world. Amara traced her fingers along the ancient texts, feeling the mystical energy that seemed to pulse from within the leather-bound volumes.`,
        video: 'tiger-eyes'
      },
      2: {
        title: 'Chapter 2: Awakening Powers',
        text: `As Amara delved deeper into the forbidden texts, she began to understand the truth about her heritage. The tiger eyes that had always made her different were not a curse, but a gift that connected her to an ancient magical lineage.`,
        video: 'tiger-eyes'
      }
    }
  },
  'immortal-angel': {
    title: 'Immortal Angel',
    chapters: 8,
    content: {
      1: {
        title: 'Chapter 1: The Awakening',
        text: `For centuries, she had walked among mortals, her true nature hidden behind the facade of humanity. But tonight, everything would change when she met the one person who could see through her immortal disguise and touch her eternal soul.`,
        video: 'immortal-angel'
      }
    }
  }
};

// Section management
function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  
  // Show selected section
  const targetSection = document.getElementById(sectionName + '-section');
  if (targetSection) {
    targetSection.style.display = 'block';
    targetSection.classList.add('fade-in');
    
    // Show chapter reader when stories section is opened
    if (sectionName === 'stories') {
      document.querySelector('.chapter-reader').style.display = 'block';
    }
  }
}

// Story selection
function selectStory(storyId) {
  currentStory = storyId;
  currentChapter = 1;
  showSection('stories');
  loadChapter();
}

// Chapter loading
function loadChapter() {
  if (!currentStory || !stories[currentStory]) return;
  
  const story = stories[currentStory];
  const chapter = story.content[currentChapter];
  
  if (!chapter) {
    document.getElementById('chapter-content').innerHTML = '<p>Chapter not available</p>';
    return;
  }
  
  document.getElementById('chapter-title').textContent = story.title;
  document.getElementById('chapter-subtitle').textContent = chapter.title;
  document.getElementById('chapter-content').innerHTML = `<p>${chapter.text}</p>`;
  
  // Generate video for chapter
  if (window.ChapterVideoGenerator) {
    generateChapterVideo(currentStory, chapter);
  }
  
  saveProgress();
}

// Generate video using the video generator
function generateChapterVideo(storyId, chapterData) {
  const canvas = document.getElementById('story-canvas');
  const ctx = canvas.getContext('2d');
  
  let frame = 0;
  function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Create background based on story theme
    createStoryBackground(ctx, canvas, storyId, frame);
    
    // Add text overlay
    if (frame > 60) { // Show text after 2 seconds
      addTextOverlay(ctx, canvas, chapterData.title, frame - 60);
    }
    
    frame++;
    if (frame < 300) { // 10 seconds at 30fps
      requestAnimationFrame(animate);
    }
  }
  
  animate();
}

// Create story-themed backgrounds
function createStoryBackground(ctx, canvas, storyTheme, frame) {
  switch (storyTheme) {
    case 'chocolate-matcha':
      drawTeaGardenScene(ctx, canvas, frame);
      break;
    case 'tiger-eyes':
      drawMysticalLibraryScene(ctx, canvas, frame);
      break;
    case 'immortal-angel':
      drawGothicMansionScene(ctx, canvas, frame);
      break;
    default:
      drawRomanticScene(ctx, canvas, frame);
  }
}
// Tea garden scene for Chocolate & Matcha
function drawTeaGardenScene(ctx, canvas, frame) {
  // Gradient sky
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#87CEEB');
  gradient.addColorStop(1, '#F0E68C');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Animated falling petals
  ctx.fillStyle = '#FFB6C1';
  for (let i = 0; i < 15; i++) {
    const x = (frame * 2 + i * 40) % canvas.width;
    const y = (frame * 3 + i * 30) % canvas.height;
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Tea fountain
  ctx.fillStyle = '#696969';
  ctx.fillRect(canvas.width/2 - 25, canvas.height - 80, 50, 20);
  
  // Water animation
  ctx.fillStyle = '#87CEEB';
  const waterHeight = Math.sin(frame * 0.1) * 5 + 10;
  ctx.fillRect(canvas.width/2 - 20, canvas.height - 80 - waterHeight, 40, waterHeight);
}

// Mystical library scene for Tiger Eyes
function drawMysticalLibraryScene(ctx, canvas, frame) {
  // Dark mystical background
  const gradient = ctx.createRadialGradient(
    canvas.width / 2, canvas.height / 2, 0,
    canvas.width / 2, canvas.height / 2, canvas.width
  );
  gradient.addColorStop(0, '#4B0082');
  gradient.addColorStop(1, '#000000');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Floating magical sparkles
  ctx.fillStyle = '#FFD700';
  for (let i = 0; i < 20; i++) {
    const x = Math.sin(frame * 0.02 + i) * 100 + canvas.width / 2;
    const y = Math.cos(frame * 0.01 + i) * 75 + canvas.height / 2;
    const size = Math.sin(frame * 0.05 + i) * 3 + 2;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Gothic mansion scene for Immortal Angel
function drawGothicMansionScene(ctx, canvas, frame) {
  // Dark Gothic background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#1a1a2e');
  gradient.addColorStop(1, '#16213e');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Moon
  ctx.fillStyle = '#F5F5DC';
  ctx.beginPath();
  ctx.arc(canvas.width - 80, 60, 30, 0, Math.PI * 2);
  ctx.fill();
  
  // Floating ethereal spirits
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  for (let i = 0; i < 10; i++) {
    const x = Math.sin(frame * 0.01 + i * 0.5) * 150 + canvas.width / 2;
    const y = Math.cos(frame * 0.015 + i * 0.3) * 100 + canvas.height / 3;
    const size = Math.sin(frame * 0.03 + i) * 5 + 8;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// Default romantic scene
function drawRomanticScene(ctx, canvas, frame) {
  // Romantic sunset background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#FF6B6B');
  gradient.addColorStop(0.5, '#FFE66D');
  gradient.addColorStop(1, '#FF8E53');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Floating hearts
  ctx.fillStyle = '#FF69B4';
  for (let i = 0; i < 8; i++) {
    const x = (frame + i * 75) % canvas.width;
    const y = Math.sin(frame * 0.01 + i) * 25 + canvas.height / 2;
    drawHeart(ctx, x, y, 10);
  }
}

// Draw heart shape
function drawHeart(ctx, x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y + size / 4);
  ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
  ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size, x, y + size);
  ctx.bezierCurveTo(x, y + size, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
  ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 4);
  ctx.fill();
}

// Add text overlay to canvas
function addTextOverlay(ctx, canvas, text, frame) {
  ctx.font = '24px Cinzel Decorative, serif';
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'rgba(0,0,0,0.8)';
  ctx.shadowBlur = 10;
  ctx.textAlign = 'center';
  
  // Typewriter effect
  const charsToShow = Math.floor(frame / 3);
  const visibleText = text.substring(0, Math.max(0, charsToShow));
  
  if (visibleText) {
    ctx.fillText(visibleText, canvas.width / 2, canvas.height / 2);
  }
  
  ctx.shadowBlur = 0;
}

// Chapter navigation
function nextChapter() {
  if (!currentStory) return;
  
  const nextChap = currentChapter + 1;
  
  // Check if user needs to pay
  if (nextChap > maxFreeChapters && !isPremiumUser()) {
    showPaymentModal();
    return;
  }
  
  if (nextChap <= stories[currentStory].chapters) {
    currentChapter = nextChap;
    loadChapter();
  }
}

function previousChapter() {
  if (currentChapter > 1) {
    currentChapter--;
    loadChapter();
  }
}

// Media controls
function toggleVideoMode() {
  const container = document.getElementById('video-container');
  const toggle = document.getElementById('video-toggle');
  
  if (container.style.display === 'none') {
    container.style.display = 'block';
    toggle.textContent = '📹 Hide Video';
  } else {
    container.style.display = 'none';
    toggle.textContent = '📹 Show Video';
  }
}

function toggleTextReader() {
  const toggle = document.getElementById('reader-toggle');
  
  if (isReading) {
    stopReading();
    toggle.textContent = '🔊 Start Reading';
    isReading = false;
  } else {
    startReading();
    toggle.textContent = '⏸️ Stop Reading';
    isReading = true;
  }
}

function startReading() {
  const text = document.getElementById('chapter-content').textContent;
  if (speechSynthesis && text) {
    // Cancel any existing speech
    speechSynthesis.cancel();
    
    currentUtterance = new SpeechSynthesisUtterance(text);
    
    // Apply voice settings
    const speed = document.getElementById('voice-speed').value;
    const pitch = document.getElementById('voice-pitch').value;
    
    currentUtterance.rate = parseFloat(speed);
    currentUtterance.pitch = parseFloat(pitch);
    
    // Set voice based on selection
    const voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voice-select').value;
    
    if (voiceSelect.includes('female')) {
      const femaleVoices = voices.filter(voice => 
        voice.name.toLowerCase().includes('female') || 
        voice.name.toLowerCase().includes('samantha') ||
        voice.name.toLowerCase().includes('karen') ||
        voice.name.toLowerCase().includes('susan')
      );
      if (femaleVoices.length > 0) {
        currentUtterance.voice = femaleVoices[0];
      }
    } else if (voiceSelect.includes('male')) {
      const maleVoices = voices.filter(voice => 
        voice.name.toLowerCase().includes('male') || 
        voice.name.toLowerCase().includes('alex') ||
        voice.name.toLowerCase().includes('daniel')
      );
      if (maleVoices.length > 0) {
        currentUtterance.voice = maleVoices[0];
      }
    }
    
    currentUtterance.onend = () => {
      isReading = false;
      document.getElementById('reader-toggle').textContent = '🔊 Start Reading';
    };
    
    speechSynthesis.speak(currentUtterance);
  }
}

function stopReading() {
  if (speechSynthesis) {
    speechSynthesis.cancel();
  }
}

// Avatar system
function initializeAvatar() {
  const canvas = document.getElementById('avatar-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = 200;
  canvas.height = 200;
  
  drawAvatar();
  
  // Add event listeners for customization
  const elements = ['skin-color', 'hair-style', 'hair-color', 'eye-shape', 'eye-color', 'outfit-style'];
  elements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', drawAvatar);
    }
  });
}

function drawAvatar() {
  const canvas = document.getElementById('avatar-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Get current settings
  const skinColor = document.getElementById('skin-color')?.value || '#F2D3C4';
  const hairStyle = document.getElementById('hair-style')?.value || 'long';
  const hairColor = document.getElementById('hair-color')?.value || '#8B4513';
  const eyeShape = document.getElementById('eye-shape')?.value || 'almond';
  const eyeColor = document.getElementById('eye-color')?.value || '#8B4513';
  const outfitStyle = document.getElementById('outfit-style')?.value || 'casual';
  
  // Draw face
  ctx.fillStyle = skinColor;
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw hair based on style
  ctx.fillStyle = hairColor;
  switch(hairStyle) {
    case 'long':
      ctx.beginPath();
      ctx.ellipse(100, 60, 90, 40, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(100, 120, 85, 60, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'short':
      ctx.beginPath();
      ctx.ellipse(100, 70, 85, 35, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'curly':
      for(let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const x = 100 + Math.cos(angle) * 70;
        const y = 70 + Math.sin(angle) * 30;
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    case 'braided':
      ctx.beginPath();
      ctx.ellipse(100, 60, 80, 30, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
  }
  
  // Draw eyes
  ctx.fillStyle = eyeColor;
  switch(eyeShape) {
    case 'almond':
      ctx.beginPath();
      ctx.ellipse(80, 90, 12, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(120, 90, 12, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'round':
      ctx.beginPath();
      ctx.arc(80, 90, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(120, 90, 10, 0, Math.PI * 2);
      ctx.fill();
      break;
  }
  
  // Draw pupils
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(80, 90, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(120, 90, 4, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw mouth
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(100, 120, 8, 0, Math.PI, false);
  ctx.stroke();
  
  // Draw outfit indicator
  ctx.fillStyle = getOutfitColor(outfitStyle);
  ctx.fillRect(60, 160, 80, 40);
}

function getOutfitColor(style) {
  switch(style) {
    case 'casual': return '#4A90E2';
    case 'elegant': return '#8B0000';
    case 'traditional': return '#DAA520';
    case 'modern': return '#000000';
    default: return '#4A90E2';
  }
}

function resetAvatar() {
  const elements = [
    {id: 'skin-color', value: '#F2D3C4'},
    {id: 'hair-style', value: 'long'},
    {id: 'hair-color', value: '#8B4513'},
    {id: 'eye-shape', value: 'almond'},
    {id: 'eye-color', value: '#8B4513'},
    {id: 'outfit-style', value: 'casual'}
  ];
  
  elements.forEach(({id, value}) => {
    const element = document.getElementById(id);
    if (element) element.value = value;
  });
  
  drawAvatar();
}

function saveAvatar() {
  const avatarSettings = {
    skinColor: document.getElementById('skin-color')?.value,
    hairStyle: document.getElementById('hair-style')?.value,
    hairColor: document.getElementById('hair-color')?.value,
    eyeShape: document.getElementById('eye-shape')?.value,
    eyeColor: document.getElementById('eye-color')?.value,
    outfitStyle: document.getElementById('outfit-style')?.value
  };
  
  // Store in memory for this session
  window.savedAvatar = avatarSettings;
  alert('Avatar saved successfully!');
}

// Payment system
function showPaymentModal() {
  document.getElementById('payment-modal').style.display = 'flex';
}

function hidePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
}

function selectPricing(option) {
  selectedPricing = option;
  document.querySelectorAll('.pricing-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  event.target.closest('.pricing-option').classList.add('selected');
}

function processPurchase() {
  const priceMap = {
    'single': 'price_single_story',
    'all': 'price_all_stories',
    'monthly': 'price_monthly'
  };
  
  // Show loading state
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = 'Processing...';
  button.disabled = true;
  
  // Simulate API call to create Stripe checkout session
  fetch('/.netlify/functions/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      priceId: priceMap[selectedPricing],
      successUrl: window.location.origin + '/success.html',
      cancelUrl: window.location.origin + '/index.html'
    })
  })
  .then(response => response.json())
  .then(session => {
    if (session.sessionId) {
      // Initialize Stripe and redirect to checkout
      const stripe = Stripe('pk_test_your_publishable_key_here'); // Replace with your publishable key
      return stripe.redirectToCheckout({ sessionId: session.sessionId });
    } else {
      throw new Error('Failed to create checkout session');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error processing payment. For demo purposes, simulating successful payment...');
    
    // For demo purposes, simulate successful payment
    setTimeout(() => {
      alert('Payment successful! All chapters unlocked.');
      window.premiumUser = true;
      hidePaymentModal();
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  });
}

function isPremiumUser() {
  return window.premiumUser || false;
}

// Progress tracking
function saveProgress() {
  const progress = {
    currentStory,
    currentChapter,
    timestamp: new Date().toISOString()
  };
  window.userProgress = progress;
}

function loadProgress() {
  const progress = window.userProgress;
  if (progress) {
    currentStory = progress.currentStory;
    currentChapter = progress.currentChapter;
  }
}

// Voice settings update
function updateVoiceSettings() {
  if (isReading && currentUtterance) {
    stopReading();
    setTimeout(startReading, 100);
  }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
  initializeAvatar();
  loadProgress();
  
  // Add voice setting event listeners
  const voiceElements = ['voice-select', 'voice-speed', 'voice-pitch'];
  voiceElements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', updateVoiceSettings);
    }
  });
  
  // Auto-load first story if available
  if (currentStory) {
    loadChapter();
  }
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          previousChapter();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextChapter();
          break;
        case ' ':
          e.preventDefault();
          toggleTextReader();
          break;
      }
    }
  });
  
  // Save progress when user navigates away
  window.addEventListener('beforeunload', saveProgress);
});

// Make functions globally available
window.showSection = showSection;
window.selectStory = selectStory;
window.nextChapter = nextChapter;
window.previousChapter = previousChapter;
window.toggleVideoMode = toggleVideoMode;
window.toggleTextReader = toggleTextReader;
window.resetAvatar = resetAvatar;
window.saveAvatar = saveAvatar;
window.showPaymentModal = showPaymentModal;
window.hidePaymentModal = hidePaymentModal;
window.selectPricing = selectPricing;
window.processPurchase = processPurchase;
