# Liquid Donations
#### Ask your friends where to give

## Describe your idea in one sentence 

Liquid Donations is a donation management platform which simplifies choice by allowing users to donate directly to charities recommended by their trusted peer network.

## Explain the challenge you are aiming to solve

Donation management platforms address the challenge of “choice overload” by curating charities into givelists. Despite the ubiquity of givelists, users still find it difficult to choose charities because they mistrust the credibility of curators. In the age of fake news and post-truth politics, people mistrust communications from media, corporations and even nonprofit organizations. It’s hard to believe what one reads on the internet, knowing that online communications are being shaped and filtered to target individuals. Today more than ever, donors need a solution which solves choice overload while also fostering trust.

## Is there data or evidence that supports this problem which you are trying to solve?

In "Lessons from the GiveList" (2020), researchers experimented with different types of givelist curation. Unnamed experts resulted in the best charitable outcomes, attracting more donors and higher value donations than named experts or named celebrities. This suggests that donors mistrust recommendations made by named curators more than unnamed curators. Building off of this research, we hypothesize that chosen, trusted curators will outperform both named and anonymous experts.

## What’s your innovation or solution? How does it work?

Liquid Donations works by allowing users of a donation management platform to create a custom givelist and publish it to the network. This givelist represents the charities they recommend to peers. In addition to choosing charities as part of a givelist, users can also choose to give to the allocations of their peers. In this way, users can rely on the recommendations of other users for part or all of their charity choice-making. Consequently, by incorporating others into their givelist, users indicate whom they trust and pass that information on to their peers.

Example:

Claire wants to donate 50% to Charity A and 50% to Charity B

Sean wants to donate 50% to Charity C and 50% to Claire’s choices. 

Along with the 50% that he donates to Charity C, 50% of Sean’s donations will be split between Claire’s choices: 25% to Charity A and 25% to Charity B.

Users can sign up and get a quick set of recommendations from their peers on where to donate. The user experience can be as simple as “one-click donate” to the charities of one’s trusted peers.

Users who have modest sums of money can have an impact by recommending charities to their peers.

Researchers can use the network to learn about users and their trust relationships. Privacy features can ensure that only those with explicit permission from a user can identify them.

Additional features could include choosing a subset of another user's givelist or excluding specific charities.

## Tell us about your end users 

The end users of Liquid Donations are users of donation management platforms. They are digital natives who are comfortable online and trust digital payments. 

Some of Liquid Donations end users experience choice overload when deciding where to give money. While they mistrust expert curation, they trust the advice of people they know when choosing charitable organizations. They have considerable resources to donate but don’t always know what to do with them, or whether or not their donations are effective or align with their values. 

Other end users of Liquid Donations are passionate about a particular cause or organization and wish to share it with their peers. They engage closely with charitable organizations and put effort into researching their choices. They may or may not have resources to donate. 

A third group of end users for Liquid Donations are those whom others rely upon for advice. These users are asked by their peers, “Where should I donate?” and are considered trusted leaders in charitable choice-making.

## How is the idea innovative?

Liquid Donations takes the principles of an existing system (Liquid Democracy) and applies them in a new context (charitable giving). Liquid Donations attempts to solve the problems of trust and curation in philanthropy with a distributed, scalable, network-based solution as opposed to the conventional top-down approach. 

Liquid Donations produces a network which describes donor trust relationships. It can answer questions about who is influential within social networks and which causes are popular but are underfunded. Liquid Donations is also unique in that it engages users who otherwise feel left out of the philanthropic world because of low capital by allowing them to help inform and influence the giving of their peers

## Feasibility

We created a working prototype of the network generation and donation allocation. The network of connected users is walked to generate a transition matrix that represents how much each user would give to each charity. We use the transition matrix as the base for an Absorbing Markov Chain, where the end charities are the absorbing nodes. 

A team of developers could build a database of verified charities and create the functionality for Liquid Donations on top of it. 

Alternatively, Liquid Donations could be added to an existing donation management platform. With the tools already in place to discover and save charities to a user profile, adding the ability to discover and save other users to a profile would be trivial. 

In order to provide meaningful recommendations to users based on other users’ choices, there would need to be a feasible growth strategy to fill out the network. To register users who know each other, Liquid Donations could target real-life groups such as offices or community groups via existing social networks. Empowering users to invite their peers for recommendations would allow the userbase to grow organically.

## What impact will your innovation create?

The research on givelist curation shows that different methods of curation result in different charitable outcomes. We believe that Liquid Donations will result in better outcomes than any of the methods researched so far. The immediate impact of Liquid Donations on an existing donation management platform will be an increase in new donors, more donations per donor and higher value per donation. 

Beyond merely increasing charitable outcomes, Liquid Donations has the potential to reimagine giving by building new communities of donors. The fundamental principle of connecting donors together provides a way for Liquid Donations to grow. Users can add new users to their givelist, effectively asking for their advice. That person is incentivised to join Liquid Donations to provide a recommendation, since money is on the line. 

The ultimate impact of Liquid Donations may be empowering collective sense-making in charitable giving. Liquid Donations enables peers to work together to choose and distribute funds, leveraging individuals’ research and capital for the benefit of the network. 

Like the use of unnamed experts, Liquid Donations reduces costs associated with hiring experts for curation, but to a greater degree. No costs are associated with curation in Liquid Donations and the solution is highly scalable.

## Explain your organization

Liquid Donations was conceived of by three life-long friends with a love for philosophy and design. Over the years we've collaborated on a number of projects focused on technical innovation and positive social impact. Aaron is a technical project manager, Nikola is a software engineer and Sean is a full stack developer. We are passionate about effective altruism and the intersection of technology and philanthropy.
